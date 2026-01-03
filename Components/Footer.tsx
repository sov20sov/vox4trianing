import React, { useContext } from 'react';
import { Instagram, Facebook, MessageCircle, Phone, Globe, Mail, MapPin, Home, Info, BookOpen, Users, Star, ArrowUpRight, Heart } from 'lucide-react';
import { ThemeContext } from './LanguageContext';
import VoxLogo from './VoxLogo';

const Footer: React.FC = () => {
  const { t } = useContext(ThemeContext);

  const socialLinks = {
    instagram: "https://www.instagram.com/vox4training?igsh=MXU3dG0weTJoY2pmbg==",
    facebook: "https://m.facebook.com/vox4training/",
    whatsapp: "https://api.whatsapp.com/send/?phone=9647752832127&text&type=phone_number&app_absent=0",
    maps: "https://www.google.com/maps/place/Vox+for+Training+%DA%A4%D9%88%D9%83%D8%B3+%D9%84%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8,+42nd+St,+Baghdad,+Baghdad+Governorate%E2%80%AD/@33.3095857,44.4369115,15z/data=!4m6!3m5!1s0x155781645fc7d491:0x9ae8f41fae13c569!8m2!3d33.3095857!4d44.4369115!16s%2Fg%2F11l689_fjn",
    email: "Vox4Training@gmail.com",
    phone: "+964 775 283 2127"
  };

  const quickLinks = [
    { name: t.nav.home, path: '#/', icon: Home },
    { name: t.nav.about, path: '#/about', icon: Info },
    { name: t.nav.courses, path: '#/courses', icon: BookOpen },
    { name: t.nav.instructors, path: '#/instructors', icon: Users },
    { name: t.nav.contact, path: '#/contact', icon: MessageCircle },
  ];

  const socialButtons = [
    { href: socialLinks.instagram, icon: Instagram, color: 'from-purple-600 to-pink-600', hoverColor: 'hover:shadow-pink-500/50', label: 'Instagram' },
    { href: socialLinks.facebook, icon: Facebook, color: 'from-blue-600 to-blue-700', hoverColor: 'hover:shadow-blue-500/50', label: 'Facebook' },
    { href: socialLinks.whatsapp, icon: MessageCircle, color: 'from-green-500 to-green-600', hoverColor: 'hover:shadow-green-500/50', label: 'WhatsApp' },
    { href: `mailto:${socialLinks.email}`, icon: Mail, color: 'from-purple-600 to-purple-700', hoverColor: 'hover:shadow-purple-500/50', label: 'Email' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-t border-purple-500/20 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-right">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3 justify-end group">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <VoxLogo size="sm" />
              </div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                فوكس للتدريب
              </h3>
            </div>
            
            <p className="text-slate-300 font-semibold leading-relaxed text-lg">
              {t.hero.subtitle}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-end gap-3 pt-2">
              {socialButtons.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} shadow-lg flex items-center justify-center text-white hover:scale-110 hover:shadow-2xl ${social.hoverColor} transition-all duration-300 transform hover:-translate-y-1`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-white mb-8 text-xl flex items-center gap-2 justify-end">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              روابط سريعة
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    className="group flex items-center gap-3 justify-end text-slate-300 hover:text-white transition-all duration-300"
                  >
                    <span className="font-semibold text-base group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 flex items-center justify-center transition-all duration-300">
                      <link.icon size={18} className="text-purple-400 group-hover:text-purple-300" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Courses */}
          <div>
            <h4 className="font-black text-white mb-8 text-xl flex items-center gap-2 justify-end">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              أبرز الدورات
            </h4>
            <ul className="space-y-4">
              {[0, 1, 3, 5].map((idx) => (
                <li key={idx}>
                  <a
                    href="#/courses"
                    className="group flex items-center gap-2 justify-end text-slate-300 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <span className="font-semibold text-base group-hover:translate-x-2 transition-transform duration-300">
                      {t.course_list[idx].title}
                    </span>
                    <ArrowUpRight size={16} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black text-white mb-8 text-xl flex items-center gap-2 justify-end">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              {t.nav.contact}
            </h4>
            <div className="space-y-5">
              <a
                href={`tel:${socialLinks.phone}`}
                className="group flex items-center gap-3 justify-end text-slate-300 hover:text-white transition-all duration-300"
              >
                <span className="font-semibold text-base group-hover:translate-x-2 transition-transform duration-300" dir="ltr">
                  {socialLinks.phone}
                </span>
                <div className="w-10 h-10 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 flex items-center justify-center transition-all duration-300">
                  <Phone size={18} className="text-green-400 group-hover:text-green-300" />
                </div>
              </a>

              <a
                href={`mailto:${socialLinks.email}`}
                className="group flex items-center gap-3 justify-end text-slate-300 hover:text-white transition-all duration-300"
              >
                <span className="font-semibold text-base group-hover:translate-x-2 transition-transform duration-300 break-all">
                  {socialLinks.email}
                </span>
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 flex items-center justify-center transition-all duration-300">
                  <Mail size={18} className="text-purple-400 group-hover:text-purple-300" />
                </div>
              </a>

              <a
                href={socialLinks.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 justify-end text-slate-300 hover:text-white transition-all duration-300"
              >
                <span className="text-right font-semibold text-base group-hover:translate-x-2 transition-transform duration-300 leading-relaxed">
                  {t.footer.address}
                </span>
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20 flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  <MapPin size={18} className="text-pink-400 group-hover:text-pink-300" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-purple-500/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-slate-900 px-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-3">
          <p className="text-slate-400 text-sm font-semibold flex items-center justify-center gap-2 flex-wrap">
            <span>{t.footer.rights}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;