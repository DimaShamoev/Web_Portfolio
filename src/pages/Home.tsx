import Container from '../components/Container'
import PageLanding from '../components/PageLanding'
import ExpertiseBlock from '../components/UI/expertise/ExpertiseBlock'
import DevelopingProcess from '../components/UI/home/DevelopingProcess'
import ExperienceBlock from '../components/UI/home/ExperienceBlock'
import LatestProjects from '../components/UI/projects/LatestProjects'

const Home: React.FunctionComponent = () => {
    return (
        <Container>
            <PageLanding
                title1="hello! i'm Dima"
                text1="I'm a frontend developer who loves building easy-to-use, attractive websites with clear, efficient, and reliable code. I enjoy creating user-friendly interfaces that enhance the browsing experience for everyone"
                title2='frontend developer'
                text2='Every day, I work hard to improve my skills, build new things, face challenges, fix problems, and learn new to become better at what I do as a developer'
            />
            <ExpertiseBlock />
            <LatestProjects />
            <ExperienceBlock />
            <DevelopingProcess />
        </Container>
    )
}

export default Home 