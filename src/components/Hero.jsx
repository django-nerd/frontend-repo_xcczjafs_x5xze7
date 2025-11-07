import React from 'react';
import { Star, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-emerald-900">
            Seragam Sekolah Premium, Ramah Lingkungan, dan Nyaman Dipakai
          </h1>
          <p className="text-emerald-800/80">
            Pilihan OSIS, Jas Almamater, Seragam Jurusan, Batik, dan Pramuka. Bahan berkualitas, jahitan rapi, dan layanan konsultasi ukuran gratis.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            {["Kualitas bahan terbaik", "Ramah lingkungan", "Jahitan rapi dan awet", "Pengiriman cepat dan aman"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 bg-white/70 border border-emerald-100 rounded-md px-3 py-2">
                {i === 1 ? <Leaf className="text-emerald-600" size={18}/> : <Star className="text-emerald-600" size={18}/>} 
                <span className="text-emerald-900">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <a href="#produk" className="px-5 py-3 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Lihat Produk</a>
            <a href="#pemesanan" className="px-5 py-3 rounded-md border border-emerald-300 text-emerald-800 font-semibold hover:bg-emerald-50 transition">Pesan Sekarang</a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg ring-1 ring-emerald-100 bg-white">
            <img
              src="https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=1200&auto=format&fit=crop"
              alt="Koleksi Seragam Sekolah"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
