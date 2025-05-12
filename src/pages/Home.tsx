import Expertise from '../components/UI/expertise/Expertise'
import Landing from '../components/UI/home/Landing'

const Home: React.FunctionComponent = () => {
    return (
        <div className="home w-full xl-box-padding flex flex-col gap-8 overflow-hidden">
            <Landing />
            <Expertise />
        </div>
    )
}

export default Home 