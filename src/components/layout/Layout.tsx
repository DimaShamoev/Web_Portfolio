import { Outlet } from "react-router-dom"
import Header from "../Header"

const Layout = () => {
    return (
        <div>
            <Header />
            <div className="main">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout