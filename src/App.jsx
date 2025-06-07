import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/TopBottom/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/sections/InfoSection';
import Footer from './components/TopBottom/Footer';
import ProjectsPage from './components/projects/ProjectsPage';
import ProjectsGrid from './components/projects/ProjectsGrid';
import LoadingScreen from './components/LoadingScreen';

// Create a wrapper component that can access the theme context
const AppContent = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { darkMode } = useTheme();
  
  useEffect(() => {
    const preloadScript = document.createElement('script');
    preloadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    preloadScript.async = true;
    document.head.appendChild(preloadScript);
    
    const minLoadingTime = setTimeout(() => {
      if (document.readyState === 'complete') {
        setIsLoading(false);
      } else {
        window.addEventListener('load', () => setIsLoading(false));
      }
    }, 2000);
    
    return () => {
      clearTimeout(minLoadingTime);
      window.removeEventListener('load', () => setIsLoading(false));
    };
  }, []);
  
  return (
    <div className={`App transition-colors duration-300 ${darkMode ? 'bg-darkbg' : 'bg-lightbg'}`}>
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
                  
                  <section id="projects" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-darkbg' : 'bg-lightbg'}`}>
                    <ProjectsGrid/>
                  </section>
                  
                  <section id="info" className={`py-10 transition-colors duration-300 ${darkMode ? 'bg-darkbg' : 'bg-lightbg'}`}>
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
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;