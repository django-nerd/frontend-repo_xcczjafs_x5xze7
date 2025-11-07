import React from 'react';

const products = [
  {
    id: 'osis',
    name: 'Seragam OSIS',
    images: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop',
    ],
    desc: 'Bahan oxford premium, nyaman & adem. Cocok untuk aktivitas sekolah harian.',
    features: ['Kancing kuat', 'Warna tidak mudah pudar', 'Ukuran lengkap S-XL'],
  },
  {
    id: 'almamater',
    name: 'Jas Almamater',
    images: [
      'https://images.unsplash.com/photo-1515189377545-c3b018a5bfb0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    ],
    desc: 'Jas almamater elegan dengan bahan drill pilihan dan bordir rapi.',
    features: ['Bisa custom logo', 'Pilihan warna lengkap', 'Jahitan kuat'],
  },
  {
    id: 'jurusan',
    name: 'Seragam Jurusan',
    images: [
      'https://images.unsplash.com/photo-1523246197593-6f1f9b6c5b7c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=1200&auto=format&fit=crop',
    ],
    desc: 'Seragam khusus jurusan dengan identitas kuat dan nyaman digunakan.',
    features: ['Sablon/bordir sesuai kebutuhan', 'Size lengkap', 'Durable'],
  },
  {
    id: 'batik',
    name: 'Seragam Batik Sekolah',
    images: [
      'https://images.unsplash.com/photo-1542343633-5f8a54dbb1a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
    ],
    desc: 'Motif eksklusif, warna tajam, nyaman untuk aktivitas seharian.',
    features: ['Anti luntur', 'Motif bisa custom', 'Bahan adem'],
  },
  {
    id: 'pramuka',
    name: 'Seragam Pramuka',
    images: [
      'https://images.unsplash.com/photo-1535385793343-27bafffe5ef7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
    ],
    desc: 'Bahan kuat dan nyaman dengan detail sesuai standar pramuka nasional.',
    features: ['Tahan lama', 'Warna stabil', 'Ukuran lengkap'],
  },
];

function ProductCard({ product }) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-white overflow-hidden shadow-sm">
      <div className="grid grid-cols-2">
        {product.images.map((src, idx) => (
          <img key={idx} src={src} alt={`${product.name} ${idx+1}`} className="w-full h-40 object-cover" />
        ))}
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-emerald-900">{product.name}</h3>
        <p className="text-sm text-emerald-800/80">{product.desc}</p>
        <ul className="text-sm list-disc pl-5 text-emerald-800/90">
          {product.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <a href={`#pemesanan?type=${product.id}`} className="inline-block mt-2 px-4 py-2 bg-emerald-600 text-white rounded-md text-sm font-medium hover:bg-emerald-700">Pesan Sekarang</a>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="produk" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-900">Kategori Produk</h2>
          <p className="text-emerald-800/80">Lima kategori utama dengan kualitas terbaik.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
