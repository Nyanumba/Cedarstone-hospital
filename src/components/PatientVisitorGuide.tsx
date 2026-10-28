import React from 'react';
import { VISITING_SCHEDULES, HOSPITAL_CONTACTS } from '../data/hospitalData';
import { Clock, ShieldCheck, HeartHandshake, Phone, FileText } from 'lucide-react';

export const PatientVisitorGuide: React.FC = () => {
  return (
    <section id="visitors" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="guide-heading">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="cs-eyebrow font-cardo block mb-2">
          PATIENT CARE & HOSPITAL HOSPITALITY
        </span>
        <h2 id="guide-heading" className="cs-h1 font-cardo text-[var(--text)] mb-3">
          Visiting hours & inpatient admissions
        </h2>
        <p className="cs-lead font-cardo text-[var(--text2)]">
          Clear guidelines to support your loved one’s recovery while maintaining clinical rest standards and hygiene protocols.
        </p>
      </div>

      {/* 
        Mandated Table Guidelines:
        "Tables: header row on --panel, 15px text, horizontal scroll inside the container on small screens."
      */}
      <div className="bg-[var(--bg)] border border-[var(--line)] rounded-[12px] p-6 mb-12 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="cs-h3 font-cardo text-[var(--text)]">
              Standard Inpatient Visiting Schedule
            </h3>
            <p className="text-xs text-[var(--text2)] mt-0.5">
              Strictly observed across all Cedarstone inpatient wings in Upper Hill, Nairobi.
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ok)] bg-[var(--ok-bg)] px-2.5 py-1 rounded-full border border-[var(--ok)]">
            <Clock className="w-3.5 h-3.5" />
            Active Visiting Hours
          </span>
        </div>

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[15px]">
            <thead>
              <tr className="bg-[var(--panel)] border-b border-[var(--line)] text-[var(--text)]">
                <th scope="col" className="py-3 px-4 font-bold text-sm">Inpatient Ward</th>
                <th scope="col" className="py-3 px-4 font-bold text-sm">Visiting Hours (EAT)</th>
                <th scope="col" className="py-3 px-4 font-bold text-sm">Visitor Limit</th>
                <th scope="col" className="py-3 px-4 font-bold text-sm">Clinical Recovery Protocol</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line)] text-[var(--text)]">
              {VISITING_SCHEDULES.map((sched, idx) => (
                <tr key={idx} className="hover:bg-[var(--panel)]/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-sm">
                    {sched.ward}
                  </td>
                  <td className="py-3.5 px-4 text-sm font-mono text-[var(--blue)] font-bold">
                    {sched.hours}
                  </td>
                  <td className="py-3.5 px-4 text-sm">
                    {sched.visitorLimit}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-[var(--text2)]">
                    {sched.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Admission Checklist & M-PESA Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Admission Checklist */}
        <div className="bg-[var(--bg)] border border-[var(--line)] rounded-[12px] p-6 space-y-4 shadow-xs">
          <h3 className="cs-h3 font-cardo text-[var(--text)] text-lg">
            Hospital Admission Checklist
          </h3>
          <p className="cs-body text-xs text-[var(--text2)]">
            When arriving for planned surgery, maternity delivery, or scheduled admission:
          </p>
          <ul className="space-y-3 text-xs text-[var(--text)]">
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[var(--panel)] text-[var(--blue)] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span><strong>Identification:</strong> Original Kenyan National ID card or valid passport.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[var(--panel)] text-[var(--blue)] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span><strong>Insurance Documents:</strong> Physical/digital smartcard along with pre-authorization letter if elective.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[var(--panel)] text-[var(--blue)] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span><strong>Clinical Records:</strong> Previous doctor referral letters, imaging films, and current medication list.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[var(--panel)] text-[var(--blue)] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
              <span><strong>Personal Comfort:</strong> Essential toiletries and loose sleepwear (hospital gowns are also provided).</span>
            </li>
          </ul>
        </div>

        {/* Direct M-PESA Hospital Settlement */}
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-[12px] p-6 text-emerald-950 dark:text-emerald-100 shadow-xs">
          <h3 className="font-bold text-lg font-cardo text-emerald-900 dark:text-emerald-200 mb-1">
            Direct M-PESA Hospital Settlement
          </h3>
          <p className="text-xs text-emerald-800 dark:text-emerald-300 mb-4">
            Patients and relatives can settle pharmacy, laboratory, and discharge bills safely via Safaricom M-PESA:
          </p>
          <div className="bg-white/80 dark:bg-emerald-900/60 p-4 rounded-[8px] font-mono text-xs space-y-2 border border-emerald-200 dark:border-emerald-800">
            <div className="flex justify-between items-center">
              <span className="text-slate-600 dark:text-emerald-200">Business Paybill No:</span>
              <strong className="text-emerald-900 dark:text-white font-bold text-sm">{HOSPITAL_CONTACTS.mpesaPaybill}</strong>
            </div>
            <div className="flex justify-between items-center border-t border-emerald-100 dark:border-emerald-800/80 pt-2">
              <span className="text-slate-600 dark:text-emerald-200">Account Number:</span>
              <span className="text-emerald-900 dark:text-emerald-200 font-semibold">Patient File No. or Full Name</span>
            </div>
            <div className="flex justify-between items-center border-t border-emerald-100 dark:border-emerald-800/80 pt-2">
              <span className="text-slate-600 dark:text-emerald-200">Cashier Verification:</span>
              <span className="text-emerald-900 dark:text-emerald-200">Instant STK / SMS confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
