
import React from 'react';
import { Link, Search, BrainCircuit, LineChart, Layout, ArrowLeft } from 'lucide-react';

interface SolutionProps {
  onExplore?: () => void;
}

const steps = [
  {
    title: "الربط",
    description: "نربط مع نظام التذاكر وكاميرات الأمان الموجودة لديك ببساطة.",
    icon: <Link className="w-10 h-10 text-electric-teal" />
  },
  {
    title: "التحليل",
    description: "الذكاء الاصطناعي يحلل أنماط السلوك، أوقات الوصول، وتفضيلات الجمهور.",
    icon: <Search className="w-10 h-10 text-electric-teal" />
  },
  {
    title: "التوصية",
    description: "نقترح عليك السعر الأمثل وجدول التشغيل وتوزيع العمالة بدقة.",
    icon: <LineChart className="w-10 h-10 text-electric-teal" />
  },
  {
    title: "التحكم",
    description: "تابع كل شيء لحظيًا من لوحة تحكم واحدة وشاملة.",
    icon: <Layout className="w-10 h-10 text-electric-teal" />
  }
];

const Solution: React.FC<SolutionProps> = ({ onExplore }) => {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="relative">
               <div className="absolute -inset-4 bg-electric-teal/20 rounded-full blur-3xl" />
               <div className="relative grid grid-cols-2 gap-4">
                  {steps.map((step, idx) => (
                    <div key={idx} className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
                      <div className="mb-4 bg-slate-800 p-3 rounded-xl">{step.icon}</div>
                      <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                      <p className="text-xs text-gray-400">{step.description}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 text-right">
            <h2 className="text-4xl font-black mb-8 leading-tight">كيف نغير <span className="text-electric-teal">قواعد اللعبة</span> في إدارة مسرحك؟</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              لقد ولى زمن التخمين. نحن نأخذ البيانات الموجودة بالفعل في مسرحك (التذاكر، الكاميرات، الاستطلاعات) ونحولها إلى رؤى استراتيجية تزيد من أرباحك وكفاءتك التشغيلية.
            </p>
            <ul className="space-y-6 mb-10">
              {[
                "زيادة الإيرادات بنسبة تصل إلى 30% عبر التسعير الديناميكي.",
                "تقليل الزحام عند المدخل بنسبة 45%.",
                "تحسين تجربة الجمهور عبر توفير الخدمات في أماكن الطلب."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-right justify-start">
                  <div className="w-6 h-6 rounded-full bg-electric-teal/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-electric-teal" />
                  </div>
                  <span className="text-lg text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={onExplore}
              className="group flex items-center gap-3 text-electric-teal font-black text-xl hover:gap-6 transition-all"
            >
              استعرض الحلول المخصصة <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
