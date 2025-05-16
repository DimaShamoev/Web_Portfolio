interface projectsDataType {
    id: number
    title: string
    titleBG: string
    children: string
    stack: string[]
    url: string
}

export const latestProjectsData: projectsDataType[] = [
    {
        id: 1,
        title: "Form Space",
        titleBG: "bg-red-500",
        children: "A fullstack web application where user can create his own forms, fill up others' created forms, and interact through likes and comments",
        stack: ["React", "TS", "Redux", "Axios", "Tailwind", "NestJs", "Postgres"],
        url: "https://github.com/DimaShamoev/FormSpace"
    },
    {
        id: 2,
        title: "Expense Tracker",
        titleBG: "bg-violet-500",
        children: "Expense Tracker is a full-stack web application designed to manage expenses and income transactions with user authentication and category management",
        stack: ["React", "TS", "Redux", "Axios", "Tailwind", "NestJs", "Postgres"],
        url: "https://github.com/DimaShamoev/ExpenseTracker"
    },
    {
        id: 3,
        title: "Blogging Space",
        titleBG: "bg-green-400/70",
        children: "A full-stack application that allows users to create and read blog posts, with authorization features to ensure only registered users can create posts and view personalized content.",
        stack: ["React", "TS", "Redux", "Axios", "Css/Scss", "NestJs"],
        url: "https://github.com/DimaShamoev/blog-post-app"
    },
    {
        id: 4,
        title: "Ebay Clone",
        titleBG: "bg-[#AB5E45]",
        children: "A full-stack PHP app with user authentication, item listings, shopping cart, order management, and an admin panel — built without a framework",
        stack: ["Php", "Css", "Js", "MySql"],
        url: "https://github.com/DimaShamoev/ebay-php-clone"
    },
]

export const projectsData: projectsDataType[] = [
    {
        id: 1,
        title: "string",
        titleBG: "bg-red-500",
        children: "React.ReactNode",
        stack: ["string"],
        url: "string"
    },
    {
        id: 2,
        title: "string",
        titleBG: "bg-violet-400",
        children: "React.ReactNode",
        stack: ["string"],
        url: "string"
    },
    {
        id: 3,
        title: "string",
        titleBG: "bg-green-500",
        children: "React.ReactNode",
        stack: ["string"],
        url: "string"
    },
    {
        id: 4,
        title: "string",
        titleBG: "bg-pink-500",
        children: "React.ReactNode",
        stack: ["string"],
        url: "string"
    },
    {
        id: 5,
        title: "string",
        titleBG: "bg-purple-600",
        children: "React.ReactNode",
        stack: ["string"],
        url: "string"
    }
]