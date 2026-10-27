import React, { useState } from 'react';
import { VISITING_SCHEDULES, INSURANCE_PARTNERS, HOSPITAL_CONTACTS } from '../data/hospitalData';
import { Clock, ShieldCheck, CreditCard, HeartHandshake, Phone, AlertCircle, Info } from 'lucide-react';

export const PatientVisitorGuide: React.FC = () => {
  const [selectedInsurance, setSelectedInsurance] = useState<string>('');
  const [coverageResult, setCoverageResult] = useState<string | null>(null);

  const checkInsurance = (e: React.FormEvent) => {
    e.preventDefault();
    const found = INSURANCE_PARTNERS.find(p => p.name === selectedInsurance);
    if (found) {
      setCoverageResult(`Cedarstone Hospital accepts ${found.name} under ${found.acceptedFor}. Pre-authorization requirement: ${found.preAuthNeeded}. Present your biometric smartcard or digital card at Admissions.`);
    }
  };

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
              Standard Visiting Schedule
            </h3>
            <p className="text-xs text-[var(--text2)] mt-0.5">
              Strictly enforced across all Cedarstone inpatient facilities in Nairobi.
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ok)] bg-[var(--ok-bg)] px-2.5 py-1 rounded-full border border-[var(--ok)]">
            <Clock className="w-3.5 h-3.5" />
            Active Visiting Policy
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

      {/* Insurance & Payment Section */}
      <div id="insurance" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Insurance Partners & Verification */}
        <div className="lg:col-span-7 bg-[var(--bg)] border border-[var(--line)] rounded-[12px] p-6 space-y-5">
          <div>
            <span className="cs-eyebrow font-cardo block mb-1">
              FINANCIAL CLEARANCE & INSURANCE
            </span>
            <h3 className="cs-h2 font-cardo text-[var(--text)]">
              Approved health insurance partners
            </h3>
            <p className="cs-body text-sm text-[var(--text2)] mt-1">
              We partner directly with leading private insurers and Kenya’s Social Health Authority (SHA / NHIF) to deliver cashless and transparent medical admissions.
            </p>
          </div>

          <form onSubmit={checkInsurance} className="bg-[var(--panel)] p-4 rounded-[8px] space-y-3 border border-[var(--line)]">
            <label htmlFor="ins-check-select" className="block text-xs font-bold text-[var(--text)]">
              Check your insurance plan coverage at Cedarstone:
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <select
                id="ins-check-select"
                value={selectedInsurance}
                onChange={(e) => {
                  setSelectedInsurance(e.target.value);
                  setCoverageResult(null);
                }}
                className="w-full min-h-[44px] px-3 py-2 bg-[var(--bg)] border border-[var(--text2)] rounded-[6px] text-xs text-[var(--text)]"
              >
                <option value="">Select your insurance underwriter...</option>
                {INSURANCE_PARTNERS.map((p) => (
                  <option key={p.code} value={p.name}>{p.name}</option>
                ))}
              </select>
              <button
                type="submit"
                disabled={!selectedInsurance}
                className="min-h-[44px] px-5 py-2 bg-[var(--btn)] hover:bg-[var(--btn-h)] disabled:opacity-50 text-white cs-ui text-xs rounded-[6px] transition-colors flex-shrink-0 cursor-pointer"
              >
                Verify coverage
              </button>
            </div>

            {coverageResult && (
              <div className="bg-[var(--ok-bg)] border border-[var(--ok)] text-[var(--ok-t)] p-3 rounded-[6px] text-xs flex items-start gap-2 mt-2">
                <ShieldCheck className="w-4 h-4 text-[var(--ok)] mt-0.5 flex-shrink-0" />
                <span>{coverageResult}</span>
              </div>
            )}
          </form>

          {/* List of Partner Logos / Badges as unboxed text */}
          <div>
            <h4 className="text-xs font-bold text-[var(--text)] uppercase tracking-wider mb-2">
              Contracted Underwriters with Direct SmartCard Desks:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[var(--text)]">
              {INSURANCE_PARTNERS.map((p) => (
                <div key={p.code} className="p-2 border border-[var(--line)] rounded-[6px] bg-[var(--bg)] flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[var(--blue)] flex-shrink-0" />
                  <span className="truncate">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Admission Checklist & M-PESA */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[var(--bg)] border border-[var(--line)] rounded-[12px] p-6 space-y-4">
            <h3 className="cs-h3 font-cardo text-[var(--text)] text-base">
              Hospital Admission Checklist
            </h3>
            <ul className="space-y-2.5 text-xs text-[var(--text)]">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--panel)] text-[var(--blue)] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <span><strong>Identification:</strong> Original Kenyan National ID card or valid passport.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--panel)] text-[var(--blue)] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <span><strong>Insurance:</strong> Physical or biometric smartcard along with pre-authorization letter if elective.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--panel)] text-[var(--blue)] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <span><strong>Clinical Records:</strong> Previous doctor referral letters, imaging films/discs, and current medications.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--panel)] text-[var(--blue)] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <span><strong>Personal Comfort:</strong> Essential toiletries and loose sleepwear (hospital gowns are also provided).</span>
              </li>
            </ul>
          </div>

          {/* M-PESA Till / Paybill Box */}
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-[12px] p-5 text-emerald-950 dark:text-emerald-100">
            <h4 className="font-bold text-sm font-cardo text-emerald-900 dark:text-emerald-200 mb-1">
              Direct M-PESA Hospital Settlement
            </h4>
            <p className="text-xs text-emerald-800 dark:text-emerald-300 mb-3">
              Patients and relatives can settle pharmacy, lab, and discharge bills safely via Safaricom M-PESA:
            </p>
            <div className="bg-white/80 dark:bg-emerald-900/60 p-3 rounded-[6px] font-mono text-xs space-y-1">
              <div className="flex justify-between">
                <span>Business Paybill No:</span>
                <strong className="text-emerald-900 dark:text-white font-bold">{HOSPITAL_CONTACTS.mpesaPaybill}</strong>
              </div>
              <div className="flex justify-between">
                <span>Account Number:</span>
                <span className="text-emerald-900 dark:text-emerald-200">Patient File No. or Full Name</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
