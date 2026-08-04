import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="mt-2">
            <div
                className="
                            flex text-white justify-between
                            items-center pb-6 pt-4 px-4 border-b border-primary/50
                            md:px-20 lg:px-30">
                <Link to="/">
                    <div className="text-white flex gap-2 justify-center items-center">
                        <span>
                            <img
                                src=".\src\assets\logo.svg"
                                alt="logo"
                                className="w-8 "
                            />
                        </span>
                        <span className="text-md font-heading md:text-lg lg:text-xl lg:mb-1 md:mb-1">
                            crypto dash
                        </span>
                    </div>
                </Link>
                <div className="flex gap-2">
                    <Link
                        type="button"
                        className="
                        font-heading
                        transition-colors
                        duration-200
                        text-xs cursor-pointer bg-secondary/60
                        px-2 py-1 rounded-md
                        hover:bg-secondary md:text-sm
                        "
                        to="/">
                        HOME
                    </Link>
                    <Link
                        type="button"
                        className="
                        font-heading
                        transition-colors
                        duration-200
                        text-xs cursor-pointer bg-secondary/60
                        px-2 py-1 rounded-md
                        hover:bg-secondary md:text-sm
                        "
                        to="/about">
                        About
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
