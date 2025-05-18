import ExpertiseBlock from "../components/UI/expertise/ExpertiseBlock";
import ExpertiseInfiniteSlider from "../components/UI/expertise/ExpertiseInfiniteSlider";
import ExpertiseBars from "../components/UI/expertise/ExpertiseBars";
import Container from "../components/Container";
import PageLanding from "../components/PageLanding";
    

const Expertise: React.FunctionComponent = () => {
    return (
        <Container>
            <PageLanding
                title1="My Expertise"
                text1="I build websites and apps that are easy to use and look great. I focus on writing clean and reliable code to make sure everything works smoothly and feels natural for users"
                title2="Technology Stack"
                text2="I work with React, TypeScript, NestJS, Tailwind CSS, and PostgreSQL. These tools help me create fast, modern, and well-designed web projects that run without problems"
            />
            <ExpertiseInfiniteSlider direction="left"/>
            <ExpertiseBlock />
            <ExpertiseInfiniteSlider direction="right" />
            <ExpertiseBars />
        </Container>
    );
};

export default Expertise;
