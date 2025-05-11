import Header from "./components/Header"
import ParticlesBackground from "./components/ParticlesBackground"

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <ParticlesBackground />
            </div>
        </div>
    )
}

export default App