import React, { useState } from 'react';
import { SAMPLE_LAB_RESULTS } from '../data/hospitalData';
import { LabResult } from '../types';
import { UserCheck, FileText, Pill, Calendar, Download, Shield, Activity, CheckCircle2, Clock } from 'lucide-react';

export const PatientPortalDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'labs' | 'prescriptions' | 'records'>('labs');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (testName: string) => {
    setDownloadSuccess(`Official PDF report for "${testName}" has been downloaded to your device.`);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <section id="portal" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="portal-heading">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="cs-eyebrow font-cardo block mb-2">
          SECURE ELECTRONIC HEALTH RECORDS
        </span>
        <h2 id="portal-heading" className="cs-h1 font-cardo text-[var(--text)] mb-3">
          Cedarstone Patient Portal
        </h2>
        <p className="cs-lead font-cardo text-[var(--text2)]">
          Review verified diagnostic reports, track prescribed therapies, and download clinical summaries on any device.
        </p>
      </div>

      <div className="bg-[var(--bg)] border border-[var(--line)] rounded-[12px] p-6 shadow-sm">
        {/* Patient Header Banner */}
        <div className="bg-[var(--panel)] border border-[var(--line)] rounded-[8px] p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[var(--blue)] text-white flex items-center justify-center font-bold text-lg font-cardo">
              DO
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-[var(--text)]">Daniel Otieno</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--ok-bg)] text-[var(--ok-t)] font-semibold border border-[var(--ok)]">
                  Active Patient
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[var(--text2)] mt-0.5">
                <span>Patient ID: <strong>CSH-89214</strong></span>
                <span aria-hidden="true">·</span>
                <span>Upper Hill Outpatient Clinic</span>
                <span aria-hidden="true">·</span>
                <span>SHA No: <strong>SHA-9842104-KE</strong></span>
              </div>
            </div>
          </div>

          <div className="text-xs text-[var(--text2)] flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-[var(--line)]">
            <span>Primary Consultant:</span>
            <strong className="text-[var(--text)] text-sm font-cardo">Dr. Faith Achieng</strong>
          </div>
        </div>

        {/* Tab Controls (Zero-pill discipline: interactive buttons with clean styling) */}
        <div className="flex items-center gap-2 border-b border-[var(--line)] pb-3 mb-6">
          <button
            onClick={() => setActiveTab('labs')}
            className={`min-h-[44px] px-4 py-2 text-sm rounded-[6px] font-bold transition-colors cursor-pointer ${
              activeTab === 'labs'
                ? 'bg-[var(--blue)] text-white'
                : 'text-[var(--text2)] hover:bg-[var(--panel)] hover:text-[var(--text)]'
            }`}
          >
            Laboratory Diagnostics (4)
          </button>
          <button
            onClick={() => setActiveTab('prescriptions')}
            className={`min-h-[44px] px-4 py-2 text-sm rounded-[6px] font-bold transition-colors cursor-pointer ${
              activeTab === 'prescriptions'
                ? 'bg-[var(--blue)] text-white'
                : 'text-[var(--text2)] hover:bg-[var(--panel)] hover:text-[var(--text)]'
            }`}
          >
            Prescribed Medications
          </button>
          <button
            onClick={() => setActiveTab('records')}
            className={`min-h-[44px] px-4 py-2 text-sm rounded-[6px] font-bold transition-colors cursor-pointer ${
              activeTab === 'records'
                ? 'bg-[var(--blue)] text-white'
                : 'text-[var(--text2)] hover:bg-[var(--panel)] hover:text-[var(--text)]'
            }`}
          >
            Doctor Clinical Notes
          </button>
        </div>

        {downloadSuccess && (
          <div className="mb-4 bg-[var(--ok-bg)] border border-[var(--ok)] text-[var(--ok-t)] p-3 rounded-[8px] text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--ok)]" />
            <span>{downloadSuccess}</span>
          </div>
        )}

        {/* Tab 1: Laboratory Diagnostic Results */}
        {activeTab === 'labs' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[var(--panel)] border-b border-[var(--line)] text-[var(--text)]">
                  <th scope="col" className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Test Name</th>
                  <th scope="col" className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Sample Date</th>
                  <th scope="col" className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Patient Result</th>
                  <th scope="col" className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Reference Range</th>
                  <th scope="col" className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Reviewing Doctor</th>
                  <th scope="col" className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--line)] text-[var(--text)]">
                {SAMPLE_LAB_RESULTS.map((lab) => (
                  <tr key={lab.id} className="hover:bg-[var(--panel)]/40 transition-colors">
                    <td className="py-3.5 px-4 font-semibold">
                      {lab.testName}
                      <span className="block text-[11px] text-[var(--text2)] font-mono">{lab.id}</span>
                    </td>
                    <td className="py-3.5 px-4 text-xs font-mono">{lab.testDate}</td>
                    <td className="py-3.5 px-4 font-bold text-sm text-[var(--blue)]">{lab.result}</td>
                    <td className="py-3.5 px-4 text-xs text-[var(--text2)] font-mono">{lab.referenceRange}</td>
                    <td className="py-3.5 px-4 text-xs">{lab.doctorReviewer}</td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => handleDownload(lab.testName)}
                        className="min-h-[44px] px-3 py-1.5 border border-[var(--line)] text-[var(--blue)] hover:bg-[var(--panel)] text-xs rounded-[6px] font-bold inline-flex items-center gap-1.5 cursor-pointer"
                        title="Download verified clinical PDF report"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Prescriptions */}
        {activeTab === 'prescriptions' && (
          <div className="space-y-4">
            <div className="bg-[var(--panel)] p-4 rounded-[8px] border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <strong className="block text-sm text-[var(--text)]">Metformin 500mg Extended Release</strong>
                <span className="text-[var(--text2)]">Dosage: 1 tablet daily with evening dinner · Prescribed by Dr. Faith Achieng</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-[6px] bg-[var(--ok-bg)] text-[var(--ok-t)] border border-[var(--ok)] self-start sm:self-auto">
                Refill Eligible (Cedarstone 24/7 Pharmacy)
              </span>
            </div>

            <div className="bg-[var(--panel)] p-4 rounded-[8px] border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <strong className="block text-sm text-[var(--text)]">Atorvastatin 20mg Tablets</strong>
                <span className="text-[var(--text2)]">Dosage: 1 tablet at bedtime · 30-day course</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-[6px] bg-[var(--ok-bg)] text-[var(--ok-t)] border border-[var(--ok)] self-start sm:self-auto">
                Active Therapy
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Clinical Notes */}
        {activeTab === 'records' && (
          <div className="bg-[var(--panel)] p-5 rounded-[8px] border border-[var(--line)] space-y-3 text-xs text-[var(--text)]">
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-2">
              <strong className="text-sm font-cardo text-[var(--text)]">
                Routine Endocrinology & Metabolic Review — 24/10/2026
              </strong>
              <span className="text-[var(--text2)]">Attending: Dr. Faith Achieng</span>
            </div>
            <p className="cs-body text-xs text-[var(--text)]">
              "Patient reports excellent adherence to dietary modifications and prescribed walking routines. Blood pressure at triage was 122/78 mmHg, indicating stable control. Fasting glucose at 5.2 mmol/L reflects favorable glycaemic response. Continue current regimen with follow-up in 3 months."
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
