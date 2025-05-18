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

export const ExpertiseTextLeftToRight = {
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
        },
    }
}

export const expertiseLevelBlockAnim = {
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

export const expertiseLevelAnim = {
    initial: { width: 0 },
    transition: {
        ease: 'easeInOut',
        duration: 1.5,
        delay: 0.3
    }
}