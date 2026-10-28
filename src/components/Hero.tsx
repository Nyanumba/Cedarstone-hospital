import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Stethoscope, Phone } from 'lucide-react';

interface HeroProps {
  onNavigateToServices: () => void;
  onNavigateToVisiting?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateToServices,
  onNavigateToVisiting
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      redBadge: 'LEVEL 5 TERTIARY REFERRAL HOSPITAL • UPPER HILL, NAIROBI',
      licenseBadge: 'KMPDC Licensed Level 5',
      title: 'World–Class Healthcare Grounded in Compassion',
      lead: 'Cedarstone Hospital delivers patient-first medical leadership, 24/7 emergency response, and verified direct billing across 35+ Kenyan insurers in Upper Hill.'
    },
    {
      redBadge: '24/7 TRAUMA & CARDIAC RESUSCITATION • NAIROBI',
      licenseBadge: 'SafeCare Level 5 Accredited',
      title: 'Advanced Surgical & Emergency Clinical Excellence',
      lead: 'State-of-the-art bi-plane cardiac catheterization labs, laminar flow surgical suites, and dedicated intensive care units in Upper Hill.'
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden w-full min-h-[580px] lg:min-h-[640px] flex items-center bg-[#072648]" aria-labelledby="hero-heading">
      
      {/* Background Image: Authentic Kenyan Doctors in modern hospital corridor */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/images/kenyan_hospital_doctors_1793209361844.jpg')`,
          backgroundPosition: 'right 20% center'
        }}
        aria-hidden="true"
      />

      {/* Deep Blue Overlay Gradient matching Figma reference: 
          Deep navy on the left for crisp WCAG AAA typography, fading across to reveal the doctors */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(90deg, rgba(6, 32, 60, 0.97) 0%, rgba(7, 44, 82, 0.92) 42%, rgba(10, 68, 125, 0.55) 75%, rgba(10, 68, 125, 0.20) 100%)'
        }}
        aria-hidden="true"
      />

      {/* Hero Content Container using 95% screen width */}
      <div className="relative z-20 w-[95%] max-w-[1700px] mx-auto px-2 sm:px-4 py-16 sm:py-24">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Top Badges matching Figma screenshot */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {/* Red Badge */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C8222C] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              {activeSlide.redBadge}
            </span>

            {/* Translucent License Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[11px] sm:text-xs font-medium backdrop-blur-xs shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              {activeSlide.licenseBadge}
            </span>
          </div>

          {/* Main Cardo Headline matching Figma reference: "World–Class Healthcare Grounded in Compassion" */}
          <h1 
            id="hero-heading" 
            className="cs-display font-cardo text-white font-normal text-3xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-tight"
          >
            {activeSlide.title}
          </h1>

          {/* Lead Paragraph */}
          <p className="cs-lead font-cardo text-[#DCE9F7] text-base sm:text-[19px] leading-[1.6] max-w-2xl">
            {activeSlide.lead}
          </p>

          {/* CTA Buttons - completely removed appointment booking button */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={onNavigateToServices}
              className="min-h-[46px] px-6 py-3 bg-[#0A4F93] hover:bg-[#083F76] text-white font-semibold text-sm rounded-[6px] transition-all flex items-center gap-2.5 shadow-sm border border-blue-400/30 cursor-pointer"
            >
              <Stethoscope className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Explore Clinical Specialties</span>
            </button>

            <a
              href="tel:+254208900000"
              className="min-h-[46px] px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-[6px] border border-white/40 transition-all flex items-center gap-2.5 backdrop-blur-xs"
            >
              <Phone className="w-4 h-4 text-white" aria-hidden="true" />
              <span>24/7 Hotline: +254 (0) 20 890 0000</span>
            </a>
          </div>

        </div>
      </div>

      {/* Carousel Navigation Arrows matching Figma screenshot */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/25 flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/25 flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

    </section>
  );
};
