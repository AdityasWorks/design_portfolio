import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.nav
      className={`relative top-0 left-0 right-0 z-50 py-6 sm:py-8 md:py-8 transition-all duration-300 ${darkMode ? 'bg-darkbg' : 'bg-lightbg'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-11/12 sm:w-10/12 md:w-7/10 lg:w-7/10 mx-auto px-4 sm:px-6 grid grid-cols-3">
        {/* Left - Logo */}
        <motion.a
          className={`justify-self-start text-l cursor-pointer ${
            darkMode ? "text-white" : "text-black"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          aditya y.
        </motion.a>

        {/* Center - Theme toggle */}
        <div className="justify-self-center flex items-center">
          <motion.button
            className={`w-6 h-6 rounded-full transition-colors duration-300 flex items-center justify-center focus:outline-none`}
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <img
                src="/moon.svg"
                alt="Switch to light mode"
                className="w-5 h-5"
              />
            ) : (
              <img
                src="/sun.svg"
                alt="Switch to dark mode"
                className="w-5 h-5"
              />
            )}
          </motion.button>
        </div>

        {/* Right - Link */}
        <motion.a
          className={`justify-self-end text-l cursor-pointer ${
            darkMode ? "text-white" : "text-black"
          }`}
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            window.open("https://linkedin.com/in/AdityaYadav09", "_blank")
          }
        >
          get in touch
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;