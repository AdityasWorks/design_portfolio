import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min';

const VantaBackground = ({ children, darkMode }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const myRef = useRef(null);
  
  // Track window size changes
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      // Small delay to ensure container dimensions are set
      setTimeout(() => {
        setVantaEffect(
          FOG({
            el: myRef.current,
            THREE: THREE,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: darkMode ? 0xc46b37 : 0xf34010,
            midtoneColor: darkMode ? 0xb980f2 : 0xFBFBFB,
            lowlightColor: darkMode ? 0x8eedd2 : 0xFBFBFB,
            baseColor: darkMode ? 0x1f1d57 : 0x8892e3,
            blurFactor: 1,
            speed: 1.5,
            zoom: 0.6,
            height: myRef.current.offsetHeight * window.devicePixelRatio,
            width: myRef.current.offsetWidth * window.devicePixelRatio,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
          })
        );
      }, 50);
    }
    
    // return () => {
    //   if (vantaEffect) vantaEffect.destroy();
    // };
  }, []);

  // Update colors when darkMode changes
  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.setOptions({
        highlightColor: darkMode ? 0xc46b37 : 0xf76d48,
        midtoneColor: darkMode ? 0xc387ff : 0xFBFBFB,
        lowlightColor: darkMode ? 0x8eedd2 : 0xbecddd,
        baseColor: darkMode ? 0x192961 : 0x88b2e3,
        zoom: 0.6,
      });
    }
  }, [darkMode, vantaEffect, windowWidth]);

  // Enhanced resize handler with debouncing
useEffect(() => {
  if (!vantaEffect || !myRef.current) return;

  const observer = new ResizeObserver(() => {
    vantaEffect.setOptions({
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight,
    });
    vantaEffect.resize();
  });

  observer.observe(myRef.current);

  return () => observer.disconnect();
}, [vantaEffect]);


  return (
    <div className="w-full max-w-[75%]  mx-auto relative"
      style={{ 
        borderRadius: windowWidth < 640 ? "25px" : "45px",
        overflow: "hidden"
      }}
    >
      {/* Aspect ratio container - maintains proportions */}
      <div 
        className="w-full md:pb-[33%] lg:pb-[44%]" 
        style={{ minHeight: windowWidth < 640 ? "160px" : "180px" }}
      >
        {/* Vanta container - positioned absolutely within the aspect ratio container */}
        <div 
          ref={myRef}
          className="absolute inset-0 overflow-hidden"
          style={{
            WebkitMaskImage: "-webkit-radial-gradient(white, black)", // Safari fix for border radius
            transform: "translateZ(0)", // Forces GPU rendering
            willChange: "transform" // Hint for browser optimization
          }}
        >
          {/* Noise overlay */}
          <div 
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              backgroundImage: "url('/noise.jpg')",
              backgroundRepeat: "repeat",
              backgroundSize: "cover",
              opacity: 0.05,
              mixBlendMode: "overlay"
            }}
          />
        </div>
        
        {/* Content container */}
        <div className="absolute inset-0 z-[2] py-8 sm:py-10 md:py-12 px-3 sm:px-4 flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default VantaBackground;