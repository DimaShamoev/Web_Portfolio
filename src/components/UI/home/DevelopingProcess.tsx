import { DevelopingTextBottomToRight } from "../../../animations/homePageAnimations"
import DevelopingProcessCard from "./DevelopingProcessCard"
import { motion } from "motion/react"

const DevelopingProcess: React.FunctionComponent = () => {
    return (
        <div className="flex flex-col gap-12 mb-20">
            <motion.div
                initial='initial'
                whileInView='animate'
                variants={DevelopingTextBottomToRight}
                viewport={{ once: true, amount: 0.1 }}
                className="title text-7xl uppercase"
            >
                Developing Process
            </motion.div>
            <div className="cards relative w-full min-h-[1700px]">
                <DevelopingProcessCard id={1} title="Planning" color="bg-[#4D9F78]" className='absolute left-[0px] top-[0px]'>
                    Define the project's purpose, understand the target audience, gather detailed requirements, and decide on the essential features, technologies, tools, and development timeline before writing a single line of code to ensure everything starts on the right path
                </DevelopingProcessCard>
                
                <DevelopingProcessCard id={2} title="Design" color="bg-[#5595A3]" className="absolute left-[200px] top-[300px] z-[1]">
                    Build sketches and visual mockups to plan the layout structure. Focus heavily on the user interface (UI) and user experience (UX) flow to ensure the application is intuitive, visually clear, user-friendly, and consistent across all screen sizes and devices
                </DevelopingProcessCard>

                <DevelopingProcessCard id={3} title="Development" color="bg-[#AB5E45]" className="absolute left-[400px] top-[600px] z-[1]">
                    Start building the real app or website using the planned design. This means making responsive frontend parts, adding backend functions, connecting APIs, working with the database, and making sure everything works well together
                </DevelopingProcessCard>

                <DevelopingProcessCard id={4} title="Testing" color="bg-[#9A679B]" className="absolute left-[200px] top-[900px] z-[1]">
                    Test the project on various devices, browsers, and screen resolutions. Identify and resolve bugs, performance issues, or inconsistencies. Ensure that all features work correctly, provide a smooth experience, and meet expected quality standards before making the project public
                </DevelopingProcessCard>

                <DevelopingProcessCard id={5} title="Deployment" color="bg-[#5A8CBB]" className="absolute left-[0px] top-[1200px] z-[1]">
                    Deploy the completed project to a secure live server or hosting platform. After launch, actively monitor the system, fix unexpected issues, and regularly update content, performance, and security to ensure long-term stability, usability, and satisfaction for all users
                </DevelopingProcessCard>
            </div>
        </div>
    )
}

export default DevelopingProcess