import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navigation = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-gray-900">
          Aditya Yadav
        </Link>
        
        <div className="flex space-x-8">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Work
          </Link>
          <Link 
            to="/about" 
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            About
          </Link>
          <a 
            href="mailto:heyaadi2@gmail.com" 
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation