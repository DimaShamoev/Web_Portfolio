import { IoMenu } from "react-icons/io5"
import { motion } from "framer-motion";
import { useAsideStore } from "../../store/UseAsideStore";
import { headerTopToBottomAnim } from "../../animations/headerAnimations";
import AnimatedLinks from "../UI/AnimatedLinks";

const Header: React.FunctionComponent = () => {

    const toggleAside = useAsideStore(state => state.toggleAside)

    return (
        <header className="sticky top-0 flex justify-between items-center sm-box-padding backdrop-blur-md bg-[#1A191D]/70 container">
            <div className="header-wrapper flex items-center justify-between w-full">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={ headerTopToBottomAnim }
                    className="logo text-3xl sm:text-5xl"
                >
                    <a href="/">{ `<DIMA />` }</a>
                </motion.div>
                <motion.nav
                    initial="initial"
                    animate="animate"
                    variants={ headerTopToBottomAnim }
                    className="nav flex items-center"
                >
                    <ul className="hidden items-center text-2xl gap-6 sm:flex uppercase">
                        <AnimatedLinks link="/">Home</AnimatedLinks>
                        <AnimatedLinks link="/expertise">Expertise</AnimatedLinks>
                        <AnimatedLinks link="/projects">Projects</AnimatedLinks>
                        <AnimatedLinks link="/contact">Contact</AnimatedLinks>
                    </ul>
                    <span 
                        className="header-menu-btn cursor-pointer text-2xl sm:hidden"
                        onClick={toggleAside}
                    >
                        <IoMenu />
                    </span>
                </motion.nav>
            </div>
        </header>
    )
}

export default Header