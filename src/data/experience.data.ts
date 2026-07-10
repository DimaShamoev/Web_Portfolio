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
        position: "Frontend Engineer - Junior",
        period: "2025 - Present",
        imgUrl: "/image/gegmio_logo.png",
        location: "Tbilisi, Georgia (Remote)",
        siteUrl: "https://gegmio.com/",
        stack: [
            "React",
            "TypeScript",
            "RTK Query",
            "Tailwind CSS",
            "Shadcn UI",
            "REST API",
            "Sockets",
            "Git",
        ],
        children:
            "Developing a business management (CRM) platform using React and TypeScript. Building responsive interfaces, integrating REST APIs, implementing authentication, creating reusable components, and managing state with RTK Query",
    },
    {
        id: 2,
        position: "“Commercial Software Development — JavaScript” training",
        period: "2025 - 2025",
        imgUrl: "/image/iTransition_logo.png",
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
    }
];

export const skills: Skill[] = [
    { id: 0, name: "html", level: 95 },
    { id: 1, name: "css / scss / tailwind", level: 90 },
    { id: 2, name: "js / ts", level: 90 },
    { id: 3, name: "react", level: 85 },
    { id: 4, name: "node js / nest js", level: 65 },
    { id: 5, name: "Postgresql / mysql", level: 75 },
    { id: 6, name: "git", level: 85 },
];