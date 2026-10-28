import React from 'react';
import { 
  Users, 
  Cpu, 
  Receipt, 
  HeartHandshake
} from 'lucide-react';

export const InstitutionalDignity: React.FC = () => {
  const pillars = [
    {
      id: 'consultants',
      icon: <Users className="w-5 h-5 text-[#0A4F93]" />,
      iconBg: 'bg-[#EEF4FA]',
      title: 'Senior Specialist Consultants',
      description: 'Every critical patient decision is driven by experienced Kenyan and internationally credentialed consultants with over 15 years of sub-specialty leadership.'
    },
    {
      id: 'tech',
      icon: <Cpu className="w-5 h-5 text-[#0A4F93]" />,
      iconBg: 'bg-[#EEF4FA]',
      title: 'Modern Diagnostic & Theatre Tech',
      description: 'Integrated Siemens health suites, minimally invasive laparoscopy, precision dialysis units, and continuous telemetry monitoring for ICU beds.'
    },
    {
      id: 'pricing',
      icon: <Receipt className="w-5 h-5 text-[#1E7A5F]" />,
      iconBg: 'bg-[#E1F2EB]',
      title: 'Clear KES Pricing & Honest Billing',
      description: 'Upfront itemized fee estimates with zero hidden facility charges. Dedicated patient billing advocates guide your family through SHA and private copays.'
    },
    {
      id: 'compassion',
      icon: <HeartHandshake className="w-5 h-5 text-[#C8222C]" />,
      iconBg: 'bg-[#FBECEC]',
      title: 'Warmth & Dignified Patient Care',
      description: 'Healthcare delivered in a culture of respect, deep listening, privacy, and clinical compassion for patients and their extended family circles.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#D5DEE8]" aria-labelledby="dignity-heading">
      <div className="w-[95%] max-w-[1700px] mx-auto px-2 sm:px-4">
        
        {/* Header matching image_77f96661.png */}
        <div className="max-w-3xl mb-12">
          <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-2 font-bold text-[#0A4F93] uppercase">
            INSTITUTIONAL DIGNITY & CARE
          </span>
          <h2 id="dignity-heading" className="cs-h1 font-cardo text-3xl sm:text-4xl lg:text-[42px] text-[#1C2430] font-normal mb-3">
            Why Kenyan Families Entrust Us With Their Lives
          </h2>
          <p className="cs-body text-sm sm:text-base text-[#4A5B6E] leading-relaxed">
            Cedarstone is built upon four non-negotiable principles that place the safety, comfort, and financial transparency of patients first.
          </p>
        </div>

        {/* 4 Cards Grid matching image_77f96661.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <article 
              key={pillar.id}
              className="bg-white border border-[#D5DEE8] rounded-[16px] p-7 space-y-4 shadow-xs hover:border-[#0A4F93]/40 transition-colors"
            >
              <div className={`w-12 h-12 rounded-[12px] ${pillar.iconBg} flex items-center justify-center`}>
                {pillar.icon}
              </div>

              <h3 className="cs-h3 font-cardo text-xl font-bold text-[#1C2430]">
                {pillar.title}
              </h3>

              <p className="cs-body text-xs sm:text-sm text-[#4A5B6E] leading-relaxed">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
