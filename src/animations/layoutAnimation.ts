export const appear = {
    initial: { y: '100vh', opacity: 0, borderRadius: '50%' },
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
}