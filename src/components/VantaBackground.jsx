import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

const VantaBackground = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE: THREE,
          // mouseControls: true,
          // touchControls: true,
          // gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xf34010,
          midtoneColor: 0xFBFBFB,
          lowlightColor: 0xFBFBFB,
          baseColor: 0x8892e3,
          blurFactor: 1,
          speed: 3.5,
          zoom: 0.5,
        })
      );
    }
    

  }, [vantaEffect]);

  return (
    <div className= "flex justify-center items-center"
      ref={myRef} 
      style={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "1430px", 
        height: "632px",
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
        opacity: 0.05,
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

export default VantaBackground;