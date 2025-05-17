import Container from '../components/Container'
import ExpertiseBlock from '../components/UI/expertise/ExpertiseBlock'
import DevelopingProcess from '../components/UI/home/DevelopingProcess'
import ExperienceBlock from '../components/UI/home/ExperienceBlock'
import Landing from '../components/UI/home/Landing'
import LatestProjects from '../components/UI/projects/LatestProjects'

const Home: React.FunctionComponent = () => {
    return (
        <Container>
            <Landing />
            <ExpertiseBlock />
            <LatestProjects />
            <ExperienceBlock />
            <DevelopingProcess />
        </Container>
    )
}

export default Home 