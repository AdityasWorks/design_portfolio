import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/TopBottom/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/sections/InfoSection';
import Footer from './components/TopBottom/Footer';
import ProjectsPage from './components/projects/ProjectsPage';
import ProjectsGrid from './components/projects/ProjectsGrid';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // If you want to ensure minimum display time for loading screen
  useEffect(() => {
    const preloadScript = document.createElement('script');
    preloadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    preloadScript.async = true;
    document.head.appendChild(preloadScript);
    // Ensure loading screen shows for at least 2 seconds
    const minLoadingTime = setTimeout(() => {
      // Check if resources are loaded
      if (document.readyState === 'complete') {
        setIsLoading(false);
      } else {
        // If page isn't fully loaded, wait for it
        window.addEventListener('load', () => setIsLoading(false));
      }
    }, 2000);
    
    return () => {
      clearTimeout(minLoadingTime);
      window.removeEventListener('load', () => setIsLoading(false));
    };
  }, []);
  
  return (
    <BrowserRouter>
      <div className="App">
        <AnimatePresence>
          {isLoading ? (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          ) : (
            <>
              {!showProjects ? (
                <>
                  <Navbar />
                  <main>
                    <Hero onViewWork={() => setShowProjects(true)} />
                    
                    <section id="info" className="py-20">
                      <ProjectsGrid/>
                    </section>
                    
                    <section id="info" className="py-20">
                      <InfoSection />
                    </section>

                  </main>
                  <Footer />
                </>
              ) : (
                <ProjectsPage onBackClick={() => setShowProjects(false)} />
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;