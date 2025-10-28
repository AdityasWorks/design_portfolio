import { motion } from "framer-motion";
import thumb2k22 from "../../assets/images/2k22thumb.jpg";
import city2 from "../../assets/images/city2.png";
import l8hero from "../../assets/images/l8hero.png";
import liquor from "../../assets/images/liquor.png";
import { useTheme } from "../../context/ThemeContext";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
    const { darkMode } = useTheme();

    const projects = [
        {
            id: 3,
            category: "Layer8",
            type: "video",
            videoUrl: "/videos/loop8.mp4",
            videoUrlWebm: "/videos/webm/loop8.webm",
            thumbnail: l8hero,
            externalLink: "https://www.behance.net/0xaadi",
        },
        {
            id: 2,
            type: "poster",
            image: liquor,
            category: "Graphic Design",
            externalLink: "https://www.behance.net/0xaadi",
        },
        {
            id: 1,
            description: "CitySync",
            type: "video",
            videoUrl: "/videos/citysync.mp4",
            videoUrlWebm: "/videos/webm/citysync.webm",
            thumbnail: city2,
            externalLink: "https://www.behance.net/0xaadi",
        },
        {
            id: 4,
            type: "video",
            videoUrl: "/videos/2k22.mp4",
            videoUrlWebm: "/videos/webm/2k22.webm",
            thumbnail: thumb2k22,
            category: "Motion Design",
            externalLink: "https://www.behance.net/gallery/228177887/Motion-Design-and-VFX",
        },
    ];

    // Function to open links in a new tab
    const handleProjectClick = project => {
        if (project.externalLink) {
            window.open(project.externalLink, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div className="container m-auto px-4 sm:px-6">
            <motion.h2
                className={`flex justify-center text-2xl sm:text-3xl font-medium mb-6 pt-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                featured work
            </motion.h2>

            <div className="grid grid-cols-12 gap-2 sm:gap-3 md:gap-2 w-full sm:w-[90%] md:w-[80%] lg:w-[75%] mx-auto">
                {/* First row */}
                {/* Layer8 */}
                <motion.div
                    className="col-span-12 lg:col-span-8 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative rounded-xl overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleProjectClick(projects[0])}
                >
                    <ProjectCard project={projects[0]} className="h-full" delay={0.1} darkMode={darkMode} />
                </motion.div>

                {/* Poster */}
                <motion.div
                    className="col-span-12 lg:col-span-4 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative rounded-xl overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onClick={() => handleProjectClick(projects[1])}
                >
                    <ProjectCard project={projects[1]} className="h-full" delay={0} darkMode={darkMode} />
                </motion.div>

                {/* Second row */}
                {/* CitySync */}
                <motion.div
                    className="col-span-12 md:col-span-6 h-[200px] sm:h-[250px] md:h-[300px] relative rounded-xl overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onClick={() => handleProjectClick(projects[2])}
                >
                    <ProjectCard
                        project={projects[2]}
                        className="h-full"
                        delay={0}
                        videoLoop={true}
                        darkMode={darkMode}
                    />
                </motion.div>

                {/* Motion Design */}
                <motion.div
                    className="col-span-12 md:col-span-6 h-[200px] sm:h-[250px] md:h-[300px] relative rounded-xl overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    onClick={() => handleProjectClick(projects[3])}
                >
                    <ProjectCard project={projects[3]} className="h-full" delay={0} darkMode={darkMode} />
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectsGrid;
