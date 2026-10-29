import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  FileText, 
  Bed, 
  Award, 
  Clock, 
  CheckCircle2, 
  Lock, 
  FileSpreadsheet, 
  HelpCircle, 
  Download, 
  ArrowRight,
  Activity,
  HeartHandshake,
  MapPin,
  Compass,
  ChevronRight,
  Phone,
  Navigation
} from 'lucide-react';

interface AboutUsProps {
  onNavigateToServices: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onNavigateToServices }) => {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCharter = () => {
    // Generate simple PDF mock download or alert
    alert('Cedarstone Hospital Patient Covenant & Clinical Rights Charter (English & Swahili) is downloading.');
  };

  return (
    <div id="about-us-page" className="bg-white text-[#1C2430] transition-colors duration-200">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION matching image_1a3d369a.png
      ========================================================================= */}
      <section className="py-12 sm:py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto border-b border-[#D5DEE8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission & Heritage */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Eyebrow: OUR HERITAGE & MISSION */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EEF4FA] text-[#0A4F93] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0A4F93]" />
                OUR HERITAGE & MISSION
              </span>
            </div>

            {/* Display Headline in Cardo serif */}
            <h1 className="cs-display font-cardo text-[#1C2430] text-3xl sm:text-5xl lg:text-[52px] leading-[1.12] tracking-tight font-normal">
              Anchored in Nairobi. Dedicated to African Clinical Excellence.
            </h1>

            {/* Lead Paragraph */}
            <p className="cs-lead font-cardo text-[#4A5B6E] text-base sm:text-[18.5px] leading-[1.6] max-w-2xl">
              Founded with a vision to redefine tertiary healthcare in Kenya, Cedarstone combines international-calibre medical technology with deep communal warmth and integrity. Situated in the heart of Upper Hill, we provide transformative surgical, maternal, and diagnostic medicine tailored to the needs of our community.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onNavigateToServices}
                className="min-h-[46px] px-6 py-2.5 bg-[#0A4F93] hover:bg-[#083F76] text-white font-bold text-sm rounded-[6px] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Explore Clinical Departments</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('executive-leadership')}
                className="min-h-[46px] px-6 py-2.5 bg-[#EEF4FA] hover:bg-[#DCE9F7] text-[#0A4F93] font-bold text-sm rounded-[6px] transition-colors cursor-pointer"
              >
                Executive Leadership
              </button>
            </div>

          </div>

          {/* Right Column: Established Photo Card matching image_1a3d369a.png */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[16px] overflow-hidden shadow-lg border border-[#D5DEE8] bg-[#141B26]">
              <img
                src="/images/upperhill-flagship.jpg"
                alt="Chief Nursing Officer at Cedarstone Hospital overlooking Nairobi Upper Hill"
                className="w-full h-[460px] object-cover object-top"
              />

              {/* Gradient Banner at bottom of image matching screenshot */}
              <div 
                className="absolute inset-x-0 bottom-0 p-6 text-white"
                style={{
                  background: 'linear-gradient(180deg, rgba(7,38,72,0) 0%, rgba(7,38,72,0.85) 45%, rgba(7,38,72,0.98) 100%)'
                }}
              >
                <span className="text-[11px] font-bold tracking-[1.4px] uppercase text-[#BFD9F5] block mb-1">
                  ESTABLISHED 2008
                </span>
                <h3 className="text-xl font-bold font-cardo text-white">
                  Upper Hill Flagship Medical Center
                </h3>
                <p className="text-xs text-[#DCE9F7] mt-1">
                  Serving patients from across Kenya and East & Central Africa with specialized tertiary referral care.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: MILESTONES & CLINICAL REACH matching image_9736255f.png
      ========================================================================= */}
      <section className="py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto border-b border-[#D5DEE8]">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-2 font-bold text-[#0A4F93]">
              INSTITUTIONAL SCALE
            </span>
            <h2 className="cs-h1 font-cardo text-2xl sm:text-4xl text-[#1C2430] font-normal">
              Milestones & Clinical Reach
            </h2>
          </div>
          <p className="cs-body text-xs sm:text-sm text-[#4A5B6E] max-w-xl leading-relaxed">
            Measurable healthcare delivery anchored in regional patient safety, continuous specialization, and zero-compromise emergency readouts.
          </p>
        </div>

        {/* 4 Metric Cards Grid matching image_9736255f.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Metric 1 */}
          <div className="bg-[#EEF4FA]/50 border border-[#D5DEE8] rounded-[12px] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold tracking-[1.2px] text-[#4A5B6E] uppercase">
                  ANNUAL VOLUME
                </span>
                <Users className="w-5 h-5 text-[#0A4F93]" />
              </div>
              <strong className="block text-3xl sm:text-4xl font-bold font-cardo text-[#0A4F93] mb-1">
                45,000+
              </strong>
              <h3 className="font-bold text-sm text-[#1C2430] mb-2">
                Patients Treated
              </h3>
              <p className="cs-body text-xs text-[#4A5B6E] leading-relaxed">
                Outpatient consultations, specialized clinics, and complex in-patient therapies.
              </p>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="bg-[#EEF4FA]/50 border border-[#D5DEE8] rounded-[12px] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold tracking-[1.2px] text-[#4A5B6E] uppercase">
                  MEDICAL FACULTY
                </span>
                <FileText className="w-5 h-5 text-[#0A4F93]" />
              </div>
              <strong className="block text-3xl sm:text-4xl font-bold font-cardo text-[#0A4F93] mb-1">
                180+
              </strong>
              <h3 className="font-bold text-sm text-[#1C2430] mb-2">
                Specialist Consultants
              </h3>
              <p className="cs-body text-xs text-[#4A5B6E] leading-relaxed">
                Sub-specialists covering cardiology, oncology, pediatric surgery, and neurosciences.
              </p>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="bg-[#EEF4FA]/50 border border-[#D5DEE8] rounded-[12px] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold tracking-[1.2px] text-[#4A5B6E] uppercase">
                  INPATIENT CAPACITY
                </span>
                <Bed className="w-5 h-5 text-[#C8222C]" />
              </div>
              <strong className="block text-3xl sm:text-4xl font-bold font-cardo text-[#0A4F93] mb-1">
                220
              </strong>
              <h3 className="font-bold text-sm text-[#1C2430] mb-2">
                Total Inpatient Beds
              </h3>
              <p className="cs-body text-xs text-[#4A5B6E] leading-relaxed">
                Including 24 High Dependency & Dedicated Intensive Care (ICU) monitored suites.
              </p>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="bg-[#EEF4FA]/50 border border-[#D5DEE8] rounded-[12px] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold tracking-[1.2px] text-[#4A5B6E] uppercase">
                  QUALITY STANDING
                </span>
                <Award className="w-5 h-5 text-emerald-600" />
              </div>
              <strong className="block text-3xl sm:text-4xl font-bold font-cardo text-[#0A4F93] mb-1">
                Level 5
              </strong>
              <h3 className="font-bold text-sm text-[#1C2430] mb-2">
                KMPDC & ISO Certified
              </h3>
              <p className="cs-body text-xs text-[#4A5B6E] leading-relaxed">
                ISO 9001:2015 institutional quality benchmarks & Social Health Authority accreditation.
              </p>
            </div>
          </div>

        </div>

        {/* Readiness Status Bottom Bar matching image_9736255f.png */}
        <div className="bg-[#EEF4FA] border border-[#D5DEE8] rounded-[12px] p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 space-y-1">
            <span className="text-[11px] font-bold tracking-[1.2px] text-[#0A4F93] uppercase block">
              READINESS STATUS
            </span>
            <h3 className="text-lg font-bold font-cardo text-[#1C2430]">
              Real-Time Clinical Response
            </h3>
            <p className="text-xs text-[#4A5B6E]">
              Rapid ambulance mobilization and Level 1 triage capabilities in Nairobi.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-3 gap-4 text-center md:text-left border-t md:border-t-0 md:border-l border-[#D5DEE8] pt-4 md:pt-0 md:pl-6">
            <div>
              <strong className="block text-2xl sm:text-3xl font-bold font-cardo text-[#0A4F93]">
                &lt; 8 min
              </strong>
              <span className="text-xs text-[#4A5B6E]">
                Average Door-to-Doctor in ER
              </span>
            </div>

            <div>
              <strong className="block text-2xl sm:text-3xl font-bold font-cardo text-emerald-700">
                99.4%
              </strong>
              <span className="text-xs text-[#4A5B6E]">
                WHO Surgical Checklist Rigor
              </span>
            </div>

            <div>
              <strong className="block text-2xl sm:text-3xl font-bold font-cardo text-[#0A4F93]">
                24/7
              </strong>
              <span className="text-xs text-[#4A5B6E]">
                On-site Blood Bank & MRI
              </span>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 3: EXECUTIVE CLINICAL DIRECTORATE matching image_515c1c1d.png
      ========================================================================= */}
      <section id="executive-leadership" className="py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto border-b border-[#D5DEE8]">
        
        <div className="mb-10 max-w-3xl">
          <h2 className="cs-h1 font-cardo text-2xl sm:text-4xl text-[#1C2430] font-normal mb-3">
            Executive Clinical Directorate
          </h2>
          <p className="cs-body text-xs sm:text-sm text-[#4A5B6E] leading-relaxed">
            Cedarstone is steered by respected Kenyan clinicians and institutional administrators recognized across Sub-Saharan Africa for their research, surgical proficiency, and hospital governance.
          </p>
        </div>

        {/* 4 Leaders Cards Grid matching image_515c1c1d.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Leader 1: Dr. Peter Kamau */}
          <article className="bg-white border border-[#D5DEE8] rounded-[12px] overflow-hidden shadow-xs hover:border-[#0A4F93] transition-colors">
            <div className="relative h-64 bg-slate-100 overflow-hidden">
              <img
                src="/images/dr-peter-kamau.jpg"
                alt="Dr. Peter Kamau, Consultant Physician at Cedarstone Hospital"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-0.5 rounded-[4px] bg-white/90 text-[#1C2430] border border-slate-200 backdrop-blur-xs">
                KMPDC Fellow
              </span>
            </div>
            <div className="p-4">
              <h3 className="cs-h3 font-cardo text-lg font-bold text-[#1C2430]">
                Dr. Peter Kamau
              </h3>
              <p className="text-xs font-semibold text-[#0A4F93] mt-0.5">
                MBChB, MMed (Internal Medicine)
              </p>
            </div>
          </article>

          {/* Leader 2: Dr. Amina Wanjiru */}
          <article className="bg-white border border-[#D5DEE8] rounded-[12px] overflow-hidden shadow-xs hover:border-[#0A4F93] transition-colors">
            <div className="relative h-64 bg-slate-100 overflow-hidden">
              <img
                src="/images/dr-amina-wanjiru.jpg"
                alt="Dr. Amina Wanjiru, Chief of Maternal and Fetal Care"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-0.5 rounded-[4px] bg-white/90 text-[#1C2430] border border-slate-200 backdrop-blur-xs">
                Patient Safety
              </span>
            </div>
            <div className="p-4">
              <h3 className="cs-h3 font-cardo text-lg font-bold text-[#1C2430]">
                Dr. Amina Wanjiru
              </h3>
              <p className="text-xs font-semibold text-[#0A4F93] mt-0.5">
                MD, FCP (East Africa)
              </p>
            </div>
          </article>

          {/* Leader 3: Grace Chebet */}
          <article className="bg-white border border-[#D5DEE8] rounded-[12px] overflow-hidden shadow-xs hover:border-[#0A4F93] transition-colors">
            <div className="relative h-64 bg-slate-100 overflow-hidden">
              <img
                src="/images/grace-chebet.jpg"
                alt="Grace Chebet, Director of Nursing Services"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-0.5 rounded-[4px] bg-white/90 text-[#1C2430] border border-slate-200 backdrop-blur-xs">
                Patient Charter
              </span>
            </div>
            <div className="p-4">
              <h3 className="cs-h3 font-cardo text-lg font-bold text-[#1C2430]">
                Grace Chebet
              </h3>
              <p className="text-xs font-semibold text-[#0A4F93] mt-0.5">
                RN, MSc (Nursing Leadership)
              </p>
            </div>
          </article>

          {/* Leader 4: Brian Wafula */}
          <article className="bg-white border border-[#D5DEE8] rounded-[12px] overflow-hidden shadow-xs hover:border-[#0A4F93] transition-colors">
            <div className="relative h-64 bg-slate-100 overflow-hidden">
              <img
                src="/images/dr-brian-wafula.jpg"
                alt="Brian Wafula, Chief Operating Officer and Governance Lead"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-0.5 rounded-[4px] bg-white/90 text-[#1C2430] border border-slate-200 backdrop-blur-xs">
                Governance
              </span>
            </div>
            <div className="p-4">
              <h3 className="cs-h3 font-cardo text-lg font-bold text-[#1C2430]">
                Brian Wafula
              </h3>
              <p className="text-xs font-semibold text-[#0A4F93] mt-0.5">
                CPA (K), MBA
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CLINICAL ACCREDITATIONS & PATIENT CHARTER matching image_932e6f77.png
      ========================================================================= */}
      <section className="py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Accreditations */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-2 font-bold text-[#C8222C]">
                UNCOMPROMISING SAFETY
              </span>
              <h2 className="cs-h1 font-cardo text-2xl sm:text-4xl text-[#1C2430] font-normal mb-3 leading-tight">
                Clinical Accreditations & Transparent Patient Charter
              </h2>
              <p className="cs-body text-xs sm:text-sm text-[#4A5B6E] leading-relaxed">
                Every patient stepping through Cedarstone Hospital is protected by verifiable clinical standards, independent statutory audits, and an unequivocal Bill of Rights. We practice open disclosure, informed consent, and cultural dignity.
              </p>
            </div>

            <div className="space-y-3">
              {/* Card 1 */}
              <div className="bg-[#EEF4FA]/60 border border-[#D5DEE8] rounded-[8px] p-4 space-y-1 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>KMPDC Level 5 Certification</span>
                </div>
                <p className="text-xs text-[#4A5B6E] pl-6">
                  Fully licensed tertiary facility under Kenya Medical Practitioners and Dentists Council guidelines with ongoing biohazard and sanitation recertification.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#EEF4FA]/60 border border-[#D5DEE8] rounded-[8px] p-4 space-y-1 shadow-xs">
                <div className="flex items-center gap-2 text-[#0A4F93] font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-[#0A4F93] flex-shrink-0" />
                  <span>SHA & NHIF Quality Verified</span>
                </div>
                <p className="text-xs text-[#4A5B6E] pl-6">
                  Direct integration with Social Health Authority (SHA) coverage ensuring equitable, audited copays with transparent medical invoicing.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#EEF4FA]/60 border border-[#D5DEE8] rounded-[8px] p-4 space-y-1 shadow-xs">
                <div className="flex items-center gap-2 text-[#C8222C] font-bold text-xs">
                  <Activity className="w-4 h-4 text-[#C8222C] flex-shrink-0" />
                  <span>WHO Surgical Safety Checklists</span>
                </div>
                <p className="text-xs text-[#4A5B6E] pl-6">
                  Triple sign-in, time-out, and sign-out protocols mandated for every operating theatre procedure.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Cedarstone Patient Covenant matching image_932e6f77.png */}
          <div className="lg:col-span-7 bg-[#EEF4FA]/50 border border-[#D5DEE8] rounded-[16px] p-6 sm:p-8 space-y-6 shadow-xs">
            
            <div className="flex items-start justify-between border-b border-[#D5DEE8] pb-4">
              <div>
                <span className="text-[11px] font-bold tracking-[1.2px] text-[#0A4F93] uppercase block mb-1">
                  PATIENT RIGHTS FRAMEWORK
                </span>
                <h3 className="cs-h2 font-cardo text-xl sm:text-2xl font-bold text-[#1C2430]">
                  The Cedarstone Patient Covenant
                </h3>
              </div>
              <ShieldCheck className="w-7 h-7 text-[#0A4F93]" />
            </div>

            {/* 4 Covenant Boxes in 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white border border-[#D5DEE8] rounded-[10px] p-4 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-[#0A4F93] font-bold text-xs">
                  <Lock className="w-4 h-4 text-[#0A4F93]" />
                  <span>Dignity & Absolute Privacy</span>
                </div>
                <p className="text-xs text-[#4A5B6E] leading-relaxed">
                  You are entitled to absolute medical confidentiality under Kenya Data Protection Act 2019, respectful bedside interactions, and cultural accommodation.
                </p>
              </div>

              <div className="bg-white border border-[#D5DEE8] rounded-[10px] p-4 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-[#0A4F93] font-bold text-xs">
                  <FileSpreadsheet className="w-4 h-4 text-[#0A4F93]" />
                  <span>Transparent Itemized Billing</span>
                </div>
                <p className="text-xs text-[#4A5B6E] leading-relaxed">
                  Clear explanations of fees, pharmacy tariffs, and diagnostics prior to specialized treatment, with no surprise hidden surcharges.
                </p>
              </div>

              <div className="bg-white border border-[#D5DEE8] rounded-[10px] p-4 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-[#0A4F93] font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0A4F93]" />
                  <span>Informed Clinical Choice</span>
                </div>
                <p className="text-xs text-[#4A5B6E] leading-relaxed">
                  Every treatment plan is co-created with full disclosure of alternatives, anticipated recovery times, and right to a formal second opinion.
                </p>
              </div>

              <div className="bg-white border border-[#D5DEE8] rounded-[10px] p-4 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-[#0A4F93] font-bold text-xs">
                  <HelpCircle className="w-4 h-4 text-[#0A4F93]" />
                  <span>Independent Patient Advocate</span>
                </div>
                <p className="text-xs text-[#4A5B6E] leading-relaxed">
                  Direct access to our designated patient liaison ombudsman 24/7 for unresolved clinical inquiries or compassionate accommodation requests.
                </p>
              </div>

            </div>

            {/* Download Patient Charter Banner matching image_932e6f77.png */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-[10px] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                <span className="text-xs font-bold text-emerald-950">
                  Download Patient Charter & Clinical Rights (PDF - English & Swahili)
                </span>
              </div>
              <button
                onClick={handleDownloadCharter}
                className="min-h-[38px] px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-[6px] transition-colors flex-shrink-0 cursor-pointer self-start sm:self-auto"
              >
                Download
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PURPOSE-BUILT CLINICAL ARCHITECTURE matching image_55de7822.png, image_5c9c254d.png, image_c39fabcb.png
      ========================================================================= */}
      <section className="py-16 sm:py-20 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto border-t border-[#D5DEE8]" aria-labelledby="architecture-heading">
        
        {/* Header with Title on Left and Location on Right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 id="architecture-heading" className="cs-h1 font-cardo text-3xl sm:text-4xl lg:text-[42px] text-[#0B2545] font-normal">
            Purpose-Built Clinical Architecture
          </h2>
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1C2430]">
            <MapPin className="w-4 h-4 text-[#C8222C] flex-shrink-0" />
            <span>Ralphe Bunche Rd, Upper Hill, Nairobi</span>
          </div>
        </div>

        {/* 2-Row Grid matching screenshots */}
        <div className="space-y-6 mb-12">
          
          {/* Top Row: Large Modular Surgical Suite (Left) + Private Inpatient Suites (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 1: 6 Ultra-Clean Modular Surgical Suites (7 cols) */}
            <article className="lg:col-span-7 rounded-[16px] overflow-hidden border border-[#D5DEE8] relative shadow-xs flex flex-col justify-end min-h-[420px] bg-slate-900 group">
              <img 
                src="/images/surgical-suites.jpg" 
                alt="6 Ultra-Clean Modular Surgical Suites at Cedarstone Hospital"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(7,38,72,0.1) 0%, rgba(7,38,72,0.6) 45%, rgba(7,38,72,0.96) 100%)'
                }}
              />
              <div className="relative z-10 p-7 sm:p-9 text-white space-y-2">
                <span className="text-[11px] font-bold tracking-[1.4px] uppercase text-[#BFD9F5] block">
                  TIER-1 SURGICAL CAPABILITY
                </span>
                <h3 className="cs-h3 font-cardo text-2xl sm:text-3xl font-bold text-white">
                  6 Ultra-Clean Modular Surgical Suites
                </h3>
                <p className="cs-body text-xs sm:text-sm text-[#DCE9F7] max-w-xl leading-relaxed">
                  Equipped with HEPA positive pressure airflow, laparoscopic digital towers, and continuous intra-operative ultrasound imaging.
                </p>
              </div>
            </article>

            {/* Card 2: Private Inpatient Suites (5 cols) */}
            <article className="lg:col-span-5 bg-white border border-[#D5DEE8] rounded-[16px] overflow-hidden shadow-xs hover:border-[#0A4F93] transition-colors flex flex-col justify-between">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img 
                  src="/images/private-inpatient.jpg" 
                  alt="Private Inpatient Suites at Cedarstone Hospital"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="cs-h3 font-cardo text-xl sm:text-2xl font-bold text-[#1C2430] mb-2">
                    Private Inpatient Suites
                  </h3>
                  <p className="cs-body text-xs sm:text-sm text-[#4A5B6E] leading-relaxed">
                    Designed for restorative tranquility with acoustic isolation, personal en-suite facilities, and continuous oxygen telemetry.
                  </p>
                </div>
                <div className="pt-2">
                  <button 
                    onClick={() => alert("Private Inpatient Suite Amenities: En-suite rainfall shower, remote motorized bed, private nurse call tablet, dedicated family recliner, complimentary high-speed Wi-Fi, and personalized chef meals.")}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0A4F93] hover:underline cursor-pointer"
                  >
                    <span>View room amenities</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>

          </div>

          {/* Bottom Row: 3 Equal Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 3: Dedicated Pediatric Wing & NICU */}
            <article className="bg-white border border-[#D5DEE8] rounded-[16px] overflow-hidden shadow-xs hover:border-[#0A4F93] transition-colors flex flex-col justify-between">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                <img 
                  src="/images/NICU-baby.jpg" 
                  alt="Dedicated Pediatric Wing & NICU at Cedarstone Hospital"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="cs-h3 font-cardo text-xl font-bold text-[#1C2430] mb-2">
                    Dedicated Pediatric Wing & NICU
                  </h3>
                  <p className="cs-body text-xs text-[#4A5B6E] leading-relaxed">
                    A child-centered sanctuary staffed 24/7 by pediatric intensivists, advanced neonatal incubators, and family lodgings.
                  </p>
                </div>
                <div className="pt-2">
                  <button 
                    onClick={() => alert("Pediatric Safety Protocol: Bio-secure electronic tag monitoring for newborns, 1:1 neonatal nurse ratio, family-integrated developmental care, and HEPA laminar air in NICU bays.")}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A4F93] hover:underline cursor-pointer"
                  >
                    <span>Pediatric safety protocol</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>

            {/* Card 4: Healing Recovery Gardens */}
            <article className="bg-white border border-[#D5DEE8] rounded-[16px] overflow-hidden shadow-xs hover:border-[#0A4F93] transition-colors flex flex-col justify-between">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                <img 
                  src="/images/healing-recovery-garden.jpg" 
                  alt="Healing Recovery Gardens at Cedarstone Hospital"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="cs-h3 font-cardo text-xl font-bold text-[#1C2430] mb-2">
                    Healing Recovery Gardens
                  </h3>
                  <p className="cs-body text-xs text-[#4A5B6E] leading-relaxed">
                    Therapeutic outdoor green spaces with indigenous indigenous Kenyan flora designed to accelerate psychological and cardiac convalescence.
                  </p>
                </div>
                <div className="pt-2">
                  <button 
                    onClick={() => alert("Convalescent Services: Physiotherapy guided outdoor walking circuits, sensory relaxation benches, sunshine-assisted recovery, and wheelchair-accessible therapeutic pathways.")}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A4F93] hover:underline cursor-pointer"
                  >
                    <span>Convalescent services</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>

            {/* Card 5: Trauma Helipad & Fleet Bay */}
            <article className="bg-white border border-[#D5DEE8] rounded-[16px] overflow-hidden shadow-xs hover:border-[#C8222C] transition-colors flex flex-col justify-between">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                <img 
                  src="/images/landing-helipad.jpg" 
                  alt="Trauma Helipad & Fleet Bay at Cedarstone Hospital"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="cs-h3 font-cardo text-xl font-bold text-[#1C2430] mb-2">
                    Trauma Helipad & Fleet Bay
                  </h3>
                  <p className="cs-body text-xs text-[#4A5B6E] leading-relaxed">
                    Direct rooftop aero-medical evacuation landing pad and 4 dedicated Level 3 mobile intensive care ambulances.
                  </p>
                </div>
                <div className="pt-2">
                  <a 
                    href="tel:+254208900000"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8222C] hover:underline"
                  >
                    <span>Emergency dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>

          </div>

        </div>

        {/* Bottom Callout Banner matching image_c39fabcb.png */}
        <div className="bg-[#EEF4FA] border border-[#D5DEE8] rounded-[16px] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-[12px] bg-white border border-[#D5DEE8] flex items-center justify-center text-[#0A4F93] flex-shrink-0 shadow-xs">
              <Navigation className="w-6 h-6 text-[#0A4F93]" />
            </div>
            <div>
              <h3 className="cs-h3 font-cardo text-lg sm:text-xl font-bold text-[#1C2430]">
                Planning an Inpatient Visit or Consultation?
              </h3>
              <p className="cs-body text-xs sm:text-sm text-[#4A5B6E] mt-0.5">
                Secure patient parking on-site. Visiting hours are 12:30 PM – 2:00 PM and 4:30 PM – 6:30 PM daily.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <a
              href="tel:+254208900000"
              className="min-h-[44px] px-6 py-2.5 bg-[#0A4F93] hover:bg-[#083F76] text-white font-bold text-xs sm:text-sm rounded-[8px] transition-colors shadow-xs flex items-center justify-center gap-2 flex-1 sm:flex-initial"
            >
              <Phone className="w-4 h-4" />
              <span>Admissions (+254 20 890 0000)</span>
            </a>

            <a
              href="https://maps.google.com/?q=Upper+Hill+Nairobi+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-5 py-2.5 bg-white hover:bg-slate-50 border border-[#D5DEE8] text-[#1C2430] font-bold text-xs sm:text-sm rounded-[8px] transition-colors flex items-center justify-center gap-2 flex-1 sm:flex-initial"
            >
              <Compass className="w-4 h-4 text-[#0A4F93]" />
              <span>Directions via Google Maps</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
};
