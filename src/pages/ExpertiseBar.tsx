import React from "react";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  level: number;
};

const skills: Skill[] = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "NestJS", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "PostgreSQL", level: 75 },
];

const ExpertiseBars: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="mb-1 text-sm font-medium text-white">{skill.name}</div>
          <div className="w-full border-2 h-4 overflow-hidden">
            <motion.div
              className="h-4 bg-white origin-left"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          <div className="text-right text-xs text-white mt-1">{skill.level}%</div>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseBars;


// create this file in component folder
// create animation object in anim file
// create skills object