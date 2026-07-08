import React from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import DeerLogo from './DeerLogo'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { t, i18n } = useTranslation()

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ro', name: 'Română' },
    { code: 'da', name: 'Dansk' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'it', name: 'Italiano' },
    { code: 'nl', name: 'Nederlands' },
    { code: 'no', name: 'Norsk' },
    { code: 'sv', name: 'Svenska' },
  ]

  const navItems = [
    { label: 'nav.home', href: '#home' },
    { label: 'nav.modules', href: '#modules' },
    { label: 'nav.business', href: '#business' },
    { label: 'nav.wellbeing', href: '#wellbeing' },
    { label: 'nav.pricing', href: '#pricing' },
    { label: 'nav.faq', href: '#faq' },
    { label: 'nav.contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
          >
            <a href="#" className="flex items-center gap-2">
              <DeerLogo size="small" />
              <span className="text-2xl font-bold gradient-text hidden sm:inline">Nordik</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-nordik-navy hover:text-nordik-orange font-medium transition-colors"
              >
                {t(item.label)}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="px-3 py-2 rounded-lg bg-nordik-peach/20 border border-nordik-peach text-nordik-navy text-sm cursor-pointer hover:bg-nordik-peach/30 transition-colors"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button className="btn-secondary text-sm">{t('nav.login')}</button>
            <button className="btn-primary text-sm">{t('nav.startFree')}</button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="px-2 py-1 rounded text-sm bg-nordik-peach/20 border border-nordik-peach text-nordik-navy cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name.split(' ')[0]}
                </option>
              ))}
            </select>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-nordik-navy"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-nordik-navy hover:bg-nordik-peach/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t(item.label)}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <button className="btn-secondary text-sm flex-1">{t('nav.login')}</button>
              <button className="btn-primary text-sm flex-1">{t('nav.startFree')}</button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar