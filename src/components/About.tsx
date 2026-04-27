import { motion } from 'motion/react';
import { Target, Coffee } from 'lucide-react';
import profileIMG from '../assets/Me.jpeg';
import Resume from '../assets/Resume.pdf';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative group"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center p-4">

            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img
                src={profileIMG}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          <div className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-800 hidden md:block">
            <div className="text-3xl font-bold text-blue-600">1+</div>
            <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Years Exp.</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I'm a dedicated Software Developer with a passion for building scalable and user-friendly systems. Over the past year, I've worked on a variety of projects ranging from POS systems to AI-driven automation workflows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4">
                <Target size={20} />
              </div>
              <h3 className="font-bold mb-1">Agile Mindset</h3>
              <p className="text-sm text-neutral-500">Experienced in fast-paced development environments and agile methodologies.</p>
            </div>

            <div className="p-4 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 mb-4">
                <Coffee size={20} />
              </div>
              <h3 className="font-bold mb-1">Problem Solver</h3>
              <p className="text-sm text-neutral-500">I enjoy breaking down complex problems and turning them into simple solutions.</p>
            </div>
          </div>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I specialize in full-stack development, with a strong focus on modern UI/UX design. I'm always eager to learn new technologies and apply them to solve business challenges.
          </p>

          <a
            href={Resume}
            download
            className="inline-block px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-bold hover:shadow-lg transition-all"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
