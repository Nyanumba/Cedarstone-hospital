import React, { useState } from 'react';
import { DOCTORS } from '../data/hospitalData';
import { Doctor } from '../types';
import { Calendar, Clock, Globe, Shield, Stethoscope, ChevronRight } from 'lucide-react';

interface DoctorDirectoryProps {
  onSelectDoctorToBook: (doctor: Doctor) => void;
  searchFilter?: string;
}

export const DoctorDirectory: React.FC<DoctorDirectoryProps> = ({
  onSelectDoctorToBook,
  searchFilter = ''
}) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>(searchFilter);

  // Sync if searchFilter prop changes
  React.useEffect(() => {
    if (searchFilter) {
      setSearchQuery(searchFilter);
    }
  }, [searchFilter]);

  const departments = [
    { id: 'all', label: 'All Specialties' },
    { id: 'maternal-child', label: 'Maternal & Pediatrics' },
    { id: 'cardiology', label: 'Cardiology' },
    { id: 'radiology', label: 'Radiology' },
    { id: 'internal-medicine', label: 'Internal Medicine' },
    { id: 'orthopedics', label: 'Orthopaedics' },
    { id: 'oncology', label: 'Oncology' },
    { id: 'emergency', label: 'Trauma & Emergency' }
  ];

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = selectedDept === 'all' || doc.departmentId === selectedDept;
    const matchesSearch = 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.departmentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section id="doctors" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="doctors-heading">
      {/* Section Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <span className="cs-eyebrow font-cardo block mb-2">
          CLINICAL LEADERSHIP & CONSULTANTS
        </span>
        <h2 id="doctors-heading" className="cs-h1 font-cardo text-[var(--text)] mb-3">
          Meet our senior Kenyan specialists
        </h2>
        <p className="cs-lead font-cardo text-[var(--text2)]">
          Board-certified medical consultants, surgeons, and department directors providing attentive and dignified care.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="mb-8 space-y-4">
        {/* Interactive Filter Tabs (Zero-pill discipline: segmented/button controls with clean background) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[var(--panel)] border border-[var(--line)] rounded-[8px]">
          {departments.map((dept) => {
            const isActive = selectedDept === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`min-h-[44px] px-3.5 py-2 text-sm font-medium rounded-[6px] transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[var(--bg)] text-[var(--blue)] font-bold shadow-xs border border-[var(--line)]'
                    : 'text-[var(--text2)] hover:text-[var(--text)]'
                }`}
                aria-pressed={isActive}
              >
                {dept.label}
              </button>
            );
          })}
        </div>

        {/* Search input if user wants to narrow down */}
        <div className="max-w-md mx-auto">
          <label htmlFor="doctor-search-input" className="sr-only">
            Filter doctors by name or qualification
          </label>
          <input
            id="doctor-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search doctor by name (e.g. Dr. Amina Wanjiru, Dr. Otieno)..."
            className="w-full min-h-[44px] px-4 py-2 border border-[var(--text2)] rounded-[6px] text-sm bg-[var(--bg)] text-[var(--text)] focus-visible:outline-2 focus-visible:outline-[var(--focus)]"
          />
        </div>
      </div>

      {/* 
        Doctor Cards Grid:
        Mandated: "Cards: --bg surface, 1px --line, 12px radius. 
        Appointment cards show an eyebrow, a Cardo title, plain-language description, 
        a Mist panel with the next available time, and one primary action."
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doc) => (
          <article
            key={doc.id}
            className="bg-[var(--bg)] border border-[var(--line)] rounded-[12px] p-6 flex flex-col justify-between hover:border-[var(--blue)] transition-colors shadow-xs"
            aria-labelledby={`doc-title-${doc.id}`}
          >
            <div>
              {/* Card Eyebrow */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="cs-eyebrow font-cardo text-xs">
                  {doc.departmentName}
                </span>
                {doc.badge && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--panel)] text-[var(--blue)] font-bold border border-[var(--line)]">
                    {doc.badge}
                  </span>
                )}
              </div>

              {/* Cardo Title */}
              <h3 id={`doc-title-${doc.id}`} className="cs-h3 font-cardo text-[var(--text)] mb-1">
                {doc.name}
              </h3>
              
              <p className="text-xs font-semibold text-[var(--text2)] mb-3">
                {doc.title}
              </p>

              {/* Qualifications */}
              <p className="text-xs text-[var(--text2)] italic mb-3">
                {doc.qualifications}
              </p>

              {/* Plain-Language Description */}
              <p className="cs-body text-sm text-[var(--text)] line-clamp-3 mb-4">
                {doc.bio}
              </p>

              {/* Languages Spoken (unboxed text metadata) */}
              <div className="flex items-center gap-1.5 text-xs text-[var(--text2)] mb-4">
                <Globe className="w-3.5 h-3.5 text-[var(--text2)]" aria-hidden="true" />
                <span>Languages: {doc.languages.join(', ')}</span>
              </div>
            </div>

            {/* Mandated: Mist panel (--panel) with next available time & consultation fee */}
            <div className="mt-4 pt-4 border-t border-[var(--line)] space-y-4">
              <div className="bg-[var(--panel)] border border-[var(--line)] rounded-[8px] p-3 text-xs space-y-1">
                <div className="flex items-center justify-between text-[var(--text)]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Clock className="w-3.5 h-3.5 text-[var(--blue)]" aria-hidden="true" />
                    Next Available:
                  </span>
                  <span className="font-semibold text-[var(--blue)]">
                    {doc.nextSlot}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[var(--text2)] pt-1 border-t border-[var(--line)]">
                  <span>Consultation Fee:</span>
                  <span className="font-bold text-[var(--text)]">
                    KES {doc.feeKES.toLocaleString()}
                  </span>
                </div>
                <div className="text-[11px] text-[var(--text2)]">
                  Clinic Days: {doc.clinicDays}
                </div>
              </div>

              {/* Primary Action Button (min 44px height, verb-first) */}
              <button
                onClick={() => onSelectDoctorToBook(doc)}
                className="w-full min-h-[44px] px-4 py-2.5 bg-[var(--btn)] hover:bg-[var(--btn-h)] text-white cs-ui rounded-[6px] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Book appointment with {doc.name.split(' ')[1]}</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="bg-[var(--panel)] border border-[var(--line)] rounded-[8px] p-8 text-center max-w-lg mx-auto">
          <Stethoscope className="w-8 h-8 text-[var(--text2)] mx-auto mb-2" />
          <h4 className="font-bold text-base text-[var(--text)] mb-1">No specialists match your search</h4>
          <p className="text-sm text-[var(--text2)] mb-4">
            Try choosing a different specialty filter or clear your search query.
          </p>
          <button
            onClick={() => {
              setSelectedDept('all');
              setSearchQuery('');
            }}
            className="min-h-[44px] px-4 py-2 bg-[var(--btn)] text-white cs-ui rounded-[6px]"
          >
            Reset doctor directory
          </button>
        </div>
      )}
    </section>
  );
};
