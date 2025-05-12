export const textLeftToRight = {
    initial: { x: -100, opacity: 0, scale: 0.9 },
    animate: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8,
            delay: 0.6,
        },
    }
}

export const textRightToLeft = {
    initial: { x: 100, opacity: 0, scale: 0.9 },
    animate: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8,
            delay: 0.6,
        },
    }
}