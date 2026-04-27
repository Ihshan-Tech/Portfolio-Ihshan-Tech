import { motion } from 'motion/react';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Firebase'] },
  { category: 'Other', items: ['AI Agents', 'Automation (n8n)'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-neutral-500 dark:text-neutral-400">The tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-blue-50 dark:bg-green-500/10 border border-blue-100 dark:border-neutral-800 hover:border-blue-500/50 transition-colors group"
          >
            <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              {skill.category}
            </h3>

            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
