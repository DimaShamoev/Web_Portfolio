import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/routes"

const App: React.FunctionComponent = () => {
    return (
        <div className="App ">
            <RouterProvider router={routes} />
        </div>
    )
}

export default App