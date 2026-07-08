import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ReviewCard from '../components/ReviewCard'

const Reviews = () => {
  const { t } = useTranslation()

  const reviews = [
    { quote: t('reviews.review1'), author: t('reviews.author1'), country: t('reviews.country1') },
    { quote: t('reviews.review2'), author: t('reviews.author2'), country: t('reviews.country2') },
    { quote: t('reviews.review3'), author: t('reviews.author3'), country: t('reviews.country3') },
    { quote: t('reviews.review4'), author: t('reviews.author4'), country: t('reviews.country4') },
    { quote: t('reviews.review5'), author: t('reviews.author5'), country: t('reviews.country5') },
    { quote: t('reviews.review6'), author: t('reviews.author6'), country: t('reviews.country6') },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-nordik-cream via-nordik-lavender/10 to-nordik-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-lg text-nordik-navy/70 max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <ReviewCard
              key={idx}
              quote={review.quote}
              author={review.author}
              country={review.country}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews