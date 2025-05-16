import { Link } from "react-router-dom"

interface IFooterLinkProps {
    link: string
    target: 'blank' | 'parent'
    children: React.ReactNode
}

const FooterLink: React.FunctionComponent<IFooterLinkProps> = ({ link, target, children }) => {
    return (
        <li><Link to={ link } target={`_${ target }`} className="text-xl opacity-70 hover:underline hover:opacity-90">{ children }</Link></li>
    )
}

export default FooterLink