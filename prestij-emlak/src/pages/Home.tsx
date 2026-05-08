import { Search, MapPin, ShieldCheck, Diamond, BarChart3, ArrowRight, BedDouble, Bath, Square, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  const features = [
    { icon: <ShieldCheck size={32} />, title: 'Mutlak Güven', desc: 'Tüm işlemlerinizde şeffaflık ilkesiyle hareket ediyor, hukuki ve finansal güvenliğinizi garanti altına alıyoruz.' },
    { icon: <Diamond size={32} />, title: 'Prestijli Portföy', desc: 'Sadece en seçkin ve değer artış potansiyeli yüksek olan mülkleri portföyümüze dahil ediyoruz.' },
    { icon: <BarChart3 size={32} />, title: 'Pazar Analizi', desc: 'Detaylı veri analizleri ve pazar araştırmaları ile en doğru yatırım kararlarını almanızı sağlıyoruz.' },
  ];

  const listings = [
    {
      id: 1,
      title: 'Boğaz Manzaralı Ultra Lüks Yalı',
      location: 'Sarıyer, Yeniköy',
      price: '₺125.000.000',
      beds: 6,
      baths: 5,
      sqm: '850m²',
      tag: 'Yeni',
      type: 'Satılık',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpDVfyhMz1TslXnnNM2c7OIPJ3eVeR8pgTKBMw8qQWOMZyLXyhFRJFptaPtxm5UnwfY4WtAgigaKPpgus6zWOmXs5RicXxw5iXWpvxjbIr1XQBZZGFsl2imS1505AsNJa8nYkeoBCrbrMgzjYtXQUgV0hcxTB3CgRe4XeuT15tasXzVlroTRhS5Dk6oyefoqIywqfeuj00Fz_OIY9KH7Cp_JlM1FG1y6v2Z3rItUxTgYZOX-y86sts5eIcBDwWX3WwaZqzaAjfEI4',
      featured: true
    },
    {
      id: 2,
      title: 'Modern Rezidans Dairesi',
      location: 'Şişli, Levent',
      price: '₺85.000 / ay',
      beds: 3,
      baths: 2,
      sqm: '180m²',
      type: 'Kiralık',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpsJqeSrN6tOeerdskmjpdAoCBA_BiFAO7Jgef8xMsPpJT0k32kqWhuKe4iaJT89vbVBwiBASsfgEIppidVWJ9dI3FDGhjjwjH0p-AybB7UzJhNHy16SqQKUn4msLhrsR29DyxBCiv_zHgqJdEswivgkuU8v5O_u5fPYX-lT9Temwjrl7e_n2YLuvKZe61Zi3HsYu-G56FZZScyycw6TgfURCddkzbvqKOvuOq9r4ySAVPUP82qwkzPnh41q9QZQ7E6JEjtpWXOnU',
      half: true
    },
    {
      id: 3,
      title: 'Müstakil Havuzlu Villa',
      location: 'Beykoz, Acarlar',
      price: '₺45.000.000',
      beds: 5,
      baths: 4,
      sqm: '420m²',
      type: 'Satılık',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0uFXSc24aCdfA8hoZy3NjhG6LNV6jsREK5MJVXjIALJGA1VZdAhwu44nM1kUonT8XiTULb6SzSpAJmynIsidNMJZAHI_gmwiwNFHUEzw0GOKOxi3Txu0fTz41B6EvIuyyXoJ7qcvEsZuWIG_YZUXMFoDV0s1Nufohwz-tV3CvAAHgnftboPIxt49DwZ4ZLKIJlAaM0S06pGeA9P0xN4_A6oWab1szn0X3L0R0z5fknpJwcm4U8FgxDZr3nmhoyLIUlP9nGOlgtb4'
    },
    {
      id: 4,
      title: 'Panoramik Çatı Katı',
      location: 'Beşiktaş, Bebek',
      price: '₺68.000.000',
      beds: 4,
      baths: 3,
      sqm: '350m²',
      type: 'Satılık',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdAieKAzExaur6Eym8kPxyt8I15Juu1dzEOE_hGxMyj5IaKbZ92DgwkL5bRZCNQA99rWoYfzgoqqdYu_FE_bJqySpwRlL7XY7nQuPnKCbeRRPbj-MUy2CsQnwFNpLLdvOGQzmMnJjKiQjO0DydzQIEZC8vG7tC8KYkwJa8-ajmHOHbuWXDYOnGWwG5jhzZqn7fRfoQMi5RtQtcJRQKkT7TJwvVtqAFFju6raN3v_3rsLCjSpHo8XuYkXMhixGuOj_AElJJmO-Rt3o'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[800px] flex flex-col justify-center items-center px-gutter overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmCmbSusDvr64NbRbFVMX24T3kjEHM73KtPrXcJMTEhiiap3P4N14KHvg4rfFkl4urOFI9g4MVH8D35yK9ffG6gLR3AcGporozvHkm9zdqua9sCdHOcWbAtm6xiEn-lWWmnTDjW6T3rCp9qLk9IkgqFtmRYTEzCNLAjeQzrEFdd_ED0F3TBNN-2JoIzI5ntG9DEjXeK0mrW5jQdq7Ve2yZt1YWA_xBoSwCzb6KWrnY3kBXi5aV5Fke74Cl0iIr91q-h7gEYfX1ZlA" 
            alt="Luxury Villa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-[1200px] mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-on-primary mb-6 drop-shadow-md leading-tight">
            Geleceğinizin Temellerini <br /> Güvenle Atın
          </h1>
          <p className="text-lg md:text-xl font-sans text-surface-container-low mb-12 max-w-2xl mx-auto opacity-90">
            Türkiye'nin en seçkin lokasyonlarında, yatırım değerinize değer katan prestijli gayrimenkul portföyümüzle yanınızdayız.
          </p>

          <div className="bg-surface-container-lowest p-6 rounded-lg soft-elevation max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full text-left">
              <label className="block text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-wider">Lokasyon</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
                <input 
                  type="text" 
                  placeholder="İl, ilçe veya mahalle arayın" 
                  className="w-full pl-10 pr-4 py-3 border border-surface-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm bg-surface-bright"
                />
              </div>
            </div>
            <div className="w-full md:w-1/4 text-left">
              <label className="block text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-wider">Mülk Tipi</label>
              <select className="w-full px-4 py-3 border border-surface-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm bg-surface-bright appearance-none">
                <option>Tümü</option>
                <option>Villa</option>
                <option>Yalı</option>
                <option>Rezidans</option>
              </select>
            </div>
            <button className="w-full md:w-auto bg-primary text-on-primary font-bold text-sm px-8 py-3 rounded h-[48px] flex items-center justify-center gap-2 hover:bg-primary-container transition-colors cursor-pointer">
              <Search size={18} />
              Ara
            </button>
          </div>
        </motion.div>
      </section>

      {/* Why Us Section */}
      <section className="py-section-gap px-gutter bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-semibold text-primary mb-4">Neden Prestij Emlak?</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Sektördeki tecrübemiz ve profesyonel yaklaşımımızla fark yaratıyoruz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-surface-container-lowest p-8 rounded-lg soft-elevation text-center border border-surface-variant hover:border-secondary transition-all"
              >
                <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  {f.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-primary mb-4">{f.title}</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-section-gap px-gutter">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-semibold text-primary mb-2">Öne Çıkan İlanlar</h2>
              <p className="text-lg text-on-surface-variant">Sizin için seçtiğimiz en prestijli mülkler.</p>
            </div>
            <Link to="/ilanlar" className="text-secondary font-bold text-sm hover:translate-x-1 transition-transform flex items-center gap-1 mt-4 md:mt-0">
              Tümünü Gör <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[800px]">
            {/* Main Featured Listing */}
            <Link to={`/ilanlar/${listings[0].id}`} className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img src={listings[0].image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-secondary text-on-secondary text-xs font-bold px-3 py-1 rounded-full uppercase">{listings[0].tag}</span>
                <span className="bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase">{listings[0].type}</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-display font-bold text-on-primary mb-2">{listings[0].title}</h3>
                <p className="text-sm text-surface-container-high mb-4">{listings[0].location}</p>
                <div className="flex justify-between items-end">
                  <div className="text-2xl font-display font-bold text-secondary-fixed">{listings[0].price}</div>
                  <div className="flex gap-4 text-on-primary text-xs font-semibold">
                    <span className="flex items-center gap-1"><BedDouble size={16} /> {listings[0].beds}</span>
                    <span className="flex items-center gap-1"><Bath size={16} /> {listings[0].baths}</span>
                    <span className="flex items-center gap-1"><Square size={16} /> {listings[0].sqm}</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Side Listings */}
            {listings.slice(1).map((item, idx) => (
              <Link 
                key={item.id} 
                to={`/ilanlar/${item.id}`}
                className={`group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-surface-variant transition-all ${item.half ? 'md:col-span-2 md:row-span-1 flex flex-row' : 'md:col-span-1 md:row-span-1'}`}
              >
                <div className={`${item.half ? 'w-2/5' : 'h-48'} overflow-hidden relative`}>
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {!item.half && <span className="absolute top-4 left-4 bg-primary text-on-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{item.type}</span>}
                </div>
                <div className={`p-5 flex flex-col justify-between ${item.half ? 'w-3/5' : ''}`}>
                  <div>
                    {item.half && <span className="inline-block bg-surface-variant text-on-surface-variant text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-2">{item.type}</span>}
                    <h3 className={`${item.half ? 'text-xl' : 'text-base'} font-display font-bold text-primary mb-1 line-clamp-1`}>{item.title}</h3>
                    <p className="text-xs text-on-surface-variant mb-4">{item.location}</p>
                  </div>
                  <div>
                    <div className={`${item.half ? 'text-xl' : 'text-lg'} font-display font-bold text-primary mb-3`}>{item.price}</div>
                    <div className="flex justify-between text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1"><BedDouble size={14} /> {item.beds}</span>
                      <span className="flex items-center gap-1"><Bath size={14} /> {item.baths}</span>
                      <span className="flex items-center gap-1"><Square size={14} /> {item.sqm}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-gutter bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-white"></div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Sparkles className="mx-auto text-secondary-fixed mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-on-primary mb-6">Mülkünüzün Gerçek Değerini Öğrenin</h2>
          <p className="text-lg text-primary-fixed mb-10 max-w-2xl mx-auto opacity-80 italic">
            "Danışmanlarımız, güncel piyasa verileri ışığında mülkünüz için en doğru değerleme raporunu hazırlasın."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary text-on-secondary font-bold text-sm px-8 py-4 rounded hover:bg-[#8B7000] transition-colors cursor-pointer">
              Ücretsiz Değerleme Talep Et
            </button>
            <button className="bg-transparent border border-on-primary text-on-primary font-bold text-sm px-8 py-4 rounded hover:bg-on-primary/10 transition-colors cursor-pointer">
              Danışmanla Görüş
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
