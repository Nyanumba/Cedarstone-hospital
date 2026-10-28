import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Shield, 
  ShieldAlert, 
  CheckCircle2, 
  CreditCard, 
  PlusSquare, 
  Award, 
  Globe, 
  Headphones, 
  Phone
} from 'lucide-react';

interface InsuranceCard {
  id: string;
  name: string;
  tag: string;
  tagType: 'green' | 'blue';
  subtitle: string;
  category: 'national' | 'corporate' | 'international';
  icon: React.ReactNode;
}

export const InsuranceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'national' | 'corporate' | 'international'>('all');

  const insuranceList: InsuranceCard[] = [
    {
      id: 'sha-nhif',
      name: 'SHA / NHIF',
      tag: 'SHA Empanelled',
      tagType: 'green',
      subtitle: 'Comprehensive & Civil Servant Schemes',
      category: 'national',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
    },
    {
      id: 'jubilee',
      name: 'Jubilee Health',
      tag: 'Instant Pre-Auth',
      tagType: 'blue',
      subtitle: 'Full Inpatient & Outpatient Direct Pay',
      category: 'corporate',
      icon: <Building2 className="w-5 h-5 text-[#0A4F93] dark:text-[#4C93DB]" />
    },
    {
      id: 'cic',
      name: 'CIC Insurance Group',
      tag: 'Biometric Smart',
      tagType: 'blue',
      subtitle: 'Corporate & Retail Care Tier 1',
      category: 'corporate',
      icon: <Shield className="w-5 h-5 text-[#0A4F93] dark:text-[#4C93DB]" />
    },
    {
      id: 'aar',
      name: 'AAR Insurance',
      tag: 'Direct Settlement',
      tagType: 'blue',
      subtitle: 'Specialist Clinics & Emergency Room',
      category: 'corporate',
      icon: <ShieldAlert className="w-5 h-5 text-[#0A4F93] dark:text-[#4C93DB]" />
    },
    {
      id: 'apa',
      name: 'APA Insurance',
      tag: 'Gold Empanelled',
      tagType: 'blue',
      subtitle: 'Maternity, Surgical & Critical Care',
      category: 'corporate',
      icon: <CheckCircle2 className="w-5 h-5 text-[#0A4F93] dark:text-[#4C93DB]" />
    },
    {
      id: 'britam',
      name: 'Britam Health',
      tag: 'Smart Card Enabled',
      tagType: 'blue',
      subtitle: 'Executive Health Screening & Care',
      category: 'corporate',
      icon: <CreditCard className="w-5 h-5 text-[#0A4F93] dark:text-[#4C93DB]" />
    },
    {
      id: 'madison',
      name: 'Madison General',
      tag: 'Direct Admission',
      tagType: 'blue',
      subtitle: 'Inpatient Wards & Pharmacy Settlement',
      category: 'corporate',
      icon: <PlusSquare className="w-5 h-5 text-[#0A4F93] dark:text-[#4C93DB]" />
    },
    {
      id: 'uap',
      name: 'UAP Old Mutual',
      tag: 'Tier 1 Preferred',
      tagType: 'blue',
      subtitle: 'Pan-African & Corporate Packages',
      category: 'corporate',
      icon: <Award className="w-5 h-5 text-[#0A4F93] dark:text-[#4C93DB]" />
    },
    {
      id: 'ga',
      name: 'GA Insurance',
      tag: 'Fast Track Desk',
      tagType: 'blue',
      subtitle: 'Comprehensive Maternity & Surgery',
      category: 'corporate',
      icon: <CheckCircle2 className="w-5 h-5 text-[#0A4F93] dark:text-[#4C93DB]" />
    },
    {
      id: 'cigna',
      name: 'Cigna & Bupa Global',
      tag: 'Global Network',
      tagType: 'green',
      subtitle: 'Allianz, SOS & Diplomatic Missions',
      category: 'international',
      icon: <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
    }
  ];

  const filteredInsurers = insuranceList.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="insurance" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="insurance-heading">
      
      {/* Top Header Row with Title on Left and Direct Line Card on Right */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        
        {/* Left: Eyebrow, H1 Title, and Subtitle */}
        <div className="max-w-2xl">
          <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-2 font-bold text-[#0A4F93] dark:text-[#4C93DB]">
            DIRECT BILLING & COVERAGE
          </span>
          <h2 id="insurance-heading" className="cs-h1 font-cardo text-2xl sm:text-4xl text-[#1C2430] dark:text-[#EAF0F7] mb-3 font-normal">
            Seamless Direct Billing with Kenya’s Leading Insurers
          </h2>
          <p className="cs-body text-sm sm:text-base text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed">
            Instant biometric claims verification and dedicated insurance desks at Main Hospital and outpatient clinics across Upper Hill.
          </p>
        </div>

        {/* Right: Insurance Desk Direct Line Card matching Figma screenshot */}
        <div className="bg-white dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[12px] p-4 flex items-center gap-3.5 shadow-xs flex-shrink-0 self-start lg:self-auto">
          <div className="w-11 h-11 rounded-[8px] bg-[#EEF4FA] dark:bg-[#141B26] text-[#0A4F93] dark:text-[#4C93DB] flex items-center justify-center flex-shrink-0">
            <Headphones className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="block text-xs text-[#4A5B6E] dark:text-[#A9B6C6]">
              Insurance Desk Direct Line
            </span>
            <a 
              href="tel:+254208900110" 
              className="block font-bold text-sm text-[#0A4F93] dark:text-[#4C93DB] hover:underline"
            >
              +254 (0) 20 890 0110
            </a>
            <span className="block text-xs text-[#4A5B6E] dark:text-[#A9B6C6]">
              preauth@cedarstone.co.ke
            </span>
          </div>
        </div>

      </div>

      {/* Filter Tabs matching Figma screenshot */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
            activeTab === 'all'
              ? 'bg-[#0A4F93] text-white shadow-xs'
              : 'bg-white dark:bg-[#1C2430] text-[#1C2430] dark:text-[#EAF0F7] border border-[#D5DEE8] dark:border-[#2C3748] hover:bg-slate-50 dark:hover:bg-[#2C3748]'
          }`}
        >
          All Insurers
        </button>

        <button
          onClick={() => setActiveTab('national')}
          className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
            activeTab === 'national'
              ? 'bg-[#0A4F93] text-white shadow-xs'
              : 'bg-white dark:bg-[#1C2430] text-[#1C2430] dark:text-[#EAF0F7] border border-[#D5DEE8] dark:border-[#2C3748] hover:bg-slate-50 dark:hover:bg-[#2C3748]'
          }`}
        >
          National Schemes (SHA/NHIF)
        </button>

        <button
          onClick={() => setActiveTab('corporate')}
          className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
            activeTab === 'corporate'
              ? 'bg-[#0A4F93] text-white shadow-xs'
              : 'bg-white dark:bg-[#1C2430] text-[#1C2430] dark:text-[#EAF0F7] border border-[#D5DEE8] dark:border-[#2C3748] hover:bg-slate-50 dark:hover:bg-[#2C3748]'
          }`}
        >
          Corporate Inpatient
        </button>

        <button
          onClick={() => setActiveTab('international')}
          className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
            activeTab === 'international'
              ? 'bg-[#0A4F93] text-white shadow-xs'
              : 'bg-white dark:bg-[#1C2430] text-[#1C2430] dark:text-[#EAF0F7] border border-[#D5DEE8] dark:border-[#2C3748] hover:bg-slate-50 dark:hover:bg-[#2C3748]'
          }`}
        >
          International Covers
        </button>
      </div>

      {/* 
        Grid of 10 Insurance Cards matching Figma screenshot (5 columns on desktop)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredInsurers.map((ins) => (
          <article
            key={ins.id}
            className="bg-white dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[12px] p-5 flex flex-col justify-between hover:border-[#0A4F93] dark:hover:border-[#4C93DB] transition-all shadow-xs"
          >
            <div>
              {/* Card Header: Tag on Left, Icon on Right */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                    ins.tagType === 'green'
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                      : 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800'
                  }`}
                >
                  {ins.tag}
                </span>
                <div>{ins.icon}</div>
              </div>

              {/* Insurer Name in Cardo font */}
              <h3 className="cs-h3 font-cardo text-[19px] sm:text-[20px] text-[#1C2430] dark:text-[#EAF0F7] font-bold mb-2">
                {ins.name}
              </h3>

              {/* Coverage Subtitle */}
              <p className="cs-body text-xs text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed">
                {ins.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};
