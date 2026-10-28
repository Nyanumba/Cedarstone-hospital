import React, { useState } from 'react';
import { ArrowRight, Phone, ShieldCheck, Mail, MapPin } from 'lucide-react';

export const ConsultantDirectory: React.FC = () => {
  const [showFullRoster, setShowFullRoster] = useState(false);

  const consultants = [
    {
      id: 'dr-otieno',
      role: 'Chief of Cardiology',
      specialty: 'Cardiac Sciences & Cath Lab',
      name: 'Dr. Daniel Otieno',
      qualifications: 'MBChB, MMed (Int Med), FACC, FSCAI',
      image: '/src/assets/images/dr_daniel_otieno_cathlab_1793214283753.jpg'
    },
    {
      id: 'dr-chebet',
      role: 'Director of Paediatrics',
      specialty: 'Pediatric Centre & Neonatology',
      name: 'Dr. Grace Chebet',
      qualifications: 'MBChB, MMed (Paed), Fellow Neonatology',
      image: '/src/assets/images/dr_grace_chebet_pediatrics_1793214340414.jpg'
    },
    {
      id: 'prof-ndegwa',
      role: 'Head of Orthopaedic Surgery',
      specialty: 'Trauma & Orthopaedic Sciences',
      name: 'Prof. Joseph Ndegwa',
      qualifications: 'MBChB, MMed (Surg), FCS (ECSA), FRCS',
      image: '/src/assets/images/prof_joseph_ndegwa_ortho_1793214355569.jpg'
    }
  ];

  return (
    <section id="consultants" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#D5DEE8]" aria-labelledby="consultants-heading">
      <div className="w-[95%] max-w-[1700px] mx-auto px-2 sm:px-4">
        
        {/* Top Header Row matching image_4b9acc70.png */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-2 font-bold text-[#C8222C] uppercase">
              CONSULTANT DIRECTORY
            </span>
            <h2 id="consultants-heading" className="cs-h1 font-cardo text-3xl sm:text-4xl lg:text-[42px] text-[#0B2545] font-normal mb-3">
              Meet Our Senior Clinical Leadership
            </h2>
            <p className="cs-body text-sm sm:text-base text-[#4A5B6E] leading-relaxed">
              Renowned Kenyan medical educators and sub-specialists guiding clinical quality across Nairobi and beyond.
            </p>
          </div>

          <button
            onClick={() => setShowFullRoster(!showFullRoster)}
            className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-[8px] bg-[#EEF4FA] hover:bg-[#DCE9F7] text-[#0A4F93] font-bold text-xs sm:text-sm transition-colors self-start lg:self-auto cursor-pointer"
          >
            <span>{showFullRoster ? 'Hide Faculty Roster' : 'View All 120+ Specialists'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Consultant Cards Grid matching image_4b9acc70.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultants.map((doc) => (
            <article 
              key={doc.id}
              className="bg-white border border-[#D5DEE8] rounded-[16px] overflow-hidden shadow-xs hover:shadow-md hover:border-[#0A4F93]/50 transition-all flex flex-col justify-between"
            >
              {/* Photo Area with Top Role Pill */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
                <img
                  src={doc.image}
                  alt={`${doc.name}, ${doc.role}`}
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#0A4F93] text-white text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-[6px] shadow-sm">
                  {doc.role}
                </span>
              </div>

              {/* Doctor Details */}
              <div className="p-6 space-y-2">
                <span className="block text-xs font-semibold text-[#4A5B6E]">
                  {doc.specialty}
                </span>

                <h3 className="cs-h3 font-cardo text-2xl font-bold text-[#1C2430]">
                  {doc.name}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#4A5B6E] font-medium leading-relaxed">
                  {doc.qualifications}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Optional Full Faculty Roster Drawer */}
        {showFullRoster && (
          <div className="mt-10 bg-white border border-[#D5DEE8] rounded-[16px] p-6 sm:p-8 space-y-4 shadow-sm animate-in fade-in">
            <h4 className="font-bold text-lg font-cardo text-[#1C2430]">
              Full Hospital Faculty & Consultative Specialties (120+ Medical Officers & Fellows)
            </h4>
            <p className="text-xs sm:text-sm text-[#4A5B6E]">
              All Cedarstone consultants are recognized fellows of the Kenya Medical Practitioners and Dentists Council (KMPDC) and international royal colleges. For specialist clinic booking consultations, contact the Central Clinical Coordination Desk at <strong>+254 (0) 20 890 0000</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-3 text-xs text-[#1C2430]">
              <div className="p-3 bg-[#EEF4FA] rounded-[8px]">
                <strong className="block text-[#0A4F93]">Dr. Amina Wanjiru</strong>
                <span>Maternal-Fetal Medicine (OBGYN)</span>
              </div>
              <div className="p-3 bg-[#EEF4FA] rounded-[8px]">
                <strong className="block text-[#0A4F93]">Dr. Peter Kamau</strong>
                <span>Pulmonology & Critical Care</span>
              </div>
              <div className="p-3 bg-[#EEF4FA] rounded-[8px]">
                <strong className="block text-[#0A4F93]">Dr. Achieng Omondi</strong>
                <span>Cardiac & Neuro Anesthesiology</span>
              </div>
              <div className="p-3 bg-[#EEF4FA] rounded-[8px]">
                <strong className="block text-[#0A4F93]">Dr. Eric Kiprono</strong>
                <span>Interventional Radiology</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
