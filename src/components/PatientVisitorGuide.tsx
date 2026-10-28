import React from 'react';
import { 
  Clock, 
  Sun, 
  Sunset, 
  Users, 
  Baby, 
  Activity, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  Phone, 
  FileText,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { HOSPITAL_CONTACTS } from '../data/hospitalData';

export const PatientVisitorGuide: React.FC = () => {
  return (
    <section id="visitors" className="py-16 sm:py-20 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto" aria-labelledby="visiting-heading">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="cs-eyebrow font-cardo block mb-2 text-xs font-bold text-[#0A4F93] tracking-[1.4px]">
          PATIENT CARE & HOSPITAL HOSPITALITY
        </span>
        <h2 id="visiting-heading" className="cs-h1 font-cardo text-3xl sm:text-4xl text-[#1C2430] font-normal mb-3">
          Visiting Hours & Patient Care Guide
        </h2>
        <p className="cs-lead font-cardo text-[#4A5B6E] text-base sm:text-lg">
          We warmly welcome family and friends. To protect patient rest and support fast clinical healing, our inpatient visiting hours are structured into two daily sessions.
        </p>
      </div>

      {/* =========================================================================
          SIMPLIFIED DAILY VISITING HOURS (Easy to read for any patient or relative)
      ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Session 1: Lunchtime Visiting */}
        <div className="bg-white border-2 border-[#0A4F93]/30 rounded-[16px] p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 bg-[#0A4F93] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-[12px]">
            Daily Session 1
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#0A4F93]">
              <div className="w-12 h-12 rounded-[10px] bg-[#EEF4FA] flex items-center justify-center">
                <Sun className="w-6 h-6 text-[#0A4F93]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#4A5B6E] block">
                  Afternoon Lunchtime Visit
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-cardo text-[#1C2430]">
                  12:30 PM to 2:00 PM
                </h3>
              </div>
            </div>

            <div className="border-t border-[#D5DEE8] pt-4 space-y-2 text-xs sm:text-sm text-[#1C2430]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Who can visit:</strong> Family members, friends, and care partners (up to 2 persons per bedside).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Best for:</strong> Bringing lunch, warm companionship, and brief lunchtime recovery check-ins.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Wards open:</strong> General Adult Wards, Pediatric Wings, Day Surgery & Post-Natal Suites.</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#D5DEE8] text-xs text-[#4A5B6E]">
            Quiet rest period begins promptly at <strong>2:00 PM</strong> for scheduled medical therapies.
          </div>
        </div>

        {/* Session 2: Evening Visiting */}
        <div className="bg-white border-2 border-[#0A4F93]/30 rounded-[16px] p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 bg-[#0A4F93] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-[12px]">
            Daily Session 2
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#0A4F93]">
              <div className="w-12 h-12 rounded-[10px] bg-[#EEF4FA] flex items-center justify-center">
                <Sunset className="w-6 h-6 text-[#0A4F93]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#4A5B6E] block">
                  Evening After-Work Visit
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-cardo text-[#1C2430]">
                  4:30 PM to 6:30 PM
                </h3>
              </div>
            </div>

            <div className="border-t border-[#D5DEE8] pt-4 space-y-2 text-xs sm:text-sm text-[#1C2430]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Who can visit:</strong> Immediate family, relatives, and colleagues (2 visitors at bedside).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Best for:</strong> After-work visits, receiving evening physician updates, and night preparation.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Wards open:</strong> All Inpatient Wards across Upper Hill Campus.</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#D5DEE8] text-xs text-[#4A5B6E]">
            Evening medication rounds and night-time rest commence at <strong>6:30 PM</strong>.
          </div>
        </div>

      </div>

      {/* =========================================================================
          SPECIALTY WARDS QUICK GUIDE (Maternity & ICU)
      ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Maternity */}
        <div className="bg-[#EEF4FA]/60 border border-[#D5DEE8] rounded-[12px] p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-[#0A4F93]">
            <Baby className="w-5 h-5 text-[#0A4F93]" />
            <h4 className="font-bold text-base font-cardo text-[#1C2430]">
              Maternity & New Mothers Pavilion
            </h4>
          </div>
          <p className="text-xs text-[#4A5B6E] leading-relaxed">
            <strong>Fathers / Named Primary Birth Partner:</strong> Allowed <strong>24 hours</strong> unrestricted access in private birthing and recovery suites to support mother and newborn bonding.
          </p>
          <div className="bg-white p-3 rounded-[8px] border border-[#D5DEE8] text-xs space-y-1 text-[#1C2430]">
            <div><strong>Extended Visiting for Grandparents & Relatives:</strong></div>
            <div className="text-[#0A4F93] font-bold">10:00 AM – 12:00 PM & 4:30 PM – 6:30 PM</div>
          </div>
        </div>

        {/* ICU & HDU */}
        <div className="bg-[#EEF4FA]/60 border border-[#D5DEE8] rounded-[12px] p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-[#C8222C]">
            <Activity className="w-5 h-5 text-[#C8222C]" />
            <h4 className="font-bold text-base font-cardo text-[#1C2430]">
              Intensive Care (ICU) & High Dependency (HDU)
            </h4>
          </div>
          <p className="text-xs text-[#4A5B6E] leading-relaxed">
            To prevent infections and allow continuous ventilator and cardiac monitoring, visiting is restricted to <strong>immediate next-of-kin only (1 visitor at a time for 15 minutes)</strong>.
          </p>
          <div className="bg-white p-3 rounded-[8px] border border-[#D5DEE8] text-xs space-y-1 text-[#1C2430]">
            <div><strong>Designated ICU Visiting Windows:</strong></div>
            <div className="text-[#C8222C] font-bold">1:00 PM – 2:00 PM & 5:00 PM – 6:00 PM</div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          IMPROVED, COMPREHENSIVE CLINICAL RECOVERY PROTOCOL
      ========================================================================= */}
      <div className="bg-white border border-[#D5DEE8] rounded-[16px] p-6 sm:p-8 space-y-6 shadow-xs mb-12">
        <div className="border-b border-[#D5DEE8] pb-4">
          <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-1 font-bold text-[#0A4F93]">
            CLINICAL EXCELLENCE & PATIENT HEALING
          </span>
          <h3 className="cs-h2 font-cardo text-xl sm:text-2xl font-bold text-[#1C2430]">
            Why We Protect Inpatient Rest: Clinical Recovery Protocol
          </h3>
          <p className="cs-body text-xs sm:text-sm text-[#4A5B6E] mt-1 leading-relaxed">
            At Cedarstone Hospital, patient recovery is governed by evidence-based surgical, metabolic, and neurological healing protocols. Our visiting windows are deliberately synchronized with clinical care cycles to maximize recovery speed and patient safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-[8px] bg-[#EEF4FA] text-[#0A4F93] flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h4 className="font-bold text-sm font-cardo text-[#1C2430]">
              Uninterrupted Biological Healing (2:00 PM – 4:30 PM)
            </h4>
            <p className="text-xs text-[#4A5B6E] leading-relaxed">
              Medical research proves that deep tissue regeneration, post-anesthesia stabilization, and immune repair happen fastest during quiet rest. During afternoon rest hours, ward lighting is dimmed and non-urgent clinical chatter is minimized.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-[8px] bg-[#EEF4FA] text-[#0A4F93] flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h4 className="font-bold text-sm font-cardo text-[#1C2430]">
              Morning Consultant Ward Rounds (8:30 AM – 12:00 PM)
            </h4>
            <p className="text-xs text-[#4A5B6E] leading-relaxed">
              Attending surgeons, consultant physicians, and specialist clinical pharmacists conduct thorough bedside evaluations, wound inspections, and treatment revisions. Restricting visitors during rounds safeguards patient modesty and confidentiality.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-[8px] bg-[#EEF4FA] text-[#0A4F93] flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h4 className="font-bold text-sm font-cardo text-[#1C2430]">
              Infection Prevention & Biohazard Barrier Control
            </h4>
            <p className="text-xs text-[#4A5B6E] leading-relaxed">
              Limiting bedside occupancy to 2 visitors drastically cuts the transmission of respiratory and hospital-acquired pathogens (HAIs). Hand sanitization stations are mandatory at all bay entrances before and after visiting.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-[8px] bg-[#EEF4FA] text-[#0A4F93] flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h4 className="font-bold text-sm font-cardo text-[#1C2430]">
              Scheduled Family Physician Conferences
            </h4>
            <p className="text-xs text-[#4A5B6E] leading-relaxed">
              If a family needs a private consultation with the treating medical specialist regarding diagnosis, surgical outcomes, or discharge planning, appointments are arranged directly through the Ward Nurse in Charge outside visiting hours.
            </p>
          </div>

        </div>

        {/* Helpful Contact Box for Inquiries */}
        <div className="bg-[#EEF4FA] border border-[#D5DEE8] rounded-[10px] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#0A4F93] flex-shrink-0" />
            <div className="text-xs text-[#1C2430]">
              <strong>Have special visiting needs or compassionate requests?</strong>
              <p className="text-[#4A5B6E]">Speak with the Nurse in Charge or our 24/7 Patient Liaison Desk.</p>
            </div>
          </div>
          <a
            href="tel:+254208900000"
            className="min-h-[40px] px-4 py-2 bg-[#0A4F93] text-white text-xs font-bold rounded-[6px] hover:bg-[#083F76] transition-colors flex items-center gap-1.5 flex-shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Ward Desk (+254 20 890 0000)</span>
          </a>
        </div>
      </div>

      {/* =========================================================================
          ADMISSION CHECKLIST & DIRECT M-PESA SETTLEMENT
      ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Admission Checklist */}
        <div className="bg-white border border-[#D5DEE8] rounded-[12px] p-6 space-y-4 shadow-xs">
          <h3 className="cs-h3 font-cardo text-[#1C2430] text-lg font-bold">
            Hospital Admission Checklist
          </h3>
          <p className="cs-body text-xs text-[#4A5B6E]">
            When arriving for planned surgery, maternity delivery, or scheduled inpatient admission:
          </p>
          <ul className="space-y-3 text-xs text-[#1C2430]">
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#EEF4FA] text-[#0A4F93] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span><strong>Identification:</strong> Original Kenyan National ID card, passport, or birth certificate for minors.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#EEF4FA] text-[#0A4F93] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span><strong>Insurance Documents:</strong> SHA / NHIF biometric verification or private corporate medical card.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#EEF4FA] text-[#0A4F93] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span><strong>Clinical Records:</strong> Previous doctor referral notes, diagnostic scan discs/reports, and all ongoing medicines.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#EEF4FA] text-[#0A4F93] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
              <span><strong>Personal Comfort:</strong> Essential toiletries and loose sleepwear (hospital gowns are also provided).</span>
            </li>
          </ul>
        </div>

        {/* Direct M-PESA Hospital Settlement */}
        <div className="bg-emerald-50 border border-emerald-300 rounded-[12px] p-6 text-emerald-950 shadow-xs">
          <h3 className="font-bold text-lg font-cardo text-emerald-900 mb-1">
            Direct M-PESA Hospital Settlement
          </h3>
          <p className="text-xs text-emerald-800 mb-4">
            Patients and relatives can settle pharmacy, laboratory, and discharge bills safely via Safaricom M-PESA:
          </p>
          <div className="bg-white/90 p-4 rounded-[8px] font-mono text-xs space-y-2 border border-emerald-200">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Business Paybill No:</span>
              <strong className="text-emerald-900 font-bold text-sm">{HOSPITAL_CONTACTS.mpesaPaybill}</strong>
            </div>
            <div className="flex justify-between items-center border-t border-emerald-100 pt-2">
              <span className="text-slate-600">Account Number:</span>
              <span className="text-emerald-900 font-semibold">Patient File No. or Full Name</span>
            </div>
            <div className="flex justify-between items-center border-t border-emerald-100 pt-2">
              <span className="text-slate-600">Cashier Verification:</span>
              <span className="text-emerald-900 font-semibold">Instant STK / SMS confirmation</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
