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
        title: "Form Space",
        titleBG: "bg-red-500",
        children: "A full-stack web application that allows users to create custom forms, fill out forms made by others, and engage with the community by liking and commenting on submitted responses. It supports user interaction and content sharing in a structured way",
        stack: ["React", "TS", "Redux", "Axios", "Tailwind", "NestJs", "Postgres"],
        url: "https://github.com/DimaShamoev/FormSpace"
    },
    {
        id: 2,
        title: "Expense Tracker",
        titleBG: "bg-violet-500",
        children: "Expense Tracker is a full-stack web application that helps users manage their income and expenses. It includes secure user authentication, the ability to add, edit, and delete transactions, and tools for organizing transactions by category to keep finances in order",
        stack: ["React", "TS", "Redux", "Axios", "Tailwind", "NestJs", "Postgres"],
        url: "https://github.com/DimaShamoev/ExpenseTracker"
    },
    {
        id: 3,
        title: "Blogging Space",
        titleBG: "bg-green-400/70",
        children: "A complete full-stack application where users can register, log in, and write their own blog posts. It also allows everyone to read published posts. The app includes secure authorization so that only registered users can create and manage their posts, while also showing content based on the user's profile or activity",
        stack: ["React", "TS", "Redux", "Axios", "Css/Scss", "NestJs"],
        url: "https://github.com/DimaShamoev/blog-post-app"
    },
    {
        id: 4,
        title: "Ebay Clone",
        titleBG: "bg-[#AB5E45]",
        children: "A full-stack PHP application that includes user authentication, item listings, a shopping cart, order management, and an admin panel. Everything is built from scratch without using any PHP frameworks, focusing on clean structure and functionality",
        stack: ["Php", "Css", "Js", "MySql"],
        url: "https://github.com/DimaShamoev/ebay-php-clone"
    },
    {
        id: 5,
        title: 'BOXCAR',
        titleBG: 'bg-[#7886C7]',
        children: 'This is a simple UI application built with React and TypeScript. It serves as a user-friendly interface showcasing modern design principles and responsive layouts. Note that this app focuses on UI-only functionality and does not include features like renting, payments, or ordering',
        stack: ['TS', 'React', 'Redux', 'React-Form', 'Framer' ],
        url: 'https://github.com/DimaShamoev/Car_Rent_WebSite'
    },
    {
        id: 6,
        title: 'Coming Soon',
        titleBG: 'bg-[#70c95b]',
        children: "This project is still in progress and will be released soon. It's being thoughtfully designed and developed to provide a useful and enjoyable experience. We're working hard to ensure everything works smoothly and looks great. Stay tuned for more",
        stack: ['Coming Soon' ],
        url: 'https://github.com/DimaShamoev'
    }
]