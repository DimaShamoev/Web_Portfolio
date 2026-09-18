import Marquee from "react-fast-marquee";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiJsBadge, DiPostgresql } from "react-icons/di";
import { FaAngular, FaGitAlt, FaLaravel, FaNode, FaPhp, FaReact } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { IoLogoCss3, IoLogoHtml5, IoLogoSass } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMysql, SiNestjs, SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";

interface IExpertiseInfiniteSliderProps {
    direction: "left" | 'right'
}

const ExpertiseInfiniteSlider: React.FunctionComponent<IExpertiseInfiniteSliderProps> = ({ direction }) => {
    return (
        <>
            <Marquee className="expertise-block flex items-center py-5 overflow-hidden" speed={ 100 } pauseOnHover={ true } gradient gradientColor="#1A191D" gradientWidth={50} direction={direction}>
                <ul className="expertise-slider text-7xl flex items-center justify-center [&_li]:mx-8 [&_svg]:max-w-none">
                    <li className="text-[#E34E26]"><IoLogoHtml5 /></li>
                    <li className="text-[#1572B6]"><IoLogoCss3 /></li>
                    <li className="text-[#CC6699]"><IoLogoSass /></li>
                    <li className="text-[#13B7AB]"><RiTailwindCssFill /></li>
                    <li className="rounded-lg overflow-hidden text-[#F7DF1E]"><DiJsBadge /></li>
                    <li className="text-[#377CC8]"><SiTypescript /></li>
                    <li className="text-[#61DAFB]"><FaReact /></li>
                    <li className="text-[#white]"><SiNextdotjs /></li>
                    <li className="text-[#764ABC]"><SiRedux /></li>
                    <li className="text-[#DD0031]"><FaAngular /></li>
                    <li className="text-[#80BD00]"><FaNode /></li>
                    <li className="text-[#80BD00]"><SiExpress /></li>
                    <li className="text-[#E0234E]"><SiNestjs /></li>
                    <li className="text-[#6e7fca]"><FaPhp /></li>
                    <li className="text-[#E11502]"><FaLaravel /></li>
                    <li>
                        <p className="relative">
                            <BiLogoPostgresql className="text-cyan-700" />
                            <DiPostgresql className="absolute top-0" />
                        </p>
                    </li>
                    <li className="text-[#0aa2e3]"><SiMysql /></li>
                    <li className="text-[#F05133]"><FaGitAlt /></li>
                    <li className="text-[#F05133]"><FcLinux /></li>
                </ul>
            </Marquee>
        </>
    )
}

export default ExpertiseInfiniteSlider