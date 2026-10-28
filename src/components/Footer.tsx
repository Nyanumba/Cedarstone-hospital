import React from 'react';
import { CedarstoneLogo } from './CedarstoneLogo';
import { HOSPITAL_CONTACTS } from '../data/hospitalData';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
  isDark?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer 
      className="border-t border-[#2C3748] pt-16 pb-12 text-[#EAF0F7] relative overflow-hidden" 
      style={{
        background: 'radial-gradient(circle at 85% 15%, rgba(76, 147, 219, 0.22) 0%, rgba(76, 147, 219, 0) 55%), linear-gradient(180deg, #111B27 0%, #090F16 100%)'
      }}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2C3748]">
          
          {/* Column 1: Hospital Brand & Accreditation */}
          <div className="lg:col-span-2 space-y-4">
            <CedarstoneLogo className="h-11 w-auto" variant="footer" isDark={true} />
            
            <p className="cs-body text-sm text-[#A9B6C6] max-w-sm leading-relaxed">
              Cedarstone Hospital is a premier Kenyan tertiary healthcare institution dedicated to patient dignity, clinical precision, and 24/7 emergency response in Upper Hill, Nairobi.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#A9B6C6]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6FD3B1] flex-shrink-0" />
                <span>KMPDC Licensed Tertiary Hospital: <strong className="text-white">KMPDC/HOSP/2026/048</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6FD3B1] flex-shrink-0" />
                <span>SafeCare Level 5 Accredited Clinical Facility</span>
              </div>
            </div>
          </div>

          {/* Column 2: Emergency & Contact */}
          <div className="space-y-3">
            <h3 className="font-bold font-cardo text-base text-white uppercase tracking-wider">
              24/7 Contacts
            </h3>
            <ul className="space-y-2.5 text-xs text-[#A9B6C6]">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#F0707A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">Emergency Line:</span>
                  <a href="tel:+254208900000" className="hover:text-[#4C93DB] font-bold text-[#F0707A]">
                    +254 (0) 20 890 0000 / 0711 000 999
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#4C93DB] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">Hospital Desk:</span>
                  <a href={`tel:${HOSPITAL_CONTACTS.generalEnquiries}`} className="hover:text-[#4C93DB]">
                    {HOSPITAL_CONTACTS.generalEnquiries}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#4C93DB] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">Insurance & Pre-Auth:</span>
                  <a href="mailto:preauth@cedarstone.co.ke" className="hover:text-[#4C93DB]">
                    preauth@cedarstone.co.ke
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#4C93DB] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">Campus Location:</span>
                  <span>Hospital Road, Upper Hill, Nairobi</span>
                  <span className="block text-[11px] text-[#A9B6C6]/80">{HOSPITAL_CONTACTS.postalAddress}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Services */}
          <div className="space-y-3">
            <h3 className="font-bold font-cardo text-base text-white uppercase tracking-wider">
              Clinical Services
            </h3>
            <ul className="space-y-2 text-xs text-[#A9B6C6]">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Emergency & Level 5 Trauma Centre
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Maternal, Fetal & Pediatric Pavilion
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Heart & Vascular Institute (Cath Lab)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Comprehensive Cancer Care Centre
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  3.0T MRI & 128-Slice CT Imaging
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Orthopaedic Joint Replacement
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Portals */}
          <div className="space-y-3">
            <h3 className="font-bold font-cardo text-base text-white uppercase tracking-wider">
              Patient & Careers
            </h3>
            <ul className="space-y-2 text-xs text-[#A9B6C6]">
              <li>
                <button onClick={() => onNavigate('insurance')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Direct Billing & Insurance Desk
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('visitors')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Inpatient Visiting Schedules
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portal')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Patient Health Records Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('telehealth')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Cedarstone Remote Virtual Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doctors')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Consultant Medical Directory
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9B6C6]">
          <p>© {new Date().getFullYear()} Cedarstone Hospital Ltd. All rights reserved. Upper Hill, Nairobi, Kenya.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Patient Bill of Rights</span>
            <span aria-hidden="true">•</span>
            <span className="hover:text-white cursor-pointer">Data Protection (ODPC)</span>
            <span aria-hidden="true">•</span>
            <span className="hover:text-white cursor-pointer">Medical Advisory Board</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
