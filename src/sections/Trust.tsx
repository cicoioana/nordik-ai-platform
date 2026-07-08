import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Lock, Globe, Heart, Zap, Check } from 'lucide-react'

const Trust = () => {
  const { t } = useTranslation()

  const trustPoints = [
    { icon: Globe, label: 'trust.builtInEurope' },
    { icon: Lock, label: 'trust.privacyFirst' },
    { icon: Heart, label: 'trust.humanCentered' },
    { icon: Zap, label: 'trust.secure' },
    { icon: Check, label: 'trust.transparent' },
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-nordik-lavender/10 via-nordik-purple/5 to-nordik-pink/10">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('trust.title')}
          </h2>
        </motion.div>

        {/* Trust points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center hover:shadow-glow transition-all duration-300"
              >
                <Icon className="text-nordik-orange mx-auto mb-3" size={32} />
                <p className="font-semibold text-nordik-navy text-sm">{t(point.label)}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Location info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center glass-card p-8 rounded-2xl mb-12"
        >
          <p className="text-nordik-navy/70 text-lg mb-2">{t('trust.madeIn')}</p>
          <p className="text-3xl font-bold gradient-text">Fredericia, Denmark 🇩🇰</p>
        </motion.div>

        {/* Trustpilot section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card p-12 rounded-3xl text-center"
        >
          <div className="text-5xl mb-4">⭐</div>
          <h3 className="text-2xl font-bold text-nordik-navy mb-3">{t('trust.trustpilot')}</h3>
          <p className="text-nordik-navy/70 text-lg mb-6">
            {t('trust.trustpilotText')}
          </p>
          <button className="btn-primary">{t('trust.beFirst')}</button>
        </motion.div>
      </div>
    </section>
  )
}

export default Trust