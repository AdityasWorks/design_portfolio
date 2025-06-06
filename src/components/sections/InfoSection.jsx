import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Palette, Headphones, Coffee, Gamepad2 } from 'lucide-react';

const InfoSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-[90%] mx-auto space-y-24">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-medium">
              I love building digital experiences.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              Every day I'm driven to create experiences that merge technical feasibility with 
              aesthetic excellence. My background in both development and design allows me to 
              bridge the gap between creativity and implementation.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Currently pursuing my B.Tech in Computer Science while leading design initiatives 
              at Bennett University.
            </p>
            
            <div className="space-y-2 border-l-2 border-gray-200 pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="font-medium w-36 text-gray-500">2023 — Now</div>
                <div className="font-medium">Minister of Branding, Student Cabinet</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="font-medium w-36 text-gray-500">2023 — Now</div>
                <div className="font-medium">Head of Design, Bennett Research Society</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="font-medium w-36 text-gray-500">2022 — 2026</div>
                <div className="font-medium">B.Tech in Computer Science</div>
              </div>
            </div>
          
          </motion.div>
        </div>
        
        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-medium">
              I believe design should solve real problems.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              My process combines technical understanding with creative vision, allowing me to create designs 
              that are not only beautiful but also technically feasible and user-centered.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              I love building expressive tools that remove barriers to creativity and exploration. 
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center mb-3">
                  <Code size={20} className="text-gray-700" />
                </div>
                <h4 className="font-medium mb-1">Development</h4>
                <p className="text-sm text-gray-600">Full-stack development and technical implementation</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center mb-3">
                  <Palette size={20} className="text-gray-700" />
                </div>
                <h4 className="font-medium mb-1">Visual Design</h4>
                <p className="text-sm text-gray-600">UI/UX, motion graphics, and brand design</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl  font-medium">
              I thrive in collaborative environments.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              Leading teams in organizing large-scale tech events has taught me the value of clear 
              communication and empowering others. I find helping others do their best work incredibly rewarding.
            </p>
            
            <p className="text-lg text-gray-700">
              I've led a 45-member team to manage branding and digital assets for events with 8000+ students,
              coordinating across multiple departments to ensure consistent messaging and visual identity.
            </p>
          </motion.div>
        </div>
        
        {/* Section 4 */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-xl  font-medium">
              I'm always learning new things.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              Outside of design I enjoy motion graphics, 3D modeling, and exploring new technologies.
              I'm constantly learning new tools and techniques to enhance my creative capabilities.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              In my spare time, I'm often experimenting with animation techniques, improving my 3D 
              skills, and exploring the intersection of design and code.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Headphones size={18} />
                </div>
                <span>Motion Design</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Coffee size={18} />
                </div>
                <span>3D Modeling</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Gamepad2 size={18} />
                </div>
                <span>Web Development</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;