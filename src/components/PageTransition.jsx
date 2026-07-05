import { motion } from 'framer-motion'

// Envolve cada página com uma transição suave de entrada/saída.
export default function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pt-16"
    >
      {children}
    </motion.main>
  )
}
