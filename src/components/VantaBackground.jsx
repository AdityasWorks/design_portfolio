import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import noiseTexture from "../assets/noise.jpg";

const VantaBackground = ({ children, darkMode }) => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const myRef = useRef(null);

    // Track window size changes
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Calculate zoom based on screen width
    const getZoomLevel = width => {
        if (width < 1024) return 0.3; 
        if (width < 640) return 0.3; 
        return 0.5; // Large Desktop
    };

    useEffect(() => {
        if (!vantaEffect && myRef.current) {
            // Small delay to ensure container dimensions are set
            setTimeout(() => {
                setVantaEffect(
                    FOG({
                        el: myRef.current,
                        THREE: THREE,
                        minHeight: 200.0,
                        minWidth: 200.0,
                        highlightColor: darkMode ? 0xc46b37 : 0xf34010,
                        midtoneColor: darkMode ? 0xb980f2 : 0xfbfbfb,
                        lowlightColor: darkMode ? 0x8eedd2 : 0xfbfbfb,
                        baseColor: darkMode ? 0x1f1d57 : 0x8892e3,
                        blurFactor: 1,
                        speed: 1.5,
                        zoom: getZoomLevel(windowWidth), // Set initial zoom based on screen width
                        height: myRef.current.offsetHeight,
                        width: myRef.current.offsetWidth,
                        pixelRatio: 1, // Consistent pixel ratio to prevent zoom issues
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                    })
                );
            }, 50);
        }

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
                setVantaEffect(null);
            }
        };
    }, []);

    // Update colors and zoom when darkMode or window size changes
    useEffect(() => {
        if (vantaEffect) {
            vantaEffect.setOptions({
                highlightColor: darkMode ? 0xc46b37 : 0xf76d48,
                midtoneColor: darkMode ? 0xc387ff : 0xfbfbfb,
                lowlightColor: darkMode ? 0x8eedd2 : 0xfbfbfb,
                baseColor: darkMode ? 0x192961 : 0x88b2e3,
                zoom: getZoomLevel(windowWidth), // Update zoom based on current window width
                pixelRatio: 1, // Keep consistent
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
                zoom: getZoomLevel(window.innerWidth), // Update zoom during resize
                pixelRatio: 1,
            });
            vantaEffect.resize();
        });

        observer.observe(myRef.current);

        return () => observer.disconnect();
    }, [vantaEffect]);

    return (
        <div
            className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] mx-auto relative"
            style={{
                borderRadius: windowWidth < 1024 ? "15px" : "30px",
                overflow: "hidden",
            }}
        >
            <div
                className="w-full md:pb-[33%] lg:pb-[44%]"
                style={{ minHeight: windowWidth < 640 ? "460px" : "220px" }}
            >
                <div
                    ref={myRef}
                    className="absolute inset-0 overflow-hidden"
                    style={{
                        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                        transform: "translateZ(0)",
                        willChange: "transform",
                    }}
                >
                    <div
                        className="absolute inset-0 pointer-events-none z-[1]"
                        style={{
                            backgroundImage: `url(${noiseTexture})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "cover",
                            opacity: 0.05,
                            mixBlendMode: "overlay",
                        }}
                    />
                </div>

                <div className="absolute inset-0 z-[2] py-8 sm:py-10 md:py-12 px-3 sm:px-4 flex justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default VantaBackground;
