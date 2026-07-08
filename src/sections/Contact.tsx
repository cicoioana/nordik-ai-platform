import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-nordik-orange/5 via-nordik-pink/5 to-nordik-lavender/5">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-nordik-navy/70 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="glass-card p-8 rounded-2xl text-center hover:shadow-glow transition-all duration-300"
          >
            <Phone className="text-nordik-orange mx-auto mb-4" size={32} />
            <h4 className="font-bold text-nordik-navy mb-2">{t('contact.phone')}</h4>
            <a href="tel:+4552721653" className="text-nordik-orange hover:text-nordik-peach transition-colors">
              +45 52 72 16 53
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-2xl text-center hover:shadow-glow transition-all duration-300"
          >
            <Mail className="text-nordik-orange mx-auto mb-4" size={32} />
            <h4 className="font-bold text-nordik-navy mb-2">{t('contact.email')}</h4>
            <a href="mailto:contact@nordikaifriend.com" className="text-nordik-orange hover:text-nordik-peach transition-colors">
              contact@nordikaifriend.com
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-2xl text-center hover:shadow-glow transition-all duration-300"
          >
            <MapPin className="text-nordik-orange mx-auto mb-4" size={32} />
            <h4 className="font-bold text-nordik-navy mb-2">{t('contact.location')}</h4>
            <p className="text-nordik-navy/70">Fredericia, Denmark</p>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary text-lg px-12 py-4">
            {t('contact.bookDemo')}
          </button>
          <button className="btn-secondary text-lg px-12 py-4">
            {t('contact.contactNordik')}
          </button>
          <button className="btn-secondary text-lg px-12 py-4">
            {t('contact.startFree')}
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact