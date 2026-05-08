import { useParams, Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square, Share2, Heart, ChevronLeft, Phone, Mail, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ListingDetail() {
  const { id } = useParams();

  // Mock data for detail view (in a real app, this would come from a database)
  const property = {
    id: id,
    title: 'Boğaz Manzaralı Ultra Lüks Yalı',
    price: '₺125.000.000',
    location: 'Sarıyer, Yeniköy, İstanbul',
    beds: '6+2',
    baths: 5,
    sqm: '850m²',
    type: 'Satılık',
    description: `İstanbul'un en seçkin lokasyonlarından Yeniköy'de, Boğaz'ın tam kalbinde yer alan bu eşsiz yalı, modern lüks ile tarihi dokuyu harmanlıyor. 850 metrekarelik geniş kullanım alanı, özel rıhtımı ve panoramik deniz manzarasıyla sadece bir ev değil, bir yaşam stili sunuyor.

Akıllı ev sistemleri ile donatılmış olan mülkümüzde, her detay en yüksek kalite malzemelerle tasarlanmıştır. Geniş salonu, profesyonel mutfağı ve her biri deniz gören ebeveyn banyolu yatak odalarıyla konforun zirvesini yaşayın.`,
    features: ['Akıllı Ev Sistemi', 'Özel Rıhtım', 'Yüzme Havuzu', '7/24 Güvenlik', 'Kapalı Otopark (4 Araç)', 'Müştemilat', 'Sauna & Hamam', 'Yerden Isıtma'],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpDVfyhMz1TslXnnNM2c7OIPJ3eVeR8pgTKBMw8qQWOMZyLXyhFRJFptaPtxm5UnwfY4WtAgigaKPpgus6zWOmXs5RicXxw5iXWpvxjbIr1XQBZZGFsl2imS1505AsNJa8nYkeoBCrbrMgzjYtXQUgV0hcxTB3CgRe4XeuT15tasXzVlroTRhS5Dk6oyefoqIywqfeuj00Fz_OIY9KH7Cp_JlM1FG1y6v2Z3rItUxTgYZOX-y86sts5eIcBDwWX3WwaZqzaAjfEI4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmCmbSusDvr64NbRbFVMX24T3kjEHM73KtPrXcJMTEhiiap3P4N14KHvg4rfFkl4urOFI9g4MVH8D35yK9ffG6gLR3AcGporozvHkm9zdqua9sCdHOcWbAtm6xiEn-lWWmnTDjW6T3rCp9qLk9IkgqFtmRYTEzCNLAjeQzrEFdd_ED0F3TBNN-2JoIzI5ntG9DEjXeK0mrW5jQdq7Ve2yZt1YWA_xBoSwCzb6KWrnY3kBXi5aV5Fke74Cl0iIr91q-h7gEYfX1ZlA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdAieKAzExaur6Eym8kPxyt8I15Juu1dzEOE_hGxMyj5IaKbZ92DgwkL5bRZCNQA99rWoYfzgoqqdYu_FE_bJqySpwRlL7XY7nQuPnKCbeRRPbj-MUy2CsQnwFNpLLdvOGQzmMnJjKiQjO0DydzQIEZC8vG7tC8KYkwJa8-ajmHOHbuWXDYOnGWwG5jhzZqn7fRfoQMi5RtQtcJRQKkT7TJwvVtqAFFju6raN3v_3rsLCjSpHo8XuYkXMhixGuOj_AElJJmO-Rt3o'
    ],
    agent: {
      name: 'Hakan Yılmaz',
      role: 'Baş Danışman',
      phone: '+90 532 555 01 24',
      email: 'hakan@prestijemlak.com',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY6Ok08Cpx2MQjWUgPXuNV53nOG6G4EaNk7ptWelRUilYdE_724dFzACQwCH1vTYrBKyBTq8YzcQkTRgoTrhTMDmYOWeaDAtRz7kYrP7sQW2oLo29TRmjji65tbzxhIRm1Vyio1SEU6ONFgMrptdOgVV01N6Xm4dNVobm2qFZofBscfFnOWqCvhtuHSVBC1o9hpfk-DTUmxGCdeM8uUY-iGPihzQOlqjoInlor14715bddBriNtTfCdFXwFRMd3f4gX5mHUGoKK8I'
    }
  };

  return (
    <div className="bg-surface">
      <div className="max-w-[1200px] mx-auto px-gutter py-8">
        {/* Breadcrumbs & Actions */}
        <div className="flex justify-between items-center mb-6">
          <Link to="/ilanlar" className="flex items-center gap-1 text-sm font-bold text-outline hover:text-primary transition-colors">
            <ChevronLeft size={20} /> İlanlara Dön
          </Link>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-sm font-bold text-outline hover:text-secondary transition-colors cursor-pointer">
              <Share2 size={18} /> Paylaş
            </button>
            <button className="flex items-center gap-2 text-sm font-bold text-outline hover:text-red-500 transition-colors cursor-pointer">
              <Heart size={18} /> Favorilere Ekle
            </button>
          </div>
        </div>

        {/* Gallery Preview (Simple Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 h-[500px]">
          <div className="md:col-span-3 rounded-xl overflow-hidden shadow-sm">
            <img src={property.images[0]} alt="Property" className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:flex flex-col gap-4">
            {property.images.slice(1).map((img, i) => (
              <div key={i} className="flex-1 rounded-xl overflow-hidden shadow-sm">
                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-secondary text-on-secondary text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">{property.type}</span>
                <span className="text-on-surface-variant font-medium tracking-tight">İlan No: #PRSTG-1024</span>
              </div>
              <h1 className="text-4xl font-display font-bold text-primary mb-2">{property.title}</h1>
              <p className="flex items-center gap-1 text-on-surface-variant mb-6">
                <MapPin size={20} /> {property.location}
              </p>
              
              <div className="grid grid-cols-3 gap-8 py-6 border-y border-surface-variant">
                <div className="flex flex-col items-center">
                  <div className="text-primary mb-2"><BedDouble size={28} /></div>
                  <span className="text-sm font-bold text-primary uppercase tracking-tighter">Oda Sayısı</span>
                  <span className="text-lg font-bold text-secondary">{property.beds}</span>
                </div>
                <div className="flex flex-col items-center border-x border-surface-variant px-4">
                  <div className="text-primary mb-2"><Bath size={28} /></div>
                  <span className="text-sm font-bold text-primary uppercase tracking-tighter">Banyo</span>
                  <span className="text-lg font-bold text-secondary">{property.baths}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-primary mb-2"><Square size={28} /></div>
                  <span className="text-sm font-bold text-primary uppercase tracking-tighter">Alan</span>
                  <span className="text-lg font-bold text-secondary">{property.sqm}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-primary">İlan Açıklaması</h2>
              <div className="text-on-surface-variant leading-relaxed font-sans whitespace-pre-line text-lg">
                {property.description}
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-primary">Öne Çıkan Özellikler</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-secondary" />
                    <span className="text-on-surface-variant font-semibold text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (Price & Agent) */}
          <aside className="space-y-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_15px_40px_-15px_rgba(4,22,39,0.1)] border border-surface-variant sticky top-32">
              <div className="text-3xl font-display font-bold text-primary mb-8 pb-8 border-b border-surface-variant">
                {property.price}
              </div>

              {/* Agent Card */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary shadow-sm">
                  <img src={property.agent.image} alt={property.agent.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary">{property.agent.name}</h4>
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">{property.agent.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-primary text-on-primary py-4 rounded font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm cursor-pointer group">
                  <Phone size={18} className="group-hover:rotate-12 transition-transform" /> {property.agent.phone}
                </button>
                <button className="w-full border border-primary text-primary py-4 rounded font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors cursor-pointer">
                  <Mail size={18} /> Mesaj Gönder
                </button>
                <button className="w-full bg-secondary text-on-secondary py-4 rounded font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#8B7000] transition-colors shadow-sm cursor-pointer mt-4 uppercase tracking-widest">
                  <Calendar size={18} /> Randevu Planla
                </button>
              </div>

              <p className="text-[10px] text-center text-on-surface-variant mt-6 uppercase font-bold tracking-widest opacity-60">
                Pazar Günü hariç 09:00 - 18:00 arası iletişime geçebilirsiniz.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Suggested Listing (Bottom Section) */}
      <section className="bg-surface-container-low py-24 mt-24">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <h2 className="text-3xl font-display font-bold text-primary mb-12">Yeniköy'deki Benzer İlanlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Minimal card example */}
            <Link to="/ilanlar/1025" className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-variant transition-all hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5KgC1C4ptgWJ1ilsFiGiRXvG_9h4dZdLXRLbA3ZXIkoJGiikiw3lOUUfcu1Q_Ag-1oiPdKKh3TzPGBuPBphrOUdzYTyVg9uUwdF6PiLPVVUa1U7xQBxbiB2hlP34EoTZYKcTsAr4EQZnbtf7oynZlSiGN1wWMNUy5aNYMAHNK2PykXA34x8o97-hGzgsQ8ZwNtplYFFP_ZLPObW7_Yd2tEdkNmeJUHsJNvBDP72EQDF2eKC89sC9gMBMHhptWuBZWcGlm6ais-Pk" alt="Similar" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-2xl font-display font-bold text-primary mb-2">₺65.000.000</div>
                <h3 className="font-bold text-primary mb-1 group-hover:text-secondary transition-colors">Tarihi Dokulu Müstakil Ev</h3>
                <p className="text-xs text-on-surface-variant mb-4">Sarıyer, Yeniköy, İstanbul</p>
                <div className="flex justify-between text-[11px] font-bold text-on-surface-variant uppercase tracking-widest pt-4 border-t border-surface-variant">
                  <span>5+1</span>
                  <span>3 Banyo</span>
                  <span>320 m²</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
