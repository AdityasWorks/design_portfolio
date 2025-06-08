import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import VantaBackground from "./VantaBackground";
import { useTheme } from "../context/ThemeContext";

const Hero = ({ onViewWork }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`relative overflow-hidden  transition-colors duration-300 ${darkMode ? 'bg-darkbg' : 'bg-lightbg'}`}
    >
      {/* Hero Content */}
      <div className="px-4 md:px-6">
        {/* Vanta Background */}

        <VantaBackground darkMode={darkMode}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 md:mb-3 text-white">
              Good design can make even a bad product sell.
            </h2>
          </motion.div>
        </VantaBackground>
        
        <div className="pt-8 md:pt-8 max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 px-4 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I craft beautiful digital experiences with code, motion graphics,
              and user-centered design thinking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4"
            >
              <button
                onClick={onViewWork}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-colors flex items-center justify-center space-x-2
                  ${
                    darkMode
                      ? "bg-white text-gray-900 hover:bg-gray-200"
                      : "bg-gray-950 text-white hover:bg-gray-800"
                  }`}
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="/RESUME_ADI.pdf"
                target="_blank"
                className={`border rounded-full px-6 sm:px-8 py-2.5 sm:py-3 font-medium transition-colors flex justify-center
                  ${
                    darkMode
                      ? "border-gray-600 text-white hover:bg-gray-800"
                      : "border-gray-300 text-gray-900 hover:bg-gray-50"
                  }`}
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;