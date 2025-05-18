export const projectBlockBottomToTop = {
    initial: { y: 200, opacity: 0, scale: 0.5 },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "tweet",
            ease: "easeOut",
            stiffness: 100,
            damping: 15,
            duration: 0.8,
        },
    }
}

export const projectTextLeftToRight = {
    initial: { x: -200, opacity: 0, scale: 0.8 },
    animate: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8,
        },
    }
}

export const projectTextBottomToTop = {
    initial: { y: 100, opacity: 0, scale: 0.8 },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "tweet",
            ease: "easeOut",
            stiffness: 100,
            damping: 15,
            duration: 0.6,
        },
    }
}