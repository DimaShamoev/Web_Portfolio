import type { IconType } from "react-icons"
import { motion } from "motion/react"
import { blockBottomToTop } from "../../../animations/expertiseBlockAnimation"

interface IExpertiseCardProps {
    children: React.ReactNode
    title: string
    Icon: IconType
}

const ExpertiseCard: React.FunctionComponent<IExpertiseCardProps> = ({ children, title, Icon }) => {

    return (
        <motion.div
            initial='initial'
            whileInView='animate'
            variants={blockBottomToTop}
            viewport={{once: true, amount: 0.1}}
            className="expertise-block border-2 border-white min-h-[300px] max-w-[300px] w-full xs-box-padding flex flex-col gap-5"
        >
            <div className="expertise-title flex items-center justify-center gap-3">
                <div className="expertise-icon text-5xl">
                    { <Icon /> }
                </div>
                <div className="expertise-title text-3xl">
                    { title }
                </div>
            </div>
            <div className="expertise-text text-xl text-white/70">
                <p>{ children }</p>
            </div>
        </motion.div>
    )
}

export default ExpertiseCard