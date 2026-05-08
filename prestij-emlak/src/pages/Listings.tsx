import { Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

export default function Listings() {
  const listings = [
    {
      id: 1,
      title: 'Modern Deniz Manzaralı Villa',
      location: 'Sarıyer, İstanbul',
      price: '₺ 18.500.000',
      beds: '5+2',
      baths: 4,
      sqm: '450 m²',
      type: 'Satılık',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl-fnIM_ghxTkP4c_hEF5SACcmcht5Vo9B45mVCmBl73kcNUy6Gv7j5z0sLloKeTijDAx5GCJrf08K6iQe1M1o4ocBD8DJiyhVu4RvtCSA8jsKvzWHHZToqqc7Slaq0cidM1D6qp8WJMHmWHRu40IsDBILBA4VtgCTmqDOO8xPsJ0mrnDzVm415YsFSAHlMDs-XgXQT5ncIpFul-NFyvvySyb5wREytvhayDXwKeeC7j0hR6Nf5KG-MzMlAT6skCVVClDdHGitcyE'
    },
    {
      id: 2,
      title: 'Ultra Lüks Teraslı Rezidans',
      location: 'Şişli, İstanbul',
      price: '₺ 120.000',
      period: '/ ay',
      beds: '3+1',
      baths: 2,
      sqm: '210 m²',
      type: 'Kiralık',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuSHL6WRwXBhEipHrh8rJT3J1JMvAuj-bYLBGqiAeq4ZpEtrrYePNpxt1xKbM-3AhTRAS1XMebiYAXvFTuzD7iM_OONb0VgFmkyHRh-60HJhlFypdZVF1D54UANQ70jqO86FvY6Nv8jnlCSGL9b4AYQn54Ty4znNBIR5BLMtDwm-f7fegbzX4Ixc6MJfw3Hv2LV2-2OUUcWshiZ6fWfYa63C4sVDsTAOFz5IxFKJp8jkOGWjoCLTnQwXOqm01B3OiBuW2wcmhDK-E'
    },
    {
      id: 3,
      title: 'Prestijli Site İçi Daire',
      location: 'Kadıköy, İstanbul',
      price: '₺ 8.250.000',
      beds: '2+1',
      baths: 1,
      sqm: '115 m²',
      type: 'Satılık',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmnGFXYe6arxkMZDl_tSuzIezN3bqQcl0I2RyFDUi6Z_5R0uKpb_9cKhbAp85auWxJrdSTzGCu_bATTYZ-KMeQ_i-lhNbNsnJMXB5vcJuba_Axx6QeiaG2RLNRiZzn3dbv3Bw5k1yZSUoKN2pFv3yq5cpo7N4tjyJ7JnqI4RV0gKFrVTBPlpRkCeJgaw1dayD-p7YAiTMaJ8UN6mnv9WgZV18wDxgufExhtnNMhxd-X7bN10YQgDuc5u3fsoQO0QsfhEa88kt4Gvo'
    },
    {
      id: 4,
      title: 'Boğaz Manzaralı Tarihi Yalı',
      location: 'Beşiktaş, İstanbul',
      price: '₺ 250.000',
      period: '/ ay',
      beds: '6+2',
      baths: 5,
      sqm: '850 m²',
      type: 'Kiralık',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5KgC1C4ptgWJ1ilsFiGiRXvG_9h4dZdLXRLbA3ZXIkoJGiikiw3lOUUfcu1Q_Ag-1oiPdKKh3TzPGBuPBphrOUdzYTyVg9uUwdF6PiLPVVUa1U7xQBxbiB2hlP34EoTZYKcTsAr4EQZnbtf7oynZlSiGN1wWMNUy5aNYMAHNK2PykXA34x8o97-hGzgsQ8ZwNtplYFFP_ZLPObW7_Yd2tEdkNmeJUHsJNvBDP72EQDF2eKC89sC9gMBMHhptWuBZWcGlm6ais-Pk'
    }
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-gutter py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filter */}
      <aside className="w-full md:w-1/4 shrink-0">
        <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-surface-variant sticky top-32">
          <div className="flex items-center gap-2 mb-8">
            <SlidersHorizontal size={20} className="text-primary" />
            <h2 className="text-xl font-display font-bold text-primary">Filtrele</h2>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-xs font-bold text-primary uppercase tracking-widest block">Durum</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="radio" name="status" defaultChecked className="accent-secondary w-4 h-4" />
                  Satılık
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="radio" name="status" className="accent-secondary w-4 h-4" />
                  Kiralık
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-primary uppercase tracking-widest block">Konum</label>
              <select className="w-full bg-surface-container-lowest border border-outline-variant rounded p-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm">
                <option>Tüm İstanbul</option>
                <option>Beşiktaş</option>
                <option>Sarıyer</option>
                <option>Kadıköy</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-primary uppercase tracking-widest block">Emlak Tipi</label>
              <select className="w-full bg-surface-container-lowest border border-outline-variant rounded p-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm">
                <option>Tümü</option>
                <option>Villa</option>
                <option>Rezidans</option>
                <option>Yalı</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-primary uppercase tracking-widest block">Fiyat Aralığı</label>
              <div className="flex gap-2">
                <input type="number" placeholder="Min ₺" className="w-1/2 bg-surface-container-lowest border border-outline-variant rounded p-2 outline-none focus:border-primary text-sm" />
                <input type="number" placeholder="Max ₺" className="w-1/2 bg-surface-container-lowest border border-outline-variant rounded p-2 outline-none focus:border-primary text-sm" />
              </div>
            </div>

            <button className="w-full bg-primary text-on-primary py-3 rounded font-bold text-sm hover:bg-primary-container transition-colors mt-4 shadow-sm cursor-pointer">
              Sonuçları Göster
            </button>
          </div>
        </div>
      </aside>

      {/* Grid */}
      <section className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-surface-variant mb-4 gap-4">
          <span className="text-sm text-on-surface-variant"><strong>124</strong> ilan bulundu</span>
          <select className="bg-transparent border border-outline-variant rounded py-2 px-4 text-sm font-semibold focus:outline-none focus:border-primary">
            <option>Önerilen Sıralama</option>
            <option>En Düşük Fiyat</option>
            <option>En Yüksek Fiyat</option>
            <option>En Yeni İlanlar</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {listings.map((item) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-lowest rounded-sm overflow-hidden flex flex-col group border border-surface-variant listing-card-shadow"
            >
              <Link to={`/ilanlar/${item.id}`} className="relative h-64 overflow-hidden block">
                <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest shadow-sm ${item.type === 'Satılık' ? 'bg-secondary text-on-secondary' : 'bg-primary text-on-primary'}`}>
                  {item.type}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-2xl font-display font-bold text-primary mb-2">
                  {item.price} {item.period && <span className="text-sm font-normal text-on-surface-variant">{item.period}</span>}
                </div>
                <Link to={`/ilanlar/${item.id}`} className="block">
                  <h3 className="text-lg font-bold text-on-surface mb-1 group-hover:text-secondary transition-colors line-clamp-1">{item.title}</h3>
                </Link>
                <p className="text-sm text-on-surface-variant mb-6 flex items-center gap-1 opacity-80">
                  <MapPin size={16} /> {item.location}
                </p>
                
                <div className="flex justify-between items-center py-4 border-t border-b border-surface-variant mb-6 text-on-surface text-sm font-bold tracking-tight">
                  <div className="flex items-center gap-1.5"><BedDouble size={18} className="text-outline" /> {item.beds}</div>
                  <div className="flex items-center gap-1.5"><Bath size={18} className="text-outline" /> {item.baths}</div>
                  <div className="flex items-center gap-1.5"><Square size={18} className="text-outline" /> {item.sqm}</div>
                </div>

                <Link to={`/ilanlar/${item.id}`} className="w-full border border-primary text-primary py-3 rounded text-xs font-bold uppercase tracking-widest group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 flex items-center justify-center">
                  İlanı İncele
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
          <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors"><ChevronLeft size={20} /></button>
          <button className="w-10 h-10 flex items-center justify-center rounded bg-primary text-on-primary font-bold">1</button>
          <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors font-bold">2</button>
          <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors font-bold">3</button>
          <span className="w-10 h-10 flex items-center justify-center text-on-surface-variant">...</span>
          <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors"><ChevronRight size={20} /></button>
        </div>
      </section>
    </div>
  );
}
