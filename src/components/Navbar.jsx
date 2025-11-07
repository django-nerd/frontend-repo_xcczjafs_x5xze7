import React from 'react';
import { Home, ShoppingBag, ClipboardList, Users, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Produk', href: '#produk', icon: ShoppingBag },
  { label: 'Pemesanan', href: '#pemesanan', icon: ClipboardList },
  { label: 'Tim Kami', href: '#tim', icon: Users },
  { label: 'Kontak', href: '#kontak', icon: Phone },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-bold text-emerald-700 text-lg">EduUniform</a>
          <nav>
            <ul className="hidden md:flex items-center gap-2">
              {navItems.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-emerald-800 hover:text-emerald-900 hover:bg-emerald-50 transition"
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="md:hidden">
              <select
                className="px-3 py-2 border rounded-md text-emerald-800 border-emerald-200 bg-white"
                onChange={(e) => {
                  const v = e.target.value; if (v) window.location.hash = v;
                }}
              >
                <option value="">Menu</option>
                {navItems.map(({ label, href }) => (
                  <option key={href} value={href}>{label}</option>
                ))}
              </select>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
