import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-medium mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6 max-w-sm">
              I'm always open to discussing product design projects or partnership opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/AdityasWorks" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/AdityaYadav" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:heyaadi2@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end">
            <a href="mailto:heyaadi2@gmail.com" className="text-xl font-medium hover:underline">
              heyaadi2@gmail.com
            </a>
            <p className="text-gray-400 mt-2">Noida, India</p>
            <p className="text-gray-400 mt-8">© 2025 Aditya Yadav. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;