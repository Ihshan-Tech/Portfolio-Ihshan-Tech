import { motion } from "motion/react";
import { Monitor, Smartphone, Palette } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Building fast, accessible, and responsive websites using modern frameworks like React and Next.js.",
    icon: <Monitor size={24} />,
  },
  {
    title: "Mobile App Development",
    description:
      "Creating high-performance mobile applications for iOS and Android using React Native.",
    icon: <Smartphone size={24} />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful user interfaces that provide exceptional user experiences.",
    icon: <Palette size={24} />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 max-w-7xl mx-auto border-t border-neutral-100 dark:border-neutral-800"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          Specialized services to help your business grow.
        </p>
      </div>

      {/* GRID LAYOUT (no carousel) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 hover:bg-blue-500/5 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {service.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">{service.title}</h3>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}