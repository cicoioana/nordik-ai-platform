import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface ReviewProps {
  quote: string
  author: string
  country: string
  delay?: number
}

const ReviewCard: React.FC<ReviewProps> = ({ quote, author, country, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 rounded-2xl"
    >
      <div className="flex items-start gap-3 mb-4">
        <Quote className="text-nordik-orange flex-shrink-0" size={20} />
      </div>
      <p className="text-nordik-navy/80 mb-4 leading-relaxed italic">"{quote}"</p>
      <div className="pt-4 border-t border-white/20">
        <p className="font-semibold text-nordik-navy">{author}</p>
        <p className="text-sm text-nordik-navy/60">{country}</p>
      </div>
    </motion.div>
  )
}

export default ReviewCard