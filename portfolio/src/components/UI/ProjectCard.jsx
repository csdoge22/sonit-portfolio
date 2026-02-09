import { motion } from 'framer-motion';

import TechTag from './TechTag';

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-glass-border bg-[rgba(25,27,60,0.7)] p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-secondary"
    >
      <div className="absolute left-0 top-0 h-1 w-full scale-x-0 transform bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100" />

      <h3 className="mb-4 break-words font-space-grotesk text-2xl font-bold text-primary transition-colors group-hover:text-text-primary">
        {title}
      </h3>

      <p className="mb-6 flex-grow break-words leading-relaxed text-text-secondary">
        {description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}
      </div>

      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link mt-auto inline-flex items-center gap-2 font-medium text-primary"
        whileHover={{ x: 5 }}
      >
        View Project →
        <span className="transition-transform group-hover/link:translate-x-1">
          ↗
        </span>
      </motion.a>
    </motion.div>
  );
}
