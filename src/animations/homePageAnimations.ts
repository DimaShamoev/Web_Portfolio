export const DevelopingTextBottomToRight = {
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

export const blockBottomToTop = {
    initial: { y: 200, opacity: 0, scale: 0.8 },
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

export const experienceTextBottomToTop = {
    initial: { y: 100, opacity: 0, scale: 0.8 },
    animate: {
        y: 0,
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