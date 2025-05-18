import { motion } from "framer-motion";
import { LandingTextLeftToRight, LandingTextRightToLeft } from "../animations/layoutAnimation";

interface IPageLandingProps {
    title1: string
    title2: string
    text1: string
    text2: string
}

const PageLanding: React.FunctionComponent<IPageLandingProps> = ({ title1, title2, text1, text2 }) => {
    return (
        <motion.div
            animate="animate"
            initial="initial"
            className="flex flex-col justify-center"
        >
            <div className="home-landing flex flex-col xl:gap-20">
                <div className="text flex items-start justify-between">
                    <motion.div
                        variants={ LandingTextLeftToRight }
                        className="large-text large-txt-1 uppercase text-[15em] leading-50"
                    >
                        { title1 }
                    </motion.div>
                    <motion.div
                        variants={ LandingTextRightToLeft }
                        className="small-text w-full text-xl max-w-[300px] text-white/50"
                    >
                        { text1 }
                    </motion.div>
                </div>
                <div className="text flex items-start justify-between flex-row-reverse">
                    <motion.div
                        variants={LandingTextRightToLeft}
                        className="large-text large-txt-2 uppercase leading-50 text-[11em]"
                    >
                        { title2 }
                    </motion.div>
                    <motion.div
                        variants={LandingTextLeftToRight}
                        className="small-text w-full text-xl max-w-[300px] text-white/50"
                    >
                        { text2 }
                    </motion.div>
                </div>
            </div>
            <div className="anim w-full sm-box-padding">
                <img className='mix-blend-plus-lighter h-16 w-auto cursor-default m-auto' src="/image/scroll.gif"></img>
            </div>
        </motion.div>
    )
}

export default PageLanding