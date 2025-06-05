import { motion } from 'framer-motion';

const Navbar = () => {

  return (
    <motion.nav 
      className={`relative  top-0 left-0 right-0 z-50 py-6 px-60 transition-all duration-300 `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-l font-thin"
          whileHover={{ scale: 1.05 }}
        >
          Aditya Y.
        </motion.a>
        
        <motion.a
          href="#contact"
          className=" text-l font-thin"
          onClick={(e) => {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          whileHover={{ scale: 1.05 }}
        >
          Get in touch
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;