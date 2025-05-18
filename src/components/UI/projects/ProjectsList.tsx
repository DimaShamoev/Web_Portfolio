import { projectTextBottomToTop } from "../../../animations/projectsAnimations"
import { projectsData } from "../../../data/projects.data"
import ProjectCard from "./ProjectCard"
import { motion } from "motion/react"

const ProjectsList: React.FunctionComponent = () => {
    return (
        <div className="flex flex-col gap-7 text-7xl">
            <motion.div
                initial='initial'
                whileInView='animate'
                variants={projectTextBottomToTop}
                viewport={{ once: true, amount: 0.1 }}
                className="title uppercase text-center"
            >
                projects
            </motion.div>
            <div className="">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        stack={project.stack}
                        projectUrl={project.url}
                        bgColor={project.titleBG}
                    >
                        { project.children }
                    </ProjectCard>
                ))}
            </div>
        </div>
    )
}

export default ProjectsList