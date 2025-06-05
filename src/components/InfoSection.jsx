import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const InfoSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-medium mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <img 
              src="/images/me.jpg" 
              alt="Aditya Yadav" 
              className="w-auto h-auto rounded-lg shadow-lg object-scale-100"
            />
          </div>
          
          <div>
            <p className="text-lg mb-6">
              I'm a designer with a unique background in both technical development and visual design. 
              With experience in motion graphics, 3D modeling, and full-stack development, I bring a versatile 
              skillset to design challenges.
            </p>
            
            <p className="text-lg mb-6">
              Currently pursuing my B.Tech in Computer Science at Bennett University with a CGPA of 8.8/10, 
              I've led teams in organizing large-scale tech events and headed design for the Bennett Undergraduate 
              Research Society.
            </p>
            
            <p className="text-lg mb-8">
              My approach combines technical understanding with creative vision, allowing me to create designs 
              that are not only beautiful but also technically feasible and user-centered.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://github.com/AdityasWorks" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/AdityaYadav" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:heyaadi2@gmail.com"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InfoSection;