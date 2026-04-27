import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Intern Software Developer & Web Designer',
    company: 'A2Z Expert (Pvt) Ltd',
    period: 'Sep 2024 – Mar 2025',
    location: 'Kinniya',
    highlights: [
      'Developed and maintained consumer goods service platforms.',
      'Collaborated with clients for quarterly updates and renewals.',
      'Trained junior team members and supported onboarding.',
    ],
  },
  {
    role: 'Software Developer & Quality Assurance',
    company: 'Servand Pvt Ltd',
    period: 'May 2025 – Jan 2026',
    location: 'Kinniya',
    highlights: [
      'Developed and tested software solutions for corporate clients.',
      'Visited clients to present new products and feature updates.',
      'Built and maintained strong client relationships.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Work Experience
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          My professional journey in software development and QA engineering.
        </p>
      </div>

      <div className="relative border-l-2 border-neutral-100 dark:border-neutral-800 ml-4 md:ml-8 pl-8 space-y-12">
        {experiences.map((exp) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-neutral-950" />

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="px-4 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg font-bold text-sm flex items-center gap-2">
                <Calendar size={14} />
                {exp.period}
              </div>
              <div className="text-md font-bold text-neutral-500 dark:text-neutral-400">
                📍 {exp.location}
              </div>
              <h3 className="text-xl font-bold">
                {exp.role} @{' '}
                <span className="text-blue-600">{exp.company}</span>
              </h3>
            </div>

            <ul className="space-y-3">
              {exp.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-neutral-600 dark:text-neutral-400 flex gap-3"
                >
                  <span className="text-blue-600 mt-1.5">•</span>
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Experience', value: '1+ Year' },
          { label: 'Projects', value: '30+' },
          { label: 'Clients', value: '25+' },
          { label: 'Skills', value: '10+' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-blue-600">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}