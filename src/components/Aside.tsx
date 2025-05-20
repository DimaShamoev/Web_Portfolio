import { IoClose } from "react-icons/io5"
import AsideLinks from "./UI/AsideLinks"
import { LuMail } from "react-icons/lu"
import { BsBoxes } from "react-icons/bs"
import { GrTools } from "react-icons/gr"
import { AiOutlineHome } from "react-icons/ai"
import { useAsideStore } from "../store/UseAsideStore"

const Aside: React.FunctionComponent = () => {

    const toggleAside = useAsideStore((state) => state.toggleAside)
    const asideOpen = useAsideStore((state) => state.isAsideOpen)

    return (
        <div className={`fixed z-5 text-black ${asideOpen ? 'inset-0' : ''}`}>
            <div 
                className={`layout fixed  bg-black/50 ${asideOpen ? 'inset-0' : 'hidden'} `}
                onClick={toggleAside}            
            ></div>

            <aside className={`aside fixed top-0 bottom-0 w-full max-w-[450px] z-[5] bg-[#D3D3D3] sm-box-padding flex flex-col gap-5 transition-all duration-300 ${asideOpen ? 'right-[0px]' : 'right-[-450px]'}`}>
                <div
                    className="close-btn flex justify-end text-4xl cursor-pointer"
                    onClick={toggleAside}
                >
                    <IoClose />
                </div>
                <div className="links">
                    <ul className="flex flex-col gap-5">
                        <AsideLinks link="/" Icon={AiOutlineHome}>
                            Home
                        </AsideLinks>
                        <AsideLinks link="/expertise" Icon={GrTools}>
                            Expertise
                        </AsideLinks>
                        <AsideLinks link="/projects" Icon={BsBoxes}>
                            Projects
                        </AsideLinks>
                        <AsideLinks link="/contact" Icon={LuMail}>
                            Contact
                        </AsideLinks>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Aside