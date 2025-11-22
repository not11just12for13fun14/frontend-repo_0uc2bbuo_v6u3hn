import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlowButton from '../components/GlowButton'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <section className="pt-28 pb-16" id="contact">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold">Get a Quote</h1>
            <p className="mt-4 text-slate-300">Tell us about your goals. We’ll propose the fastest path to impact.</p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <form className="space-y-4">
                <div>
                  <label className="text-sm text-slate-300">Name</label>
                  <input className="mt-1 w-full bg-[#0E1F3F]/30 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Your name" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm text-slate-300">Email</label>
                    <input className="mt-1 w-full bg-[#0E1F3F]/30 border border-white/10 rounded-lg px-3 py-2" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Budget</label>
                    <select className="mt-1 w-full bg-[#0E1F3F]/30 border border-white/10 rounded-lg px-3 py-2 text-slate-200">
                      <option>Under $10k</option>
                      <option>$10k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-slate-300">Service</label>
                  <select className="mt-1 w-full bg-[#0E1F3F]/30 border border-white/10 rounded-lg px-3 py-2 text-slate-200">
                    <option>Performance Marketing</option>
                    <option>Creative & Copy</option>
                    <option>Content & Social</option>
                    <option>AI Systems</option>
                    <option>BI & Data</option>
                    <option>Website & Funnels</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-slate-300">Timeline</label>
                  <select className="mt-1 w-full bg-[#0E1F3F]/30 border border-white/10 rounded-lg px-3 py-2 text-slate-200">
                    <option>ASAP</option>
                    <option>2-4 weeks</option>
                    <option>1-3 months</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-slate-300">Message</label>
                  <textarea rows={4} className="mt-1 w-full bg-[#0E1F3F]/30 border border-white/10 rounded-lg px-3 py-2" placeholder="What are you trying to achieve?" />
                </div>
                <GlowButton className="!px-8" variant="primary">Send</GlowButton>
              </form>
            </div>
          </div>
          <div>
            <div className="rounded-3xl overflow-hidden border border-cyan-400/40 bg-[#0E1F3F]/40 h-[520px] relative">
              <iframe
                title="map"
                className="absolute inset-0 w-full h-full mix-blend-screen opacity-80"
                src="https://maps.google.com/maps?q=San%20Francisco&t=k&z=13&ie=UTF8&iwloc=&output=embed"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-cyan-400/30 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
