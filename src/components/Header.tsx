const Header: React.FunctionComponent = () => {
    return (
        <header className="flex items-center    justify-between box-padding">
            <div className="logo text-2xl font-bold">
                <a href="#home">Dima</a>
            </div>

            <nav className="nav">
                <ul className="flex gap-10">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Expertise</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Experience</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
            <div className="hidden-elem"></div>
        </header>
    )
}

export default Header