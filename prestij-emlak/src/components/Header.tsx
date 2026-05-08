import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'İlanlar', path: '/ilanlar' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <header className="bg-surface-container-lowest w-full top-0 sticky border-b border-surface-variant shadow-sm z-50">
      <div className="flex justify-between items-center h-20 px-gutter max-w-[1200px] mx-auto">
        <Link to="/" className="text-2xl font-display font-bold text-primary">
          PRESTİJ EMLAK
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-semibold text-sm tracking-wide transition-colors duration-300 h-full flex items-center border-b-2 ${
                  isActive
                    ? 'text-secondary border-secondary'
                    : 'text-on-surface-variant border-transparent hover:text-secondary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button className="hidden md:inline-flex bg-secondary text-on-secondary font-semibold text-sm px-6 py-3 rounded-sm hover:bg-[#8B7000] transition-colors cursor-pointer">
          Randevu Al
        </button>

        <button 
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-surface-variant p-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block font-semibold text-sm px-4 py-2 rounded ${
                  isActive ? 'bg-secondary/10 text-secondary' : 'text-on-surface-variant'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button className="w-full bg-secondary text-on-secondary font-semibold text-sm px-6 py-3 rounded-sm">
            Randevu Al
          </button>
        </div>
      )}
    </header>
  );
}
