import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const PhotoStudio = () => {
  const { t } = useTranslation()

  const features = [
    { icon: '✨', title: 'photo.enhancement' },
    { icon: '👤', title: 'photo.profiles' },
    { icon: '🎨', title: 'photo.background' },
    { icon: '📱', title: 'photo.social' },
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-nordik-pink/5 via-nordik-purple/5 to-nordik-lavender/5">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('photo.title')}
          </h2>
          <p className="text-lg text-nordik-navy/70 max-w-2xl mx-auto">
            {t('photo.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 rounded-2xl text-center hover:shadow-glow transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <p className="font-bold text-nordik-navy">{t(feature.title)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotoStudio