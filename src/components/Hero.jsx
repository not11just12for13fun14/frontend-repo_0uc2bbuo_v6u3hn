import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import GlowButton from './GlowButton'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/60 via-[#0A0A0F]/80 to-[#0A0A0F] pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
              >
                Buldozer Marketing
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="mt-4 text-xl md:text-2xl text-cyan-200/90"
              >
                Growth meets intelligence
              </motion.p>
              <div className="mt-8 flex items-center gap-4">
                <GlowButton as="a" href="#contact">Hire Us</GlowButton>
                <GlowButton as="a" href="/work" variant="ghost">See Our Work</GlowButton>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { label: 'Avg. ROI', value: '412%' },
                  { label: 'Conversions', value: '1.2M+' },
                  { label: 'Clients', value: '230+' },
                ].map((m, i) => (
                  <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i }} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <div className="text-3xl font-bold text-white drop-shadow-[0_0_25px_rgba(0,157,255,0.35)]">{m.value}</div>
                    <div className="text-sm text-slate-300">{m.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-cyan-400/30 bg-[#0E1F3F]/30 p-6 backdrop-blur-xl">
                <div className="text-white/90 text-sm">AI-fueled marketing powerhouse combining performance, creative, and automation. Precision. Velocity. Control.</div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {['Performance', 'Copy & Creative', 'Content', 'AI Systems', 'BI & Data', 'Funnels'].map((t) => (
                    <div key={t} className="text-xs text-cyan-200/90 bg-white/0 border border-cyan-400/20 rounded-lg px-3 py-2 text-center">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none" />
    </section>
  )
}
