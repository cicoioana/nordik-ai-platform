import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Problem = () => {
  const { t } = useTranslation()

  const appCategories = [
    'problem.fitness',
    'problem.calorie',
    'problem.pregnancy',
    'problem.cv',
    'problem.photoEditor',
    'problem.calendar',
    'problem.meditation',
    'problem.business',
    'problem.writing',
    'problem.travel',
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-nordik-orange/5 via-nordik-pink/5 to-nordik-purple/5">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('problem.title')}
          </h2>
          <p className="text-lg text-nordik-navy/70">
            {t('problem.subtitle')}
          </p>
        </motion.div>

        {/* App categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {appCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-4 rounded-xl text-center hover:shadow-glow transition-all duration-300"
            >
              <p className="font-semibold text-nordik-navy text-sm">{t(category)}</p>
            </motion.div>
          ))}
        </div>

        {/* Arrow down */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mb-12"
        >
          <div className="text-4xl text-nordik-orange">↓</div>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="inline-block glass-card px-12 py-8 rounded-3xl">
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="text-nordik-navy">Everything becomes</span>
              <br />
              <span className="gradient-text text-4xl md:text-5xl">NORDIK</span>
            </h3>
            <p className="text-nordik-navy/70 mt-4 text-lg">
              {t('problem.solution')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem