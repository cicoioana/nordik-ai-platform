import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Nutrition = () => {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-gradient-to-r from-nordik-orange/5 via-nordik-pink/5 to-nordik-peach/5">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
                {t('nutrition.title')}
              </h2>
              <p className="text-lg text-nordik-navy/70">
                {t('nutrition.subtitle')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-6 rounded-2xl">
                <p className="text-nordik-navy/80 italic mb-3">
                  "{t('nutrition.example')}"
                </p>
                <p className="text-sm text-nordik-navy/60">
                  {t('nutrition.response')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['nutrition.mealPlans', 'nutrition.shoppingLists', 'nutrition.proteinGoals', 'nutrition.tracking'].map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-4 rounded-xl"
                >
                  <p className="font-semibold text-nordik-navy text-sm">{t(feat)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-96 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-nordik-orange/20 via-nordik-peach/20 to-nordik-pink/20 flex items-center justify-center">
              <div className="text-6xl">🥗</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Nutrition