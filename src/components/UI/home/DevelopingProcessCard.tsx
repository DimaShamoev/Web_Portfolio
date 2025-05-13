import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { blockBottomToTop } from "../../../animations/homePageAnimations"

interface IDevelopingProcessProps {
    id: number
    title: string
    color: string
    children: React.ReactNode
    className: string
}

const DevelopingProcessCard: React.FunctionComponent<IDevelopingProcessProps> = ({ id, title, color, children, className }) => {

    
    const [selected, setSelected] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 970)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleMouseEnter = () => {
        if (!isMobile) setSelected(true)
    }

    const handleMouseLeave = () => {
        if (!isMobile) setSelected(false)
    }

    const handleClick = () => {
        if (isMobile) setSelected(prev => !prev)
    }

    return (
        <motion.div
            className={`developing-card border-2 bg-[#1A191D] xs-box-padding flex flex-col gap-5 transition-all duration-300 ${selected ? '-translate-y-[10%]' : ''} ${className}`}
            initial='initial'
            whileInView='animate'
            variants={blockBottomToTop}
            viewport={{once: true, amount: 0.1}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className="body relative z-[1] flex flex-col gap-5">
                <div className="title-section flex items-center justify-between">
                    <div className="title-side">
                        <div className="title-id text-3xl">
                            0{ id }.
                        </div>
                        <div className="title text-9xl uppercase">
                            { title }
                        </div>
                    </div>
                    <div className="expand-btn relative cursor-pointer">
                        <div className={`vertical-btn absolute right-[50%] w-[40px] h-[5px] rounded-full bg-white transition-all duration-200 ${selected ? 'rotate-0' : 'rotate-90'}`}></div>
                        <div className="horizontal-btn absolute right-[50%] w-[40px] h-[5px] rounded-full bg-white"></div>
                    </div>
                </div>
                <div className={`text text-2xl transition-all duration-300 ${selected ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-[100px]'}`}>
                    { children }
                </div>
            </div>
            <div className={`animate-block transition-all duration-300 ${color} absolute bottom-0 left-0 right-0 ${selected ? 'top-0' : 'top-full'}`}></div>
        </motion.div>
    )
}

export default DevelopingProcessCard