import { motion } from "framer-motion";
import { useCursor } from "../hook/useCursor";

const Cursor: React.FunctionComponent = () => {
    const { isClicked, cursorPosition } = useCursor();

    const outerSize = isClicked ? 28 : 40;
    const innerSize = 24;

    const outerCursorOffset = outerSize / 2;
    const innerCursorOffset = innerSize / 2;

    const outerCursorAnimation = {
        x: cursorPosition.x - outerCursorOffset,
        y: cursorPosition.y - outerCursorOffset,
        width: outerSize,
        height: outerSize,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        }
    };

    return (
        <div className="cursor pointer-events-none">
            <motion.div
                animate={outerCursorAnimation}
                className="fixed text-white border-2 rounded-full z-50 pointer-events-none mix-blend-difference"
                style={{ position: "fixed" }}
            />

            <div
                className="fixed bg-white rounded-full z-50 pointer-events-none h-6 w-6 mix-blend-difference"
                style={{
                    transform: `translate(${cursorPosition.x - innerCursorOffset}px, ${cursorPosition.y - innerCursorOffset}px)`,
                }}
            />
        </div>
    );
};

export default Cursor;