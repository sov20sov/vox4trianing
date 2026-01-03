
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeContext } from './LanguageContext';
import VoxLogo from './VoxLogo';

const Navbar: React.FC = () => {
  const { theme, toggleTheme, t } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.courses, path: '/courses' },
    { name: t.nav.instructors, path: '/instructors' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <VoxLogo size="sm" />
              <span className="text-2xl font-black text-purple-900 dark:text-purple-400 tracking-tighter hidden sm:block group-hover:text-purple-700 transition-colors">معهد فوكس</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 font-bold transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2.5 text-gray-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 transition-all shadow-sm active:scale-90"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <Link
              to="/contact"
              className="bg-[#7B2CBF] text-white px-8 py-2.5 rounded-full font-black hover:bg-[#9D4EDD] transition-all shadow-lg active:scale-95"
            >
              {t.hero.cta}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full"
            >
              {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-slate-300 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-bold text-gray-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#7B2CBF] text-white block text-center py-3 rounded-xl font-black shadow-lg"
              >
                {t.hero.cta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;