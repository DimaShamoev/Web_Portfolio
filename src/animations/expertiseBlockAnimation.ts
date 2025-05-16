export const blockBottomToTop = {
    initial: { y: 100, opacity: 0, scale: 0.9 },
    animate: (item: number) => ({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8,
            delay: item * 2,
        },
    })
}

export const textBottomToTop = {
    initial: { y: 100, opacity: 0, scale: 0.9 },
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

