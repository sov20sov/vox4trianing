
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './LanguageContext';
import VoxLogo from './VoxLogo';
import { Star, Award } from 'lucide-react';

const Instructors: React.FC = () => {
  const { t } = useContext(ThemeContext);

  useEffect(() => {
    document.title = `${t.nav.instructors} | فوكس للتدريب`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t.instructors.subtitle);
  }, [t]);

  return (
    <div className="animate-in fade-in duration-700 bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      {/* Header Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-purple-50 dark:bg-purple-900/10 rounded-br-[10rem] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-8">
                <VoxLogo size="lg" className="shadow-2xl" />
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-[#2D0066] dark:text-white mb-6 tracking-tighter">
                {t.instructors.title}
            </h1>
            <p className="text-2xl text-gray-500 dark:text-slate-400 font-black max-w-2xl mx-auto leading-relaxed">
                {t.instructors.subtitle}
            </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {t.instructors.members.map((member: any, idx: number) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-2 bg-[#7B2CBF] rounded-[4rem] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                
                <div className="relative bg-white dark:bg-slate-900 rounded-[4rem] overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                  <div className="relative h-96 overflow-hidden">
                     <div className="absolute top-0 left-0 w-[80%] h-full bg-[#7B2CBF] rounded-r-[10rem] opacity-10 group-hover:opacity-20 transition-opacity" />
                     <img 
                       src={member.image} 
                       alt={member.name} 
                       className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110" 
                     />
                     <div className="absolute bottom-6 right-6 left-6">
                        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30 inline-block">
                           <span className="text-[#7B2CBF] dark:text-purple-400 font-black text-sm uppercase tracking-widest">{member.role}</span>
                        </div>
                     </div>
                  </div>

                  <div className="p-10 flex-grow">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-black text-[#2D0066] dark:text-white">{member.name}</h3>
                        <div className="flex text-yellow-400">
                             <Star size={18} fill="currentColor" />
                        </div>
                    </div>
                    <p className="text-gray-500 dark:text-slate-400 text-lg font-bold leading-relaxed mb-8">
                        {member.bio}
                    </p>
                    
                    <div className="flex gap-4 " >
                        <div className="mr-auto">
                            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-black text-sm uppercase">
                                <Award size={18} />
                                مدرب معتمد
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black text-[#2D0066] dark:text-white mb-8">هل أنت مستعد لبدء رحلتك؟</h2>
            <p className="text-xl text-gray-500 dark:text-slate-400 font-black mb-12">انضم إلى أحد كورساتنا اليوم تحت إشراف خبرائنا.</p>
            <div className="flex flex-col sm:flex-row-reverse justify-center gap-6">
                 <a href="#/courses" className="bg-[#7B2CBF] text-white px-12 py-5 rounded-3xl font-black text-xl hover:bg-[#5A189A] transition-all shadow-xl active:scale-95">
                    استعرض الكورسات
                 </a>
                 <a href="#/contact" className="bg-white dark:bg-slate-800 text-[#7B2CBF] dark:text-purple-400 border-4 border-purple-100 dark:border-purple-900/30 px-12 py-5 rounded-3xl font-black text-xl hover:bg-purple-50 dark:hover:bg-slate-700 transition-all active:scale-95">
                    {t.nav.contact}
                 </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;