import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone,
  ShieldAlert
} from 'lucide-react';
import { CedarstoneLogo } from './CedarstoneLogo';

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'insurance', label: 'Insurance & Billing' },
    { id: 'services', label: 'Centres of Excellence' },
    { id: 'visitors', label: 'Visiting Hours' },
    { id: 'consultants', label: 'Senior Leadership' },
    { id: 'careers', label: 'Careers' }
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#D5DEE8] shadow-xs">
      {/* 
        Emergency Top Bar:
        "EMERGENCY CARE • OPEN 24 HOURS | Rapid Response & Ambulance: +254 (0) 20 890 0000 / 0711 000 999 • Upper Hill, Nairobi"
      */}
      <div 
        className="w-full bg-[#C8222C] text-white py-1.5 px-4 text-xs font-semibold tracking-wide"
        role="region"
        aria-label="Cedarstone Emergency Bar"
      >
        <div className="w-[95%] max-w-[1700px] mx-auto flex items-center justify-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-[11px] sm:text-[12.5px]">
            <span className="font-bold uppercase tracking-wider">
              EMERGENCY CARE • OPEN 24 HOURS
            </span>
            <span className="hidden sm:inline opacity-70">|</span>
            <a 
              href="tel:+254208900000" 
              className="hover:underline font-medium inline-flex items-center gap-1"
            >
              Rapid Response & Ambulance: +254 (0) 20 890 0000 / 0711 000 999
            </a>
            <span className="hidden md:inline opacity-70">•</span>
            <span className="hidden md:inline text-white/90">Upper Hill, Nairobi</span>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar using 95% screen width */}
      <nav className="w-[95%] max-w-[1700px] mx-auto px-2 sm:px-4" aria-label="Main Hospital Navigation">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Official Cedarstone Logo on the Left */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-left focus-visible:outline-2 focus-visible:outline-[#0A4F93] rounded-[6px] p-1 cursor-pointer"
              aria-label="Cedarstone Hospital Home"
            >
              <CedarstoneLogo 
                className="h-10 sm:h-12 w-auto" 
                isDark={false}
              />
            </button>
          </div>

          {/* Desktop Navigation Links with Active Pill indicator */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`cs-ui min-h-[40px] px-3.5 py-2 rounded-lg transition-colors cursor-pointer text-sm font-medium ${
                    isActive
                      ? 'bg-[#EEF4FA] text-[#0A4F93] font-bold shadow-xs'
                      : 'text-[#1C2430] hover:text-[#0A4F93] hover:bg-slate-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action: Emergency Hotline Call & Telephone - completely removed booking appointment button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+254208900000"
              className="hidden sm:inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 bg-[#0A4F93] hover:bg-[#083F76] text-white cs-ui text-xs sm:text-sm font-semibold rounded-[6px] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>+254 (0) 20 890 0000</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-h-[44px] min-w-[44px] p-2.5 rounded-[6px] border border-[#D5DEE8] text-[#1C2430] hover:bg-slate-50 flex items-center justify-center cursor-pointer"
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
          className="lg:hidden bg-white border-b border-[#D5DEE8] px-4 pt-3 pb-6 space-y-3 shadow-lg"
          role="dialog"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`min-h-[44px] w-full text-left px-3.5 py-2.5 rounded-lg cs-ui text-sm transition-colors ${
                  currentSection === link.id
                    ? 'bg-[#EEF4FA] text-[#0A4F93] font-bold'
                    : 'text-[#1C2430] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#D5DEE8] flex flex-col gap-2">
            <a
              href="tel:+254208900000"
              className="w-full min-h-[44px] px-4 py-2.5 bg-[#0A4F93] text-white cs-ui text-sm font-semibold rounded-[6px] flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call Hospital: +254 (0) 20 890 0000</span>
            </a>

            <a
              href="tel:+254711000999"
              className="w-full min-h-[44px] px-4 py-2.5 border border-[#C8222C] text-[#C8222C] hover:bg-[#FBECEC] cs-ui text-sm font-medium rounded-[6px] flex items-center justify-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" aria-hidden="true" />
              <span>Emergency Dispatch (0711 000 999)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
