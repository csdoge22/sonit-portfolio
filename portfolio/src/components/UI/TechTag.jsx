import { motion } from 'framer-motion'

export default function TechTag({ children }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="bg-primary/15 text-primary px-3 py-1 rounded-full text-sm font-medium whitespace-normal break-words max-w-full"
    >
      {children}
    </motion.span>
  )
}