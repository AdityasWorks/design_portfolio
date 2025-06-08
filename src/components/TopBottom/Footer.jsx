import { motion } from "framer-motion";
import VantaBg from "./VantaBg";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`transition-colors duration-300 ${darkMode ? 'bg-darkbg text-white' : 'bg-lightbg text-black'}`}
    >
      <VantaBg darkMode={darkMode} />
      <div className="w-11/12 sm:w-10/12 md:w-7/10 lg:w-7/10 mx-auto px-4 sm:px-6 py-6 grid grid-cols-3">
        {/* Left - Made by text */}
        <motion.span 
          className="justify-self-start text-xs sm:text-xs md:text-base cursor-pointer" 
          whileHover={{ scale: 1.05 }}
        >
          made by adi.
        </motion.span>

        {/* Center - Social links */}
        <div className="justify-self-center flex items-center">
          <motion.a 
            className="text-xs sm:text-xs md:text-base cursor-pointer" 
            whileHover={{ scale: 1.05 }}
          >
            !framer-template
          </motion.a>
        </div>

        {/* Right - Copyright */}
        <motion.span 
          className="justify-self-end text-xs sm:text-xs md:text-base cursor-pointer" 
          whileHover={{ scale: 1.05 }}
        >
          @2025
        </motion.span>
      </div>
    </footer>
  );
};

export default Footer;