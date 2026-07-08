import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import PricingCard from '../components/PricingCard'

const Pricing = () => {
  const { t } = useTranslation()

  const pricingPlans = [
    {
      title: t('pricing.starter'),
      price: 19,
      period: t('pricing.perMonth'),
      description: t('pricing.starterDesc'),
      features: [
        t('pricing.aiChat'),
        t('pricing.dailyPlanner'),
        t('pricing.journal'),
        t('pricing.basicModules'),
      ],
      cta: t('pricing.startFree'),
    },
    {
      title: t('pricing.premium'),
      price: 49,
      period: t('pricing.perMonth'),
      description: t('pricing.premiumDesc'),
      features: [
        t('pricing.everythingStarter'),
        t('pricing.nutrition'),
        t('pricing.cvBuilder'),
        t('pricing.pregnancy'),
        t('pricing.photoStudio'),
        t('pricing.mentalWellbeing'),
        t('pricing.unlimitedAssistant'),
      ],
      highlighted: true,
      cta: t('pricing.getStarted'),
    },
    {
      title: t('pricing.business'),
      price: 199,
      period: t('pricing.perMonth'),
      description: t('pricing.businessDesc'),
      features: [
        t('pricing.websiteChatbot'),
        t('pricing.bookingAssistant'),
        t('pricing.customerSupport'),
        t('pricing.emailAutomation'),
        t('pricing.businessAi'),
        t('pricing.prioritySetup'),
      ],
      cta: t('pricing.contactSales'),
    },
  ]

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-nordik-lavender/10 to-nordik-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-nordik-navy/70 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <PricingCard
              key={idx}
              {...plan}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing