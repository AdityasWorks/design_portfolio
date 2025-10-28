import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import l8hero from "../../assets/images/l8hero.png";
import liquor from "../../assets/images/liquor.png";
import messedup from "../../assets/images/messedup.png";
import roll1 from "../../assets/images/roll1.png";
import t2 from "../../assets/images/t2.png";

const categories = [
    {
        id: "motion",
        name: "MOTION DESIGN",
        image: messedup,
        type: "video",
        videoUrl: "/videos/asv.mp4",
        videoUrlWebm: "/videos/webm/asv.webm",
    },
    {
        id: "projects",
        name: "PROJECTS",
        image: l8hero,
        type: "video",
        videoUrl: "/videos/loop8.mp4",
        videoUrlWebm: "/videos/webm/loop8.webm",
    },
    {
        id: "3d",
        name: "3D",
        image: roll1,
        type: "video",
        videoUrl: "/videos/Rolloff.mp4",
        videoUrlWebm: "/videos/webm/Rolloff.webm",
    },
    {
        id: "posters",
        name: "GRAPHIC DESIGN",
        image: liquor,
        type: "video",
        videoUrl: "/videos/pos.mp4",
        videoUrlWebm: "/videos/webm/pos.webm",
    },
    {
        id: "merch",
        name: "MERCH",
        image: t2,
        type: "video",
        videoUrl: "/videos/Tshirts.mp4",
        videoUrlWebm: "/videos/webm/Tshirts.webm",
    },
];

const ProjectsPage = ({ onBackClick }) => {
    const videoRefs = useRef({});
    const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
    const [isExiting, setIsExiting] = useState(false);

    const handleBackClick = () => {
        setIsExiting(true);
        // Delay the actual navigation until animation completes
        setTimeout(() => {
            onBackClick();
        }, 300); // Match this with your animation duration
    };

    // Handle video playback on hover
    useEffect(() => {
        // Find categories with video type
        categories.forEach(category => {
            if (category.type === "video" && videoRefs.current[category.id]) {
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
        <motion.div
            className="bg-stone-950 min-h-screen w-full flex flex-col overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Back button */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <button
                    onClick={handleBackClick}
                    className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                    <ArrowLeft size={18} />
                    <span className="text-sm hidden sm:inline">Back</span>
                </button>
            </div>

            {/* Category grid - responsive layout */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 min-h-screen lg:h-screen w-full gap-1.5 p-1.5 pt-16 sm:pt-1.5"
                animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? 20 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {/* Top row - 2 categories each taking 50% width on desktop, full width on mobile */}
                {categories.slice(0, 2).map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isExiting ? 0 : 1 }}
                        transition={{ duration: 0.5, delay: isExiting ? 0 : index * 0.1 }}
                        className="sm:col-span-1 lg:col-span-3 relative h-64 sm:h-80 lg:h-full cursor-pointer overflow-hidden group"
                        onMouseEnter={() => setHoveredCategoryId(category.id)}
                        onMouseLeave={() => setHoveredCategoryId(null)}
                        onClick={() => window.open("https://www.behance.net/0xaadi", "_blank", "noopener,noreferrer")}
                    >
                        {/* Video or Image Content */}
                        {category.type === "video" ? (
                            <>
                                {/* Thumbnail overlay - visible when not hovering this category */}
                                <div
                                    className={`absolute inset-0 bg-cover bg-center transition-all duration-500 z-[1] transform group-hover:scale-105 group-hover:translate-y-[-5%] ${
                                        hoveredCategoryId === category.id ? "opacity-0" : "opacity-100"
                                    }`}
                                    style={{
                                        backgroundImage: `url(${category.image})`,
                                    }}
                                ></div>

                                <video
                                    ref={el => (videoRefs.current[category.id] = el)}
                                    className="absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 transform group-hover:scale-98"
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                >
                                    {/* Add WebM source first for better browser compatibility */}
                                    {category.videoUrlWebm && <source src={category.videoUrlWebm} type="video/webm" />}
                                    {category.videoUrl && <source src={category.videoUrl} type="video/mp4" />}
                                </video>

                                {/* overlay that disappears on hover */}
                                <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/10 z-[2]"></div>
                            </>
                        ) : (
                            <>
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 transform group-hover:scale-105 group-hover:translate-y-[-5%]"
                                    style={{
                                        backgroundImage: `url(${category.image})`,
                                    }}
                                ></div>
                                {/* overlay that disappears on hover */}
                                <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/10"></div>
                            </>
                        )}

                        {/* Black footer that appears on hover */}
                        <div className="absolute bottom-0 left-0 w-full bg-stone-950 bg-opacity-0 transform translate-y-full transition-all duration-300 group-hover:bg-opacity-80 group-hover:translate-y-0 h-14 sm:h-16 flex items-center pl-4 sm:pl-5 z-10">
                            <h3
                                style={{ fontFamily: "georama" }}
                                className="text-white text-xl sm:text-2xl lg:text-3xl font-black tracking-wider"
                            >
                                {category.name}
                            </h3>
                        </div>
                    </motion.div>
                ))}

                {/* Bottom row - 3 categories each taking 33.33% width on desktop, full width on mobile */}
                {categories.slice(2, 5).map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isExiting ? 0 : 1 }}
                        transition={{ duration: 0.5, delay: isExiting ? 0 : (index + 2) * 0.1 }}
                        className="lg:col-span-2 relative h-64 sm:h-80 lg:h-full cursor-pointer overflow-hidden group"
                        onMouseEnter={() => setHoveredCategoryId(category.id)}
                        onMouseLeave={() => setHoveredCategoryId(null)}
                        onClick={() => window.open("https://www.behance.net/0xaadi", "_blank", "noopener,noreferrer")}
                    >
                        {/* Video or Image Content */}
                        {category.type === "video" ? (
                            <>
                                {/* Thumbnail overlay - visible when not hovering this category */}
                                <div
                                    className={`absolute inset-0 bg-cover bg-center transition-all duration-500 z-[1] transform group-hover:scale-105 group-hover:translate-y-[-5%] ${
                                        hoveredCategoryId === category.id ? "opacity-0" : "opacity-100"
                                    }`}
                                    style={{
                                        backgroundImage: `url(${category.image})`,
                                    }}
                                ></div>

                                <video
                                    ref={el => (videoRefs.current[category.id] = el)}
                                    className="absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 transform group-hover:scale-98"
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                >
                                    {category.videoUrlWebm && <source src={category.videoUrlWebm} type="video/webm" />}
                                    {category.videoUrl && <source src={category.videoUrl} type="video/mp4" />}
                                </video>

                                {/* overlay that disappears on hover */}
                                <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/10 z-[2]"></div>
                            </>
                        ) : (
                            <>
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 transform group-hover:scale-105 group-hover:translate-y-[-5%]"
                                    style={{
                                        backgroundImage: `url(${category.image})`,
                                    }}
                                ></div>
                                {/* overlay that disappears on hover */}
                                <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/10"></div>
                            </>
                        )}

                        {/* Black footer that appears on hover */}
                        <div className="absolute bottom-0 left-0 w-full bg-stone-950 bg-opacity-0 transform translate-y-full transition-all duration-300 group-hover:bg-opacity-80 group-hover:translate-y-0 h-14 sm:h-16 flex items-center pl-4 sm:pl-5 z-10">
                            <h3
                                style={{ fontFamily: "georama" }}
                                className="text-white text-xl sm:text-2xl lg:text-3xl font-black tracking-wider"
                            >
                                {category.name}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ProjectsPage;
