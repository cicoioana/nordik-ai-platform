import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import DeerLogo from './DeerLogo'

const Footer = () => {
  const { t } = useTranslation()

  const footerLinks = [
    { label: 'footer.privacy', href: '#' },
    { label: 'footer.terms', href: '#' },
    { label: 'footer.cookies', href: '#' },
    { label: 'footer.support', href: '#' },
    { label: 'footer.blog', href: '#' },
    { label: 'footer.careers', href: '#' },
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gradient-to-b from-nordik-cream via-nordik-lavender/20 to-nordik-navy/5 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-4">
            <div className="flex items-center gap-2">
              <DeerLogo size="small" />
              <span className="text-xl font-bold gradient-text">Nordik</span>
            </div>
            <p className="text-nordik-navy/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="space-y-3">
            <h4 className="font-bold text-nordik-navy">{t('footer.company')}</h4>
            {footerLinks.slice(0, 3).map((link) => (
              <a key={link.href} href={link.href} className="text-nordik-navy/70 hover:text-nordik-orange text-sm transition-colors block">
                {t(link.label)}
              </a>
            ))}
          </motion.div>

          {/* Resources */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-3">
            <h4 className="font-bold text-nordik-navy">{t('footer.resources')}</h4>
            {footerLinks.slice(3).map((link) => (
              <a key={link.href} href={link.href} className="text-nordik-navy/70 hover:text-nordik-orange text-sm transition-colors block">
                {t(link.label)}
              </a>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-3">
            <h4 className="font-bold text-nordik-navy">{t('footer.contact')}</h4>
            <a href="tel:+4552721653" className="flex items-center gap-2 text-nordik-navy/70 hover:text-nordik-orange text-sm transition-colors">
              <Phone size={16} />
              <span>+45 52 72 16 53</span>
            </a>
            <a href="mailto:contact@nordikaifriend.com" className="flex items-center gap-2 text-nordik-navy/70 hover:text-nordik-orange text-sm transition-colors">
              <Mail size={16} />
              <span>contact@nordikaifriend.com</span>
            </a>
            <div className="flex items-center gap-2 text-nordik-navy/70 text-sm">
              <MapPin size={16} />
              <span>Fredericia, Denmark</span>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8 mb-8" />

        {/* Social and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-nordik-navy/60 text-sm">
            © 2026 Nordik. {t('footer.allRights')}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.2 }}
                  className="text-nordik-navy/70 hover:text-nordik-orange transition-colors"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer