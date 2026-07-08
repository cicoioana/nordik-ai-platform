import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Examples from './sections/Examples'
import Modules from './sections/Modules'
import Problem from './sections/Problem'
import Benefits from './sections/Benefits'
import BusinessSection from './sections/BusinessSection'
import MentalWellbeing from './sections/MentalWellbeing'
import Pregnancy from './sections/Pregnancy'
import Nutrition from './sections/Nutrition'
import Career from './sections/Career'
import PhotoStudio from './sections/PhotoStudio'
import Reviews from './sections/Reviews'
import Trust from './sections/Trust'
import Pricing from './sections/Pricing'
import Contact from './sections/Contact'

function App() {
  const { i18n } = useTranslation()

  return (
    <div className="min-h-screen bg-nordik-cream text-nordik-navy">
      <Navbar />
      <main>
        <Hero />
        <Examples />
        <Modules />
        <Problem />
        <Benefits />
        <Nutrition />
        <Career />
        <PhotoStudio />
        <Pregnancy />
        <MentalWellbeing />
        <BusinessSection />
        <Reviews />
        <Trust />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App