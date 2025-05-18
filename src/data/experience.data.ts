interface IExperience {
    id: number;
    position: string;
    period: string;
    imgUrl: string;
    location: string;
    siteUrl: string;
    stack: string[];
    children: React.ReactNode;
}

interface Skill {
    id: number
    name: string;
    level: number;
}


export const experiences: IExperience[] = [
    {
        id: 1,
        position: "“Commercial Software Development — JavaScript” training",
        period: "2025 - 2025",
        imgUrl: "/image/itransition_logo.jpg",
        location: "Tbilisi, Georgia (Remote)",
        siteUrl: "https://www.itransition.com/",
        stack: [
            "JS/TS",
            "React",
            "NodeJs",
            "ExpressJs",
            "NestJs",
            "PostgreSql/MySql",
            "Git",
        ],
        children:
            "Itransition provided hands-on experience in full-stack web development. It taught both client-side development with JavaScript and Typescript and server-side development with Node. js. I completed a full-stack project using React with TypeScript, Tailwind CSS, NestJS and PostgreSQL during the internship.",
    },
];

export const skills: Skill[] = [
    { id: 0, name: "html", level: 90 },
    { id: 1, name: "css / scss / tailwind", level: 85 },
    { id: 2, name: "js / ts", level: 80 },
    { id: 3, name: "react", level: 80 },
    { id: 4, name: "node js / nest js", level: 60 },
    { id: 5, name: "Postgresql / mysql", level: 70 },
    { id: 6, name: "git", level: 80 },
];