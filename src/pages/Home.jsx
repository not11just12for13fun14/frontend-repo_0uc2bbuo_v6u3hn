import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function SectionTitle({ title, subtitle }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-300">{subtitle}</p>}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <Hero />

      <section className="py-20 bg-gradient-to-b from-[#0A0A0F] to-[#0E1F3F]">
        <SectionTitle title="What we do" subtitle="Precision performance marketing, powered by AI." />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { t: 'Performance Marketing', d: 'Aggressive growth with discipline — paid media, CRO, attribution.' },
            { t: 'Creative & Copy', d: 'Intent-driven creative that converts across the funnel.' },
            { t: 'AI & Automation', d: 'Systems that learn, adapt, and scale your operations.' },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-cyan-400/40 transition-all">
              <div className="text-xl font-semibold">{c.t}</div>
              <div className="mt-2 text-slate-300 text-sm">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
