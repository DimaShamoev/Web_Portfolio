const Loader: React.FunctionComponent = () => {
    return (
        <div className="bg-[#1A191D] h-screen flex flex-col items-center justify-center fill-mask gap-4 absolute inset-0 box-padding">
            <div className="loader-text text-2xl font-bold mix-blend-screen bg-slate-800 flex items-center justify-center w-full max-w-[450px] sm:text-5xl">
                Dima Shamoev
            </div>
            <div className="loading-bar w-full max-w-[450px] h-2 bg-gray-500">
                <div className="progress-bar h-full bg-white" />
            </div>
        </div>
    );
};

export default Loader;