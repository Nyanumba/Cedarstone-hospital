import React, { useState } from 'react';
import { DEPARTMENTS } from '../data/hospitalData';
import { Department } from '../types';
import { 
  Heart, 
  Baby, 
  Activity, 
  Sparkles, 
  Scissors, 
  Scan, 
  ShieldAlert, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  User, 
  ChevronRight,
  Cross 
} from 'lucide-react';

interface DepartmentGridProps {
  onSelectDepartmentToBook: (department: Department) => void;
}

export const DepartmentGrid: React.FC<DepartmentGridProps> = ({
  onSelectDepartmentToBook
}) => {
  const [activeDeptModal, setActiveDeptModal] = useState<Department | null>(null);

  const getDeptIcon = (id: string) => {
    switch (id) {
      case 'emergency': return <ShieldAlert className="w-6 h-6 text-[#C8222C]" />;
      case 'maternal-child': return <Baby className="w-6 h-6 text-[var(--blue)]" />;
      case 'cardiology': return <Heart className="w-6 h-6 text-[var(--blue)]" />;
      case 'oncology': return <Sparkles className="w-6 h-6 text-[var(--blue)]" />;
      case 'surgery': return <Scissors className="w-6 h-6 text-[var(--blue)]" />;
      case 'radiology': return <Scan className="w-6 h-6 text-[var(--blue)]" />;
      case 'internal-medicine': return <Activity className="w-6 h-6 text-[var(--blue)]" />;
      case 'orthopedics': return <Cross className="w-6 h-6 text-[var(--blue)]" />;
      default: return <Activity className="w-6 h-6 text-[var(--blue)]" />;
    }
  };

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[var(--bg)]" aria-labelledby="departments-heading">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="cs-eyebrow font-cardo block mb-2">
          CENTRES OF EXCELLENCE
        </span>
        <h2 id="departments-heading" className="cs-h1 font-cardo text-[var(--text)] mb-3">
          Specialised clinical care for every stage of life
        </h2>
        <p className="cs-lead font-cardo text-[var(--text2)]">
          Equipped with advanced diagnostics, modern theatres, and continuous specialist monitoring in Upper Hill, Nairobi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DEPARTMENTS.map((dept) => (
          <article
            key={dept.id}
            className={`bg-[var(--bg)] border rounded-[12px] p-6 flex flex-col justify-between transition-all hover:border-[var(--blue)] hover:shadow-sm ${
              dept.emergency24h ? 'border-[#C8222C]/40 bg-[#FBECEC]/10' : 'border-[var(--line)]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-[8px] bg-[var(--panel)] flex items-center justify-center">
                  {getDeptIcon(dept.id)}
                </div>
                {dept.emergency24h && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#C8222C] text-white">
                    24/7 Priority
                  </span>
                )}
              </div>

              <h3 className="cs-h3 font-cardo text-[var(--text)] text-lg mb-2">
                {dept.name}
              </h3>

              <p className="cs-body text-sm text-[var(--text2)] mb-4">
                {dept.shortDescription}
              </p>

              <div className="space-y-1.5 text-xs text-[var(--text)] border-t border-[var(--line)] pt-3 mb-4">
                <div className="flex items-center gap-1.5 text-[var(--text2)]">
                  <User className="w-3.5 h-3.5 text-[var(--blue)]" />
                  <span>Lead: <strong className="text-[var(--text)] font-medium">{dept.leadSpecialist}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 text-[var(--text2)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--blue)]" />
                  <span className="truncate">{dept.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => setActiveDeptModal(dept)}
                className="w-full min-h-[44px] px-3 py-2 border border-[var(--blue)] text-[var(--blue)] hover:bg-[var(--panel)] cs-ui text-sm rounded-[6px] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>View clinic details</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectDepartmentToBook(dept)}
                className="w-full min-h-[44px] px-3 py-2 bg-[var(--btn)] hover:bg-[var(--btn-h)] text-white cs-ui text-sm rounded-[6px] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Book this clinic</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal for Department Details (modals: 16px radius as per guidelines) */}
      {activeDeptModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dept-modal-title"
        >
          <div className="bg-[var(--bg)] border border-[var(--line)] rounded-[16px] max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-4">
              <div>
                <span className="cs-eyebrow font-cardo block mb-1">
                  DEPARTMENT OVERVIEW
                </span>
                <h3 id="dept-modal-title" className="cs-h2 font-cardo text-[var(--text)]">
                  {activeDeptModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveDeptModal(null)}
                className="min-h-[44px] min-w-[44px] rounded-[6px] border border-[var(--line)] text-[var(--text)] hover:bg-[var(--panel)] flex items-center justify-center text-lg font-bold cursor-pointer"
                aria-label="Close department details"
              >
                ×
              </button>
            </div>

            <p className="cs-body text-[var(--text)] text-sm sm:text-base">
              {activeDeptModal.fullDescription}
            </p>

            <div className="bg-[var(--panel)] border border-[var(--line)] rounded-[8px] p-4 space-y-2 text-sm">
              <h4 className="font-bold text-[var(--text)] font-cardo text-base">Key Clinical Services:</h4>
              <ul className="space-y-1.5">
                {activeDeptModal.services.map((srv, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[var(--text)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--ok)] mt-0.5 flex-shrink-0" />
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[var(--text)] border-t border-[var(--line)] pt-4">
              <div>
                <span className="text-[var(--text2)] block">Director & Lead Consultant</span>
                <strong className="text-sm font-semibold">{activeDeptModal.leadSpecialist}</strong>
              </div>
              <div>
                <span className="text-[var(--text2)] block">Direct Extension</span>
                <a href={`tel:${activeDeptModal.phone}`} className="text-sm font-semibold text-[var(--blue)] hover:underline">
                  {activeDeptModal.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveDeptModal(null)}
                className="min-h-[44px] px-4 py-2 border border-[var(--line)] text-[var(--text)] cs-ui rounded-[6px] hover:bg-[var(--panel)] cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const dept = activeDeptModal;
                  setActiveDeptModal(null);
                  onSelectDepartmentToBook(dept);
                }}
                className="min-h-[44px] px-5 py-2 bg-[var(--btn)] hover:bg-[var(--btn-h)] text-white cs-ui rounded-[6px] cursor-pointer"
              >
                Book consultation now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
