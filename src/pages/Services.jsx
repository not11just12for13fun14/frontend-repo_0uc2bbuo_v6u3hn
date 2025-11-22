import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  { title: 'Performance Marketing', desc: 'Paid media at scale, multi-channel attribution, CRO, LTV modeling.' },
  { title: 'Copywriting & Creative Strategy', desc: 'Direct-response copy, concept systems, modular ads.' },
  { title: 'Social Media & Content', desc: 'Editorial calendars, UGC engines, distribution frameworks.' },
  { title: 'AI Systems & Automations', desc: 'Agents, workflows, data pipelines, internal tooling.' },
  { title: 'Business Intelligence & Data Strategy', desc: 'Dashboards, warehouse, metrics layer, decision OS.' },
  { title: 'Website & Funnel Building', desc: 'High-converting sites, landing pages, tracking architecture.' },
]

function ServiceCard({ title, desc }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-cyan-400/50 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-white font-semibold text-lg">{title}</div>
          <div className="text-slate-300 text-sm mt-1">{desc}</div>
        </div>
        <button onClick={() => setOpen((o) => !o)} className="text-cyan-300 text-sm">{open ? 'Hide' : 'Details'}</button>
      </div>
      {open && (
        <div className="mt-4 text-sm text-slate-300">
          <ul className="list-disc list-inside space-y-1">
            <li>Discovery → Diagnostics → Strategy</li>
            <li>Execution sprints with weekly scorecards</li>
            <li>Measurement, experimentation, iteration</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <section className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">Services</h1>
          <p className="mt-4 text-slate-300 max-w-2xl">Structured for speed and control. Expand for details.</p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
