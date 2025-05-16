import { motion } from "motion/react"
import { useState } from "react"
import { projectBlockBottomToTop } from "../../../animations/projectsAnimations"

interface IProjectCardProps {
    title: string
    titleBG: string
    children: React.ReactNode
    stack: string[]
    url: string
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({ title, titleBG, children, stack, url }) => {

    const [isHover, setIsHover] = useState<boolean>(false)

    const handelHover = (state: boolean): void => {
        setIsHover(state)
    }

    return (
        <motion.div
            initial='initial'
            whileInView='animate'
            variants={projectBlockBottomToTop}
            viewport={{ once: true, amount: 0.1 }}
            onMouseEnter={() => handelHover(true)}
            onMouseLeave={() => handelHover(false)}
            className="project-card border-2 w-min min-w-[300px] grow"
        >
            <div className={`project-title relative text-6xl xs-box-padding border-b-2 transition-all duration-150 flex items-center justify-center text-center`}>
                <p className="z-[1] relative">{ title }</p>
                <div className={`background left-0 right-0 bottom-0 absolute transition-all ${isHover ? 'top-0': 'top-full'} ${titleBG}`}></div>
            </div>
            <div className="card-bottom p-4 flex flex-col gap-2">
                <div className="description text-2xl">
                    { children }
                </div>
                <div className="stack relative text-xl text-gray-50/50 h-[20px] overflow-hidden">
                    <div className={`absolute flex flex-col text-sm transition-all duration-150 ${isHover ? 'top-[-20px]' : 'top-[0]'}`}>
                        <a href={ url } target="_blank" className='underline'>Stack: { stack.map(s => <span key={Math.random()}>{ s + ',' } </span>) }</a>
                        <a href={ url } target="_blank" className='underline'>Show Project</a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard