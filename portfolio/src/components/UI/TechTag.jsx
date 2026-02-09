import { motion } from 'framer-motion';

export default function TechTag({ children }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="inline-block max-w-full break-words rounded-full bg-primary/15 px-3 py-1 text-sm font-medium text-primary"
    >
      {children}
    </motion.span>
  );
}
