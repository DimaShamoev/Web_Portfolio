import { HiOutlineComputerDesktop } from "react-icons/hi2"
import ExpertiseBlock from "./ExpertiseCard"
import { FaReact } from "react-icons/fa"
import { SiNestjs } from "react-icons/si"
import { motion } from "motion/react"
import { textBottomToTop } from "../../../animations/expertiseBlockAnimation"

const Expertise: React.FunctionComponent = () => {
    return (
        <motion.div
            initial='initial'
            whileInView='animate'
            variants={textBottomToTop}
            viewport={{ once: true, amount: 0.1 }}
            className=" flex flex-col gap-7"
        >
            <div className="title uppercase text-7xl text-center">
                Expertise
            </div>
            <div className="expertise-blocks flex flex-wrap justify-center gap-4">
                <ExpertiseBlock title="Software Development" Icon={HiOutlineComputerDesktop}>
                    Experienced in both functional and OOP programming, with strong problem-solving skills and clean code practices:  JavaScript, TypeScript.
                </ExpertiseBlock>
                <ExpertiseBlock title="Frontend Development" Icon={FaReact}>
                    Builds websites with modern design and smooth user experience: React, HTML, CSS, and Tailwind
                </ExpertiseBlock>
                <ExpertiseBlock title="Backend Development" Icon={SiNestjs}>
                    Creates server-side applications using NestJS to handle data and connect frontend to backend: JavaScript, TypeScript, NestJS, Postgresql
                </ExpertiseBlock>
            </div>
        </motion.div>
    )
}

export default Expertise