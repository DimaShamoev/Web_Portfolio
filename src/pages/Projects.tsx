import Container from "../components/Container"
import PageLanding from "../components/PageLanding"
import ExpertiseInfiniteSlider from "../components/UI/expertise/ExpertiseInfiniteSlider"
import ProjectsList from "../components/UI/projects/ProjectsList"

const Projects: React.FunctionComponent = () => {
    return (
        <Container>
            <PageLanding
                title1="My Projects"
                text1="turning ideas into real, working websites. Here you'll find the projects I've built to practice, learn, and grow as a frontend developer"
                title2="Built With Code"
                text2="Each project shows my skills in action — from layouts and animations to API work and UI logic. I focus on clean code, useful features, and a smooth user experience"
            />
            <ExpertiseInfiniteSlider direction="left" />
            <ProjectsList />
            
        </Container>
    )
}

export default Projects