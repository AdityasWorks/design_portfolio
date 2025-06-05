import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import ProjectCard from './ProjectCard'
import VantaBackground from './VantaBackground'
import { image } from 'framer-motion/client'

const Hero = () => {
  // Your projects with video support
  const projects = [
    {
      id: 2,
      title: "Motion Graphics Showcase",
      category: "Motion Design",
      description: "Dynamic text animations and motion graphics with animation",
      type: "video",
      videoUrl: "/videos/1.mp4",
      thumbnail: "/images/2.jpg"
    },
    {
      id: 1,
      title: "AdGenAI Platform",
      category: "Product Design",
      description: "AI-powered ad creation platform with automated workflows",
      type: "project",
      gradient: "from-purple-400 to-pink-400",
      image: "/images/Liquor.png" // Using existing image from your workspace
    },
    {
      id: 3,
      title: "Layer8 Security",
      category: "UX Design", 
      description: "Privacy-first AI interaction platform",
      type: "project",
      gradient: "from-blue-400 to-cyan-400",
      image: "/images/6.png" // Using existing image
      
    },
    {
      id: 4,
      title: "Brand Identity Work",
      category: "Visual Design",
      description: "Logo design and brand identity systems",
      type: "project",
      gradient: "from-green-400 to-blue-400",
      image: "/images/tshirtdesign.png" // Using existing image
    },
    {
      id: 5,
      title: "Motion Graphics Reel",
      category: "Animation",
      description: "Collection of motion graphics and animations",
      type: "video",
      videoUrl: "/videos/1.mp4",
      thumbnail: "/images/2_2.jpg"
    },
    {
      id: 6,
      title: "CitySync Platform",
      category: "Interface Design",
      description: "Civic engagement and governance platform",
      type: "project",
      gradient: "from-orange-400 to-red-400",
      image: "/images/5.png" // Using existing image
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden pt-10">
      {/* Hero Content */}
      <div className="pt-10 pb-12 px-6">
        {/* Vanta Background */}
        <VantaBackground>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-xl font-bold mb-3 text-white">Aditya is Designer that has some Development knowledge</h2>
          </motion.div>
        </VantaBackground>
        <div className=" pt-12 max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-18">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            >
              I craft beautiful digital experiences with code, motion graphics, 
              and user-centered design thinking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a 
                href="#work" 
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="/RESUME_ADI.pdf"
                target="_blank" 
                className="border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors flex justify-center"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Project Grid with Video Support */}
          <div className="grid grid-cols-12 gap-6 w-[100%] mx-auto">
            {/* Large featured project */}
            <ProjectCard 
              project={projects[0]}
              className="col-span-12 md:col-span-7 row-span-2"
              delay={0.6}
            />

            {/* Rest of the project cards remain the same */}
            <ProjectCard 
              project={projects[1]}
              className="col-span-12 sm:col-span-6 md:col-span-5"
              delay={0.8}
            />
            
            <ProjectCard 
              project={projects[2]}
              className="col-span-12 sm:col-span-6 md:col-span-5"
              delay={1.0}
            />
            
            <ProjectCard 
              project={projects[3]}
              className="col-span-12 sm:col-span-6 md:col-span-4"
              delay={1.2}
            />
            
            <ProjectCard 
              project={projects[4]}
              className="col-span-12 sm:col-span-6 md:col-span-4"
              delay={1.4}
            />
            
            <ProjectCard 
              project={projects[5]}
              className="col-span-12 md:col-span-4"
              delay={1.6}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero