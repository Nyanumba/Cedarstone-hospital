import React from 'react';
import { 
  Heart, 
  Baby, 
  Activity, 
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  Sparkles
} from 'lucide-react';

interface CentreSpecialty {
  id: string;
  category: string;
  title: string;
  description: string;
  schedule: string;
  icon: React.ReactNode;
  iconBg: string;
}

export const CentresOfExcellence: React.FC = () => {
  const centres: CentreSpecialty[] = [
    {
      id: 'cardiac',
      category: 'CARDIAC SCIENCES',
      title: 'Cardiology & Catheterization Lab',
      description: '24/7 primary angioplasty, electrophysiology, echocardiography, and open heart surgery suites led by senior cardiovascular fellows.',
      schedule: 'Mon – Sat (8:00 AM – 5:00 PM)',
      icon: <Heart className="w-5 h-5 text-[#C8222C]" />,
      iconBg: 'bg-[#FBECEC]'
    },
    {
      id: 'mother-child',
      category: 'MOTHER & CHILD',
      title: 'Maternity & Level 3 NICU',
      description: 'Dignified birthing suites, water birth facilities, and an advanced 16-cot Neonatal ICU with neonatal sub-specialists on 24-hour call.',
      schedule: 'Daily 24-Hour Obstetric Care',
      icon: <Baby className="w-5 h-5 text-[#0A4F93]" />,
      iconBg: 'bg-[#EEF4FA]'
    },
    {
      id: 'ortho',
      category: 'SURGICAL SCIENCES',
      title: 'Orthopaedics & Joint Replacement',
      description: 'Total hip & knee arthroplasty, arthroscopic sports medicine, spinal stabilization surgery, and full-spectrum rehabilitation physiotherapy.',
      schedule: 'Tue, Thu & Sat Specialist Clinics',
      icon: <Activity className="w-5 h-5 text-[#0A4F93]" />,
      iconBg: 'bg-[#EEF4FA]'
    },
    {
      id: 'icu',
      category: 'INTENSIVE MEDICINE',
      title: 'Critical Care & Level 5 ICU',
      description: '18-bed closed multi-disciplinary ICU with negative pressure isolation suites, continuous tele-ICU haemodynamic monitoring, and 1:1 specialist nurse ratio.',
      schedule: 'Continuous 24/7 Intensivist Coverage',
      icon: <ShieldCheck className="w-5 h-5 text-[#1E7A5F]" />,
      iconBg: 'bg-[#E1F2EB]'
    },
    {
      id: 'radiology',
      category: 'DIAGNOSTIC EXCELLENCE',
      title: 'Radiology & Advanced Imaging',
      description: '1.5T ultra-quiet MRI, 128-slice low-dose dual-source CT, 4D Doppler ultrasound, and digital fluoroscopy with immediate sub-specialist reporting.',
      schedule: '24/7 Emergency & Scheduled Scans',
      icon: <Sparkles className="w-5 h-5 text-[#0A4F93]" />,
      iconBg: 'bg-[#EEF4FA]'
    },
    {
      id: 'trauma',
      category: 'EMERGENCY & TRAUMA',
      title: 'Level 5 Resuscitation & Trauma Centre',
      description: 'Immediate red-triage bay readiness, on-site cross-match blood bank, laminar emergency operating theaters, and swift ambulance transport across Nairobi.',
      schedule: 'Open 24 Hours • 365 Days',
      icon: <Stethoscope className="w-5 h-5 text-[#C8222C]" />,
      iconBg: 'bg-[#FBECEC]'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#D5DEE8]" aria-labelledby="centres-heading">
      <div className="w-[95%] max-w-[1700px] mx-auto px-2 sm:px-4">
        
        {/* Section Header matching image_d3e4a371.png */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-2 font-bold text-[#C8222C] uppercase">
            CENTRES OF EXCELLENCE
          </span>
          <h2 id="centres-heading" className="cs-h1 font-cardo text-3xl sm:text-4xl lg:text-[42px] text-[#0B2545] font-normal mb-3">
            Advanced Clinical Specialties
          </h2>
          <p className="cs-body text-sm sm:text-base text-[#4A5B6E] leading-relaxed">
            Equipped with cutting-edge medical technologies and led by Kenya’s foremost consultant surgeons, physicians, and pediatric specialists.
          </p>
        </div>

        {/* 3x2 Grid matching image_d3e4a371.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centres.map((item) => (
            <article 
              key={item.id}
              className="bg-white border border-[#D5DEE8] rounded-[16px] overflow-hidden shadow-xs hover:shadow-md hover:border-[#0A4F93]/50 transition-all flex flex-col justify-between"
            >
              <div className="p-7 space-y-4">
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-[12px] ${item.iconBg} flex items-center justify-center`}>
                  {item.icon}
                </div>

                {/* Eyebrow / Category */}
                <span className="block text-[11px] font-bold tracking-[1.2px] text-[#4A5B6E] uppercase">
                  {item.category}
                </span>

                {/* Card Title */}
                <h3 className="cs-h3 font-cardo text-2xl font-bold text-[#1C2430]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="cs-body text-xs sm:text-sm text-[#4A5B6E] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Next Consultation Clinic Strip matching screenshot */}
              <div className="bg-[#EEF4FA]/80 border-t border-[#D5DEE8] px-7 py-3.5 flex items-center justify-between text-xs text-[#0A4F93] font-semibold">
                <div className="flex items-center gap-2">
                  <span className="text-[#4A5B6E] font-medium">Clinic Schedule:</span>
                  <span className="font-bold text-[#0A4F93]">{item.schedule}</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white border border-[#D5DEE8] flex items-center justify-center text-[#0A4F93]">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
