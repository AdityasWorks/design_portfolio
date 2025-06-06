import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const ProjectsGrid = () => {
  const projects = [
    {
      id: 2,
      type: "video",
      videoUrl: "/videos/2k22.mp4",
      thumbnail: "/images/2k22thumb.jpg"
    },
    {
      id: 1,
      type: "video",
      videoUrl: "/videos/loop8.mp4",
      thumbnail: "/images/layer8.png"
    },
    {
      id: 3,
      type: "project",
      gradient: "from-blue-400 to-cyan-400",
      image: "/images/head.png"
    },
    {
      id: 4,
      type: "project",
      gradient: "from-green-400 to-blue-400",
      image: "/images/asv_thumb.png"
    },
    {
      id: 5,
      type: "video",
      thumbnail: "/images/airs.png"
    },
    {
      id: 6,
      type: "project",
      gradient: "from-orange-400 to-red-400",
      image: "/images/mbees.png"
    }
  ]

  return (
    <div className="container mx-auto px-6">
      <motion.h2 
        className="flex justify-center text-3xl font-medium mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        featured projects
      </motion.h2>
      
      {/* Project Grid with Video Support */}
      <div className="grid grid-cols-12 gap-6 w-[90%] mx-auto">
        {/* Large featured project */}
        <ProjectCard 
          project={projects[0]}
          className="col-span-12 md:col-span-7 row-span-2"
          delay={0.6}
        />

        {/* Rest of the project cards */}
        <ProjectCard 
          project={projects[1]}
          className="col-span-12 sm:col-span-6 md:col-span-5"
          delay={0.8}
        />
        
        <ProjectCard 
          project={projects[2]}
          className="col-span-12 sm:col-span-6 md:col-span-5"
          delay={1.0}
        />
        
        <ProjectCard 
          project={projects[3]}
          className="col-span-12 sm:col-span-6 md:col-span-4"
          delay={1.2}
        />
        
        <ProjectCard 
          project={projects[4]}
          className="col-span-12 sm:col-span-6 md:col-span-4"
          delay={1.4}
        />
        
        <ProjectCard 
          project={projects[5]}
          className="col-span-12 md:col-span-4"
          delay={1.6}
        />
      </div>
    </div>
  )
}

export default ProjectsGrid