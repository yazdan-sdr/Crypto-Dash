const BackgroundGlow = () => {
    return (
        <div>
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] max-w-125 max-h-125 bg-purple-700 rounded-full opacity-25 blur-[60px] md:blur-[120px]" />
                <div className="absolute top-[20%] right-[5%] w-[40vw] h-[40vw] max-w-100 max-h-100 bg-indigo-600 rounded-full opacity-20 blur-[50px] md:blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[30%] w-[45vw] h-[45vw] max-w-112.5 max-h-112.5 bg-violet-800 rounded-full opacity-15 blur-[60px] md:blur-[130px]" />
            </div>
        </div>
    );
};

export default BackgroundGlow;
