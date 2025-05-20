import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ICursorPosition {
    x: number,
    y: number
}

const Cursor: React.FunctionComponent = () => {

    const [cursorPosition, setCursorPosition] = useState<ICursorPosition>({
        x: 0,
        y: 0
    })

    useEffect(() => {

        const handleCursorMove = (e: MouseEvent) => {
            setCursorPosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', handleCursorMove)

        return () => window.removeEventListener('mousemove', handleCursorMove)

    }, [])

    const cursorAnimation = {
        initial: {
            x: 100,
            y: 150
        },
        animate: {
            x: cursorPosition.x - 20,
            y: cursorPosition.y - 20,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            }
        }
    }

    return (
        <motion.div
            variants={cursorAnimation}
            animate={cursorAnimation.animate}
            initial={cursorAnimation.initial}
            className={`fixed h-10 w-10 border-2 rounded-full z-50 pointer-events-none flex items-center justify-between`}
        >
            <div className="inner-cursor h-6 w-6 bg-white rounded-full m-auto"></div>
        </motion.div>
    )
}

export default Cursor