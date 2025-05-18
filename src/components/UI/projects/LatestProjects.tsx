import { projectTextLeftToRight } from "../../../animations/projectsAnimations";
import { latestProjectsData } from "../../../data/projects.data";
import { motion } from "motion/react";
import LatestProjectCard from "./LatestProjectCard";

const LatestProjects: React.FunctionComponent = () => {

    return (
        <div className="latest-projects flex flex-col gap-7 md-box-padding-y">
            <motion.div
                initial='initial'
                whileInView='animate'
                variants={projectTextLeftToRight}
                viewport={{ once: true, amount: 0.1 }}
                className="title uppercase text-7xl"
            >
                latest projects
            </motion.div>
            <div className="latest-project-list flex gap-5 flex-wrap">

                {latestProjectsData.map((data => (
                    <LatestProjectCard key={data.id} title={data.title} titleBG={data.titleBG} stack={data.stack} url={data.url}>
                        { data.children }
                    </LatestProjectCard>
                )))}

            </div>
        </div>
    );
};

export default LatestProjects;
