
import React, { useContext, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, MapPin, Mail, Facebook } from 'lucide-react';
import { ThemeContext } from './LanguageContext';
import VoxLogo from './VoxLogo';

const Contact: React.FC = () => {
  const { t } = useContext(ThemeContext);

  useEffect(() => {
    document.title = `${t.nav.contact} | فوكس للتدريب`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t.contact.subtitle);
  }, [t]);

  const socialLinks = {
    instagram: "https://www.instagram.com/vox4training?igsh=MXU3dG0weTJoY2pmbg==",
    facebook: "https://m.facebook.com/vox4training/",
    whatsapp: "https://api.whatsapp.com/send/?phone=9647752832127&text&type=phone_number&app_absent=0",
    maps: "https://www.google.com/maps/place/Vox+for+Training+%DA%A4%D9%88%D9%83%D8%B3+%D9%84%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8,+42nd+St,+Baghdad,+Baghdad+Governorate%E2%80%AD/@33.3095857,44.4369115,15z/data=!4m6!3m5!1s0x155781645fc7d491:0x9ae8f41fae13c569!8m2!3d33.3095857!4d44.4369115!16s%2Fg%2F11l689_fjn",
    email: "Vox4Training@gmail.com",
    phone: "+964 775 283 2127"
  };

  return (
    <div className="animate-in fade-in duration-700 py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-10">
            <VoxLogo size="lg" className="shadow-2xl" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2D0066] dark:text-white mb-6">{t.contact.title}</h1>
          <p className="text-2xl text-gray-500 dark:text-slate-400 font-black">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-10">
            <a href={socialLinks.maps} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="bg-purple-50 dark:bg-purple-900/10 p-10 rounded-[3rem] shadow-sm border-2 border-purple-100 dark:border-purple-900/30 flex items-start gap-8 group-hover:bg-white dark:group-hover:bg-slate-900 group-hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-[#7B2CBF] text-white rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="font-black text-2xl text-[#2D0066] dark:text-white mb-2">{t.contact.address_label}</h4>
                  <p className="text-xl text-gray-700 dark:text-slate-300 font-black leading-relaxed">{t.contact.address_details}</p>
                </div>
              </div>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href={`tel:${socialLinks.phone}`} className="bg-gray-50 dark:bg-slate-900 p-8 rounded-[3rem] shadow-sm border border-gray-100 dark:border-slate-800 flex items-center gap-6 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-[#7B2CBF] dark:text-purple-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-black text-lg text-[#2D0066] dark:text-white">اتصل بنا</h4>
                  <p className="text-gray-500 dark:text-slate-400 font-bold">{socialLinks.phone}</p>
                </div>
              </a>

              <a href={`mailto:${socialLinks.email}`} className="bg-gray-50 dark:bg-slate-900 p-8 rounded-[3rem] shadow-sm border border-gray-100 dark:border-slate-800 flex items-center gap-6 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-[#7B2CBF] dark:text-purple-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-black text-lg text-[#2D0066] dark:text-white">البريد الإلكتروني</h4>
                  <p className="text-gray-500 dark:text-slate-400 font-bold break-all">{socialLinks.email}</p>
                </div>
              </a>

              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-gray-50 dark:bg-slate-900 p-8 rounded-[3rem] shadow-sm border border-gray-100 dark:border-slate-800 flex items-center gap-6 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <h4 className="font-black text-lg text-green-700 dark:text-green-400">واتساب</h4>
                  <p className="text-gray-500 dark:text-slate-400 font-bold">ابدأ محادثة فورية</p>
                </div>
              </a>

              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-50 dark:bg-slate-900 p-8 rounded-[3rem] shadow-sm border border-gray-100 dark:border-slate-800 flex items-center gap-6 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Instagram size={28} />
                </div>
                <div>
                  <h4 className="font-black text-lg text-pink-600 dark:text-pink-400">إنستغرام</h4>
                  <p className="text-gray-500 dark:text-slate-400 font-bold">@vox4training</p>
                </div>
              </a>

              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-gray-50 dark:bg-slate-900 p-8 rounded-[3rem] shadow-sm border border-gray-100 dark:border-slate-800 flex items-center gap-6 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all group md:col-span-2">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Facebook size={28} />
                </div>
                <div>
                  <h4 className="font-black text-lg text-blue-700 dark:text-blue-400">فيسبوك</h4>
                  <p className="text-gray-500 dark:text-slate-400 font-bold">Vox for Training</p>
                </div>
              </a>
            </div>
          </div>

          <form className="bg-white dark:bg-slate-900 p-12 md:p-16 rounded-[4rem] shadow-[0_32px_128px_-16px_rgba(45,0,102,0.15)] border border-purple-50 dark:border-slate-800 space-y-8 h-fit lg:sticky lg:top-24 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-black text-[#2D0066] dark:text-purple-400 mb-3 uppercase tracking-widest">{t.contact.formName}</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#7B2CBF] focus:bg-white dark:focus:bg-slate-700 outline-none transition-all font-bold text-lg dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-black text-[#2D0066] dark:text-purple-400 mb-3 uppercase tracking-widest">{t.contact.formEmail}</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#7B2CBF] focus:bg-white dark:focus:bg-slate-700 outline-none transition-all font-bold text-lg dark:text-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-black text-[#2D0066] dark:text-purple-400 mb-3 uppercase tracking-widest">{t.nav.courses}</label>
              <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#7B2CBF] focus:bg-white dark:focus:bg-slate-700 outline-none transition-all font-bold text-lg appearance-none dark:text-white">
                <option>اختر الكورس</option>
                {t.course_list.map((c: any) => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-black text-[#2D0066] dark:text-purple-400 mb-3 uppercase tracking-widest">{t.contact.formMessage}</label>
              <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#7B2CBF] focus:bg-white dark:focus:bg-slate-700 outline-none transition-all font-bold text-lg dark:text-white"></textarea>
            </div>
            <button type="button" className="w-full bg-[#7B2CBF] text-white py-6 rounded-[2rem] font-black text-2xl shadow-2xl shadow-purple-900/20 hover:bg-[#5A189A] transition-all active:scale-95">
              {t.contact.formSubmit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;