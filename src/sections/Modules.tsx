import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ModuleCard from '../components/ModuleCard'
import {
  MessageCircle,
  Apple,
  UtensilsCrossed,
  Heart,
  Baby,
  Briefcase,
  FileText,
  Image,
  Users,
  Zap,
  Brain,
  Clock,
  BookOpen,
  Camera,
  TrendingUp,
  Mail,
  Globe,
} from 'lucide-react'

const Modules = () => {
  const { t } = useTranslation()

  const modules = [
    { icon: <MessageCircle />, title: t('modules.aiChat'), desc: t('modules.aiChatDesc') },
    { icon: <UtensilsCrossed />, title: t('modules.calorieTracker'), desc: t('modules.calorieTrackerDesc') },
    { icon: <Apple />, title: t('modules.mealPlanner'), desc: t('modules.mealPlannerDesc') },
    { icon: <Heart />, title: t('modules.pregnancy'), desc: t('modules.pregnancyDesc') },
    { icon: <Baby />, title: t('modules.babyCompanion'), desc: t('modules.babyCompanionDesc') },
    { icon: <Brain />, title: t('modules.mentalWellbeing'), desc: t('modules.mentalWellbeingDesc') },
    { icon: <FileText />, title: t('modules.cvBuilder'), desc: t('modules.cvBuilderDesc') },
    { icon: <Briefcase />, title: t('modules.careerCoach'), desc: t('modules.careerCoachDesc') },
    { icon: <Image />, title: t('modules.photoEditor'), desc: t('modules.photoEditorDesc') },
    { icon: <Clock />, title: t('modules.dailyPlanner'), desc: t('modules.dailyPlannerDesc') },
    { icon: <TrendingUp />, title: t('modules.businessAssistant'), desc: t('modules.businessAssistantDesc') },
    { icon: <Globe />, title: t('modules.travelPlanner'), desc: t('modules.travelPlannerDesc') },
  ]

  return (
    <section id="modules" className="section-padding bg-gradient-to-b from-nordik-lavender/10 to-nordik-pink/10">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nordik-navy mb-4">
            {t('modules.title')}
          </h2>
          <p className="text-lg text-nordik-navy/70 max-w-2xl mx-auto">
            {t('modules.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, idx) => (
            <ModuleCard
              key={idx}
              icon={module.icon}
              title={module.title}
              description={module.desc}
              delay={idx * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modules