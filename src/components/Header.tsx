import { IoMenu } from "react-icons/io5"
import Container from "./Container"
import { headerTopToBottomAnim } from "../animations/headerAnimations"
import { motion } from "framer-motion";

const Header: React.FunctionComponent = () => {
    return (
        <header className="sticky top-0 flex justify-between items-center sm-box-padding backdrop-blur-md bg-[#1A191D]/70">
            <Container>
                <div className="header-wrapper flex items-center justify-between">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={headerTopToBottomAnim}
                        className="logo text-3xl sm:text-5xl"
                    >
                        <a href="#">DIMA</a>
                    </motion.div>
                    <motion.nav
                        initial="initial"
                        animate="animate"
                        variants={headerTopToBottomAnim}
                        className="nav flex items-center"
                    >
                        <ul className="hidden items-center text-2xl gap-12 sm:flex">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Expertise</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <span className="cursor-pointer text-2xl sm:hidden"><IoMenu /></span>
                    </motion.nav>
                </div>
            </Container>
        </header>
    )
}

export default Header