import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const Examples = () => {
  const { t } = useTranslation()

  const examples = [
    { input: 'examples.ex1Input', output: 'examples.ex1Output' },
    { input: 'examples.ex2Input', output: 'examples.ex2Output' },
    { input: 'examples.ex3Input', output: 'examples.ex3Output' },
    { input: 'examples.ex4Input', output: 'examples.ex4Output' },
    { input: 'examples.ex5Input', output: 'examples.ex5Output' },
    { input: 'examples.ex6Input', output: 'examples.ex6Output' },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-transparent via-nordik-lavender/10 to-transparent">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('examples.title')}
          </h2>
          <p className="text-lg text-nordik-navy/70 max-w-2xl mx-auto">
            {t('examples.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-card p-6 rounded-2xl group cursor-pointer hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <p className="text-sm text-nordik-navy/60 mb-2">You say:</p>
                  <p className="font-semibold text-nordik-navy leading-relaxed">
                    "{t(example.input)}"
                  </p>
                </div>
                <ChevronRight className="text-nordik-orange flex-shrink-0 mt-1 group-hover:translate-x-2 transition-transform" size={20} />
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="text-sm text-nordik-navy/60 mb-2">Nordik opens:</p>
                <p className="font-bold gradient-text">{t(example.output)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Examples