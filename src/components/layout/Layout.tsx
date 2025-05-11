import { Outlet } from "react-router-dom"
import { motion } from 'framer-motion'
import Header from "../Header"
import { appear } from "../../animations/layoutAnimation"

const Layout = () => {

    return (
        <motion.div
            initial='initial'
            animate='animate'
            variants={appear}
            className="flex flex-col min-h-screen bg-[#1A191D] overflow-hidden"
        >
            <Header />
            <div className="main flex flex-1 w-full container">
                <Outlet />
            </div>
        </motion.div>
    )
}

export default Layout