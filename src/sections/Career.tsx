import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Career = () => {
  const { t } = useTranslation()

  const careerFeatures = [
    'career.cvBuilder',
    'career.coverLetter',
    'career.jobAssistant',
    'career.interviewPractice',
    'career.linkedinBio',
    'career.advice',
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-nordik-cream via-nordik-lavender/10 to-nordik-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('career.title')}
          </h2>
          <p className="text-lg text-nordik-navy/70 max-w-2xl mx-auto">
            {t('career.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 rounded-2xl text-center hover:shadow-glow transition-all duration-300"
            >
              <div className="text-4xl mb-4">💼</div>
              <p className="font-bold text-nordik-navy">{t(feature)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Career