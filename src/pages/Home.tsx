import Expertise from '../components/UI/expertise/Expertise'
import DevelopingProcess from '../components/UI/home/DevelopingProcess'
import Landing from '../components/UI/home/Landing'

const Home: React.FunctionComponent = () => {
    return (
        <div className="home w-full xl-box-padding flex flex-col gap-8 overflow-hidden">
            <Landing />
            <Expertise />
            <DevelopingProcess />
        </div>
    )
}

export default Home 