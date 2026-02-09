import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={id} ref={ref} className={`px-4 py-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl"
      >
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-center font-space-grotesk text-5xl font-bold text-transparent md:text-6xl"
          >
            {title}
            <span className="absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-primary to-secondary"></span>
          </motion.h2>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl break-words text-center text-xl leading-relaxed text-text-secondary md:text-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        <div className="mt-8">{children}</div>
      </motion.div>
    </section>
  );
}
