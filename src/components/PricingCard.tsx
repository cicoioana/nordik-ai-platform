import React from 'react'
import { motion } from 'framer-motion'

interface PricingCardProps {
  title: string
  price: number
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  highlighted = false,
  cta,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
        highlighted
          ? 'bg-gradient-to-br from-nordik-orange to-nordik-peach shadow-2xl scale-105'
          : 'glass-card'
      }`}
    >
      {highlighted && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-nordik-purple/20 text-nordik-navy px-4 py-1 rounded-full text-xs font-bold">
          Most Popular
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-nordik-navy' : 'text-nordik-navy'}`}>
          {title}
        </h3>
        <p className={`text-sm mb-6 ${highlighted ? 'text-nordik-navy/70' : 'text-nordik-navy/60'}`}>
          {description}
        </p>

        <div className="mb-8">
          <span className={`text-4xl font-bold ${highlighted ? 'text-nordik-navy' : 'gradient-text'}`}>
            €{price}
          </span>
          <span className={`text-sm ml-2 ${highlighted ? 'text-nordik-navy/70' : 'text-nordik-navy/60'}`}>
            {period}
          </span>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature, idx) => (
            <li key={idx} className={`flex items-start gap-3 text-sm ${
              highlighted ? 'text-nordik-navy' : 'text-nordik-navy/70'
            }`}>
              <span className="text-nordik-orange font-bold mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
            highlighted
              ? 'bg-nordik-navy text-white hover:bg-nordik-navy/80 hover:shadow-lg'
              : 'btn-primary'
          }`}
        >
          {cta}
        </button>
      </div>
    </motion.div>
  )
}

export default PricingCard