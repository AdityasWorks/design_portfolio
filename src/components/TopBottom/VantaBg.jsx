import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import noiseTexture from "../../assets/noise.jpg";

const VantaBg = ({ children, darkMode }) => {
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
                    minHeight: 200.0,
                    minWidth: 200.0,
                    highlightColor: darkMode ? 0xc46b37 : 0xf34010,
                    midtoneColor: darkMode ? 0xb980f2 : 0xfbfbfb,
                    lowlightColor: darkMode ? 0x8eedd2 : 0xfbfbfb,
                    baseColor: darkMode ? 0x1f1d57 : 0x8892e3,
                    blurFactor: 1,
                    speed: 5,
                    zoom: 0.4,
                })
            );
        }

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
                setVantaEffect(null);
            }
        };
    }, []); // Empty dependency - only run on mount/unmount

    // Update colors when darkMode changes
    useEffect(() => {
        if (vantaEffect) {
            vantaEffect.setOptions({
                highlightColor: darkMode ? 0xc46b37 : 0xf34010,
                midtoneColor: darkMode ? 0xb980f2 : 0xfbfbfb,
                lowlightColor: darkMode ? 0x8eedd2 : 0xfbfbfb,
                baseColor: darkMode ? 0x1f1d57 : 0x8892e3,
            });
        }
    }, [darkMode, vantaEffect]);

    return (
        <div
            className="flex justify-center items-center"
            ref={myRef}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: "70%",
                height: "15px",
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
                    backgroundImage: `url(${noiseTexture})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "cover",
                    opacity: 0.05,
                    mixBlendMode: "overlay",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
        </div>
    );
};

export default VantaBg;
