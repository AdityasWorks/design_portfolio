import React, { useState, useEffect, useRef } from 'react';
import THREE from '../utils/three'
import FOG from 'vanta/dist/vanta.fog.min';

const VantaBackground = ({ children, darkMode }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE: THREE,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: darkMode ? 0xc46b37 : 0xf34010,
          midtoneColor: darkMode ? 0xb980f2 : 0xFBFBFB ,
          lowlightColor: darkMode ? 0x8eedd2 : 0xFBFBFB,
          baseColor: darkMode ? 0x1f1d57 : 0x8892e3 ,
          blurFactor: 1,
          speed: 1.5,
          zoom: 0.6,
        })
      );
    }
    
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  // Update colors when darkMode changes
  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.setOptions({
          highlightColor: darkMode ? 0xc46b37 : 0xf76d48,
          midtoneColor: darkMode ? 0xb980f2 : 0xFBFBFB ,
          lowlightColor: darkMode ? 0x8eedd2 : 0xbecddd,
          baseColor: darkMode ? 0x1f1d57 : 0x88b2e3 ,
      });
    }
  }, [darkMode, vantaEffect]);

  // Force reinitialization on window resize for better responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (vantaEffect) {
        vantaEffect.resize();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [vantaEffect]);

  return (
    <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[1430px] mx-auto"
      ref={myRef} 
      style={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "auto",
        aspectRatio: "2.26/1", // Maintains the original aspect ratio (1430/632)
        minHeight: "250px",
        borderRadius: "45px",
        overflow: "hidden",
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/noise.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          opacity: 0.05,
          mixBlendMode: "overlay",
          pointerEvents: "none",
          zIndex: 1
        }}
      />
      <div className="relative z-[2] py-12 px-4 w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default VantaBackground;