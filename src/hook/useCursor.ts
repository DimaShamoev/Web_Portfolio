import { useEffect, useState } from "react"

interface IUseCursor {
    x: number,
    y: number,
}

export const useCursor = () => {

    const [cursorPosition, setCursorPosition] = useState<IUseCursor>({ x: 0, y: 0 })
    const [isClicked, setIsClicked] = useState<boolean>(false)

    useEffect(() => {
        const handleCursorMove = (e: MouseEvent) => {
            setCursorPosition({
                x: e.clientX,
                y: e.clientY
            })
        }
    
        const handleCursorDown = () => setIsClicked(true)
        const handleCursorUp = () => setIsClicked(false)

        window.addEventListener('mousemove', handleCursorMove)
        window.addEventListener('mousedown', handleCursorDown)
        window.addEventListener('mouseup', handleCursorUp)

        return () => {
            window.removeEventListener('mousemove', handleCursorMove)
            window.removeEventListener('mousedown', handleCursorDown)
            window.removeEventListener('mouseup', handleCursorUp)
        }

    }, [])

    return {
        cursorPosition,
        isClicked,
    }

}