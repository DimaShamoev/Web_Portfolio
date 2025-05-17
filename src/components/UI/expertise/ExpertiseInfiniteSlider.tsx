import Marquee from "react-fast-marquee";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiJsBadge, DiPostgresql } from "react-icons/di";
import { FaNode, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoSass } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiNestjs, SiRedux, SiTypescript } from "react-icons/si";

const ExpertiseInfiniteSlider: React.FunctionComponent = () => {
    return (
        <>
            <Marquee className="expertise-block flex py-5" speed={ 150 } pauseOnHover={ true } delay={ 5 }>
                <ul className="expertise-slider text-7xl flex items-center justify-center [&_li]:mx-8 [&_svg]:max-w-none">
                    <li className="text-[#E34E26]"><IoLogoHtml5 /></li>
                    <li className="text-[#1572B6]"><IoLogoCss3 /></li>
                    <li className="text-[#CC6699]"><IoLogoSass /></li>
                    <li className="text-[#13B7AB]"><RiTailwindCssFill /></li>
                    <li className="rounded-lg overflow-hidden text-[#F7DF1E]"><DiJsBadge /></li>
                    <li className="text-[#377CC8]"><SiTypescript /></li>
                    <li className="text-[#61DAFB]"><FaReact /></li>
                    <li className="text-[#764ABC]"><SiRedux /></li>
                    <li className="text-[#80BD00]"><FaNode /></li>
                    <li className="text-[#E0234E]"><SiNestjs /></li>
                    <li>
                        <p className="relative">
                            <BiLogoPostgresql className="text-cyan-700" />
                            <DiPostgresql className="absolute top-0" />
                        </p>
                    </li>
                    <li className="text-[#0aa2e3]"><SiMysql /></li>
                </ul>
            </Marquee>
        </>
    )
}

export default ExpertiseInfiniteSlider