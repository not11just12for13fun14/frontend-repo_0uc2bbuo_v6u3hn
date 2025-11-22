import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const cases = new Array(8).fill(0).map((_, i) => ({
  id: i + 1,
  title: `Case ${i + 1}`,
  summary: 'Problem → Strategy → Execution → Results',
}))

export default function Work() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <section className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">Case Studies</h1>
          <p className="mt-4 text-slate-300">Real growth with cinematic previews.</p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-cyan-400/40 transition-all">
              <div className="aspect-video bg-gradient-to-br from-[#0E1F3F] to-[#00172A] relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,157,255,0.35),transparent_40%)]" />
              </div>
              <div className="p-5">
                <div className="text-white font-semibold">{c.title}</div>
                <div className="text-slate-300 text-sm mt-1">{c.summary}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
