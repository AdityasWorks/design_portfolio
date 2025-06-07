import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Palette, Headphones, Coffee, Gamepad2, Music, ChefHat } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const InfoSection = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`container mx-auto px-4 py-16 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="max-w-[90%] mx-auto space-y-24">
        {/* Experience Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium mb-4">
              My experience.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={`space-y-6 mb-8`}>
              <div>
                <div className={`flex flex-col sm:flex-row sm:items-center`}>
                  <div className={`font-medium w-36 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2023 — 2024</div>
                  <div className="font-medium">Minister of Branding, Student Cabinet</div>
                </div>
                <p className={`mt-1 pl-0 sm:pl-36 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Led a 45-member team managing branding and digital assets for university events with 8000+ students.
                </p>
              </div>
              
              <div>
                <div className={`flex flex-col sm:flex-row sm:items-center`}>
                  <div className={`font-medium w-36 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2023 — 2024</div>
                  <div className="font-medium">Head of Design, Bennett Research Society</div>
                </div>
                <p className={`mt-1 pl-0 sm:pl-36 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Direct visual design for research presentations and promotional materials.
                </p>
              </div>
              
              <div>
                <div className={`flex flex-col sm:flex-row sm:items-center`}>
                  <div className={`font-medium w-36 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2022 — 2023</div>
                  <div className="font-medium">Freelance Designer & Developer</div>
                </div>
                <p className={`mt-1 pl-0 sm:pl-36 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Worked with clients on graphic design projects, video editing, and web development.
                </p>
              </div>
            </div>
            
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Currently in my third year of Computer Science at Bennett University (2022 — 2026).
            </p>
          </motion.div>
        </div>
        
        {/* My design approach section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium mb-4">
              My design approach.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I work at the intersection of code and design. With experience in both development and visual design, I create digital experiences that look good.
            </p>

            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Design Philosophy</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Great design should aspire to feel obvious, like there was never a better way to do it. This principle guides everything I create - from interfaces to interactions.
                  </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Exploration</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I start every project by diving into research and exploring existing ideas. Before touching any design software, I fill design boards with ideas and images.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Iteration</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  My design process is never linear. I create, test, and refine in cycles - no design is perfect you just have to start and keep rebuilding
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Execution</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  When it's time to bring designs to life, my development background becomes my superpower. I understand technical constraints and possibilities, creating designs that not only look good but can be implemented efficiently.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium mb-4">
              Skills & expertise
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-full ${darkMode ? 'bg-darkbg/80' : 'bg-lightbg/80'}`}>
                  <Palette size={20} />
                </div>
                <h3 className="text-xl font-medium">Design</h3>
              </div>
              <ul className={`pl-3 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>UI/UX Design</li>
                <li>Figma, Adobe XD</li>
                <li>Photoshop, Illustrator</li>
                <li>Motion design (After Effects)</li>
                <li>3D Art (Blender, Unreal Engine)</li>
                <li>Brand identity</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-full ${darkMode ? 'bg-darkbg/80' : 'bg-lightbg/80'}`}>
                  <Code size={20} />
                </div>
                <h3 className="text-xl font-medium">Development</h3>
              </div>
              <ul className={` pl-3 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>React, Next.js</li>
                <li>Node.js, Express</li>
                <li>Python, Java, C++</li>
                <li>MongoDB, MySql</li>
                <li>Responsive web design</li>
              </ul>
            </div>
            
          </motion.div>
        </div>
        
        {/* Beyond the screen Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium mb-4">
              Beyond the screen
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-full ${darkMode ? 'bg-darkbg/80' : 'bg-lightbg/80'}`}>
                  <Music size={20} />
                </div>
                <h3 className="text-xl font-medium">Music</h3>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                When I need a break from screens, you'll find me playing guitar or messing around on piano. 
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-full ${darkMode ? 'bg-darkbg/80' : 'bg-lightbg/80'}`}>
                  <Coffee size={20} />
                </div>
                <h3 className="text-xl font-medium">Coffee</h3>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
               I'm a coffee enthusiast who enjoys exploring different brewing methods and coffee origins.
              </p>
            </div>
            
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-full ${darkMode ? 'bg-darkbg/80' : 'bg-lightbg/80'}`}>
                  <ChefHat size={20} />
                </div>
                <h3 className="text-xl font-medium">Cooking</h3>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                My kitchen experiments rival my coding projects in complexity.
              </p>
            </div>
            
          </motion.div>
        </div>
        
        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium mb-4">
              Let's connect
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="https://github.com/AdityasWorks" 
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-4 py-3 rounded-full transition-colors
                  ${darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
                <span>GitHub</span>
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/AdityaYadav" 
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-4 py-3 rounded-full transition-colors
                  ${darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </motion.a>
              
              <motion.a 
                href="mailto:heyaadi2@gmail.com"
                className={`flex items-center space-x-2 px-4 py-3 rounded-full transition-colors
                  ${darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                <span>Email</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;