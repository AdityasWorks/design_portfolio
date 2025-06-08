import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, className = "", delay = 0, videoLoop = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [fallbackToImage, setFallbackToImage] = useState(false);
  const videoRef = useRef(null);
  
  // Initialize video playback when component mounts
  useEffect(() => {
    if (videoRef.current && project.type === 'video') {
      // Add event listeners for video loading events
      const handleVideoLoaded = () => {
        setVideoLoaded(true);
        if (!videoLoop) {
          attemptPlayVideo();
        }
      };
      
      const handleVideoError = () => {
        console.error(`Error loading video: ${project.videoUrl}`);
        setVideoError(true);
        setFallbackToImage(true);
      };
      
      videoRef.current.addEventListener('loadeddata', handleVideoLoaded);
      videoRef.current.addEventListener('error', handleVideoError);
      
      // Force reload the video element
      videoRef.current.load();
      
      // Cleanup function
      return () => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.removeEventListener('loadeddata', handleVideoLoaded);
          videoRef.current.removeEventListener('error', handleVideoError);
        }
      };
    }
  }, [project.type, project.videoUrl, videoLoop]);
  
  const attemptPlayVideo = () => {
    if (videoRef.current) {
      // Try with both play() promise pattern and the older approach
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started playing successfully
          })
          .catch(error => {
            console.log('Auto-play was blocked, waiting for user interaction:', error);
            // If autoplay is blocked, we'll rely on user interaction to play
          });
      }
    }
  };
  
  // Handle video playback on hover
  useEffect(() => {
    if (videoRef.current && project.type === 'video' && !videoError && videoLoaded) {
      if (videoLoop) {
        // Always play looping videos
        attemptPlayVideo();
      } else if (isHovered) {
        // When hovered show the thumbnail image instead
        videoRef.current.pause();
      } else {
        // When NOT hovered, play the video
        attemptPlayVideo();
      }
    }
  }, [isHovered, project.type, videoLoop, videoLoaded, videoError]);
  
  // Add click handler to help with mobile and autoplay restrictions
  const handleCardClick = () => {
    if (project.type === 'video' && videoRef.current && !videoError) {
      // Toggle play/pause on click for videos
      if (videoRef.current.paused) {
        attemptPlayVideo();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <motion.div
      className={`project-card bg-black rounded-xl overflow-hidden relative cursor-pointer ${className}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Video content */}
      {project.type === 'video' && (
        <>
          {/* Thumbnail overlay - always visible until video loads or on error */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 z-[1] ${
              isHovered || fallbackToImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${project.thumbnail})` }}
          />
          
          {!fallbackToImage && (
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                videoLoaded && !isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              muted
              playsInline
              loop
              preload="auto"
              poster={project.thumbnail}
            >
              {/* Multiple source formats for better compatibility */}
              {project.videoUrlWebm && <source src={project.videoUrlWebm} type="video/webm" />}
              <source src={project.videoUrl} type="video/mp4" />
              {/* Fallback text */}
              Your browser does not support HTML5 video.
            </video>
          )}
        </>
      )}
      
      {project.type === 'case-study-with-thumbnail' && (
        <>
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 z-[1] ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            style={{ backgroundImage: `url(${project.image})` }}
          />
          
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
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent p-4 sm:p-5 flex flex-col justify-end">
        {project.category && (
          <span className="text-white/100 text-xs uppercase tracking-wider mb-1">
            {project.category}
          </span>
        )}
        
        {project.title && (
          <h3 className="text-white/90 text-base sm:text-lg font-bold mb-1">
            {project.title}
          </h3>
        )}
        
        {project.description && (
          <p className="text-white/80 text-xs sm:text-sm">
            {project.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;