import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Who-Pick-POS System',
    description: 'A comprehensive Point of Sale system designed for streamlined business operations with inventory management and sales tracking.',
    tech: ['React', 'Node.js', 'Firebase', 'PouchDB'],
    github: '',
    link: '#',
  },
  {
    title: 'Who-Pick-Storefront',
    description: 'An e-commerce platform for selling products, managing orders, and tracking inventory.',
    tech: ['React', 'Node.js', 'Firebase', 'PouchDB'],
    github: '',
    link: '#',
  },
  {
    title: 'Family Expense Tracker',
    description: 'A cross-platform app (Web & Mobile) to manage family finances, track daily expenses, and visualize spending habits.',
    tech: ['React', 'Node.js', 'Tailwind'],
    github: '',
    link: '#',
  },
  {
    title: 'Vehicle Service Center Management System',
    description: 'Management system for vehicle service centers, handling appointments, service history, and billing.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
    github: 'https://github.com/Ihshan-Tech',
    link: '#',
  },
  {
    title: 'GYM Management System',
    description: 'Management system for gyms, handling members, classes, and payments.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
    github: '',
    link: '#',
  },
  {
    title: 'Online Birth Certificate System',
    description: 'System for issuing birth certificates online.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
    github: 'https://github.com/Ihshan-Tech',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-neutral-500 dark:text-neutral-400">Projects that demonstrate my technical capability.</p>
          </div>
          <a href="https://github.com/Ihshan-Tech" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:underline">
            View All GitHub <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-100 dark:border-neutral-800 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center relative overflow-hidden">
                <Code2 size={64} className="text-blue-500/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors" />
              </div>
              
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-bold rounded-lg uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-blue-600 transition-colors">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-blue-600 transition-colors">
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
