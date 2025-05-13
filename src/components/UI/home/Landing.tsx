import { motion } from "framer-motion";
import { textLeftToRight, textRightToLeft } from "../../../animations/homePageAnimations";

const Landing: React.FunctionComponent = () => {
    return (
        <motion.div
            animate="animate"
            initial="initial"
            className="flex flex-col justify-center"
        >
            <div className="home-landing flex flex-col">
                <div className="text flex items-start justify-between">
                    <motion.div
                        variants={textLeftToRight}
                        className="large-text large-txt-1 uppercase text-[15em] leading-50"
                    >
                        hello! i'm Dima
                    </motion.div>
                    <motion.div
                        variants={textRightToLeft}
                        className="small-text w-full text-xl max-w-[300px] text-white/50"
                    >
                        I'm a frontend developer who loves building easy-to-use,
                        attractive websites with clear, efficient, and reliable
                        code. I enjoy creating user-friendly interfaces that enhance
                        the browsing experience for everyone.
                    </motion.div>
                </div>
                <div className="text flex items-start justify-between flex-row-reverse">
                    <motion.div
                        variants={textRightToLeft}
                        className="large-text large-txt-2 uppercase leading-50 text-[11em]"
                    >
                        frontend developer
                    </motion.div>
                    <motion.div
                        variants={textLeftToRight}
                        className="small-text w-full text-xl max-w-[300px] text-white/50"
                    >
                        Every day, I work hard to improve my skills, build new
                        things, face challenges, fix problems, and learn new to
                        become better at what I do as a developer.
                    </motion.div>
                </div>
            </div>
            <div className="anim w-full sm-box-padding">
                <img className='mix-blend-plus-lighter h-16 w-auto cursor-pointer m-auto' src="/scroll.gif"></img>
            </div>
        </motion.div>
    );
            
};

export default Landing;
