import React from 'react';
import { Mail, Linkedin, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const team = [
  { name: 'Ayu Pratama', role: 'Ketua Proyek', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop', email: 'ayu@eduuniform.id', linkedin: '#' },
  { name: 'Bima Saputra', role: 'Desainer Produk', img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop', email: 'bima@eduuniform.id', linkedin: '#' },
  { name: 'Citra Lestari', role: 'Web Developer', img: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=800&auto=format&fit=crop', email: 'citra@eduuniform.id', linkedin: '#' },
  { name: 'Dimas Ardi', role: 'Marketing', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop', email: 'dimas@eduuniform.id', linkedin: '#' },
  { name: 'Eka Wulandari', role: 'Customer Service', img: 'https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=800&auto=format&fit=crop', email: 'eka@eduuniform.id', linkedin: '#' },
  { name: 'Fajar Rahman', role: 'Logistik', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop', email: 'fajar@eduuniform.id', linkedin: '#' },
];

export default function TeamContact() {
  return (
    <>
      <section id="tim" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-8">Tim Kami</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="bg-white border border-emerald-100 rounded-xl p-4 text-center shadow-sm">
                <img src={m.img} alt={m.name} className="w-24 h-24 rounded-full object-cover mx-auto" />
                <h3 className="mt-3 font-semibold text-emerald-900">{m.name}</h3>
                <p className="text-sm text-emerald-800/80">{m.role}</p>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <a href={`mailto:${m.email}`} className="text-emerald-700 hover:text-emerald-900"><Mail size={18} /></a>
                  <a href={m.linkedin} className="text-emerald-700 hover:text-emerald-900"><Linkedin size={18} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="py-16 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-8">Kontak</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border border-emerald-100 rounded-xl p-6 space-y-3 shadow-sm">
              <div className="flex items-start gap-3"><MapPin className="text-emerald-600"/><div><p className="font-semibold text-emerald-900">Alamat</p><p className="text-sm text-emerald-800/80">Jl. Pendidikan No. 123, Bandung</p></div></div>
              <div className="flex items-start gap-3"><Phone className="text-emerald-600"/><div><p className="font-semibold text-emerald-900">Telepon & WhatsApp</p><p className="text-sm text-emerald-800/80">0812-3456-7890</p></div></div>
              <div className="flex items-start gap-3"><Mail className="text-emerald-600"/><div><p className="font-semibold text-emerald-900">Email</p><p className="text-sm text-emerald-800/80">halo@eduuniform.id</p></div></div>
              <div className="flex items-start gap-3"><Clock className="text-emerald-600"/><div><p className="font-semibold text-emerald-900">Jam Operasional</p><p className="text-sm text-emerald-800/80">Senin - Sabtu, 09.00 - 17.00</p></div></div>
            </div>
            <form className="bg-white border border-emerald-100 rounded-xl p-6 space-y-4 shadow-sm" onSubmit={(e)=>{e.preventDefault(); alert('Pesan terkirim! Kami akan membalas via email.')}}>
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-1">Nama</label>
                <input required className="w-full border rounded-md px-3 py-2 border-emerald-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-1">Email</label>
                <input type="email" required className="w-full border rounded-md px-3 py-2 border-emerald-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-1">Pesan</label>
                <textarea rows={4} required className="w-full border rounded-md px-3 py-2 border-emerald-200" />
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-md inline-flex items-center justify-center gap-2">
                <MessageSquare size={18}/> Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
