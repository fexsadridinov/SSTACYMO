import { useState, useEffect } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = ({ isYellow }) => {
    return (
        <div className={`transition-colors duration-500 ${isYellow ? 'yellow' : 'pink'}`}>
            <ul className="nav-ul">
                {navLinks.map(({ id, href, name }) => (
                    <li key={id} className="nav-li">
                        <a href={href} className="nav-li_a">
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Navbar = () => {

    const [isYellow, setIsYellow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalPageHeight = document.documentElement.scrollHeight;
            const halfPage = totalPageHeight / 2;
            if (window.scrollY >= halfPage) {
                setIsYellow(true);
            } else {
                setIsYellow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const toggleMenu = () => setIsOpen((prevIsOpen)=> !prevIsOpen);

    return (
        <header
            className={`navbar fixed top-0 left-0 right-0 transition-colors duration-500 z-50 ${
                isYellow
                    ? "bg-gradient-to-r from-yellow-200 to-amber-300 yellow"
                    : "bg-gradient-to-r from-pink-100 to-pink-400 pink"
            }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/"
                       className={`transition-colors duration-500 text-4xl font-bold ${
                           isYellow ? 'text-amber-500 hover:text-yellow-800' : 'text-pink-700 hover:text-pink-300'
                       }`}>
                        SSTACYMO
                    </a>
                    <button onClick={toggleMenu}
                            className="text-pink-700 hover:text-pink-300 focus;outline-none sm:hidden flex"
                            aria-label="Toggle menu">

                        <img src={isOpen? "assets/close.svg" : "assets/menu.svg"}
                        alt="toggle" className="w-6 h-6"/>
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 
                "max-h-screen" : "max-h-0"} ${isYellow ? "yellow" : "pink"}`}>
                 <nav className="p-5">
                     <NavItems />
                 </nav>
            </div>
        </header>
    )
}
export default Navbar
