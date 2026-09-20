interface IContainerProps {
    children: React.ReactNode
}

const Container: React.FunctionComponent<IContainerProps> = ({ children }) => {
    return (
        <div className="home w-full xl-box-padding flex flex-col gap-20 overflow-hidden">
            { children }
        </div>
    )
}

export default Container