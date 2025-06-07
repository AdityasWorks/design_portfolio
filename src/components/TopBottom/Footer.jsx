import { motion } from "framer-motion";
import VantaBg from "./VantaBg";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={` transition-colors duration-300 ${darkMode ? 'bg-darkbg text-white' : 'bg-lightbg text-black'}`}
    >
      <VantaBg darkMode={darkMode} />
      <div className="container mx-auto flex justify-between items-center py-6 px-35">
        {/* Left - Made by text */}
        <motion.span className="text-l" whileHover={{ scale: 1.05 }}>
          made by adi.
        </motion.span>

        {/* Center - Social links */}
        <div className="flex space-x-6">
          <motion.a className="text-l" whileHover={{ scale: 1.05 }}>
            !framer-template
          </motion.a>
        </div>

        {/* Right - Copyright */}
        <motion.span className="text-l" whileHover={{ scale: 1.05 }}>
          @2025
        </motion.span>
      </div>
    </footer>
  );
};

export default Footer;
