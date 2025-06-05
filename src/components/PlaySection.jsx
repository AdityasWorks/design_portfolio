import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const PlaySection = () => {
  const projects = [

  ];

  return (
    <div className="container mx-auto px-4">
      <motion.h2 
        className="text-3xl font-medium mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Creative Playground
      </motion.h2>
      

    </div>
  );
};

export default PlaySection;