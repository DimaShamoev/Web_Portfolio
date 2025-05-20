export const appear = {
    initial: { y: "200vh", opacity: 0, borderRadius: "80% 80% 0 0" },
    animate: {
        y: 0,
        opacity: 1,
        borderRadius: 0,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.8,
        },
    },
};

export const LandingTextLeftToRight = {
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
    },
};

export const LandingTextRightToLeft = {
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
