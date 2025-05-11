export const headerTopToBottomAnim = {
    initial: { y: -50, opacity: 0, scale: 0.9 },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1.5,
            delay: 0.6,
        },
    },
};
