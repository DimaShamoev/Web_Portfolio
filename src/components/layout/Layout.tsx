import { Outlet } from "react-router-dom"
import { motion } from 'framer-motion'
import Header from "../Header"
import { appear } from "../../animations/layoutAnimation"
import Footer from "../Footer"
import Aside from "../Aside"
import Cursor from "../Cursor"

const Layout: React.FunctionComponent = () => {

    return (
        <motion.div
            initial='initial'
            animate='animate'
            variants={ appear }
            className="relative flex flex-col min-h-screen bg-[#1A191D] overflow-hidden"
        >      
            <Cursor />
            <Header />
            <Aside />
            <main className="main flex flex-col flex-1 container">
                <Outlet />
            </main>
            <Footer />
        </motion.div>
    )
}

export default Layout