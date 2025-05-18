import type { IconType } from "react-icons"
import { NavLink } from "react-router-dom"
import { useAsideStore } from "../../store/UseAsideStore"

interface IAsideLinksProps {
    link: string
    Icon: IconType
    children: React.ReactNode
}

const AsideLinks: React.FunctionComponent<IAsideLinksProps> = ({ link, children, Icon }) => {

    const toggleAside = useAsideStore(state => state.toggleAside)

    return (
        <li>
            <NavLink
                to={link}
                onClick={toggleAside}
                className={({ isActive }) => isActive ? 'flex items-center gap-2 text-2xl bg-black text-white rounded-md p-2' : 'flex items-center gap-2 text-2xl rounded-md p-2' }>
                <Icon /> <span >{ children }</span>
            </NavLink>
        </li>
    )
}

export default AsideLinks