interface IContainerProps {
    children: React.ReactNode
}

const Container: React.FunctionComponent<IContainerProps> = ({ children }) => {
    return (
        <div className="container">
            { children }
        </div>
    )
}

export default Container