import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-600/5 -z-10 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 dark:bg-purple-600/5 -z-10 blur-3xl rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide uppercase"
        >
          Open to Opportunities
        </motion.span>
        
        <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Muhammadhu <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ihshan</span>
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-300">
          Software | Web Developer 
        </p>
        
        <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Building scalable web apps, AI-driven systems, and modern digital solutions that solve real-world problems.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/20"
          >
            View Projects <ArrowRight size={20} />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
          >
            Contact Me
          </motion.a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-neutral-400 dark:text-neutral-500">
          <a href="https://github.com/Ihshan-Tech" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-ihshan-a0445b342" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Linkedin size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
