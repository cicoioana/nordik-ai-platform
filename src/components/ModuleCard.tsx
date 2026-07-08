import React from 'react'
import { motion } from 'framer-motion'

interface ModuleCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

const ModuleCard: React.FC<ModuleCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card p-6 rounded-2xl h-full flex flex-col items-center text-center hover:shadow-glow transition-all duration-300"
    >
      <div className="mb-4 text-5xl">{icon}</div>
      <h3 className="text-lg font-bold text-nordik-navy mb-2">{title}</h3>
      <p className="text-sm text-nordik-navy/70 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default ModuleCard