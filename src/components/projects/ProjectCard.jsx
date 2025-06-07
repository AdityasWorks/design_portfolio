import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, className = "", delay = 0, videoLoop = false }) => {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef(null)
  
  // Initialize video playback when component mounts
  useEffect(() => {
    if (videoRef.current && project.type === 'video' && !videoLoop) {
      videoRef.current.play().catch(error => {
        console.log('Initial video play failed:', error)
      })
    }
    
    // Cleanup function to pause video when unmounting
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [project.type, videoLoop]);
  
  // Handle video playback on hover
  useEffect(() => {
    if (videoRef.current && project.type === 'video' && !videoLoop) {
      if (isHovered) {
        // When hovered, PAUSE the video
        videoRef.current.pause();
      } else {
        // When NOT hovered, PLAY the video
        videoRef.current.play().catch(error => {
          console.log('Video play failed:', error)
        })
      }
    }
  }, [isHovered, project.type, videoLoop])

  return (
    <motion.div
      className={`project-card bg-black rounded-xl overflow-hidden relative cursor-pointer ${className}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video content */}
      {project.type === 'video' && (
        <>
          {/* Thumbnail overlay */}
          {!videoLoop && (
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 z-[1] ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${project.thumbnail})` }}
            />
          )}
          
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        </>
      )}
      
      {project.type === 'case-study-with-thumbnail' && (
        <>
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 z-[1] ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            style={{ backgroundImage: `url(${project.image})` }}
          >
          </div>
          
          
          {/* Thumbnail shown on hover */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 z-[1] ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${project.thumbnail})` }}
          />
        </>
      )}
      
      {(project.type === 'case-study' || project.type === 'poster') && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{ 
            backgroundImage: `url(${project.image})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 flex flex-col justify-end">
        {project.category && (
          <span className="text-white/80 text-xs uppercase tracking-wider mb-1">
            {project.category}
          </span>
        )}
        
        {project.title && (
          <h3 className="text-white text-lg font-bold mb-1">
            {project.title}
          </h3>
        )}
        
        {project.description && (
          <p className="text-white/80 text-sm">
            {project.description}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard