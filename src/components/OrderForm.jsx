import React, { useEffect, useMemo, useState } from 'react';

const TYPES = [
  { value: 'osis', label: 'Seragam OSIS' },
  { value: 'almamater', label: 'Jas Almamater' },
  { value: 'jurusan', label: 'Seragam Jurusan' },
  { value: 'batik', label: 'Seragam Batik Sekolah' },
  { value: 'pramuka', label: 'Seragam Pramuka' },
];

const SIZES = ['S', 'M', 'L', 'XL', 'Custom'];

export default function OrderForm() {
  const [form, setForm] = useState({
    name: '',
    type: '',
    size: '',
    qty: 1,
    address: '',
    notes: '',
    payment: 'Transfer',
    design: null,
  });
  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    const match = /type=([^&]+)/.exec(hash);
    if (match) {
      setForm((f) => ({ ...f, type: decodeURIComponent(match[1]) }));
    }
  }, []);

  const summary = useMemo(() => ({
    ...form,
    design: form.design ? form.design.name : 'Tidak ada',
  }), [form]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleFile(e) {
    const file = e.target.files?.[0] || null;
    setForm((f) => ({ ...f, design: file }));
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else setPreview(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function confirmOrder() {
    alert('Pesanan Anda berhasil dikirim! Kami akan menghubungi Anda segera.');
    setSubmitted(false);
    setForm({ name: '', type: '', size: '', qty: 1, address: '', notes: '', payment: 'Transfer', design: null });
    setPreview(null);
  }

  return (
    <section id="pemesanan" className="py-16 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-emerald-900 text-center mb-8">Form Pemesanan</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-emerald-100 p-6 space-y-4 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-1">Nama Lengkap</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full border rounded-md px-3 py-2 border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-1">Jenis Seragam</label>
                <select name="type" value={form.type} onChange={handleChange} required className="w-full border rounded-md px-3 py-2 border-emerald-200 bg-white">
                  <option value="">Pilih jenis seragam</option>
                  {TYPES.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-1">Ukuran</label>
                <select name="size" value={form.size} onChange={handleChange} required className="w-full border rounded-md px-3 py-2 border-emerald-200 bg-white">
                  <option value="">Pilih ukuran</option>
                  {SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-1">Jumlah</label>
                <input type="number" min={1} name="qty" value={form.qty} onChange={handleChange} required className="w-full border rounded-md px-3 py-2 border-emerald-200" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-emerald-800 mb-1">Alamat Pengiriman</label>
                <textarea name="address" value={form.address} onChange={handleChange} required rows={3} className="w-full border rounded-md px-3 py-2 border-emerald-200" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-emerald-800 mb-1">Catatan Tambahan</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={2} className="w-full border rounded-md px-3 py-2 border-emerald-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-1">Upload Desain (opsional)</label>
                <input type="file" accept="image/*" onChange={handleFile} className="w-full" />
                {preview && (
                  <img src={preview} alt="Preview desain" className="mt-2 h-24 w-24 object-cover rounded-md border" />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-1">Metode Pembayaran</label>
                <select name="payment" value={form.payment} onChange={handleChange} className="w-full border rounded-md px-3 py-2 border-emerald-200 bg-white">
                  <option>Transfer</option>
                  <option>COD Sekolah</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-md">Lihat Ringkasan</button>
          </form>

          <div className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm">
            <h3 className="font-semibold text-emerald-900 mb-4">Ringkasan Pemesanan</h3>
            {!submitted ? (
              <p className="text-emerald-800/80 text-sm">Isi form untuk melihat ringkasan pesanan Anda sebelum konfirmasi akhir.</p>
            ) : (
              <div className="space-y-2 text-sm text-emerald-900">
                <div className="grid grid-cols-3 gap-2"><span className="text-emerald-700/80">Nama</span><span className="col-span-2">{summary.name}</span></div>
                <div className="grid grid-cols-3 gap-2"><span className="text-emerald-700/80">Jenis</span><span className="col-span-2">{TYPES.find(t=>t.value===summary.type)?.label || '-'}</span></div>
                <div className="grid grid-cols-3 gap-2"><span className="text-emerald-700/80">Ukuran</span><span className="col-span-2">{summary.size}</span></div>
                <div className="grid grid-cols-3 gap-2"><span className="text-emerald-700/80">Jumlah</span><span className="col-span-2">{summary.qty}</span></div>
                <div className="grid grid-cols-3 gap-2"><span className="text-emerald-700/80">Alamat</span><span className="col-span-2">{summary.address}</span></div>
                <div className="grid grid-cols-3 gap-2"><span className="text-emerald-700/80">Catatan</span><span className="col-span-2">{summary.notes || '-'}</span></div>
                <div className="grid grid-cols-3 gap-2"><span className="text-emerald-700/80">Pembayaran</span><span className="col-span-2">{summary.payment}</span></div>
                <div className="grid grid-cols-3 gap-2"><span className="text-emerald-700/80">Desain</span><span className="col-span-2">{summary.design}</span></div>
                <button onClick={confirmOrder} className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-md">Konfirmasi & Kirim</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
