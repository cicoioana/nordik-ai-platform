import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const BusinessSection = () => {
  const { t } = useTranslation()

  const benefits = [
    'business.saveMoney',
    'business.fastBookings',
    'business.support24',
    'business.neverMiss',
    'business.automatedEmails',
    'business.marketing',
    'business.leadGeneration',
    'business.chatbot',
    'business.bestColleague',
    'business.neverSleeps',
  ]

  const industries = [
    'business.restaurants',
    'business.beauty',
    'business.clinics',
    'business.hotels',
    'business.cleaning',
    'business.realEstate',
    'business.gyms',
    'business.ecommerce',
    'business.smallBusiness',
  ]

  return (
    <section id="business" className="section-padding bg-gradient-to-b from-nordik-orange/5 via-nordik-peach/5 to-nordik-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('business.title')}
          </h2>
          <p className="text-lg text-nordik-navy/70 max-w-2xl mx-auto">
            {t('business.subtitle')}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-nordik-navy mb-8 text-center">{t('business.benefits')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-4 rounded-xl text-center hover:shadow-glow transition-all duration-300"
              >
                <p className="font-semibold text-nordik-navy text-sm">{t(benefit)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-2xl font-bold text-nordik-navy mb-8 text-center">{t('business.industries')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-8 rounded-2xl text-center hover:shadow-glow transition-all duration-300"
              >
                <p className="font-bold text-nordik-navy">{t(industry)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessSection