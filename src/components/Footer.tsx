import { footerTextLeftToRight, footerTextRightToBottom, footerTextBottomToTop } from "../animations/footerAnimation"
import FooterLink from "./UI/FooterLink"
import { motion } from "framer-motion"

const Footer: React.FunctionComponent = () => {
    return (
        <motion.footer
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.1 }}
            className="footer bg-[#D3D3D3] text-[#1A191D]"
        >
            <div className="footer-wrapper w-full container xl-box-padding flex flex-col gap-5">
                <div className="footer-body flex justify-between">
                    <div className="footer-col-1 flex flex-col">
                        <div className="footer-col-1-row-1 flex-1">
                            <motion.div
                                variants={footerTextLeftToRight}
                                className="logo text-7xl"
                            >
                                DIMA
                            </motion.div>
                            <motion.div 
                                variants={footerTextLeftToRight}
                                className="made-in text-lg uppercase"
                            >
                                crafted in georgia
                            </motion.div>
                        </div>
                        <div className="cv-download">
                            <a href="#" className="uppercase bg-black text-white border-4 border-transparent py-2 px-2 rounded-lg transition-colors duration-300 hover:bg-white hover:text-black hover:border-black">Download CV</a>
                        </div>
                    </div>
                    <motion.div
                        variants={footerTextRightToBottom}
                        className="footer-col-2 flex items-start gap-14"
                    >
                        <div className="sitemap">
                            <ul className="flex flex-col gap-1.5">
                                <li className="text-4xl uppercase">Sitemap</li>
                                <FooterLink link="/" target="parent">Home</FooterLink>
                                <FooterLink link="/expertise" target="parent">Expertise</FooterLink>
                                <FooterLink link="/projects" target="parent">Projects</FooterLink>
                                <FooterLink link="" target="parent">Contact</FooterLink>
                            </ul>
                        </div>
                        <div className="social">
                            <ul className="flex flex-col gap-1.5">
                                <li className="text-4xl uppercase">Social</li>
                                <FooterLink link="https://github.com/DimaShamoev" target="blank">GitHub</FooterLink>
                                <FooterLink link="https://www.linkedin.com/in/dimaShamoev" target="blank">LinkedInd</FooterLink>
                                <FooterLink link="https://x.com/DimaShamoev" target="blank">Twitter</FooterLink>
                                <FooterLink link="https://leetcode.com/u/DimaShamoev/" target="blank">LeetCode</FooterLink>
                            </ul>
                        </div>
                    </motion.div>
                </div>
                <hr className="h-[2px] w-full bg-black/20 border-none rounded-full" />
                <motion.div
                    variants={footerTextBottomToTop}
                    className="copy-rights uppercase"
                >
                    © 2025. Copyright. All Rights reserved
                </motion.div>
            </div>
        </motion.footer>
    )
}

export default Footer