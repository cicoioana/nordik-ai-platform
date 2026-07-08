import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import DeerLogo from '../components/DeerLogo'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nordik-peach/20 via-nordik-pink/10 to-nordik-lavender/20 blur-3xl -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-nordik-orange/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-nordik-purple/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-nordik-navy leading-tight">
              {t('hero.headline')}
            </h1>
            <p className="text-lg md:text-xl text-nordik-navy/70 leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>
          </div>

          <p className="text-base text-nordik-navy/60 leading-relaxed max-w-lg">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="btn-primary text-lg px-10 py-4">
              {t('hero.startFree')}
            </button>
            <button className="btn-secondary text-lg px-10 py-4">
              {t('hero.meetNordik')}
            </button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-2 pt-8 border-t border-white/20">
            <p className="text-sm text-nordik-navy/60">
              <span className="font-semibold">{t('hero.phone')}:</span> +45 52 72 16 53
            </p>
            <p className="text-sm text-nordik-navy/60">
              <span className="font-semibold">{t('hero.location')}:</span> Fredericia, Denmark
            </p>
          </div>
        </motion.div>

        {/* Right - Animated Deer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-full min-h-96 flex items-center justify-center"
        >
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-nordik-orange rounded-full opacity-40"
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}

          {/* Main Deer */}
          <div className="relative z-10">
            <DeerLogo size="large" animate />
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-nordik-orange/20 via-nordik-pink/20 to-nordik-purple/20 opacity-60" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero