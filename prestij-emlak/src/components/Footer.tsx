import { Link } from 'react-router-dom';
import { Mail, Share2, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="max-w-[1200px] mx-auto py-16 px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <Link to="/" className="text-2xl font-display font-bold mb-4 block">
              PRESTİJ EMLAK
            </Link>
            <p className="text-on-primary-container font-sans text-base max-w-sm mt-4">
              Güven ve prestijin adresi. Yatırımlarınıza değer katmak için profesyonel çözümler sunuyoruz.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-on-primary/20 flex items-center justify-center hover:bg-on-primary/10 transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-on-primary/20 flex items-center justify-center hover:bg-on-primary/10 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col md:items-end w-full">
            <div className="w-full md:max-w-xs">
              <h4 className="font-semibold text-sm tracking-widest mb-6">HIZLI LİNKLER</h4>
              <ul className="space-y-4 text-on-primary-container text-sm">
                <li><a href="#" className="hover:text-secondary-container transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-secondary-container transition-colors">Kullanım Koşulları</a></li>
                <li><a href="#" className="hover:text-secondary-container transition-colors">KVKK Aydınlatma Metni</a></li>
                <li><a href="#" className="hover:text-secondary-container transition-colors">Sıkça Sorulan Sorular</a></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col md:items-end w-full">
            <div className="w-full md:max-w-xs">
              <h4 className="font-semibold text-sm tracking-widest mb-6 uppercase">İletişim</h4>
              <ul className="space-y-4 text-on-primary-container text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-secondary-container shrink-0" />
                  <span>Levent Mah. Çayır Çimen Sok.<br />No: 12 Şişli / İstanbul</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-secondary-container shrink-0" />
                  <span>+90 (212) 555 00 00</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-secondary-container shrink-0" />
                  <span>info@prestijemlak.com.tr</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-on-primary/10 text-center md:text-left text-on-primary-container text-sm">
          © 2024 Prestij Gayrimenkul Danışmanlığı. Tüm hakları saklıdır. Güven ve Prestijin Adresi.
        </div>
      </div>
    </footer>
  );
}
