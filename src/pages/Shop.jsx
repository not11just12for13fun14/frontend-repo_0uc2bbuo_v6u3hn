import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlowButton from '../components/GlowButton'

const products = [
  { id: 1, title: 'Growth Sprint (4 weeks)', price: 9500, features: ['Audit + Strategy', 'Execution Sprints', 'Weekly Scorecard'] },
  { id: 2, title: 'CRO & Funnels Package', price: 6900, features: ['Landing Pages', 'Experimentation', 'Tracking Architecture'] },
  { id: 3, title: 'BI Dashboard Build', price: 12000, features: ['Warehouse Setup', 'Metrics Layer', 'Executive Dashboard'] },
]

export default function Shop() {
  const [cart, setCart] = React.useState([])
  const add = (p) => setCart((c) => [...c, p])

  const total = cart.reduce((s, p) => s + p.price, 0)

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <section className="pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold">Shop</h1>
            <p className="mt-4 text-slate-300">Curated service packages. Add to cart and request checkout.</p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-cyan-300 mt-2">${p.price.toLocaleString()}</div>
                  <ul className="mt-3 text-sm text-slate-300 space-y-1 list-disc list-inside">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <GlowButton className="mt-5 w-full" onClick={() => add(p)}>Quick add</GlowButton>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-80">
            <div className="sticky top-28 rounded-2xl border border-cyan-400/40 bg-[#0E1F3F]/40 p-6">
              <div className="font-semibold">Your selection</div>
              <div className="mt-3 space-y-2">
                {cart.length === 0 && <div className="text-sm text-slate-300">No items yet.</div>}
                {cart.map((p, i) => (
                  <div key={i} className="text-sm text-slate-200 flex justify-between"><span>{p.title}</span><span>${p.price.toLocaleString()}</span></div>
                ))}
              </div>
              <div className="mt-4 border-t border-white/10 pt-3 flex justify-between text-slate-200"><span>Total</span><span>${total.toLocaleString()}</span></div>
              <GlowButton className="mt-4 w-full">Request Checkout</GlowButton>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
