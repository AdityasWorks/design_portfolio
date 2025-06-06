import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const ProjectsPage = ({ onBackClick }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const videoRefs = useRef({});
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
  
  const categories = [
    {
      id: 'motion',
      name: 'MOTION DESIGN',
      image: '/images/messedup.png',
      type: 'video',
      videoUrl: '/videos/asv.mp4', 
    },
    {
      id: 'posters',
      name: 'POSTERS',
      image: '/images/liquor.png',
      type: 'video',
      videoUrl: '/videos/Posters.mp4', 
    },
    {
      id: 'projects',
      name: 'PROJECTS',
      image: '/images/layer8.png',

    },
    {
      id: '3d',
      name: '3D',
      image: '/images/roll1.png',
      type: 'video',
      videoUrl: '/videos/Rolloff.mp4', 
    },
    {
      id: 'merch',
      name: 'MERCH',
      image: '/images/t2.png',
      type: 'video',
      videoUrl: '/videos/Tshirts.mp4', 
    }
  ];

  const handleCategoryClick = (categoryId) => {
    console.log(`Selected category: ${categoryId}`);
    // Here you would handle navigation to the specific category
    setActiveCategory(categoryId);
  };

  // Handle video playback on hover
  useEffect(() => {
    // Find categories with video type
    categories.forEach(category => {
      if (category.type === 'video' && videoRefs.current[category.id]) {
        if (hoveredCategoryId === category.id) {
          // Play video when hovering over this category
          videoRefs.current[category.id].play().catch(error => {
            console.log(`Video play failed for ${category.id}:`, error);
          });
        } else {
          // Pause and reset video when not hovering
          videoRefs.current[category.id].pause();
          videoRefs.current[category.id].currentTime = 0;
        }
      }
    });
  }, [hoveredCategoryId]);


  return (
    <div className="bg-stone-950 h-screen w-full flex flex-col">
      {/* Back button */}
      <div className="absolute top-6 left-6 z-10 cursor-pointer">
        <button 
          onClick={onBackClick}
          className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <ArrowLeft size={18} />
        </button>
      </div>

      {/* Category panels */}
      <div className="flex flex-grow h-full w-full gap-1.5 p-1.5">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex-1 h-full cursor-pointer overflow-hidden group"
            onClick={() => handleCategoryClick(category.id)}
            onMouseEnter={() => setHoveredCategoryId(category.id)}
            onMouseLeave={() => setHoveredCategoryId(null)}
          >
            {/* Video or Image Content */}
            {category.type === 'video' ? (
              <>
                {/* Thumbnail overlay - visible when not hovering this category */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-500 z-[1] transform group-hover:scale-105 group-hover:translate-y-[-5%] ${hoveredCategoryId === category.id ? 'opacity-0' : 'opacity-100'}`}
                  style={{
                    backgroundImage: `url(${category.image})`,
                  }}
                ></div>
                
                <video
                  ref={el => videoRefs.current[category.id] = el}
                  className="absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 transform group-hover:scale-98"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={category.videoUrl} type="video/mp4" />
                </video>
                
                {/* Grayscale overlay that disappears on hover */}
                <div className="absolute inset-0 bg-black/45 transition-all duration-500 group-hover:backdrop-grayscale-0 group-hover:bg-black/10 z-[2]"></div>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 transform group-hover:scale-105 group-hover:translate-y-[-5%]"
                  style={{
                    backgroundImage: `url(${category.image})`,
                  }}
                ></div>
                {/* Grayscale overlay that disappears on hover */}
                <div className="absolute inset-0 bg-black/45 transition-all duration-500 group-hover:backdrop-grayscale-0 group-hover:bg-black/10"></div>
              </>
            )}
            
            {/* Black footer that appears on hover */}
            <div className="absolute bottom-0 left-0 w-full bg-stone-950 bg-opacity-0 transform translate-y-full transition-all duration-300 group-hover:bg-opacity-80 group-hover:translate-y-0 h-16 flex items-center pl-5 z-10">
              <h3 style={{fontFamily:"georama"}} className="text-white text-3xl font-black tracking-wider">
                {category.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;