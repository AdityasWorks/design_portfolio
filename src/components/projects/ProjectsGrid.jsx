import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { useTheme } from '../../context/ThemeContext'

const ProjectsGrid = () => {
  const { darkMode } = useTheme();
  
  const projects = [
    {
      id: 3,
      category: "Layer8",
      type: "video",
      videoUrl: "/videos/loop8.mp4",
      videoUrlWebm: "/videos/webm/loop8.webm", 
      thumbnail: "/images/layer8.png",
      externalLink: "https://www.behance.net/gallery/227953655/Layer8"
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
      // externalLink: "https://citysync.vercel.app"
    },
    {
      id: 4,
      type: "video",
      videoUrl: "/videos/2k22.mp4",
      videoUrlWebm: "/videos/webm/2k22.webm",
      thumbnail: "/images/2k22thumb.jpg",
      category: "Motion Design"
    },
  ]

  // Updated function to open in a new tab 
  const handleProjectClick = (project) => {
    if (project.externalLink) {
      window.open(project.externalLink, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <div className="container m-auto px-6">
      <motion.h2 
        className={`flex justify-center text-3xl font-medium mb-6 pt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        featured work
      </motion.h2>
      
      <div className="grid grid-cols-12 gap-2 w-[65%] mx-auto">
        {/* First row */}
        {/* Layer8 */}
        <motion.div
          className="col-span-12 lg:col-span-8 h-[400px] relative rounded-xl overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleProjectClick(projects[0])}
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
          className="col-span-12 lg:col-span-4 h-[400px] relative rounded-xl overflow-hidden"
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
        {/* CitySync */}
        <motion.div
          className="col-span-12 md:col-span-6 h-[300px] relative rounded-xl overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => handleProjectClick(projects[2])}
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
          className="col-span-12 md:col-span-6 h-[300px] relative rounded-xl overflow-hidden"
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