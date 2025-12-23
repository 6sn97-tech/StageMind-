
import React, { useState } from 'react';
import { Check, Sparkles, Building2, Zap, ArrowLeft } from 'lucide-react';

interface PricingPageProps {
  onBookDemo: () => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBookDemo }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "الأساسي",
      monthlyPrice: 199,
      annualPrice: 159,
      desc: "مثالي للمسارح الصغيرة والمستقلة التي تبدأ رحلة البيانات.",
      features: ["توقعات إقبال (3 أيام)", "لوحة تحكم أساسية", "دعم عبر البريد", "ربط نظام تذاكر واحد"],
      icon: <Zap className="w-6 h-6" />,
      color: "border-slate-800/50 hover:border-slate-700"
    },
    {
      name: "الاحترافي",
      monthlyPrice: 499,
      annualPrice: 399,
      desc: "الخيار الأمثل للمسارح التجارية التي تسعى لتعظيم الأرباح.",
      features: ["تسعير ديناميكي كامل", "توقعات إقبال (7 أيام)", "إدارة حشود لحظية", "تكاملات غير محدودة", "دعم تقني مباشر"],
      icon: <Sparkles className="w-6 h-6" />,
      color: "border-electric-teal shadow-[0_0_40px_rgba(100,255,218,0.1)]",
      popular: true
    },
    {
      name: "المؤسسات",
      monthlyPrice: "تواصل",
      annualPrice: "تواصل",
      desc: "حلول مخصصة لدور الأوبرا والشبكات المسرحية الكبرى.",
      features: ["خوارزميات مخصصة", "أمان بيانات فائق (On-premise)", "مدير حساب مخصص", "تدريب ميداني للفريق"],
      icon: <Building2 className="w-6 h-6" />,
      color: "border-amber-gold/50 hover:border-amber-gold"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-gradient-to-b from-[#0A192F] via-[#0D1F3D] to-[#0A192F] relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(100,255,218,0.05),transparent)]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-teal/10 border border-electric-teal/20 mb-8">
            <span className="text-[10px] font-black text-electric-teal tracking-[0.2em] uppercase">باقات مرنة ومدروسة</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8">استثمر في <span className="text-electric-teal">مستقبل مسرحك.</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
            باقات مصممة لترتفع بإيراداتك وكفاءتك التشغيلية. اختر الخطة التي تناسب طموح مؤسستك.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-6 mb-20 flex-row-reverse">
            <span className={`text-sm font-bold transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>شهرياً</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-slate-800 rounded-full p-1 transition-all"
            >
              <div className={`w-6 h-6 bg-electric-teal rounded-full shadow-lg transform transition-transform duration-300 ${isAnnual ? '-translate-x-0' : '-translate-x-8'}`} />
            </button>
            <div className="flex items-center gap-3 flex-row-reverse">
              <span className={`text-sm font-bold transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>سنوياً</span>
              <span className="bg-amber-gold/10 text-amber-gold text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-gold/20 uppercase tracking-tighter">وفر 20%</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 text-right max-w-7xl mx-auto">
            {plans.map((p, i) => (
              <div 
                key={i} 
                className={`group relative glass-card p-10 rounded-[40px] border-2 ${p.color} flex flex-col h-full transition-all duration-500 hover:-translate-y-4`}
              >
                {p.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-electric-teal to-blue-500 text-[#0A192F] px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">الخيار الموصى به</div>
                )}
                
                <div className="flex items-center justify-between mb-10">
                  <div className={`p-4 rounded-2xl bg-slate-800 transition-colors group-hover:bg-slate-700 ${p.popular ? 'text-electric-teal' : 'text-white'}`}>{p.icon}</div>
                  <h3 className="text-2xl font-black">{p.name}</h3>
                </div>

                <div className="mb-8 min-h-[80px] flex flex-col items-end">
                  <div className="flex items-baseline gap-2 flex-row-reverse">
                    <span className="text-5xl font-black text-white transition-all duration-500">
                      {typeof p.monthlyPrice === 'string' 
                        ? p.monthlyPrice 
                        : isAnnual ? `$${p.annualPrice}` : `$${p.monthlyPrice}`
                      }
                    </span>
                    {typeof p.monthlyPrice !== 'string' && (
                      <span className="text-gray-500 font-bold text-sm">/ شهرياً</span>
                    )}
                  </div>
                  {isAnnual && typeof p.monthlyPrice !== 'string' && (
                    <p className="text-[10px] text-electric-teal font-black mt-2 uppercase tracking-widest">تُدفع سنوياً ($ {(p.annualPrice as number) * 12})</p>
                  )}
                </div>

                <p className="text-sm text-gray-400 mb-10 leading-relaxed min-h-[60px]">{p.desc}</p>

                <div className="space-y-4 mb-12 flex-1">
                  {p.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-4 flex-row-reverse">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${p.popular ? 'bg-electric-teal/20 text-electric-teal' : 'bg-slate-800 text-gray-500'}`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-bold text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={onBookDemo}
                  className={`w-full py-5 rounded-2xl font-black text-sm transition-all active:scale-[0.98] ${p.popular ? 'bg-electric-teal text-[#0A192F] hover:shadow-[0_20px_40px_rgba(100,255,218,0.2)]' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                >
                  {p.name === "المؤسسات" ? "اتصل بفريق المبيعات" : "ابدأ الفترة التجريبية"}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-slate-900/30 backdrop-blur-md rounded-[48px] border border-slate-800 max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-10 text-right group">
             <div className="w-20 h-20 bg-amber-gold/10 rounded-3xl text-amber-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500"><Building2 className="w-10 h-10" /></div>
             <div className="flex-1">
               <h4 className="font-black text-2xl mb-3">هل تدير جهة حكومية أو أكاديمية؟</h4>
               <p className="text-gray-400 leading-relaxed font-medium">نحن نؤمن بأهمية الثقافة العامة، لذا نقدم خصومات تصل لـ 40% للمؤسسات التعليمية والجهات الحكومية غير الربحية لدعم الفن المسرحي العربي.</p>
             </div>
             <button onClick={onBookDemo} className="bg-amber-gold text-[#0A192F] px-10 py-4 rounded-2xl font-black whitespace-nowrap hover:shadow-[0_10px_30px_rgba(255,180,0,0.2)] transition-all active:scale-95">تقديم طلب دعم</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
