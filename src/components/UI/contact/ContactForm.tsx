import { useForm } from "react-hook-form"

interface IFormData {
    email: string,
    message: string
}

const ContactForm: React.FunctionComponent = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormData>()

    const handleMessageSubmit = async (data: IFormData) => {
        try {
            await fetch(import.meta.env.VITE_FORM_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data)
            })
            reset()
        } catch {
            alert("Something Went Wrong")
        }
    }


    return (
        <div className="mx-auto max-w-[850px] w-full">
            <form
                onSubmit={handleSubmit(handleMessageSubmit)}
                method="POST"
                className="grid grid-cols-1 gap-5 items-center justify-center lg:grid-cols-2"
            >
                <div className="form-title uppercase text-4xl flex flex-wrap gap-5 lg:text-9xl md:text-8xl sm:text-7xl">
                    <p>Let's</p>
                    <p>Get</p>
                    <p>In</p>
                    <p>Touch</p>
                </div>
                <div className="form-body flex flex-col gap-5">
                    <div className="input-block w-full">
                        <div className="label text-xl">
                            Email
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="example@gmail.com"
                                className="w-full border-2 py-0.5 px-2 outline-none text-lg h-10"
                                {...register('email', { 
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "Not Valid Email"
                                    }
                                })}
                            />
                            { errors.email && <p className="text-red-600">{ errors.email.message }</p> }
                        </div>
                    </div>
                    <div className="input-block w-full">
                        <div className="label text-xl">
                            Message
                        </div>
                        <div className="input">
                            <textarea
                                placeholder="Write Your Message Here..."
                                className="w-full border-2 py-1 px-2 outline-none text-lg h-40 resize-none"
                                {...register('message', {
                                    required: "Message is required",
                                    minLength: {
                                        value: 10,
                                        message: "Message must be at least 10 characters"
                                    }
                                })}
                            ></textarea>
                            {errors.message && <p className="text-red-600">{ errors.message.message }</p>}
                        </div>
                    </div>
                    <div className="submit-button w-full">
                        <button 
                            type="submit"
                            className="bg-white text-black py-1 border-2 text-xl w-full cursor-pointer transition-colors hover:bg-[#1A191D] hover:text-white"
                        >
                            submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm