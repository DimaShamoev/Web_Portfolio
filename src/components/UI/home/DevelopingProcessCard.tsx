import { useState } from "react"

interface IDevelopingProcessProps {
    id: number
    title: string
    color: string
    children: React.ReactNode
    className: string
}

const DevelopingProcessCard: React.FunctionComponent<IDevelopingProcessProps> = ({ id, title, color, children, className }) => {

    const [isHovered, setIsHovered] = useState<boolean>(false)

    const handleHover = (): void => {
        setIsHovered(prev => prev = true)
        console.log(isHovered)
    }

    const handleUnhover = (): void => {
        setIsHovered(prev => prev = false)
    }

    return (
        <div
            className={`border-2 w-full max-w-[1000px] min-h-[500px] bg-[#1A191D] xs-box-padding flex flex-col gap-5 transition-all duration-300 ${isHovered ? '-translate-y-[10%]' : ''} ${className}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
        >
            <div className="body relative z-[1] flex flex-col gap-5">
                <div className="title-section">
                    <div className="title-id text-3xl">
                        0{ id }.
                    </div>
                    <div className="title text-9xl uppercase">
                        { title }
                    </div>
                </div>
                <div className={`text text-2xl transition-all duration-300 ${isHovered ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-[100px]'}`}>
                    { children }
                </div>
            </div>
            <div className={`animate-block transition-all duration-300 ${color} absolute bottom-0 left-0 right-0 ${isHovered ? 'top-0' : 'top-full'}`}></div>
        </div>
    )
}

export default DevelopingProcessCard