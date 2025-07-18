import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const { darkMode } = useTheme();
  
  // Preload critical assets
  useEffect(() => {
    // Create an array of critical images/assets to preload
    const criticalAssets = [
      '/images/liquor.png',
      '/images/roll1.png',
      '/images/city/citysync.gif',
      '/images/city/logged.png',
      '/noise.jpg',
      '/videos/2k22.mp4',
      '/videos/loop8.mp4',
    ];
    
    let loadedCount = 0;
    
    // Preload all images
    criticalAssets.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        const percent = Math.floor((loadedCount / criticalAssets.length) * 70); // 70% of progress from assets
        setProgress(prev => Math.max(prev, percent));
        
        if (loadedCount === criticalAssets.length) {
          setAssetsLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === criticalAssets.length) {
          setAssetsLoaded(true);
        }
      };
    });
    
    // Safety timeout - ensure we continue even if some assets fail to load
    const safetyTimer = setTimeout(() => {
      setAssetsLoaded(true);
    }, 5000);
    
    return () => clearTimeout(safetyTimer);
  }, []);
  
  // Simulate remaining progress after assets are loaded
  useEffect(() => {
    if (!assetsLoaded && progress < 70) return;
    
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 1, 100));
      } else {
        // Give browser time to prepare rendering before transition
        setTimeout(() => {
          // Call Vanta initialization here if possible
          // If not possible, we'll initialize it early in the main App
          onComplete();
        }, 800);
      }
    }, 30);
    
    return () => clearTimeout(timer);
  }, [progress, assetsLoaded, onComplete]);

  return (
    <motion.div 
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center transition-colors duration-300 ${darkMode ? 'bg-darkbg' : 'bg-white'}`}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      
      <div className={`w-64 h-1 rounded-full overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <motion.div 
          className={`h-full ${darkMode ? 'bg-white' : 'bg-black'}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      
      {/* <motion.p 
        className={`mt-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {progress === 100 ? 'Welcome' : 'Loading...'}
      </motion.p> */}
    </motion.div>
  );
};

export default LoadingScreen;