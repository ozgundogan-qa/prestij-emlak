import { MapPin, Phone, Mail, Clock, Globe, Share2, Link as LinkIcon } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const contactInfo = [
    { icon: <MapPin size={32} />, title: 'Ofisimiz', desc: 'Levent Mah. Çayır Çimen Sok. No:12 Beşiktaş, İstanbul' },
    { icon: <Phone size={32} />, title: 'Telefon', desc: '+90 (212) 555 01 23 / +90 (532) 555 01 24' },
    { icon: <Mail size={32} />, title: 'E-posta', desc: 'info@prestijemlak.com / iletisim@prestijemlak.com' },
    { icon: <Clock size={32} />, title: 'Çalışma Saatleri', desc: 'Pzt - Cuma: 09:00 - 18:00 / Cumartesi: 10:00 - 15:00' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="w-full bg-surface-container-lowest py-20 border-b border-surface-variant">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold text-primary mb-6"
          >
            Bize Ulaşın
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-surface-variant max-w-2xl mx-auto font-sans"
          >
            Hayalinizdeki gayrimenkule ulaşmak veya yatırımlarınızı değerlendirmek için profesyonel ekibimizle iletişime geçin. Size en iyi hizmeti sunmak için buradayız.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-[1200px] mx-auto px-gutter py-24 flex flex-col lg:flex-row gap-16">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2 bg-surface-container-lowest rounded-xl shadow-[0_20px_50px_-12px_rgba(4,22,39,0.04)] p-10 border border-surface-variant"
        >
          <h2 className="text-3xl font-display font-bold text-primary mb-8">Mesaj Gönderin</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-widest" htmlFor="firstName">Adınız</label>
                <input 
                  id="firstName"
                  className="w-full border border-outline-variant rounded p-3 bg-surface-container-low focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  placeholder="Adınız" 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-widest" htmlFor="lastName">Soyadınız</label>
                <input 
                  id="lastName"
                  className="w-full border border-outline-variant rounded p-3 bg-surface-container-low focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  placeholder="Soyadınız" 
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest" htmlFor="email">E-posta Adresiniz</label>
              <input 
                id="email"
                className="w-full border border-outline-variant rounded p-3 bg-surface-container-low focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                placeholder="ornek@email.com" 
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest" htmlFor="phone">Telefon Numaranız</label>
              <input 
                id="phone"
                className="w-full border border-outline-variant rounded p-3 bg-surface-container-low focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                placeholder="+90 (5XX) XXX XX XX" 
                type="tel"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-widest" htmlFor="message">Mesajınız</label>
              <textarea 
                id="message"
                className="w-full border border-outline-variant rounded p-3 bg-surface-container-low focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-40 resize-none" 
                placeholder="Size nasıl yardımcı olabiliriz?"
              ></textarea>
            </div>
            <button className="w-full bg-primary text-on-primary font-bold text-sm py-4 rounded hover:bg-primary-container transition-all shadow-md group">
              Mesajı Gönder
            </button>
          </form>
        </motion.div>

        {/* Info & Map */}
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           className="w-full lg:w-1/2 flex flex-col gap-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, i) => (
              <div key={i} className="bg-surface-container-low p-8 rounded-lg flex flex-col items-center text-center border border-surface-variant/50 hover:border-secondary transition-all">
                <div className="text-secondary mb-4">{info.icon}</div>
                <h3 className="text-lg font-display font-bold text-primary mb-2 line-clamp-1">{info.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{info.desc}</p>
              </div>
            ))}
          </div>

          <div className="w-full h-80 rounded-xl overflow-hidden relative shadow-xl border border-surface-variant">
             <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqE6V9GdWH5VXEd9Bm60kBywhQISacQBZ5Juo9yleA9xAenfsI28U-rt6Su67_4mVxlM08mNgYy73TTbjM-Ol-r4E-BSmtpZsG6J7tE5YZgy6SBxanyK1pFoH6phb5uVmIF1v_-j-lJcNFxIPh-ovnb5svjBKtdJ92r4e0Jz7gNJBRVvr6IAz0ADkIZHVqhIDG3b4MLtVuIvnqlvo0t2AjKKIId2TAqIA3jMSMpiZQoTOKQ_Mam6i4jgwaW5p-eSRfl-0Ktqu6VZU" 
              alt="Map" 
              className="w-full h-full object-cover grayscale opacity-60"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-secondary p-3 rounded-full shadow-2xl animate-pulse">
                <MapPin className="text-on-secondary" size={32} />
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-on-secondary transition-all">
              <Globe size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-on-secondary transition-all">
              <Share2 size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-on-secondary transition-all">
              <LinkIcon size={20} />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
