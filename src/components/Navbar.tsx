import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Calendar, 
  Clock, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ShieldAlert, 
  UserCheck, 
  ChevronDown, 
  MapPin, 
  Stethoscope, 
  HeartPulse, 
  CreditCard, 
  FileText, 
  Video, 
  Building2 
} from 'lucide-react';
import { CedarstoneLogo } from './CedarstoneLogo';
import { HOSPITAL_CONTACTS } from '../data/hospitalData';

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  onOpenBooking: () => void;
  currentTheme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  onOpenBooking,
  currentTheme,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [patientDropdownOpen, setPatientDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const patientDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (patientDropdownRef.current && !patientDropdownRef.current.contains(event.target as Node)) {
        setPatientDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPatientDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--bg)] border-b border-[var(--line)] shadow-xs transition-colors duration-200">
      {/* 
        Mandated Emergency Strip:
        "The solid red emergency strip ('Emergency care, open 24 hours') appears once per page. 
        Emergency #C8222C with white text in both modes."
      */}
      <div 
        className="w-full bg-[#C8222C] text-white py-1.5 px-4 text-xs font-medium tracking-wide flex items-center justify-between"
        role="region"
        aria-label="Cedarstone 24-Hour Emergency Bar"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <span className="font-bold uppercase tracking-wider text-[12px] sm:text-[13px]">
              Emergency care, open 24 hours
            </span>
            <span className="hidden md:inline text-white/80">· Upper Hill, Hospital Road, Nairobi</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${HOSPITAL_CONTACTS.emergencyHotline}`}
              className="inline-flex items-center gap-1.5 font-bold hover:underline py-0.5 px-2 rounded focus-visible:outline-white"
              aria-label={`Call emergency hotline ${HOSPITAL_CONTACTS.emergencyHotline}`}
            >
              <Phone className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              <span>Emergency Hotline: {HOSPITAL_CONTACTS.emergencyHotline}</span>
            </a>
            <span className="hidden sm:inline text-white/60">|</span>
            <span className="hidden sm:inline text-white/90">Ambulance: {HOSPITAL_CONTACTS.ambulanceDispatch}</span>
            <span className="hidden lg:inline text-white/60">|</span>
            <span className="hidden lg:inline text-white/90">M-PESA Paybill: {HOSPITAL_CONTACTS.mpesaPaybill}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Hospital Navigation">
        <div className="flex items-center justify-between h-20 gap-3">
          
          {/* Brand Wordmark & Official SVG Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-left focus-visible:outline-2 focus-visible:outline-[var(--focus)] rounded-[6px] p-1 cursor-pointer"
              aria-label="Cedarstone Hospital Home"
            >
              <CedarstoneLogo 
                className="h-10 sm:h-12 w-auto" 
                isDark={currentTheme === 'dark'}
              />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setServicesDropdownOpen(false);
                }}
                className={`cs-ui min-h-[44px] px-3 py-2 flex items-center gap-1 transition-colors cursor-pointer rounded-[6px] ${
                  currentSection === 'services' || servicesDropdownOpen
                    ? 'text-[var(--blue)] font-bold' 
                    : 'text-[var(--text)] hover:text-[var(--blue)] font-normal'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services & Clinics</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${servicesDropdownOpen ? 'rotate-180 text-[var(--blue)]' : 'text-[var(--text2)]'}`} />
              </button>

              {servicesDropdownOpen && (
                <div 
                  className="absolute left-0 mt-1 w-72 bg-[var(--bg)] border border-[var(--line)] rounded-[8px] p-2 shadow-lg z-50 animate-in fade-in slide-in-from-top-2"
                  role="menu"
                >
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-3 py-2.5 text-xs font-bold text-[var(--blue)] hover:bg-[var(--panel)] rounded-[6px] flex items-center justify-between cursor-pointer border-b border-[var(--line)] mb-1"
                    role="menuitem"
                  >
                    <span>View All 8 Clinical Departments</span>
                    <span>→</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-3 py-2 text-xs text-[var(--text)] hover:bg-[var(--panel)] rounded-[6px] flex items-center gap-2 cursor-pointer"
                    role="menuitem"
                  >
                    <ShieldAlert className="w-4 h-4 text-[#C8222C]" />
                    <span>24/7 Level 5 Trauma Centre</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-3 py-2 text-xs text-[var(--text)] hover:bg-[var(--panel)] rounded-[6px] flex items-center gap-2 cursor-pointer"
                    role="menuitem"
                  >
                    <HeartPulse className="w-4 h-4 text-[var(--blue)]" />
                    <span>Heart & Vascular Institute</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-3 py-2 text-xs text-[var(--text)] hover:bg-[var(--panel)] rounded-[6px] flex items-center gap-2 cursor-pointer"
                    role="menuitem"
                  >
                    <Stethoscope className="w-4 h-4 text-[var(--blue)]" />
                    <span>Mother & Child Pavilion (Maternity)</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-3 py-2 text-xs text-[var(--text)] hover:bg-[var(--panel)] rounded-[6px] flex items-center gap-2 cursor-pointer"
                    role="menuitem"
                  >
                    <Building2 className="w-4 h-4 text-[var(--blue)]" />
                    <span>3T MRI & 128-Slice CT Radiology</span>
                  </button>
                </div>
              )}
            </div>

            {/* Find a Doctor */}
            <button
              onClick={() => handleNavClick('doctors')}
              className={`cs-ui min-h-[44px] px-3 py-2 transition-colors relative cursor-pointer text-left rounded-[6px] ${
                currentSection === 'doctors' 
                  ? 'text-[var(--blue)] font-bold' 
                  : 'text-[var(--text)] hover:text-[var(--blue)] font-normal'
              }`}
            >
              Find a Doctor
              {currentSection === 'doctors' && (
                <span className="absolute bottom-1.5 left-3 right-3 h-0.5 bg-[var(--blue)]" />
              )}
            </button>

            {/* Virtual Care (Telehealth) */}
            <button
              onClick={() => handleNavClick('telehealth')}
              className={`cs-ui min-h-[44px] px-3 py-2 transition-colors relative cursor-pointer text-left rounded-[6px] flex items-center gap-1.5 ${
                currentSection === 'telehealth' 
                  ? 'text-[var(--blue)] font-bold' 
                  : 'text-[var(--text)] hover:text-[var(--blue)] font-normal'
              }`}
            >
              <Video className="w-4 h-4 text-[var(--blue)]" />
              <span>Virtual Care</span>
              {currentSection === 'telehealth' && (
                <span className="absolute bottom-1.5 left-3 right-3 h-0.5 bg-[var(--blue)]" />
              )}
            </button>

            {/* Patient & Visitors Dropdown */}
            <div className="relative" ref={patientDropdownRef}>
              <button
                onClick={() => setPatientDropdownOpen(!patientDropdownOpen)}
                className={`cs-ui min-h-[44px] px-3 py-2 flex items-center gap-1 transition-colors cursor-pointer rounded-[6px] ${
                  currentSection === 'visitors' || currentSection === 'insurance' || patientDropdownOpen
                    ? 'text-[var(--blue)] font-bold' 
                    : 'text-[var(--text)] hover:text-[var(--blue)] font-normal'
                }`}
                aria-expanded={patientDropdownOpen}
                aria-haspopup="true"
              >
                <span>Patient & Visitors</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${patientDropdownOpen ? 'rotate-180 text-[var(--blue)]' : 'text-[var(--text2)]'}`} />
              </button>

              {patientDropdownOpen && (
                <div 
                  className="absolute left-0 mt-1 w-64 bg-[var(--bg)] border border-[var(--line)] rounded-[8px] p-2 shadow-lg z-50 animate-in fade-in slide-in-from-top-2"
                  role="menu"
                >
                  <button
                    onClick={() => handleNavClick('visitors')}
                    className="w-full text-left px-3 py-2 text-xs text-[var(--text)] hover:bg-[var(--panel)] rounded-[6px] flex items-center gap-2 cursor-pointer"
                    role="menuitem"
                  >
                    <Clock className="w-4 h-4 text-[var(--blue)]" />
                    <span>Inpatient Visiting Hours</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('insurance')}
                    className="w-full text-left px-3 py-2 text-xs text-[var(--text)] hover:bg-[var(--panel)] rounded-[6px] flex items-center gap-2 cursor-pointer"
                    role="menuitem"
                  >
                    <CreditCard className="w-4 h-4 text-[var(--blue)]" />
                    <span>Insurance (SHA / NHIF) & Costs</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('visitors')}
                    className="w-full text-left px-3 py-2 text-xs text-[var(--text)] hover:bg-[var(--panel)] rounded-[6px] flex items-center gap-2 cursor-pointer"
                    role="menuitem"
                  >
                    <FileText className="w-4 h-4 text-[var(--blue)]" />
                    <span>Hospital Admission Checklist</span>
                  </button>
                </div>
              )}
            </div>

            {/* Patient Portal */}
            <button
              onClick={() => handleNavClick('portal')}
              className={`cs-ui min-h-[44px] px-3 py-2 transition-colors relative cursor-pointer text-left rounded-[6px] flex items-center gap-1.5 ${
                currentSection === 'portal' 
                  ? 'text-[var(--blue)] font-bold' 
                  : 'text-[var(--text)] hover:text-[var(--blue)] font-normal'
              }`}
            >
              <UserCheck className="w-4 h-4 text-[var(--blue)]" />
              <span>Patient Portal</span>
              {currentSection === 'portal' && (
                <span className="absolute bottom-1.5 left-3 right-3 h-0.5 bg-[var(--blue)]" />
              )}
            </button>

          </div>

          {/* Right Header Navbar Actions */}
          <div className="flex items-center gap-3">
            
            {/* Theme Toggle Button (44px min touch target) */}
            <button
              onClick={onToggleTheme}
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-[6px] border border-[var(--line)] text-[var(--text)] hover:bg-[var(--panel)] transition-colors flex items-center justify-center cursor-pointer"
              aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
            >
              {currentTheme === 'light' ? (
                <Moon className="w-5 h-5 text-[var(--text2)]" aria-hidden="true" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" aria-hidden="true" />
              )}
            </button>

            {/* Primary Action Button (Atkinson bold 16, verb-first, min height 44px) */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 bg-[var(--btn)] hover:bg-[var(--btn-h)] text-white cs-ui rounded-[6px] transition-colors shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Book an appointment</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-h-[44px] min-w-[44px] p-2.5 rounded-[6px] border border-[var(--line)] text-[var(--text)] hover:bg-[var(--panel)] flex items-center justify-center cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden bg-[var(--bg)] border-b border-[var(--line)] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in fade-in"
          role="dialog"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`min-h-[44px] w-full text-left px-3 py-2.5 rounded-[6px] cs-ui transition-colors ${
                currentSection === 'home' 
                  ? 'bg-[var(--panel)] text-[var(--blue)] font-bold' 
                  : 'text-[var(--text)] hover:bg-[var(--panel)]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('services')}
              className={`min-h-[44px] w-full text-left px-3 py-2.5 rounded-[6px] cs-ui transition-colors ${
                currentSection === 'services' 
                  ? 'bg-[var(--panel)] text-[var(--blue)] font-bold' 
                  : 'text-[var(--text)] hover:bg-[var(--panel)]'
              }`}
            >
              Services & Clinics (8 Departments)
            </button>

            <button
              onClick={() => handleNavClick('doctors')}
              className={`min-h-[44px] w-full text-left px-3 py-2.5 rounded-[6px] cs-ui transition-colors ${
                currentSection === 'doctors' 
                  ? 'bg-[var(--panel)] text-[var(--blue)] font-bold' 
                  : 'text-[var(--text)] hover:bg-[var(--panel)]'
              }`}
            >
              Find a Doctor & Specialists
            </button>

            <button
              onClick={() => handleNavClick('telehealth')}
              className={`min-h-[44px] w-full text-left px-3 py-2.5 rounded-[6px] cs-ui transition-colors ${
                currentSection === 'telehealth' 
                  ? 'bg-[var(--panel)] text-[var(--blue)] font-bold' 
                  : 'text-[var(--text)] hover:bg-[var(--panel)]'
              }`}
            >
              Virtual Care (Telehealth)
            </button>

            <button
              onClick={() => handleNavClick('visitors')}
              className={`min-h-[44px] w-full text-left px-3 py-2.5 rounded-[6px] cs-ui transition-colors ${
                currentSection === 'visitors' 
                  ? 'bg-[var(--panel)] text-[var(--blue)] font-bold' 
                  : 'text-[var(--text)] hover:bg-[var(--panel)]'
              }`}
            >
              Patient & Visiting Schedules
            </button>

            <button
              onClick={() => handleNavClick('insurance')}
              className={`min-h-[44px] w-full text-left px-3 py-2.5 rounded-[6px] cs-ui transition-colors ${
                currentSection === 'insurance' 
                  ? 'bg-[var(--panel)] text-[var(--blue)] font-bold' 
                  : 'text-[var(--text)] hover:bg-[var(--panel)]'
              }`}
            >
              Insurance (SHA / NHIF) & Settlement
            </button>

            <button
              onClick={() => handleNavClick('portal')}
              className={`min-h-[44px] w-full text-left px-3 py-2.5 rounded-[6px] cs-ui transition-colors ${
                currentSection === 'portal' 
                  ? 'bg-[var(--panel)] text-[var(--blue)] font-bold' 
                  : 'text-[var(--text)] hover:bg-[var(--panel)]'
              }`}
            >
              Patient Health Records Portal
            </button>
          </div>

          <div className="pt-3 border-t border-[var(--line)] flex flex-col gap-2.5">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full min-h-[44px] px-4 py-2.5 bg-[var(--btn)] hover:bg-[var(--btn-h)] text-white cs-ui rounded-[6px] flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Book an appointment</span>
            </button>

            <a
              href={`tel:${HOSPITAL_CONTACTS.emergencyHotline}`}
              className="w-full min-h-[44px] px-4 py-2.5 border border-[#C8222C] text-[#C8222C] dark:text-[#F0707A] hover:bg-[#FBECEC] dark:hover:bg-[#3A1519] cs-ui rounded-[6px] flex items-center justify-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" aria-hidden="true" />
              <span>Emergency (+254 700 000 911)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
