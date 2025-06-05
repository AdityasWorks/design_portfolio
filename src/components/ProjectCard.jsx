import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, ArrowRight } from 'lucide-react'

const ProjectCard = ({ project, className = "", delay = 0 }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef(null)

  const handleVideoToggle = (e) => {
    e.stopPropagation()
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true)
        }).catch((error) => {
          console.log('Video play failed:', error)
        })
      }
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  // Auto-play on hover (muted videos are allowed)
  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current && project.type === 'video') {
      videoRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch((error) => {
        console.log('Auto-play failed:', error)
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current && project.type === 'video') {
      videoRef.current.pause()
      setIsPlaying(false)
      // Reset to beginning for next hover
      // videoRef.current.currentTime = 0
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      <div 
        className="project-card bg-white rounded-2xl overflow-hidden relative group cursor-pointer h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Video Content */}
        {project.type === 'video' ? (
          <div className="video-container h-full relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              onEnded={handleVideoEnded}
              poster={project.thumbnail}
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Controls Overlay */}
            <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered && !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handleVideoToggle}
                  className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                >
                  {isPlaying ? (
                    <Pause size={24} className="text-white" />
                  ) : (
                    <Play size={24} className="text-white ml-1" />
                  )}
                </button>
              </div>
            </div>

            Content Overlay
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm mb-2">
                {project.category}
              </span>
              <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
              <p className="text-white/90 text-sm">{project.description}</p>
            </div>

            {/* Play indicator */}
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play size={12} className="text-white ml-0.5" />
              </div>
            </div>
          </div>
        ) : (
          /* Regular Project Card */
          <div className="p-6 h-full relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
            
            {/* Image if provided */}
            {project.image && (
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/60 group-hover:bg-white/40 transition-colors"></div>
              </div>
            )}

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
              
              <div className="flex justify-end">
                <ArrowRight className="text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard