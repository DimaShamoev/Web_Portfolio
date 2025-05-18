import { useState } from "react"
import { motion } from "motion/react"
import { projectBlockBottomToTop } from "../../../animations/projectsAnimations"

interface IProjectCardProps {
    title: string
    children: React.ReactNode
    bgColor: string
    stack: string[]
    projectUrl: string
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({ title, bgColor, children, stack, projectUrl }) => {

    const [hovered, setHovered] = useState<boolean>(false)


    return (
        <motion.div
            initial='initial'
            whileInView='animate'
            variants={ projectBlockBottomToTop }
            viewport={{ once: true, amount: 0.1 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="project-card flex flex-col max-w-[900px] m-auto justify-center gap-2.5 sm:flex-row mb-[40px]"
        >
            <div className="project-title relative border-2 w-full max-w-full min-h-[100px] xs-box-padding text-5xl align-middle flex items-center justify-center text-center sm:max-w-[350px] sm:min-h-[200px]">
                <div className="title relative z-[1] uppercase">
                    { title }
                </div>
                <div className={`project-bg absolute bottom-0 left-0 right-0 transition-all duration-200 ${hovered ? 'top-0' : 'top-full'} ${bgColor}`}></div>
            </div>
            <div className="project-info flex flex-col justify-center border-2 p-3 max-w-full w-full gap-3 sm:max-w-[550px]">
                <div className="project-desc flex-1 text-sm sm:text-lg sm:max-w-full">
                    { children }
                </div>
                <div className="stack relative text-xl text-gray-50/50 h-[20px] overflow-hidden">
                    <div className={`absolute flex flex-col text-sm text-right w-full transition-all duration-150 ${hovered ? 'top-[-20px]' : 'top-[0]'}`}>
                        <a href={ projectUrl } target="_blank" className='underline'>Show Project</a>
                        <a href={ projectUrl } target="_blank" className='underline'>Stack: { stack.map((s => <span key={Math.random()}> { s }, </span>)) } </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard