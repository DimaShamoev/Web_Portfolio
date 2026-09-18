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
        period: "February 2026 - Present",
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
        children: "Developing a business management (CRM) platform using React and TypeScript. Building responsive interfaces, integrating REST APIs, implementing authentication, creating reusable components, and managing state with RTK Query",
    },
    {
        id: 2,
        position: "“Commercial Software Development — JavaScript” training",
        period: "March 2025 - May 2025",
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
        children: "ITransition provided hands-on experience in full-stack web development. It taught both client-side development with JavaScript and Typescript and server-side development with Node. js. I completed a full-stack project using React with TypeScript, Tailwind CSS, NestJS and PostgreSQL during the internship.",
    }
];

export const skills: Skill[] = [
    { id: 0, name: "html", level: 100 },
    { id: 1, name: "css / scss / tailwind", level: 100 },
    { id: 2, name: "javascript / typescript", level: 95 },
    { id: 3, name: "node js / express js / nest js", level: 80 },
    { id: 4, name: "react js / next js", level: 85 },
    { id: 5, name: "angular", level: 65 },
    { id: 6, name: "php", level: 75 },
    { id: 7, name: "laravel", level: 65 },
    { id: 8, name: "postgresql / mysql", level: 85 },
    { id: 9, name: "git", level: 90 },
];