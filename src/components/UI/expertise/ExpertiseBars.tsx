import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../../data/experience.data";
import { ExpertiseTextLeftToRight, expertiseLevelAnim, expertiseLevelBlockAnim } from "../../../animations/expertiseBlockAnimation";


const ExpertiseBars: React.FC = () => {
    return (
        <div
            className="w-full flex flex-col gap-7"
        >
            <motion.div 
                initial='initial'
                whileInView='animate'
                variants={ ExpertiseTextLeftToRight }
                viewport={{ once: true, amount: 0.1 }}
                className="title uppercase text-7xl"
            >
                skills
            </motion.div>
            <motion.div
                variants={ expertiseLevelBlockAnim }
                initial='initial'
                whileInView='animate'
                viewport={{ once: true, amount: 0.1 }}
                className="skills-list grid grid-cols-1 sm:grid-cols-2 gap-x-6"
            >
                {skills.map((skill) => (
                    <div key={ skill.id }>
                        <div className="mb-1 text-sm font-medium text-white uppercase">
                            { skill.name }
                        </div>
                        <div className="w-full border-2 h-5 overflow-hidden">
                            <motion.div
                                variants={ expertiseLevelAnim }
                                whileInView={{ width: `${skill.level}%` }}
                                transition={ expertiseLevelAnim.transition }
                                viewport={{ once: true, amount: 0.1}}
                                className="h-5 bg-white origin-left"
                            />
                        </div>
                        <div className="text-right text-xs text-white mt-1">{ skill.level }%</div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default ExpertiseBars;