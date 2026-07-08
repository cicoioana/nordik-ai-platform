import React from 'react'
import { motion } from 'framer-motion'

interface DeerLogoProps {
  size?: 'small' | 'medium' | 'large'
  animate?: boolean
}

const DeerLogo: React.FC<DeerLogoProps> = ({ size = 'medium', animate = true }) => {
  const sizes = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-24 h-24',
  }

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={`${sizes[size]} fill-none`}
      animate={animate ? { y: [0, -8, 0] } : {}}
      transition={animate ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : {}}
    >
      {/* Body */}
      <ellipse cx="50" cy="60" rx="20" ry="25" fill="url(#bodyGradient)" />

      {/* Head */}
      <circle cx="50" cy="30" r="18" fill="url(#headGradient)" />

      {/* Left Ear */}
      <ellipse cx="38" cy="12" rx="6" ry="12" fill="url(#earGradient)" />

      {/* Right Ear */}
      <ellipse cx="62" cy="12" rx="6" ry="12" fill="url(#earGradient)" />

      {/* Left Antler */}
      <path
        d="M 38 8 Q 35 0 35 -5"
        stroke="url(#antlerGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right Antler */}
      <path
        d="M 62 8 Q 65 0 65 -5"
        stroke="url(#antlerGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Left Eye */}
      <circle cx="43" cy="26" r="3" fill="#1A2332" />
      <circle cx="44" cy="25" r="1" fill="white" />

      {/* Right Eye */}
      <circle cx="57" cy="26" r="3" fill="#1A2332" />
      <circle cx="58" cy="25" r="1" fill="white" />

      {/* Nose */}
      <circle cx="50" cy="35" r="2.5" fill="#1A2332" />

      {/* Mouth - cute smile */}
      <path
        d="M 50 35 Q 47 38 45 37 M 50 35 Q 53 38 55 37"
        stroke="#1A2332"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Front left leg */}
      <rect x="40" y="80" width="4" height="18" fill="url(#legGradient)" rx="2" />

      {/* Front right leg */}
      <rect x="56" y="80" width="4" height="18" fill="url(#legGradient)" rx="2" />

      {/* Back left leg hint */}
      <rect x="36" y="82" width="3" height="16" fill="url(#legGradient)" rx="2" opacity="0.6" />

      {/* Back right leg hint */}
      <rect x="61" y="82" width="3" height="16" fill="url(#legGradient)" rx="2" opacity="0.6" />

      {/* Tail */}
      <path
        d="M 35 65 Q 25 68 20 75"
        stroke="url(#tailGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD4B4" />
          <stop offset="100%" stopColor="#FFB84D" />
        </linearGradient>
        <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE8CC" />
          <stop offset="100%" stopColor="#FFD4B4" />
        </linearGradient>
        <linearGradient id="earGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB6D9" />
          <stop offset="100%" stopColor="#FFD4B4" />
        </linearGradient>
        <linearGradient id="antlerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8D5F2" />
          <stop offset="100%" stopColor="#C9B1E4" />
        </linearGradient>
        <linearGradient id="legGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD4B4" />
          <stop offset="100%" stopColor="#FFB84D" />
        </linearGradient>
        <linearGradient id="tailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB6D9" />
          <stop offset="100%" stopColor="#FFD4B4" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

export default DeerLogo