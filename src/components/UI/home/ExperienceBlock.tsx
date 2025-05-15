import { experiences } from "../../../data/experince.data"
import ExperienceInfo from "./ExperienceInfo"

const ExperienceBlock: React.FunctionComponent = () => {
    return (
        <div className="experience-block flex flex-col gap-7 m-auto items-center">
            <div className="experience-title uppercase text-7xl">
                experience
            </div>

            <div className="experience-list flex flex-col gap-4">

                { experiences.map((experience => (
                    <ExperienceInfo position={ experience.position } period={ experience.period } location={ experience.location } siteUrl={ experience.siteUrl } imgUrl={ experience.imgUrl } stack={ experience.stack }>
                        { experience.children }
                    </ExperienceInfo>
                ))) }

            </div>
        </div>
    )
}

export default ExperienceBlock