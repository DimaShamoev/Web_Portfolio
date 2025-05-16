import { blockBottomToTop, experienceTextBottomToTop } from "../../../animations/homePageAnimations"
import { experiences } from "../../../data/experience.data"
import ExperienceInfo from "./ExperienceInfo"
import { motion } from "motion/react"

const ExperienceBlock: React.FunctionComponent = () => {
    return (
        <motion.div
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.1 }}
            className="experience-block flex flex-col gap-7 m-auto items-center"
        >
            <motion.div
                variants={ experienceTextBottomToTop }
                className="experience-title uppercase text-7xl"
            >
                experience
            </motion.div>

            <motion.div
                variants={ blockBottomToTop }
                className="experience-list flex flex-col gap-4"
            >

                { experiences.map((experience => (
                    <ExperienceInfo key={experience.id} position={ experience.position } period={ experience.period } location={ experience.location } siteUrl={ experience.siteUrl } imgUrl={ experience.imgUrl } stack={ experience.stack }>
                        { experience.children }
                    </ExperienceInfo>
                ))) }

            </motion.div>
        </motion.div>
    )
}

export default ExperienceBlock