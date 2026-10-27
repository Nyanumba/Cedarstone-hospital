import React from 'react';
import { Calendar, Search, ShieldCheck, HeartPulse, Stethoscope, Clock, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToDoctors: () => void;
  onNavigateToServices: () => void;
  onQuickSearch: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onNavigateToDoctors,
  onNavigateToServices,
  onQuickSearch
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onQuickSearch(searchQuery.trim());
    }
  };

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* 
        Mandated Hero Gradient:
        linear-gradient(135deg, #073A6E 0%, #0A4F93 55%, #1363B5 100%)
        White text, white-filled primary button with blue text, white outline secondary button.
        Eyebrow #BFD9F5, body #DCE9F7. Focus ring is white.
      */}
      <div 
        className="w-full text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'var(--hero)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Mandated Eyebrow in #BFD9F5 */}
              <div 
                className="font-bold uppercase tracking-[1.2px] text-[13px] font-cardo"
                style={{ color: '#BFD9F5' }}
              >
                CEDARSTONE HOSPITAL · UPPER HILL, NAIROBI
              </div>

              {/* Mandated Display Headline: Cardo 48/1.1 (34px below 560px) */}
              <h1 
                id="hero-heading" 
                className="cs-display font-cardo text-white font-normal tracking-tight"
              >
                Advanced medical care, delivered with warmth and dignity.
              </h1>

              {/* Mandated Lead Paragraph: Cardo 20/1.6 in #DCE9F7 */}
              <p 
                className="cs-lead font-cardo max-w-2xl text-[20px] leading-[1.6]"
                style={{ color: '#DCE9F7' }}
              >
                From round-the-clock emergency and trauma surgery to maternal care and specialized oncology, Cedarstone Hospital serves families across Kenya with clinical precision and compassionate bedside attention.
              </p>

              {/* Action Buttons: 
                  "White-filled primary button with blue text, white outline secondary button"
                  "Min height 44px, Atkinson bold 16, verb-first labels."
              */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="min-h-[44px] px-6 py-3 bg-white text-[#0A4F93] hover:bg-slate-100 font-bold cs-ui rounded-[6px] transition-colors focus-visible:outline-white cursor-pointer shadow-sm"
                >
                  Book an appointment
                </button>

                <button
                  onClick={onNavigateToDoctors}
                  className="min-h-[44px] px-6 py-3 border border-white text-white hover:bg-white/10 font-bold cs-ui rounded-[6px] transition-colors focus-visible:outline-white cursor-pointer"
                >
                  Find a doctor
                </button>
              </div>

              {/* Trust Indicators conforming to anti-slop: clean unboxed text with separators */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#DCE9F7]">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" aria-hidden="true" />
                  KMPDC Licensed Facility
                </span>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span>SafeCare Level 5 Accredited</span>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span>All Major Kenyan Insurances & SHA Accepted</span>
              </div>
            </div>

            {/* Right Column: Key Hospital Metrics & Triage Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[12px] p-6 text-white space-y-6">
                <div className="border-b border-white/20 pb-4">
                  <h2 className="text-lg font-bold font-cardo text-white">
                    Need immediate care today?
                  </h2>
                  <p className="text-sm text-[#DCE9F7] mt-1">
                    Our 24-hour triage team in Upper Hill is ready. Walk-ins are always prioritized for acute symptoms.
                  </p>
                </div>

                {/* Quick Search Form */}
                <form onSubmit={handleSearchSubmit} className="space-y-3">
                  <label htmlFor="hospital-search" className="block text-xs font-bold text-white uppercase tracking-wider">
                    Search doctor, clinic or service
                  </label>
                  <div className="relative">
                    <input
                      id="hospital-search"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="e.g. Dr. Amina, Cardiology, Ultrasound..."
                      className="w-full min-h-[44px] pl-10 pr-4 bg-white text-[#1C2430] placeholder:text-slate-500 rounded-[6px] text-sm focus-visible:outline-2 focus-visible:outline-white"
                    />
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
                  </div>
                  <button
                    type="submit"
                    className="w-full min-h-[44px] bg-white/20 hover:bg-white/30 text-white font-bold text-sm rounded-[6px] transition-colors border border-white/40 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Search hospital directory</span>
                  </button>
                </form>

                {/* Quick stats with unboxed text */}
                <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-[#DCE9F7] border-t border-white/10">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-emerald-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-white text-sm">15 Minutes</strong>
                      Average Emergency Triage Wait
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-white text-sm">Upper Hill</strong>
                      Hospital Road, Nairobi
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Quick Access Strip below Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-[var(--bg)] border border-[var(--line)] rounded-[12px] p-4 shadow-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={onNavigateToServices}
            className="flex items-center gap-3 p-3 rounded-[8px] hover:bg-[var(--panel)] transition-colors text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-[8px] bg-[var(--panel)] text-[var(--blue)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--blue)] group-hover:text-white transition-colors">
              <Stethoscope className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="block font-bold text-sm text-[var(--text)]">Clinical Clinics</span>
              <span className="text-xs text-[var(--text2)]">8 Specialist Departments</span>
            </div>
          </button>

          <button
            onClick={onNavigateToDoctors}
            className="flex items-center gap-3 p-3 rounded-[8px] hover:bg-[var(--panel)] transition-colors text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-[8px] bg-[var(--panel)] text-[var(--blue)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--blue)] group-hover:text-white transition-colors">
              <HeartPulse className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="block font-bold text-sm text-[var(--text)]">Kenyan Specialists</span>
              <span className="text-xs text-[var(--text2)]">View Profiles & Slots</span>
            </div>
          </button>

          <a
            href="tel:+254700000911"
            className="flex items-center gap-3 p-3 rounded-[8px] hover:bg-[#FBECEC] transition-colors text-left group"
          >
            <div className="w-10 h-10 rounded-[8px] bg-[#FBECEC] text-[#C8222C] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8222C] group-hover:text-white transition-colors">
              <Clock className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="block font-bold text-sm text-[#C8222C] dark:text-[#F0707A]">24/7 Trauma Care</span>
              <span className="text-xs text-[var(--text2)]">Call +254 700 000 911</span>
            </div>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-3 p-3 rounded-[8px] hover:bg-[var(--panel)] transition-colors text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-[8px] bg-[var(--panel)] text-[var(--blue)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--blue)] group-hover:text-white transition-colors">
              <Calendar className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="block font-bold text-sm text-[var(--text)]">Schedule Visit</span>
              <span className="text-xs text-[var(--text2)]">Instant Online Confirmation</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
