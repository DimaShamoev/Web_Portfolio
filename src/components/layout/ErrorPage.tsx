import { useNavigate } from "react-router-dom"
import Cursor from "../Cursor"
import Footer from "../Footer"
import Header from "../Header"
import { motion } from "framer-motion"

const ErrorPage: React.FunctionComponent = () => {

    const  navigate = useNavigate()

    return (
        <motion.div
            className="bg-[#1A191D] min-h-screen flex flex-col"
        >
            <Cursor />
            <Header />

            <main className="flex-1 flex flex-col items-center justify-center gap-5 text-center uppercase pb-20 p-10">
                <div className="error-code text-9xl">
                    404
                </div>
                <div className="error-message text-5xl">
                    That Page Doesn't Exist
                </div>
                <div className="error-message text-2xl">
                    Sorry, The Page You Were Looking For Couldn't Be Found
                </div>
                <div className="error-btns flex gap-10">
                    <button
                        className="border-2 py-0.5 px-4 text-lg hover:bg-white hover:text-[#1A191D]"
                        onClick={() => navigate('/')}
                    >Go Back</button>

                    <button
                        className="border-2 py-0.5 px-4 text-lg hover:bg-white hover:text-[#1A191D]"
                        onClick={() => window.location.reload()}
                    >Refresh</button>
                </div>
            </main>

            <Footer />
        </motion.div>
    )
}

export default ErrorPage