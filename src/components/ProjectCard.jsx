import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, className = "", delay = 0 }) => {
  const [isPlaying, setIsPlaying] = useState(true) // Start with playing true
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  // Initial autoplay for videos when component mounts
  useEffect(() => {
    if (videoRef.current && project.type === 'video') {
      // Small delay to ensure video loads properly
      const timer = setTimeout(() => {
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log('Video autoplay failed:', error);
          });
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [project.type]);

  // Handle hover-based pause/play (reversed behavior)
  useEffect(() => {
    if (!videoRef.current || project.type !== 'video') return;

    if (isHovered) {
      // Pause video when hovered
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // Play video when not hovered
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Video play failed:', error);
        });
    }
  }, [isHovered, project.type]);

  const handleVideoToggle = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log('Video play failed:', error);
        });
      }
    }
  };

  // Rest of your component remains unchanged
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {/* All your existing JSX remains exactly the same */}
      <div 
        ref={containerRef}
        className="project-card bg-white rounded-2xl overflow-hidden relative group cursor-pointer h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
              poster={project.thumbnail}
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Thumbnail overlay that shows when video is paused */}
            {!isPlaying && project.thumbnail && (
              <div 
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${project.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            )}
            
            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm mb-2">
                {project.category}
              </span>
              <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
              <p className="text-white/90 text-sm">{project.description}</p>
            </div>
          </div>
        ) : (
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
                <div className="absolute inset-0"></div>
              </div>
            )}

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white text-sm">{project.description}</p>
              </div>
              
              <div className="flex justify-end">
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard