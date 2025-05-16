interface IExperience {
    id: number
    position: string
    period: string
    imgUrl: string
    location: string
    siteUrl: string
    stack: string[]
    children: React.ReactNode
}

export const experiences: IExperience[] = [
    {
        id: 1,
        position: '“Commercial Software Development — JavaScript” training',
        period: '2025 - 2025',
        imgUrl: '/image/itransition_logo.jpg',
        location: 'Tbilisi, Georgia (Remote)',
        siteUrl: 'https://www.itransition.com/',
        stack: ['JS/TS', 'React', 'NodeJs', 'ExpressJs', 'NestJs', 'PostgreSql/MySql', 'Git'],
        children: 'Itransition provided hands-on experience in full-stack web development. It taught both client-side development with JavaScript and Typescript and server-side development with Node. js. I completed a full-stack project using React with TypeScript, Tailwind CSS, NestJS and PostgreSQL during the internship.'
    }
]