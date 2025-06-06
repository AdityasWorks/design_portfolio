import { motion } from 'framer-motion';

const Navbar = () => {

  return (
    <motion.nav 
      className={`relative  top-0 left-0 right-0 z-50 py-10 px-70 transition-all duration-300 `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center ">
        <motion.a 
          className="text-l cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          aditya y.
        </motion.a>
        
        <motion.a
          className=" text-l cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.open('https://linkedin.com/in/AdityaYadav09', '_blank')}
        >
          get in touch
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;