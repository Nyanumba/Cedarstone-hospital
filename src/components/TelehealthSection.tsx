import React from 'react';
import { Video, ShieldCheck, Pill, CreditCard, Clock, CheckCircle } from 'lucide-react';

interface TelehealthSectionProps {
  onBookTelehealth: () => void;
}

export const TelehealthSection: React.FC<TelehealthSectionProps> = ({
  onBookTelehealth
}) => {
  return (
    <section id="telehealth" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="telehealth-heading">
      {/* 
        Mandated --glow Gradient Card:
        radial-gradient(circle at 100% 0%, rgba(76,147,219,.28) 0%, rgba(76,147,219,0) 55%),
        linear-gradient(180deg, #1C2430 0%, #141B26 100%)
        Text #EAF0F7 and #A9B6C6, with normal dark primary and outline buttons.
        At most one gradient card per view!
      */}
      <div 
        className="rounded-[16px] p-8 sm:p-12 border border-[#2C3748] shadow-lg relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 100% 0%, rgba(76,147,219,.28) 0%, rgba(76,147,219,0) 55%), linear-gradient(180deg, #1C2430 0%, #141B26 100%)'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span 
              className="font-bold uppercase tracking-[1.2px] text-[13px] font-cardo block"
              style={{ color: '#4C93DB' }}
            >
              CEDARSTONE REMOTE CONSULTATIONS
            </span>

            <h2 
              id="telehealth-heading" 
              className="cs-h1 font-cardo tracking-tight text-[32px] sm:text-[36px]"
              style={{ color: '#EAF0F7' }}
            >
              Consult leading Kenyan specialists securely from anywhere.
            </h2>

            <p 
              className="cs-body text-base sm:text-lg max-w-2xl"
              style={{ color: '#A9B6C6' }}
            >
              Connect with Cedarstone senior physicians for follow-ups, test evaluations, second opinions, and routine paediatric advice via encrypted video. Official digital prescriptions are transmitted instantly to your licensed local pharmacy across Kenya.
            </p>

            {/* Feature highlights: clean unboxed text list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm" style={{ color: '#EAF0F7' }}>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-[#4C93DB] flex-shrink-0" aria-hidden="true" />
                <span>Encrypted HD Video & Audio</span>
              </div>
              <div className="flex items-center gap-2">
                <Pill className="w-4 h-4 text-[#4C93DB] flex-shrink-0" aria-hidden="true" />
                <span>Digital E-Prescriptions & Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#4C93DB] flex-shrink-0" aria-hidden="true" />
                <span>Instant M-PESA & Insurance Settlement</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4C93DB] flex-shrink-0" aria-hidden="true" />
                <span>Strict Patient Data Confidentiality</span>
              </div>
            </div>

            {/* Buttons using dark primary and outline tokens */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onBookTelehealth}
                className="min-h-[44px] px-6 py-2.5 bg-[#2F78C4] hover:bg-[#2568AB] text-white cs-ui rounded-[6px] transition-colors cursor-pointer"
              >
                Schedule virtual consultation
              </button>
              <a
                href="tel:+254206903000"
                className="min-h-[44px] px-5 py-2.5 border border-[#4C93DB] text-[#4C93DB] hover:bg-white/5 cs-ui rounded-[6px] transition-colors flex items-center justify-center"
              >
                Call Telehealth Desk (+254 20 690 3000)
              </a>
            </div>
          </div>

          {/* Right Card: Telehealth Pricing & Protocol */}
          <div className="lg:col-span-5">
            <div className="bg-[#1C2430] border border-[#2C3748] rounded-[12px] p-6 space-y-4">
              <div className="border-b border-[#2C3748] pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base font-cardo" style={{ color: '#EAF0F7' }}>
                    Standard Virtual Session
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#16342B] text-[#6FD3B1] font-bold">
                    KES 2,500
                  </span>
                </div>
                <p className="text-xs mt-1" style={{ color: '#A9B6C6' }}>
                  30-minute one-on-one specialist consultation with full electronic clinical summary.
                </p>
              </div>

              <div className="space-y-2 text-xs" style={{ color: '#EAF0F7' }}>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#6FD3B1] mt-0.5 flex-shrink-0" />
                  <span>Available Mon – Sat, 08:00 to 18:00 East Africa Time</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#6FD3B1] mt-0.5 flex-shrink-0" />
                  <span>Participating specialties: Internal Medicine, Paediatrics, Gynaecology, Nutrition</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#6FD3B1] mt-0.5 flex-shrink-0" />
                  <span>Full payment receipt and diagnosis report for insurance reimbursement</span>
                </div>
              </div>

              <div className="bg-[#141B26] p-3 rounded-[8px] text-[11px] text-[#A9B6C6] border border-[#2C3748]">
                <strong>Emergency Notice:</strong> If you or a loved one is experiencing chest pain, difficulty breathing, or severe bleeding, please call our 24/7 emergency dispatch immediately at <strong>+254 700 000 911</strong> instead of booking a video call.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
