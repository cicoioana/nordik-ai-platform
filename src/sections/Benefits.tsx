import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const Benefits = () => {
  const { t } = useTranslation()

  const benefits = [
    'benefits.money',
    'benefits.time',
    'benefits.stress',
    'benefits.subscription',
    'benefits.connected',
    'benefits.friendlyAi',
    'benefits.easyToUse',
    'benefits.noMenus',
    'benefits.everydayLife',
    'benefits.availability',
    'benefits.likeFriend',
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-nordik-lavender/20 to-nordik-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('benefits.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-4 p-6 glass-card rounded-2xl hover:shadow-glow transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-nordik-orange to-nordik-peach">
                  <Check className="text-white" size={20} />
                </div>
              </div>
              <div>
                <p className="font-semibold text-nordik-navy">{t(benefit)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits