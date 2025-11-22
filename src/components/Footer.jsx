import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const socials = [
    { icon: <Twitter size={18} />, href: '#' },
    { icon: <Linkedin size={18} />, href: '#' },
    { icon: <Instagram size={18} />, href: '#' },
    { icon: <Facebook size={18} />, href: '#' },
  ]

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0F] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#009DFF] to-cyan-400 shadow-[0_0_25px_rgba(0,157,255,0.6)]" />
            <div className="text-white font-semibold">Buldozer Marketing</div>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((s, i) => (
              <a key={i} href={s.href} className="text-slate-300 hover:text-white transition-colors">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-cyan-400/30 hover:border-cyan-400/70 shadow-[0_0_18px_rgba(0,157,255,0.25)]">
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} Buldozer Marketing. All rights reserved.</div>
      </div>
    </footer>
  )
}
