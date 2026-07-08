import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

const MentalWellbeing = () => {
  const { t } = useTranslation()

  const features = [
    'wellbeing.moodTracker',
    'wellbeing.journal',
    'wellbeing.reflection',
    'wellbeing.breathing',
    'wellbeing.grounding',
    'wellbeing.stressSupport',
    'wellbeing.anxietySupport',
    'wellbeing.burnout',
    'wellbeing.sleep',
  ]

  return (
    <section id="wellbeing" className="section-padding bg-gradient-to-b from-nordik-lavender/20 via-nordik-purple/10 to-nordik-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('wellbeing.title')}
          </h2>
          <p className="text-lg text-nordik-navy/70 max-w-2xl mx-auto">
            {t('wellbeing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300"
            >
              <p className="font-semibold text-nordik-navy">{t(feature)}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-nordik-pink/10 border-2 border-nordik-pink/30 rounded-2xl p-8"
        >
          <div className="flex gap-4">
            <AlertCircle className="text-nordik-pink flex-shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-nordik-navy mb-2">{t('wellbeing.disclaimer')}</h4>
              <p className="text-nordik-navy/70 text-sm leading-relaxed">
                {t('wellbeing.disclaimerText')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MentalWellbeing