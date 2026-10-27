import React from 'react';
import { CedarstoneLogo } from './CedarstoneLogo';
import { HOSPITAL_CONTACTS } from '../data/hospitalData';
import { Phone, Mail, MapPin, ShieldCheck, Heart, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
  isDark?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, isDark }) => {
  return (
    <footer className="bg-[var(--panel)] border-t border-[var(--line)] pt-16 pb-12 text-[var(--text)]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--line)]">
          
          {/* Column 1: Hospital Brand & Accreditation */}
          <div className="lg:col-span-2 space-y-4">
            <CedarstoneLogo className="h-11 w-auto" variant="footer" isDark={isDark} />
            
            <p className="cs-body text-sm text-[var(--text2)] max-w-sm">
              Cedarstone Hospital is a premier Kenyan healthcare institution dedicated to clinical excellence, patient dignity, and advanced medical technology in Upper Hill, Nairobi.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[var(--text2)]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--ok)] flex-shrink-0" />
                <span>KMPDC Licensed Tertiary Hospital: <strong>KMPDC/HOSP/2026/048</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--ok)] flex-shrink-0" />
                <span>SafeCare Level 5 Certified Clinical Facility</span>
              </div>
            </div>
          </div>

          {/* Column 2: Emergency & Contact */}
          <div className="space-y-3">
            <h3 className="font-bold font-cardo text-base text-[var(--text)] uppercase tracking-wider">
              24/7 Contacts
            </h3>
            <ul className="space-y-2.5 text-xs text-[var(--text2)]">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#C8222C] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[var(--text)] font-bold">Emergency Hotline:</span>
                  <a href={`tel:${HOSPITAL_CONTACTS.emergencyHotline}`} className="hover:text-[var(--blue)] font-bold text-[#C8222C] dark:text-[#F0707A]">
                    {HOSPITAL_CONTACTS.emergencyHotline}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[var(--blue)] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[var(--text)] font-bold">Hospital Desk:</span>
                  <a href={`tel:${HOSPITAL_CONTACTS.generalEnquiries}`} className="hover:text-[var(--blue)]">
                    {HOSPITAL_CONTACTS.generalEnquiries}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[var(--blue)] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[var(--text)] font-bold">Enquiries & Referrals:</span>
                  <a href={`mailto:${HOSPITAL_CONTACTS.email}`} className="hover:text-[var(--blue)]">
                    {HOSPITAL_CONTACTS.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--blue)] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[var(--text)] font-bold">Campus Location:</span>
                  <span>{HOSPITAL_CONTACTS.address}</span>
                  <span className="block text-[11px]">{HOSPITAL_CONTACTS.postalAddress}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Services */}
          <div className="space-y-3">
            <h3 className="font-bold font-cardo text-base text-[var(--text)] uppercase tracking-wider">
              Clinical Services
            </h3>
            <ul className="space-y-2 text-xs text-[var(--text2)]">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[var(--blue)] transition-colors text-left cursor-pointer">
                  Emergency & Trauma Centre (24h)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[var(--blue)] transition-colors text-left cursor-pointer">
                  Mother & Child Pavilion (Maternity)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[var(--blue)] transition-colors text-left cursor-pointer">
                  Heart & Vascular Institute
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[var(--blue)] transition-colors text-left cursor-pointer">
                  Comprehensive Cancer Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[var(--blue)] transition-colors text-left cursor-pointer">
                  3T MRI & 128-Slice CT Imaging
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[var(--blue)] transition-colors text-left cursor-pointer">
                  Orthopaedic Joint Replacement
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Patient & Visitors */}
          <div className="space-y-3">
            <h3 className="font-bold font-cardo text-base text-[var(--text)] uppercase tracking-wider">
              Patient Care
            </h3>
            <ul className="space-y-2 text-xs text-[var(--text2)]">
              <li>
                <button onClick={() => onNavigate('visitors')} className="hover:text-[var(--blue)] transition-colors text-left cursor-pointer">
                  Inpatient Visiting Schedule
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insurance')} className="hover:text-[var(--blue)] transition-colors text-left cursor-pointer">
                  SHA & Insurance Pre-Authorization
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('telehealth')} className="hover:text-[var(--blue)] transition-colors text-left cursor-pointer">
                  Cedarstone Remote Virtual Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portal')} className="hover:text-[var(--blue)] transition-colors text-left cursor-pointer">
                  Patient Health Records Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doctors')} className="hover:text-[var(--blue)] transition-colors text-left cursor-pointer">
                  Find a Medical Consultant
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text2)]">
          <p>© {new Date().getFullYear()} Cedarstone Hospital Ltd. All rights reserved. Registered in the Republic of Kenya.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[var(--text)] cursor-pointer">Patient Bill of Rights</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-[var(--text)] cursor-pointer">Data Protection Policy (ODPC)</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-[var(--text)] cursor-pointer">Clinical Ethics Committee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
