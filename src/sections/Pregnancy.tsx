import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Pregnancy = () => {
  const { t } = useTranslation()

  const sections = [
    { title: 'pregnancy.planning', features: ['pregnancy.tryingToConceive', 'pregnancy.ovulation', 'pregnancy.cycleTracking'] },
    { title: 'pregnancy.pregnant', features: ['pregnancy.weekByWeek', 'pregnancy.babyGrowth', 'pregnancy.hospitalBag'] },
    { title: 'pregnancy.labor', features: ['pregnancy.kickCounter', 'pregnancy.contractionTimer', 'pregnancy.laborSupport'] },
    { title: 'pregnancy.postpartum', features: ['pregnancy.babySleep', 'pregnancy.feedingSupport', 'pregnancy.milestones'] },
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-nordik-pink/10 via-nordik-lavender/10 to-nordik-purple/10">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('pregnancy.title')}
          </h2>
          <p className="text-lg text-nordik-navy/70 max-w-2xl mx-auto">
            {t('pregnancy.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300"
            >
              <h4 className="font-bold text-nordik-navy mb-4 text-lg">{t(section.title)}</h4>
              <ul className="space-y-2">
                {section.features.map((feat, fidx) => (
                  <li key={fidx} className="text-sm text-nordik-navy/70 flex items-start gap-2">
                    <span className="text-nordik-orange font-bold mt-0.5">•</span>
                    <span>{t(feat)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pregnancy