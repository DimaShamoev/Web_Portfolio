interface IAnimatedLinksProps {
    children: React.ReactNode
    link: string
}

const AnimatedLinks: React.FunctionComponent<IAnimatedLinksProps> = ({ children, link }) => {
    return (
        <li>
            <a href={link} className="animated-link">
                {children}
            </a>
        </li>
    )
}

export default AnimatedLinks