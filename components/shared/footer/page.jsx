import { Github, Linkedin, Telegram } from "./icons";

const thisYear = new Date().getFullYear();

const footer = () => {
    return (
        <footer
            className="
            border-t
            border-primary/20
                bg-secondary/10
                mt-50
                flex
                flex-col
                items-center
                justify-center">
            <div className="flex flex-col items-center justify-between gap-2 mt-10">
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl text-text-inverse font-bold md:text-4xl font-heading">
                        GET IN TOUCH
                    </h2>
                </div>
                <div className="text-text-inverse flex gap-2">
                    <a href="https://github.com/" target="_blank">
                        <Github className="hover:text-secondary transition-colors duration-200 cursor-pointer w-6 h-6 md:h-10 md:w-10" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <Linkedin className="hover:text-secondary transition-colors duration-200 cursor-pointer w-6 h-6 md:h-10 md:w-10" />
                    </a>
                    <a href="https://youtube.com/" target="_blank">
                        <Telegram className="hover:text-secondary transition-colors duration-200 cursor-pointer w-6 h-6 md:h-10 md:w-10" />
                    </a>
                </div>
            </div>
            <div className="mt-10 mb-5 text-text-inverse text-xs md:text-sm">
                <p className="text-primary/50">
                    {"\u00a9"}
                    {thisYear}.{"\u00a0"}
                    Developed by{" "}
                    <span className="font-bold text-[#3b1956]">
                        YAZDAN SADRI.
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default footer;
