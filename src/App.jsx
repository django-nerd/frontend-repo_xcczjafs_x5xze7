import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import OrderForm from './components/OrderForm';
import TeamContact from './components/TeamContact';

function Footer() {
  return (
    <footer className="py-8 border-t border-emerald-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-emerald-800/80">
        <p>© {new Date().getFullYear()} EduUniform. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-emerald-900">Home</a>
          <a href="#produk" className="hover:text-emerald-900">Produk</a>
          <a href="#pemesanan" className="hover:text-emerald-900">Pemesanan</a>
          <a href="#tim" className="hover:text-emerald-900">Tim Kami</a>
          <a href="#kontak" className="hover:text-emerald-900">Kontak</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Navbar />
      <Hero />
      <Products />
      <OrderForm />
      <TeamContact />
      <Footer />
    </div>
  );
}
