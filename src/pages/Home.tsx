const Home: React.FunctionComponent = () => {
    return (
        <div className="home w-full xl-box-padding flex flex-col gap-10 lg:gap-10">
            <div className="text flex items-start justify-between">
                <div className="large-txt uppercase text-[15em] leading-50">
                    hello! i'm Dima
                </div>
                <div className="small-text w-full text-xl max-w-[400px] text-white/50">
                    I'm a frontend developer who loves building easy-to-use, attractive websites with clear, efficient, and reliable code. I enjoy creating user-friendly interfaces that enhance the browsing experience for everyone.
                </div>
            </div>
            <div className="text flex items-start justify-between flex-row-reverse">
                <div className="large-txt uppercase leading-50 text-[12em]">
                    frontend developer
                </div>
                <div className="small-text w-full text-xl max-w-[350px] text-white/50">
                    Every day, I work hard to improve my skills, build new things, face challenges, fix problems, and learn something new to become better at what I do as a developer.
                </div>
            </div>
        </div>
    )
}

export default Home 