import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Pillar({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="mt-2 text-slate-300 text-sm">{desc}</div>
    </div>
  )
}

export default function About() {
  const pillars = [
    { title: 'Precision', desc: 'No fluff. Decisions powered by data and intent.' },
    { title: 'Creativity', desc: 'Sharp, modern creative that sells.' },
    { title: 'Velocity', desc: 'We move fast with discipline and control.' },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">About Buldozer</h1>
          <p className="mt-4 text-slate-300 max-w-2xl">We are a results-obsessed growth agency blending human creativity with machine precision. We build systems that compound.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <Pillar key={p.title} {...p} />
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Our evolution</h2>
          <div className="mt-6 relative border-l border-white/10 pl-6">
            {[
              { y: '2019', e: 'Launched as performance boutique' },
              { y: '2021', e: 'Expanded into creative & content' },
              { y: '2023', e: 'Built AI systems & automation practice' },
              { y: '2025', e: 'Full-stack BI & growth operating system' },
            ].map((i) => (
              <div key={i.y} className="pb-6">
                <div className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,157,255,0.7)]" />
                <div className="text-sm text-cyan-300/90">{i.y}</div>
                <div className="text-white text-lg">{i.e}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
