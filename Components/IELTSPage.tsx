
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Corrected import to use ThemeContext from LanguageContext.tsx
import { ThemeContext } from './LanguageContext';
import VoxLogo from './VoxLogo';

const IELTSPage: React.FC = () => {
  // Use ThemeContext and extract only available properties
  const { t } = useContext(ThemeContext);
  // Based on LanguageContext.tsx, the translation is currently hardcoded to Arabic
  const isRtl = true;

  return (
    <div className="animate-in slide-in-from-right duration-700">
      <section className="py-32 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-[#2D0066]/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
          <div className="flex justify-center mb-12">
            <VoxLogo size="lg" className="shadow-2xl ring-8 ring-white/10" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">IELTS Masterclass</h1>
          <p className="text-2xl text-purple-100 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">{t.ielts_page.subtitle}</p>
          <div className="flex justify-center gap-6">
            <Link to="/contact" className="bg-white text-[#2D0066] px-12 py-5 rounded-3xl font-black text-xl hover:bg-purple-50 shadow-2xl active:scale-95">{isRtl ? "سجل الآن" : "Enroll Now"}</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-black text-[#2D0066] mb-12">{isRtl ? "تحضير شامل" : "Comprehensive Prep"}</h2>
              <div className="space-y-10">
                {[
                  { title: isRtl ? "تدريب المحادثة" : "Speaking Practice", desc: isRtl ? "جلسات محاكاة وجهاً لوجه مع تغذية راجعة من الخبراء." : "Face-to-face mock sessions with expert feedback." },
                  { title: isRtl ? "ورش عمل الكتابة" : "Writing Workshops", desc: isRtl ? "تعلم كيفية هيكلة المهام (Task 1 & 2) بشكل مثالي." : "Learn how to structure Task 1 and Task 2 perfectly." },
                  { title: isRtl ? "الاستماع والقراءة" : "Listening & Reading", desc: isRtl ? "استراتيجيات مجربة لإدارة الوقت وإيجاد الإجابات بسرعة." : "Proven strategies to manage time and find answers fast." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-purple-50 text-[#7B2CBF] rounded-3xl flex items-center justify-center font-black text-2xl flex-shrink-0 group-hover:bg-[#7B2CBF] group-hover:text-white transition-all transform group-hover:rotate-12">{i + 1}</div>
                    <div>
                      <h4 className="font-black text-2xl text-[#2D0066] mb-2">{item.title}</h4>
                      <p className="text-gray-500 font-medium text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-12 md:p-16 rounded-[4rem] border-4 border-purple-50">
              <h3 className="text-3xl font-black text-[#2D0066] mb-8">{isRtl ? "دعم التسجيل" : "Registration Support"}</h3>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10">{isRtl ? "نحن لا نكتفي بالتدريس؛ بل نتولى الجانب الإداري أيضاً. فوكس هو مركز دعم رسمي للتسجيل في الآيلتس." : "We don't just teach you; we handle the paperwork. Vox is an official support center for IELTS registration."}</p>
              <ul className="space-y-6 mb-12">
                <li className="flex items-center gap-4 font-black text-[#2D0066] text-lg">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✅</div>
                  {isRtl ? "حجز سهل وبدون عناء" : "Hassle-free booking"}
                </li>
                <li className="flex items-center gap-4 font-black text-[#2D0066] text-lg">
                   <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✅</div>
                  {isRtl ? "خيارات متعددة للتواريخ والمراكز" : "Choice of dates and centers"}
                </li>
                <li className="flex items-center gap-4 font-black text-[#2D0066] text-lg">
                   <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✅</div>
                  {isRtl ? "نصائح احترافية حول النوع الأكاديمي أو العام" : "Professional advice on Academic vs General"}
                </li>
              </ul>
              <div className="p-8 bg-white rounded-[2rem] border-2 border-purple-100 shadow-xl shadow-purple-900/5">
                <p className="text-lg font-black text-[#7B2CBF] mb-2">{isRtl ? "تبدأ الدورات الجديدة قريباً" : "Next Session Starting Soon"}</p>
                <p className="text-gray-400 font-bold">{isRtl ? "تواصل مع مستشارينا لمعرفة التوفر الحالي." : "Contact our advisors for current availability."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IELTSPage;