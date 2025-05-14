import { latestProjectsData } from "../../../data/projects.data";
import ProjectCard from "./ProjectCard";

const LatestProjects: React.FunctionComponent = () => {

    return (
        <div className="latest-projects flex flex-col gap-7 md-box-padding-y">
            <div className="title uppercase text-7xl">
                latest projects
            </div>
            <div className="latest-project-list flex gap-5 flex-wrap">

                {latestProjectsData.map((data => (
                    <ProjectCard title={data.title} titleBG={data.titleBG} stack={data.stack} url={data.url}>
                        { data.children }
                    </ProjectCard>
                )))}

            </div>
        </div>
    );
};

export default LatestProjects;
