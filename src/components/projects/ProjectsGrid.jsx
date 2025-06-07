import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { useTheme } from '../../context/ThemeContext'

const ProjectsGrid = () => {
  const { darkMode } = useTheme();
  
  const projects = [
    {
      id: 3,
      title: "Layer8",
      description: "VPN for AIs",
      type: "video",
      videoUrl: "/videos/loop8.mp4",
      thumbnail: "/images/layer8.png",
    },
    {
      id: 2,
      type: "poster",
      image: "/images/liquor.png",
      category: "Graphic Design"
    },
    {
      id: 1,
      title: "CitySync",
      description: "CitySync",
      type: "case-study-with-thumbnail",  
      image: "/images/city/citysync.gif",  
      thumbnail: "/images/city/city1.png", 
    },
    {
      id: 4,
      type: "video",
      videoUrl: "/videos/2k22.mp4",
      thumbnail: "/images/2k22thumb.jpg",
      category: "Motion Design"
    },
  ]

  return (
    <div className="container m-auto px-6">
      <motion.h2 
        className={`flex justify-center text-3xl font-medium mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        featured projects
      </motion.h2>
      
      <div className="grid grid-cols-12 gap-6 w-[80%] mx-auto">
        {/* First row */}
        {/* Layer8 */}
        <motion.div
          className="col-span-12 lg:col-span-8 h-[468px] relative rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectCard 
            project={projects[0]}
            className="h-full"
            delay={0.1}
            darkMode={darkMode}
          />
        </motion.div>
        
        {/* Poster */}
        <motion.div
          className="col-span-12 lg:col-span-4 h-[468px] relative rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectCard 
            project={projects[1]}
            className="h-full"
            delay={0}
            darkMode={darkMode}
          />
        </motion.div>
        
        {/* Second row */}
        {/* Video */}
        <motion.div
          className="col-span-12 md:col-span-7 h-[360px] relative rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ProjectCard 
            project={projects[2]}
            className="h-full"
            delay={0}
            videoLoop={true}
            darkMode={darkMode}
          />
        </motion.div>
        
        {/* Motion Design */}
        <motion.div
          className="col-span-12 md:col-span-5 h-[360px] relative rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ProjectCard 
            project={projects[3]}
            className="h-full"
            delay={0}
            darkMode={darkMode}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsGrid