import { Outlet } from "react-router-dom"
import { motion } from 'framer-motion'
import Header from "../Header"
import { appear } from "../../animations/layoutAnimation"
import Footer from "../Footer"

const Layout: React.FunctionComponent = () => {

    return (
        <motion.div
            initial='initial'
            animate='animate'
            variants={appear}
            className="flex flex-col min-h-screen bg-[#1A191D] overflow-hidden"
        >
            <Header />
            <main className="main flex flex-col flex-1 container">
                <Outlet />
            </main>
            <Footer />
        </motion.div>
    )
}

export default Layout