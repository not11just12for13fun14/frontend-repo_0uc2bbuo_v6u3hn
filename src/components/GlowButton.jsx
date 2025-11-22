import React from 'react'
import { motion } from 'framer-motion'

export default function GlowButton({ children, onClick, variant = 'primary', className = '', as = 'button', href }) {
  const Comp = as === 'a' ? motion.a : motion.button
  const base =
    'relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-300'

  const variants = {
    primary:
      'text-white bg-gradient-to-b from-[#15A9FF] to-[#009DFF] shadow-[0_0_0_0_rgba(0,157,255,0.0)] hover:shadow-[0_0_30px_10px_rgba(0,157,255,0.25)]',
    ghost:
      'text-cyan-300/90 bg-white/0 border border-cyan-400/30 hover:bg-cyan-400/10 hover:border-cyan-400/60',
    dark:
      'text-white bg-[#0E1F3F] border border-white/10 hover:border-cyan-400/40'
  }

  return (
    <Comp
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <div className="absolute inset-0 rounded-xl pointer-events-none bg-[radial-gradient(circle_at_30%_-20%,rgba(21,169,255,0.35),transparent_40%),radial-gradient(circle_at_100%_120%,rgba(0,157,255,0.35),transparent_30%)]" />
      <span className="relative z-10">{children}</span>
    </Comp>
  )
}
