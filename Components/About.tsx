
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './LanguageContext';
import VoxLogo from './VoxLogo';
import { Target, Eye, UserPlus, Star } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useContext(ThemeContext);

  useEffect(() => {
    document.title = `${t.nav.about} | فوكس للتدريب`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t.about.description);
  }, [t]);

  return (
    <div className="animate-in fade-in duration-700 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Visual Header Decoration */}
      <div className="relative h-20 overflow-hidden opacity-50">
        <svg viewBox="0 0 1440 320" className="absolute top-0 w-full rotate-180">
          <path fill="#7B2CBF" fillOpacity="0.2" d="M0,64L48,85.3C96,107,192,149,288,144C384,139,480,85,576,69.3C672,53,768,75,864,101.3C960,128,1056,160,1152,149.3C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-black text-[#7B2CBF] dark:text-purple-400 mb-8">{t.about.title}</h1>
          <p className="text-2xl text-gray-700 dark:text-slate-300 leading-relaxed font-black mb-10">
            {t.about.description}
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/10 p-10 rounded-[3rem] border-4 border-purple-100 dark:border-purple-900/30 shadow-xl transition-colors duration-300">
            <div className="flex justify-center mb-6">
              <Target size={48} className="text-[#7B2CBF] dark:text-purple-400" />
            </div>
            <h2 className="text-3xl font-black text-[#2D0066] dark:text-white mb-8">{t.about.goals_title}</h2>
            <ul className="space-y-6">
              {t.about.goals.map((goal: string, i: number) => (
                <li key={i} className="flex items-center gap-4 text-xl font-black text-gray-700 dark:text-slate-300 justify-center">
                  <span className="w-3 h-3 bg-[#7B2CBF] dark:bg-purple-400 rounded-full shrink-0" />
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#7B2CBF] dark:text-purple-400 mb-6">{t.about.why_title}</h2>
            <div className="w-24 h-2 bg-[#FFD700] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 gap-6">
            {t.about.why_points.map((point: string, i: number) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white dark:bg-slate-900 rounded-3xl border-2 border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-[#7B2CBF] dark:text-purple-400 rounded-2xl flex items-center justify-center shrink-0">
                  <Star fill="currentColor" size={24} />
                </div>
                <span className="text-lg md:text-xl font-black text-gray-700 dark:text-slate-300">{point}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#2D0066] text-white p-12 md:p-20 rounded-[4rem] text-center mb-24 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-700/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <Eye size={64} className="text-[#FFD700]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">{t.about.vision_title}</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-black opacity-90">
              {t.about.vision_text}
            </p>
          </div>
        </section>

        <section className="text-center mb-24">
          <div className="flex justify-center mb-8">
            <UserPlus size={56} className="text-[#7B2CBF] dark:text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#7B2CBF] dark:text-purple-400 mb-12">{t.about.registration_title}</h2>
          <div className="space-y-10 relative">
            <div className="absolute top-0 bottom-0 right-6 w-1 bg-purple-100 dark:bg-purple-900/30 md:hidden" />
            {t.about.registration_steps.map((step: string, i: number) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-6 group">
                <div className="w-16 h-16 bg-[#7B2CBF] text-white rounded-full flex items-center justify-center font-black text-2xl shadow-xl z-10 shrink-0 transform group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <div className="p-8 bg-gray-50 dark:bg-slate-900 rounded-[2.5rem] flex-grow border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-900/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all w-full">
                  <p className="text-xl md:text-2xl font-black text-[#2D0066] dark:text-white">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col items-center gap-4 py-12 opacity-80">
          <VoxLogo size="lg" />
          <p className="font-black text-purple-900 dark:text-purple-400 tracking-widest text-xl uppercase">Vox Training</p>
        </div>
      </div>
    </div>
  );
};

export default About;