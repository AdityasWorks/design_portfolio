import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

const VantaBg = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xffc300,
          midtoneColor: 0xff1f00,
          lowlightColor: 0x2d00ff,
          baseColor: 0xffebeb,
          // highlightColor: 0xFBFBFB,
          // midtoneColor: 0xdb3a34,
          // lowlightColor: 0xC4D9FF,
          // baseColor: 0xC5BAFF,
          blurFactor: 0.850,
          speed: 5,
          zoom: 0.7,
        })
      );
    }
    
    // Clean up effect on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className= "flex justify-center items-center"
      ref={myRef} 
      style={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "70%", 
        height: "25px",
        borderRadius: "45px",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
    <div 
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/noise.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        opacity: 0.12,
        mixBlendMode: "overlay",
        pointerEvents: "none",
        zIndex: 1
      }}
    />
      <div style={{ position: "relative", zIndex: 1,}}>
        {children}
      </div>
    </div>
  );
};

export default VantaBg;