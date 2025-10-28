import { motion } from "framer-motion";
import moonIcon from "../../assets/icons/moon.svg";
import sunIcon from "../../assets/icons/sun.svg";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <motion.nav
            className={`relative top-0 left-0 right-0 z-50 py-4 sm:py-6 md:py-8 transition-all duration-300 ${
                darkMode ? "bg-darkbg" : "bg-lightbg"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-11/12 sm:w-10/12 md:w-7/10 lg:w-7/10 mx-auto px-4 sm:px-6 grid grid-cols-3 items-center">
                {/* Left - Logo */}
                <motion.div
                    className={`justify-self-start text-base sm:text-lg cursor-pointer ${
                        darkMode ? "text-white" : "text-black"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    aditya y.
                </motion.div>

                {/* Center - Theme toggle */}
                <div className="justify-self-center flex items-center">
                    <motion.button
                        className={`p-2 rounded-full transition-colors duration-300 flex items-center justify-center focus:outline-none`}
                        onClick={toggleDarkMode}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {darkMode ? (
                            <img src={moonIcon} alt="" className="w-5 h-5" />
                        ) : (
                            <img src={sunIcon} alt="" className="w-5 h-5" />
                        )}
                    </motion.button>
                </div>

                {/* Right - Link */}
                <motion.a
                    href="https://linkedin.com/in/AdityaYadav09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`justify-self-end text-sm sm:text-base cursor-pointer ${
                        darkMode ? "text-white" : "text-black"
                    }`}
                    whileHover={{ scale: 1.05 }}
                >
                    get in touch
                </motion.a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
