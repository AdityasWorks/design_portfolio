import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const ResumeSection = () => {
  const skills = [
    { category: "Design", items: ["Product Design", "UX/UI Design", "Adobe After Effects", "Adobe Photoshop", "Adobe Illustrator", "Figma", "Blender", "Unreal Engine"] },
    { category: "Development", items: ["React.js", "JavaScript", "Python", "Node.js", "FastAPI", "MongoDB", "MySQL", "AWS"] },
    { category: "Other", items: ["Project Management", "Team Leadership", "Video Editing", "3D Modeling", "Blockchain"] }
  ];

  const education = [
    {
      institution: "Bennett University (Times of India Group)",
      degree: "B.Tech in Computer Science",
      date: "Sept 2022 – Sept 2026",
      details: "CGPA: 8.8/10 (3rd Year)"
    }
  ];

  const leadership = [
    {
      role: "Minister of Branding",
      organization: "Student Cabinet, School of CSE and Technology",
      date: "Aug 2023 – June 2024",
      details: "Led a 45-member team to organize large-scale tech events for 8000+ students, managing branding, digital assets, and outreach."
    },
    {
      role: "Head of Design",
      organization: "Bennett Undergraduate Research Society",
      date: "Sept 2023 – June 2024",
      details: "Led a 5-member team to design research promotions, boosting engagement and visual clarity across student and faculty presentations."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <motion.h2 
            className="text-3xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Experience
          </motion.h2>
          
          <motion.a 
            href="/files/Aditya_Yadav_Resume.pdf" 
            target="_blank"
            className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Download size={16} />
            Download PDF
          </motion.a>
        </div>
        
        {/* Skills Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-medium mb-4">Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h4 className="font-medium mb-3">{skillGroup.category}</h4>
                <ul className="space-y-1">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-gray-700">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Education Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-medium mb-4">Education</h3>
          {education.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">{item.institution}</h4>
                <span className="text-gray-600">{item.date}</span>
              </div>
              <p className="text-gray-800">{item.degree}</p>
              <p className="text-gray-700">{item.details}</p>
            </div>
          ))}
        </motion.div>
        
        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl font-medium mb-4">Leadership Experience</h3>
          {leadership.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">{item.role}</h4>
                <span className="text-gray-600">{item.date}</span>
              </div>
              <p className="text-gray-800">{item.organization}</p>
              <p className="text-gray-700">{item.details}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeSection;