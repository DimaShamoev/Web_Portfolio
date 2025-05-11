export const headerTopToBottomAnim = {
    initial: { y: -50, opacity: 0, scale: 0.95 },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 2,
            delay: 0.3,
        },
    },
};
