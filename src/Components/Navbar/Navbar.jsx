import { useState, useEffect } from "react";
import Logo from "../../assets/Logo.jpeg";
import MenuIcon from "../../assets/icons8-menu-50.png";

const Navbar = () => {
    const [themshow, setthemshow] = useState("hidden");
    const [isScrolled, setIsScrolled] = useState(false);

    const pageClose = () => {
        setthemshow("hidden");
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`${isScrolled ? "bg-white" : "bg-themcolor"
                } sticky top-0 left-0 h-20 flex w-full z-30 transition-colors duration-300`}
        >
            <nav className="flex items-center justify-between w-[90%] mx-auto">
                <div>
                    {/* <img className="mix-blend-multiply" src={Logo} /> */}
                    <p className={`font-bold text-3xl ${isScrolled ? "text-black" : "text-white"}`}>
                        PortFolio
                    </p>
                </div>

                <div className="flex items-center">
                    <span
                        className={`mr-7 font-bold text-2xl ${isScrolled ? "text-black" : "text-white"
                            } xxs:hidden sm:inline-block`}
                    >
                        <i className="fa fa-phone mr-3"></i>
                        (+92)3440096167
                    </span>
                    <button
                        className="navbar-toggler collapsed"
                        onClick={() => setthemshow("h-screen")}
                    >
                        <img className="w-6 h-6" src={MenuIcon} />
                    </button>
                </div>
            </nav>
            <div
                className={`${themshow} bg-black w-full opacity-80 absolute flex items-center justify-center`}
            >
                <div className="relative w-[90%]">
                    <ul className="text-white text-2xl flex gap-5 flex-col text-center">
                        <li className="hover:text-themcolor hover:animate-bounce">
                            <a href="#hero" onClick={pageClose}>
                                Home
                            </a>
                        </li>
                        <li className="hover:text-themcolor hover:animate-bounce">
                            <a href="#aboutme" onClick={pageClose}>
                                About Me
                            </a>
                        </li>
                        <li className="hover:text-themcolor hover:animate-bounce">
                            <a href="#skills" onClick={pageClose}>
                                What I do
                            </a>
                        </li>
                        <li className="hover:text-themcolor hover:animate-bounce">
                            <a href="#resume" onClick={pageClose}>
                                Resume
                            </a>
                        </li>
                        <li className="hover:text-themcolor hover:animate-bounce">
                            <a href="#portfolio" onClick={pageClose}>
                                Portfolio
                            </a>
                        </li>
                        <li className="hover:text-themcolor hover:animate-bounce">
                            <a href="#question" onClick={pageClose}>
                                FAQ
                            </a>
                        </li>
                        <li className="hover:text-themcolor hover:animate-bounce">
                            <a href="#clientspeak" onClick={pageClose}>
                                Client Speak
                            </a>
                        </li>
                        <li className="hover:text-themcolor hover:animate-bounce">
                            <a href="#contact" onClick={pageClose}>
                                Contact Me
                            </a>
                        </li>
                    </ul>
                    <a
                        onClick={() => setthemshow("hidden")}
                        className="absolute top-[-10%] right-[10%] font-bold text-2xl text-white cursor-pointer hover:text-amber-400"
                    >
                        X
                    </a>

                    <div className="text-white flex items-center justify-center space-x-7 py-10">
                        <i className="fab fa-twitter fa-2x"></i>
                        <i className="fab fa-facebook fa-2x"></i>
                        <i className="fab fa-instagram fa-2x"></i>
                        <i className="fab fa-linkedin-in fa-2x"></i>
                        <i className="fab fa-dribbble fa-2x"></i>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
