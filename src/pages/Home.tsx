import Expertise from '../components/UI/expertise/Expertise'
import DevelopingProcess from '../components/UI/home/DevelopingProcess'
import ExperienceBlock from '../components/UI/home/ExperienceBlock'
import Landing from '../components/UI/home/Landing'
import LatestProjects from '../components/UI/projects/LatestProjects'

const Home: React.FunctionComponent = () => {
    return (
        <div className="home w-full xl-box-padding flex flex-col gap-20 overflow-hidden">
            <Landing />
            <Expertise />
            <LatestProjects />
            <ExperienceBlock />
            <DevelopingProcess />
        </div>
    )
}

export default Home 