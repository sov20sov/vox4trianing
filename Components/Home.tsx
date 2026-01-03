
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, BookOpen, GraduationCap, Globe, Building2, Quote, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeContext } from './LanguageContext';
import VoxLogo from '../Components/VoxLogo'; 

const Home: React.FC = () => {
  const { t } = useContext(ThemeContext);

  useEffect(() => {
    document.title = `فوكس للتدريب | ${t.hero.title}`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t.hero.subtitle);
  }, [t]);

  const serviceHighlights = [
    { title: t.services.english.title, desc: t.services.english.desc, icon: <BookOpen className="w-8 h-8" /> },
    { title: t.services.ielts.title, desc: t.services.ielts.desc, icon: <GraduationCap className="w-8 h-8" /> },
    { title: "ترجمة نصية", desc: "خدمات ترجمة احترافية.", icon: <Globe className="w-8 h-8" /> },
    { title: "تأجير القاعات", desc: "قاعات مجهزة للتدريب.", icon: <Building2 className="w-8 h-8" /> },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <motion.section 
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-purple-600/10"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: '200% 200%' }}
        />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-purple-50/50 dark:bg-purple-900/10 -z-10 rounded-r-[10rem] hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-right">
              <div className="mb-12 flex justify-end">
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-[#2D0066] dark:text-white leading-[1.1] mb-8 tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-slate-400 mb-12 max-w-xl ml-auto leading-relaxed font-bold">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row-reverse gap-6">
                <Link to="/contact" className="bg-[#7B2CBF] text-white px-12 py-5 rounded-3xl font-black text-xl hover:bg-[#5A189A] transition-all shadow-2xl shadow-purple-400/30 hover:-translate-y-1 flex items-center justify-center gap-3 active:scale-95">
                  {t.hero.cta}
                  <ArrowLeft size={24} />
                </Link>
                <Link to="/courses" className="bg-white dark:bg-slate-900 text-[#7B2CBF] dark:text-purple-400 border-4 border-purple-50 dark:border-purple-900/30 px-12 py-5 rounded-3xl font-black text-xl hover:bg-purple-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center active:scale-95">
                  {t.nav.courses}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative group">
              <div className="absolute -inset-4 bg-purple-200/20 dark:bg-purple-900/20 blur-3xl rounded-full" />
              <div className="w-full h-[650px] rounded-[5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 relative z-10">
                <img src="/image/vox.jpg" alt="طلاب يتعلمون" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
              </div>
              <motion.div 
                className="absolute -bottom-10 -right-10 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 flex items-center gap-6 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div 
                  className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-[#7B2CBF] dark:text-purple-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Star fill="currentColor" size={32} />
                </motion.div>
                <div>
                  <p className="font-black text-2xl text-[#2D0066] dark:text-white">4.9 / 5</p>
                  <p className="text-gray-400 dark:text-slate-500 font-black tracking-wide uppercase text-xs">رضا الطلاب</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#2D0066] dark:text-white mb-6">{t.services.title}</h2>
            <div className="w-24 h-2 bg-[#7B2CBF] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {serviceHighlights.map((card, idx) => (
              <motion.div 
                key={idx} 
                className="bg-gray-50 dark:bg-slate-900 p-10 rounded-[3rem] border-4 border-transparent hover:border-purple-100 dark:hover:border-purple-900/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 text-[#7B2CBF] dark:text-purple-400 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:bg-[#7B2CBF] group-hover:text-white transition-all transform group-hover:rotate-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black text-[#2D0066] dark:text-white mb-4">{card.title}</h3>
                <p className="text-gray-500 dark:text-slate-400 text-base leading-relaxed font-bold">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-16">
                <div className="text-right">
                    <h2 className="text-4xl md:text-5xl font-black text-[#2D0066] dark:text-white mb-4">{t.nav.courses}</h2>
                    <p className="text-xl text-gray-500 dark:text-slate-400 font-bold">استكشف مناهجنا التدريبية المعتمدة رسمياً.</p>
                </div>
                <Link to="/courses" className="text-[#7B2CBF] dark:text-purple-400 font-black text-lg flex items-center gap-3 hover:gap-5 transition-all">
                    عرض الكل <ArrowLeft size={24} />
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {t.course_list.slice(0, 3).map((course: any, idx: number) => (
                    <motion.div 
                      key={idx} 
                      className="bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                  <div className="h-60 overflow-hidden relative">
                      <img 
                          src={course.image} // ← استخدم الصورة من البيانات
                          alt={course.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                      />
                      <div className="absolute top-6 right-6">
                          <span className="bg-[#7B2CBF] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                              {course.level}
                          </span>
                      </div>
                  </div>
                        <div className="p-10">
                            <h3 className="text-2xl font-black text-[#2D0066] dark:text-white mb-4">{course.title}</h3>
                            <p className="text-gray-500 dark:text-slate-400 font-bold line-clamp-2 mb-6 leading-relaxed">{course.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {course.tags.slice(0, 2).map((tag: string, i: number) => (
                                    <span key={i} className="text-xs font-black uppercase tracking-widest bg-purple-50 dark:bg-purple-900/30 text-[#7B2CBF] dark:text-purple-400 px-4 py-2 rounded-2xl">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-24 bg-[#2D0066] text-white overflow-hidden relative transition-colors duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2">
              <h2 className="text-5xl font-black mb-10 leading-tight">{t.about.why_title}</h2>
              <div className="space-y-8">
                {t.about.why_points.slice(0, 4).map((point: string, idx: number) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center gap-6 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-[#2D0066] transition-all">
                      <Star size={20} fill="currentColor" />
                    </div>
                    <span className="text-xl font-black tracking-tight">{point}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/about" className="inline-block mt-16 bg-white text-[#2D0066] px-12 py-5 rounded-3xl font-black text-xl hover:bg-purple-50 transition-all shadow-2xl">
                اعرف المزيد
              </Link>
            </div>
            <div className="order-1 relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl rotate-3 border-8 border-white/10 group">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="مجتمع فوكس" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="testimonials">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#2D0066] dark:text-white mb-4">{t.nav.testimonials}</h2>
            <p className="text-xl text-purple-600 dark:text-purple-400 font-black flex items-center justify-center gap-2">
               <Instagram size={24} /> 
               من قصص نجاح طلابنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.voxie_reviews.map((rev: any, idx: number) => (
              <motion.div 
                key={idx} 
                className="relative group perspective-1000"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 dark:from-purple-600 dark:via-pink-600 dark:to-purple-700 p-1.5 rounded-[2.5rem] shadow-2xl transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
                  <div className="bg-white dark:bg-slate-900 h-full rounded-[2.2rem] p-8 flex flex-col relative overflow-hidden transition-colors duration-300">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                           <VoxLogo size="sm" className="ring-2 ring-purple-100 dark:ring-purple-900" />
                           <div>
                               <p className="font-black text-sm text-purple-900 dark:text-purple-400 leading-none">Vox Training</p>
                               <p className="text-[10px] text-gray-400 dark:text-slate-500 font-black uppercase tracking-widest">{rev.date}</p>
                           </div>
                        </div>
                        <div className="text-purple-200 dark:text-purple-900">
                            <Quote size={32} fill="currentColor" opacity={0.2} />
                        </div>
                    </div>

                    <div className="flex-grow">
                        <p className="text-lg md:text-xl font-black text-gray-800 dark:text-slate-300 leading-relaxed mb-6 text-right">
                            "{rev.text}"
                        </p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-purple-50 dark:border-slate-800 flex items-center justify-between">
                        <span className="font-black text-[#7B2CBF] dark:text-purple-400 text-lg">@{rev.name}</span>
                        <div className="flex text-yellow-400">
                             {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact" className="bg-[#7B2CBF] text-white px-12 py-5 rounded-3xl font-black text-xl hover:bg-[#5A189A] transition-all shadow-2xl inline-flex items-center gap-3 group">
               ابدأ قصتك معنا
               <ArrowLeft className="transition-transform group-hover:-translate-x-2" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;