import { motion } from 'framer-motion';

export default function SkillCategory({ title, skills }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="rounded-xl border border-glass-border bg-[rgba(25,27,60,0.7)] p-6 text-center transition-all duration-300 hover:border-glass-highlight hover:shadow-secondary"
    >
      <h3 className="relative mb-6 inline-block font-space-grotesk text-2xl font-bold text-secondary">
        {title}
        <span className="absolute bottom-0 left-1/2 h-1 w-12 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-primary to-secondary"></span>
      </h3>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(2, 238, 255, 0.1)',
            }}
            className="flex min-h-12 w-full items-center justify-center overflow-hidden rounded-lg border border-glass-border bg-[rgba(30,32,68,0.7)] px-3 py-2 text-center font-medium transition-all duration-200"
          >
            <span className="break-words text-sm leading-tight">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
