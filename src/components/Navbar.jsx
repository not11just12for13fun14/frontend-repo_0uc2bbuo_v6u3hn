import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'Case Studies' },
    { to: '/shop', label: 'Shop' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-xl bg-[#0A0A0F]/60 border border-white/10 rounded-2xl px-5 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#009DFF] to-cyan-400 shadow-[0_0_25px_rgba(0,157,255,0.6)]" />
              <span className="text-white font-semibold tracking-wide">Buldozer</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `text-sm ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'} transition-colors`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <Link to="/contact" className="ml-2">
                <span className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold bg-[#0E1F3F] text-white border border-cyan-400/40 hover:border-cyan-400/70 transition-colors">Get a quote</span>
              </Link>
            </div>
            <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden">
                <div className="pt-3 flex flex-col gap-2">
                  {nav.map((n) => (
                    <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white py-2">
                      {n.label}
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
