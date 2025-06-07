import { motion } from 'framer-motion';
import VantaBg from './VantaBg';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-50 text-black ">
      <VantaBg/>
      <div className="container mx-auto flex justify-between items-center py-6 px-35">
        {/* Left - Made by text */}
        <motion.span 
          className="text-l text-black"
          whileHover={{ scale: 1.05 }}
        >
          made by adi.
        </motion.span>
        
        {/* Center - Social links */}
        <div className="flex space-x-6">
          {/* <motion.a 
            href="https://github.com/AdityasWorks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-l text-black hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            github
          </motion.a>
          
          <motion.a 
            href="https://linkedin.com/in/AdityaYadav09" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-l text-black hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            linkedin
          </motion.a> */}
          
          <motion.a 

            className="text-l text-black hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            !framer-template
          </motion.a>
        </div>
        
        {/* Right - Copyright */}
        <motion.span 
          className="text-l text-black"
          whileHover={{ scale: 1.05 }}
        >
          @2025
        </motion.span>
      </div>
    </footer>
  );
};

export default Footer;