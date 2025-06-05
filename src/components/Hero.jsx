import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import ProjectCard from './ProjectCard'

const Hero = () => {
  // Your projects with video support
  const projects = [
    {
      id: 1,
      title: "AdGenAI Platform",
      category: "Product Design",
      description: "AI-powered ad creation platform with automated workflows",
      type: "project",
      gradient: "from-purple-400 to-pink-400",
      // image: "/path/to/your/adgenai-screenshot.jpg" // Add when ready
    },
    {
      id: 2,
      title: "Kinetic Typography",
      category: "Motion Design",
      description: "Dynamic text animations and motion graphics",
      type: "video",
      videoUrl: "/videos/1.mp4", // You'll add your video file here
      thumbnail: "/images/2.jpg" // Optional thumbnail
    },
    {
      id: 3,
      title: "Layer8 Security",
      category: "UX Design", 
      description: "Privacy-first AI interaction platform",
      type: "project",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      id: 4,
      title: "Brand Identity Work",
      category: "Visual Design",
      description: "Logo design and brand identity systems",
      type: "project",
      gradient: "from-green-400 to-blue-400"
    },
    {
      id: 5,
      title: "Motion Graphics Reel",
      category: "Animation",
      description: "Collection of motion graphics and animations",
      type: "video",
      videoUrl: "/videos/1.mp4"
    },
    {
      id: 6,
      title: "CitySync Platform",
      category: "Interface Design",
      description: "Civic engagement and governance platform",
      type: "project",
      gradient: "from-orange-400 to-red-400"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">

      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-semibold"
          >
            Aditya Yadav
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Work', 'Play', 'Info', 'Resume'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex space-x-4">
            {[
              { icon: Github, href: "https://github.com/AdityasWorks" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "mailto:heyaadi2@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Product Designer
              <br />
              <span className="gradient-text">& Developer</span>
            </motion.h1>
            
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
              className="flex justify-center space-x-4"
            >
              <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2">
                <span>View My Work</span>
                <ArrowRight size={18} />
              </button>
              <button className="border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                Download Resume
              </button>
            </motion.div>
          </div>

          {/* Project Grid with Video Support */}
          <div className="grid grid-cols-12 gap-6 max-w-6xl mx-auto">
            {/* Large featured project */}
            <ProjectCard 
              project={projects[0]}
              className="col-span-12 md:col-span-7 row-span-2"
              delay={0.6}
            />

            {/* Motion design video */}
            <ProjectCard 
              project={projects[1]}
              className="col-span-6 md:col-span-5"
              delay={0.8}
            />

            {/* UX Project */}
            <ProjectCard 
              project={projects[2]}
              className="col-span-6 md:col-span-5"
              delay={1.0}
            />

            {/* Additional projects */}
            <ProjectCard 
              project={projects[3]}
              className="col-span-6 md:col-span-4"
              delay={1.2}
            />

            <ProjectCard 
              project={projects[4]}
              className="col-span-6 md:col-span-4"
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