import { Shield, Award, SearchCheck, Flag, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    { icon: <Shield size={24} />, title: 'Güven', desc: 'İlişkilerimizin temeli. Gizlilik prensiplerine tam uyum ve her adımda dürüst bilgilendirme.' },
    { icon: <Award size={24} />, title: 'Prestij', desc: 'Portföyümüzde sadece yüksek kalite standartlarını karşılayan, seçkin ve değer yaratan mülklerimize yer veririz.' },
    { icon: <SearchCheck size={24} />, title: 'Şeffaflık', desc: 'Sürprizlere yer yok. Sürecin her aşamasında, pazar gerçekleri ve işlem detayları hakkında net iletişim.' },
  ];

  const timeline = [
    { year: '2008', title: 'Sektöre Giriş', desc: 'Uluslararası bir gayrimenkul firmasında kariyer başlangıcı ve pazar dinamiklerinin temelden öğrenilmesi.' },
    { year: '2015', title: 'Prestij Emlak\'ın Kuruluşu', desc: 'Kendi bağımsız danışmanlık pratiğinin kurulması. Lüks konut segmentine odaklanma stratejisinin hayata geçirilmesi.' },
    { year: '2019', title: 'Rekor Satış İşlemi', desc: 'Bölgenin en yüksek hacimli yalı satış işleminin başarıyla ve tam gizlilik içinde yönetilmesi.' },
    { year: 'Günümüz', title: 'Genişleyen Portföy ve Ekip', desc: 'Seçkin müşterilerden oluşan kemikleşmiş bir ağ ve değer odaklı yatırım danışmanlığında lider konum.', active: true },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 px-gutter max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-display font-bold leading-tight">
              Gayrimenkulde <br />
              <span className="text-secondary">Güven ve Prestijin</span> <br />
              Yeni Tanımı.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg font-sans">
              Yüksek standartlarda hizmet anlayışımızla, lüks konut ve ticari gayrimenkul yatırımlarınızda size özel, şeffaf ve profesyonel danışmanlık sunuyoruz.
            </p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-surface-variant"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMXFLWGRo_Q_-mQi7Mncex4P7NWUBcijeAmLSStH3XbzEFIIgqh8S3i25T97TR2k3orw6EQpR0UIq5ANVolNx2x1xLqlJmaDBwRRp0pVtlRS9KvuTns5stvN9nCAeESBQeKnahjlCT5sqHFH_JXE4VE8ylcKot-pBnf2lIPKW6C4IYjH2NIEhBD9nWRHJUQxO-dWBm11Ds5mHG6IlJaouJ27f_CvukRfFashasLFIPdq4J4KStFN_-O2wsK9r1-7qI5hmqmT8Kgak" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Consultant Portrait */}
      <section className="bg-surface py-24">
        <div className="px-gutter max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 h-[600px] rounded-xl overflow-hidden shadow-lg border border-surface-variant">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY6Ok08Cpx2MQjWUgPXuNV53nOG6G4EaNk7ptWelRUilYdE_724dFzACQwCH1vTYrBKyBTq8YzcQkTRgoTrhTMDmYOWeaDAtRz7kYrP7sQW2oLo29TRmjji65tbzxhIRm1Vyio1SEU6ONFgMrptdOgVV01N6Xm4dNVobm2qFZofBscfFnOWqCvhtuHSVBC1o9hpfk-DTUmxGCdeM8uUY-iGPihzQOlqjoInlor14715bddBriNtTfCdFXwFRMd3f4gX5mHUGoKK8I" 
                alt="Hakan Yılmaz" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="md:col-span-7 space-y-8">
              <div>
                <span className="font-bold text-xs text-secondary tracking-widest uppercase mb-2 block">Kurucu & Baş Danışman</span>
                <h2 className="text-4xl font-display font-bold">Hakan Yılmaz</h2>
              </div>
              <p className="text-lg text-on-surface-variant italic leading-relaxed">
                "15 yılı aşkın sektör deneyimiyle Hakan Yılmaz, Türkiye'nin önde gelen lüks gayrimenkul pazarlarında sayısız başarılı işleme imza atmıştır. Uzmanlığı, sadece gayrimenkul satışı değil, aynı zamanda müvekkillerinin portföylerini koruyan ve büyüten stratejik yatırım danışmanlığıdır."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-outline-variant">
                <div className="flex items-start gap-4">
                  <div className="text-secondary"><Award size={32} /></div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Stratejik Analiz</h4>
                    <p className="text-sm text-on-surface-variant">Piyasa dinamiklerine hakim, veriye dayalı yatırım öngörüleri.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-secondary"><SearchCheck size={32} /></div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Geniş Ağ</h4>
                    <p className="text-sm text-on-surface-variant">Seçkin alıcılar ve kapalı portföy mülklere özel erişim.</p>
                  </div>
                </div>
              </div>
              <button className="px-8 py-3 bg-primary text-on-primary font-bold text-sm rounded hover:bg-primary-container transition-colors mt-4">
                Danışmanla İletişime Geç
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-24 px-gutter max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">Temel İlkelerimiz</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Bizi farklı kılan, işimize yaklaşım biçimimiz ve müşterilerimize sunduğumuz sarsılmaz taahhütlerimizdir.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-primary text-on-primary p-10 rounded-xl shadow-lg relative overflow-hidden">
            <Eye size={64} className="absolute -right-4 -top-4 opacity-5" />
            <Eye size={40} className="text-secondary mb-6" />
            <h3 className="text-2xl font-display font-bold mb-4">Vizyonumuz</h3>
            <p className="text-lg opacity-90 leading-relaxed font-sans">
              Türkiye lüks gayrimenkul pazarında, şeffaflığı ve dürüstlüğü standart haline getiren, yatırımcıların ilk aklına gelen ve en çok güvenilen danışmanlık markası olmak. Sektördeki profesyonellik çıtasını sürekli olarak daha yukarı taşımak.
            </p>
          </div>
          <div className="bg-surface-container-low border border-surface-variant p-10 rounded-xl">
            <Flag size={40} className="text-primary mb-6" />
            <h3 className="text-xl font-display font-bold mb-4">Misyonumuz</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Müşterilerimizin finansal hedeflerini ve yaşam tarzı beklentilerini derinden anlayarak, onlara en uygun ve prestijli gayrimenkul çözümlerini sunmak. Her işlemde zaman kazandıran, stressiz bir deneyim yaratmak.
            </p>
          </div>
          {values.map((v, i) => (
            <div key={i} className="bg-surface-container-low border border-surface-variant p-8 rounded-xl border-t-4 border-t-secondary transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  {v.icon}
                </div>
                <h4 className="font-bold text-primary">{v.title}</h4>
              </div>
              <p className="text-sm text-on-surface-variant font-sans leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface py-24 pb-32">
        <div className="px-gutter max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-display font-bold text-primary text-center mb-16">Başarı Yolculuğumuz</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-8 relative">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full relative z-10 ${item.active ? 'bg-primary border-4 border-white' : 'bg-secondary'}`}></div>
                  {idx !== timeline.length - 1 && <div className="w-px h-full bg-outline-variant absolute top-4 z-0"></div>}
                </div>
                <div className="pb-4">
                  <span className={`text-lg font-bold mb-1 block ${item.active ? 'text-primary' : 'text-secondary'}`}>{item.year}</span>
                  <h3 className="text-xl font-display font-bold text-primary mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
