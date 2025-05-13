import { useState } from "react"

interface IDevelopingProcessProps {
    id: number
    title: string
    color: string
    children: React.ReactNode
}

const DevelopingProcessCard: React.FunctionComponent<IDevelopingProcessProps> = ({ id, title, color, children }) => {

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
            className={`relative border-2 w-full max-w-[650px] min-h-[400px] xs-box-padding flex flex-col gap-5 transition-all duration-300 ${isHovered ? '-translate-y-[10%]' : ''}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
        >
            <div className="body relative z-[1] flex flex-col gap-5">
                <div className="title-section">
                    <div className="title-id text-3xl">
                        0{ id }.
                    </div>
                    <div className="title text-7xl uppercase">
                        { title }
                    </div>
                </div>
                <div className={`text text-2xl transition-all duration-300 ${isHovered ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-[200px]'}`}>
                    { children }
                </div>
            </div>
            <div className={`animate-block transition-all duration-300 ${color} absolute bottom-0 left-0 right-0 ${isHovered ? 'top-0' : 'top-full'}`}></div>
        </div>
    )
}

export default DevelopingProcessCard