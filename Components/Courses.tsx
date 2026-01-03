
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { ThemeContext } from './LanguageContext';
import VoxLogo from './VoxLogo';

const Courses: React.FC = () => {
  const { t } = useContext(ThemeContext);

  useEffect(() => {
    document.title = `${t.nav.courses} | فوكس للتدريب`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'استكشف مناهجنا التدريبية المعتمدة رسمياً في فوكس للتدريب. نقدم دورات في اللغة الإنجليزية، الآيلتس، والمهارات المهنية.');
  }, [t]);

  return (
    <div className="animate-in fade-in duration-700 pb-24 dark:bg-slate-950 transition-colors duration-300">
      <section className="py-24 bg-[#2D0066] text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-10">
             <VoxLogo size="lg" className="ring-8 ring-white/10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">{t.nav.courses}</h1>
          <p className="text-2xl text-purple-200 font-black">طريقك للنجاح يبدأ من هنا</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {t.course_list.map((course: any, idx: number) => (
              <div key={idx} className="bg-gray-50 dark:bg-slate-900 rounded-[4rem] overflow-hidden shadow-xl hover:shadow-[0_32px_64px_-16px_rgba(123,44,191,0.2)] dark:hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-all group flex flex-col md:flex-row h-full border-4 border-transparent hover:border-purple-100 dark:hover:border-purple-900/50 hover:bg-white dark:hover:bg-slate-800">

                <div className="p-10 md:p-12 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-black text-[#2D0066] dark:text-white mb-6 leading-tight">{course.title}</h3>
                    <p className="text-gray-500 dark:text-slate-400 font-bold leading-relaxed mb-10 text-lg">{course.desc}</p>
                    
                    <div className="space-y-4 mb-12">
                        <p className="text-xs font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-4">متوفر:</p>
                        <div className="flex flex-wrap gap-3">
                            {course.tags.map((tag: string, i: number) => (
                                <div key={i} className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 text-[#7B2CBF] dark:text-purple-400 px-5 py-2.5 rounded-2xl border border-purple-100 dark:border-purple-900/30 shadow-sm">
                                    <CheckCircle2 size={16} />
                                    <span className="text-sm font-black">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                  </div>

                  <Link to="/contact" className="w-full bg-[#7B2CBF] text-white text-center py-5 rounded-[2rem] font-black text-xl hover:bg-[#5A189A] transition-all shadow-xl shadow-purple-900/20 active:scale-95">
                    {t.hero.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;