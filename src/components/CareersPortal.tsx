import React, { useState } from 'react';
import { 
  GraduationCap, 
  FileText, 
  Banknote, 
  CalendarClock, 
  ShieldCheck, 
  Users, 
  ArrowDown, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  Upload, 
  X,
  Stethoscope
} from 'lucide-react';

interface JobPosition {
  id: string;
  ref: string;
  title: string;
  category: 'doctors' | 'nursing' | 'diagnostics' | 'allied' | 'admin';
  employmentType: string;
  location: string;
  description: string;
  qualifications: string;
  certifications?: string;
  deadline: string;
  duties: string[];
}

export const CareersPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'doctors' | 'nursing' | 'diagnostics' | 'allied' | 'admin'>('all');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  
  // Application Modal state
  const [selectedJobForApply, setSelectedJobForApply] = useState<JobPosition | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('+254 ');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [applySuccess, setApplySuccess] = useState(false);

  const jobs: JobPosition[] = [
    {
      id: 'job-cardio',
      ref: 'CS-MED-2025-04',
      title: 'Specialist Cardiologist',
      category: 'doctors',
      employmentType: 'Full-Time Permanent',
      location: 'Upper Hill Campus',
      description: 'Lead non-invasive cardiac diagnostic procedures, consultative outpatient clinics, and cardiac cath-lab interventional rosters. KMPDC Specialist Recognition and valid annual retention licence mandatory.',
      qualifications: 'MMed (Int. Med) + Fellowship in Cardiology',
      deadline: '15 April 2026',
      duties: [
        'Conduct advanced diagnostic echocardiography and treadmill stress testing.',
        'Lead cardiac resuscitation and telemetry rounds in Cardiac ICU.',
        'Participate in multidisciplinary cath-lab stenting and pacemaker rotations.',
        'Mentor internal medicine post-graduate trainees and clinical officers.'
      ]
    },
    {
      id: 'job-icu-nurse',
      ref: 'CS-NUR-2025-11',
      title: 'Senior ICU Staff Nurse',
      category: 'nursing',
      employmentType: 'Shift Rotation (Day/Night)',
      location: 'Critical Care Center',
      description: 'Administer bedside clinical care for mechanically ventilated patients, arterial line management, hemodynamic monitoring, and titrating inotropic infusions.',
      qualifications: 'KRCHN or BSN + Higher Dip in Critical Care',
      certifications: 'Active BLS / ACLS Certification',
      deadline: '20 April 2026',
      duties: [
        'Direct 1:2 and 1:1 clinical bedside nursing in 18-bed tertiary ICU.',
        'Manage mechanical ventilators, continuous renal replacement therapy (CRRT), and arterial lines.',
        'Participate in rapid emergency code response team across inpatient towers.',
        'Maintain strict infection prevention and sepsis bundles.'
      ]
    },
    {
      id: 'job-radiographer',
      ref: 'CS-RAD-2025-08',
      title: 'Senior MRI & CT Radiographer',
      category: 'diagnostics',
      employmentType: 'Full-Time Permanent',
      location: 'Diagnostic Imaging Wing',
      description: 'Operate Siemens 3.0 Tesla Silent MRI and 128-slice dual-source CT scanner. Ensure radiation protection protocols and rapid emergency polytrauma imaging.',
      qualifications: 'BSc in Radiography + 3 years tertiary hospital experience',
      certifications: 'Registered with Radiation Protection Board (RPB)',
      deadline: '25 April 2026',
      duties: [
        'Perform specialized cardiac MRI, neuro-imaging, and musculoskeletal MRI sequences.',
        'Manage emergency trauma CT contrast protocols with attending radiologists.',
        'Maintain PACS calibration and image transfer standards.',
        'Ensure patient reassurance and MRI safety screening.'
      ]
    },
    {
      id: 'job-biomed',
      ref: 'CS-ENG-2025-02',
      title: 'Clinical Biomedical Engineer',
      category: 'allied',
      employmentType: 'Full-Time Permanent',
      location: 'Biomedical Engineering Unit',
      description: 'Oversee preventive maintenance, electrical safety testing, and calibration of operating theatre life support, telemetry monitors, and ventilators.',
      qualifications: 'BSc Biomedical Engineering + EBK Registration',
      certifications: 'EBK Registered Professional Engineer',
      deadline: '30 April 2026',
      duties: [
        'Maintain 99.8% equipment availability across 6 surgical suites and 18 ICU beds.',
        'Conduct routine electrical leakage tests and oxygen delivery calibrations.',
        'Train clinical nursing staff on patient monitoring interface operations.',
        'Coordinate vendor warranties and replacement parts procurement.'
      ]
    },
    {
      id: 'job-lab-tech',
      ref: 'CS-LAB-2025-14',
      title: 'Senior Medical Laboratory Technologist',
      category: 'diagnostics',
      employmentType: 'Full-Time Permanent',
      location: 'Molecular & Clinical Pathology Lab',
      description: 'Lead automated hematology, clinical chemistry, and blood transfusion cross-matching with strict turnaround times for acute trauma and surgical patients.',
      qualifications: 'BSc Medical Laboratory Science + KMLTTB License',
      certifications: 'Valid KMLTTB Annual Practicing License',
      deadline: '18 April 2026',
      duties: [
        'Process urgent emergency blood transfusion cross-matching and component prep.',
        'Operate automated Abbott and Roche immunoassay analyzers.',
        'Oversee internal and external quality assurance (EQA) compliance.',
        'Liaise with treating doctors regarding critical panic values.'
      ]
    },
    {
      id: 'job-admin',
      ref: 'CS-ADM-2025-09',
      title: 'Patient Care & Admissions Coordinator',
      category: 'admin',
      employmentType: 'Full-Time Permanent',
      location: 'Main Admissions & Triage Desk',
      description: 'Coordinate inpatient admissions, liaise with Kenyan private insurance and SHA desks for pre-authorization, and guide patient families with warmth and dignity.',
      qualifications: 'Bachelor’s Degree in Health Records, Nursing, or Healthcare Administration',
      deadline: '22 April 2026',
      duties: [
        'Verify SHA/NHIF and corporate smartcards at central hospital check-in.',
        'Guide incoming inpatients through hospital admission protocols.',
        'Coordinate with bed management and attending consultants for room allocation.',
        'Resolve patient family enquiries with exemplary clinical hospitality.'
      ]
    }
  ];

  const filteredJobs = jobs.filter((job) => {
    if (activeTab === 'all') return true;
    return job.category === activeTab;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setSelectedJobForApply(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('+254 ');
      setLicenseNumber('');
    }, 3000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="careers-portal" className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION matching image_0b844648.png
      ========================================================================= */}
      <section className="py-12 sm:py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto border-b border-[var(--line)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Eyebrow: WORK WITH PURPOSE */}
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF4FA] dark:bg-[#1C2430] text-[#0A4F93] dark:text-[#4C93DB] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0A4F93] dark:bg-[#4C93DB]"></span>
                WORK WITH PURPOSE
              </span>
            </div>

            {/* Display Headline in Cardo serif */}
            <h1 className="cs-display font-cardo text-[#1C2430] dark:text-[#EAF0F7] text-3xl sm:text-5xl lg:text-[52px] leading-[1.12] tracking-tight font-normal">
              Advance Your Clinical & Healthcare Career at Cedarstone
            </h1>

            {/* Lead paragraph */}
            <p className="cs-lead font-cardo text-[#4A5B6E] dark:text-[#A9B6C6] text-base sm:text-[18px] leading-[1.6] max-w-2xl">
              Join a multidisciplinary medical team renowned for continuous professional development, clinical innovation, and compassionate care in Nairobi’s premier Upper Hill medical quarter.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('open-positions')}
                className="min-h-[46px] px-6 py-2.5 bg-[#0A4F93] hover:bg-[#083F76] text-white font-bold text-sm rounded-[6px] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Explore Open Positions</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('application-protocol')}
                className="min-h-[46px] px-6 py-2.5 bg-[#EEF4FA] dark:bg-[#1C2430] hover:bg-[#DCE9F7] dark:hover:bg-[#2C3748] text-[#0A4F93] dark:text-[#4C93DB] font-bold text-sm rounded-[6px] transition-colors cursor-pointer"
              >
                Hiring Protocol & FAQ
              </button>
            </div>

            {/* Stat Counters matching Figma reference */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--line)]">
              <div>
                <strong className="block text-2xl sm:text-4xl font-bold font-cardo text-[#0A4F93] dark:text-[#4C93DB]">
                  120+
                </strong>
                <span className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6] mt-1 block">
                  Accredited CMEs Annually
                </span>
              </div>

              <div>
                <strong className="block text-2xl sm:text-4xl font-bold font-cardo text-[#0A4F93] dark:text-[#4C93DB]">
                  1:4
                </strong>
                <span className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6] mt-1 block">
                  ICU Nurse-to-Patient Ratio
                </span>
              </div>

              <div>
                <strong className="block text-2xl sm:text-4xl font-bold font-cardo text-[#0A4F93] dark:text-[#4C93DB]">
                  94%
                </strong>
                <span className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6] mt-1 block">
                  Staff Retention Rate
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Mentorship Card matching image_0b844648.png */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[16px] overflow-hidden shadow-lg border border-[#D5DEE8] dark:border-[#2C3748] bg-[#141B26]">
              {/* Kenyan Doctors Mentorship Image */}
              <img
                src="/images/female-doctor.jpg"
                alt="Dr. Achieng Omondi mentoring clinical nurse at Cedarstone Hospital reception"
                className="w-full h-[400px] object-cover object-top"
              />

              {/* Bottom Gradient Overlay with Testimonial Quote */}
              <div 
                className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                style={{
                  background: 'linear-gradient(180deg, rgba(16,27,38,0) 30%, rgba(16,27,38,0.75) 60%, rgba(16,27,38,0.96) 100%)'
                }}
              >
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold backdrop-blur-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    KMPDC & NCK Recognized
                  </span>
                </div>

                <blockquote className="text-sm sm:text-base font-cardo italic text-slate-100 leading-relaxed mb-2">
                  “Cedarstone gave me the structural support to attain my critical care specialty fellowship while mentoring interns.”
                </blockquote>

                <cite className="text-xs not-italic font-bold text-[#BFD9F5]">
                  Dr. Achieng Omondi, Consultant Anesthesiologist
                </cite>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FOUNDATIONS OF CLINICAL EXCELLENCE matching image_c38a9e51.png
      ========================================================================= */}
      <section className="py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto border-b border-[var(--line)]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-2 font-bold text-[#0A4F93] dark:text-[#4C93DB]">
              INSTITUTION VALUES
            </span>
            <h2 className="cs-h1 font-cardo text-2xl sm:text-4xl text-[#1C2430] dark:text-[#EAF0F7] font-normal">
              Foundations of Clinical Excellence
            </h2>
          </div>
          <p className="cs-body text-sm sm:text-base text-[#4A5B6E] dark:text-[#A9B6C6] max-w-xl leading-relaxed">
            We equip healthcare professionals with uncompromising clinical standards, sustainable workloads, and structured avenues for domestic and international medical advancement.
          </p>
        </div>

        {/* 4 Institution Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#EEF4FA]/50 dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[12px] p-6 flex flex-col justify-between hover:border-[#0A4F93] transition-colors shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-[8px] bg-white dark:bg-[#141B26] border border-[#D5DEE8] dark:border-[#2C3748] flex items-center justify-center text-[#0A4F93] dark:text-[#4C93DB] mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="cs-h3 font-cardo text-lg font-bold text-[#1C2430] dark:text-[#EAF0F7] mb-2">
                Clinical Mentorship & CME
              </h3>
              <p className="cs-body text-xs text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed mb-6">
                Earn regular Kenya Medical Association and Nursing Council accredited CME credits through daily Grand Rounds, journal clubs, and subsidized sub-specialty fellowships.
              </p>
            </div>
            <span className="text-xs font-bold text-[#0A4F93] dark:text-[#4C93DB] flex items-center gap-1 hover:underline cursor-pointer">
              Accredited Training Center →
            </span>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EEF4FA]/50 dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[12px] p-6 flex flex-col justify-between hover:border-[#0A4F93] transition-colors shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-[8px] bg-white dark:bg-[#141B26] border border-[#D5DEE8] dark:border-[#2C3748] flex items-center justify-center text-[#0A4F93] dark:text-[#4C93DB] mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="cs-h3 font-cardo text-lg font-bold text-[#1C2430] dark:text-[#EAF0F7] mb-2">
                Modern Clinical Theaters
              </h3>
              <p className="cs-body text-xs text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed mb-6">
                Equipped with laminar flow operating suites, 1.5T MRI, 128-slice dual-source CT, and dedicated tele-ICU telemetry monitoring systems for precision patient interventions.
              </p>
            </div>
            <span className="text-xs font-bold text-[#0A4F93] dark:text-[#4C93DB] flex items-center gap-1 hover:underline cursor-pointer">
              Tier-1 Surgical Suites →
            </span>
          </div>

          {/* Card 3 */}
          <div className="bg-[#EEF4FA]/50 dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[12px] p-6 flex flex-col justify-between hover:border-[#0A4F93] transition-colors shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-[8px] bg-white dark:bg-[#141B26] border border-[#D5DEE8] dark:border-[#2C3748] flex items-center justify-center text-[#0A4F93] dark:text-[#4C93DB] mb-5">
                <Banknote className="w-6 h-6" />
              </div>
              <h3 className="cs-h3 font-cardo text-lg font-bold text-[#1C2430] dark:text-[#EAF0F7] mb-2">
                Competitive Compensation
              </h3>
              <p className="cs-body text-xs text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed mb-6">
                Salaries benchmarked to top Kenyan healthcare standards in KES. Includes full inpatient/outpatient cover for spouse and up to 4 dependants, gratuity/NSSF matching, and wellness perks.
              </p>
            </div>
            <span className="text-xs font-bold text-[#0A4F93] dark:text-[#4C93DB] flex items-center gap-1 hover:underline cursor-pointer">
              Family Medical Benefit →
            </span>
          </div>

          {/* Card 4 */}
          <div className="bg-[#EEF4FA]/50 dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[12px] p-6 flex flex-col justify-between hover:border-[#0A4F93] transition-colors shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-[8px] bg-white dark:bg-[#141B26] border border-[#D5DEE8] dark:border-[#2C3748] flex items-center justify-center text-[#0A4F93] dark:text-[#4C93DB] mb-5">
                <CalendarClock className="w-6 h-6" />
              </div>
              <h3 className="cs-h3 font-cardo text-lg font-bold text-[#1C2430] dark:text-[#EAF0F7] mb-2">
                Sustainable Rotations
              </h3>
              <p className="cs-body text-xs text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed mb-6">
                Guaranteed rest days, no back-to-back 24-hour calls without compensatory off-duty intervals, protected maternity and paternity allowances, and on-site psychological support.
              </p>
            </div>
            <span className="text-xs font-bold text-[#0A4F93] dark:text-[#4C93DB] flex items-center gap-1 hover:underline cursor-pointer">
              Protected Downtime →
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MULTIDISCIPLINARY COMMUNITY matching image_17084871.png
          UPDATED: both image columns now share the same width (col-span-3),
          sit at the same level (image on top, caption below) and use the
          same image height (h-64).
      ========================================================================= */}
      <section className="py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto border-b border-[var(--line)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Left Column: Heading, Subtitle & Compliance Cards */}
          <div className="lg:col-span-6 space-y-5">
            <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] font-bold text-[#0A4F93] dark:text-[#4C93DB]">
              MULTIDISCIPLINARY COMMUNITY
            </span>
            <h2 className="cs-h1 font-cardo text-2xl sm:text-4xl text-[#1C2430] dark:text-[#EAF0F7] font-normal leading-tight">
              Caring for Nairobi With Dignity and Precision
            </h2>
            <p className="cs-body text-sm sm:text-base text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed">
              Our clinicians, radiographers, biomedical engineers, and patient coordinators represent Kenya’s most dedicated talent. We operate under unified clinical protocols to ensure zero-harm standards across all inpatient and ambulatory wards.
            </p>

            <div className="space-y-3 pt-2">
              {/* Card 1 */}
              <div className="bg-white dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[8px] p-4 flex items-center gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-[6px] bg-[#EEF4FA] dark:bg-[#141B26] text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#1C2430] dark:text-[#EAF0F7]">
                    Statutory Compliance
                  </strong>
                  <span className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6]">
                    All active staff registered with respective Kenyan professional bodies
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[8px] p-4 flex items-center gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-[6px] bg-[#EEF4FA] dark:bg-[#141B26] text-[#0A4F93] dark:text-[#4C93DB] flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#1C2430] dark:text-[#EAF0F7]">
                    Zero Discrimination Workplace
                  </strong>
                  <span className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6]">
                    Equal opportunity employer governed by the Kenya Employment Act
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Biomedical Engineering Unit (image on top, caption below) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="rounded-[12px] overflow-hidden border border-[#D5DEE8] dark:border-[#2C3748] shadow-xs bg-slate-100 dark:bg-[#1C2430]">
              <img
                src="/images/biomedical-unit.jpg"
                alt="Kenyan biomedical engineer testing ICU monitor at Cedarstone Hospital"
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#0A4F93] dark:text-[#4C93DB]">
                Biomedical Engineering Unit
              </h3>
              <p className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6] mt-1 leading-relaxed">
                Maintaining continuous uptime across 18 specialized intensive care beds and 6 surgical suites.
              </p>
            </div>
          </div>

          {/* Right Column: Critical Care Nursing Council (image on top, caption below) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="rounded-[12px] overflow-hidden border border-[#D5DEE8] dark:border-[#2C3748] shadow-xs bg-slate-100 dark:bg-[#1C2430]">
              <img
                src="/images/critical-care-nursing-council.jpg"
                alt="Two Kenyan critical care registered nurses reviewing charts at central nursing station"
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#0A4F93] dark:text-[#4C93DB]">
                Critical Care Nursing Council
              </h3>
              <p className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6] mt-1 leading-relaxed">
                Nurse-led rounds, evidence-based sepsis protocols, and supportive clinical nurse educator mentorship.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OPEN POSITIONS IN UPPER HILL matching image_861a3084.png
      ========================================================================= */}
      <section id="open-positions" className="py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto border-b border-[var(--line)]">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-2 font-bold text-[#0A4F93] dark:text-[#4C93DB]">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="cs-h1 font-cardo text-2xl sm:text-4xl text-[#1C2430] dark:text-[#EAF0F7] font-normal">
              Open Positions in Upper Hill
            </h2>
          </div>
          <span className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6] flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5" />
            Updated weekly • Applications reviewed on a rolling basis
          </span>
        </div>

        {/* Filter Tabs matching Figma screenshot */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0A4F93] text-white shadow-xs'
                : 'bg-white dark:bg-[#1C2430] text-[#1C2430] dark:text-[#EAF0F7] border border-[#D5DEE8] dark:border-[#2C3748] hover:bg-slate-50 dark:hover:bg-[#2C3748]'
            }`}
          >
            All Roles ({jobs.length})
          </button>

          <button
            onClick={() => setActiveTab('doctors')}
            className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'doctors'
                ? 'bg-[#0A4F93] text-white shadow-xs'
                : 'bg-white dark:bg-[#1C2430] text-[#1C2430] dark:text-[#EAF0F7] border border-[#D5DEE8] dark:border-[#2C3748] hover:bg-slate-50 dark:hover:bg-[#2C3748]'
            }`}
          >
            Medical Doctors & Specialists
          </button>

          <button
            onClick={() => setActiveTab('nursing')}
            className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'nursing'
                ? 'bg-[#0A4F93] text-white shadow-xs'
                : 'bg-white dark:bg-[#1C2430] text-[#1C2430] dark:text-[#EAF0F7] border border-[#D5DEE8] dark:border-[#2C3748] hover:bg-slate-50 dark:hover:bg-[#2C3748]'
            }`}
          >
            Nursing & Midwifery
          </button>

          <button
            onClick={() => setActiveTab('diagnostics')}
            className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'diagnostics'
                ? 'bg-[#0A4F93] text-white shadow-xs'
                : 'bg-white dark:bg-[#1C2430] text-[#1C2430] dark:text-[#EAF0F7] border border-[#D5DEE8] dark:border-[#2C3748] hover:bg-slate-50 dark:hover:bg-[#2C3748]'
            }`}
          >
            Diagnostics & Laboratory
          </button>

          <button
            onClick={() => setActiveTab('allied')}
            className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'allied'
                ? 'bg-[#0A4F93] text-white shadow-xs'
                : 'bg-white dark:bg-[#1C2430] text-[#1C2430] dark:text-[#EAF0F7] border border-[#D5DEE8] dark:border-[#2C3748] hover:bg-slate-50 dark:hover:bg-[#2C3748]'
            }`}
          >
            Allied Health & Engineering
          </button>

          <button
            onClick={() => setActiveTab('admin')}
            className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'admin'
                ? 'bg-[#0A4F93] text-white shadow-xs'
                : 'bg-white dark:bg-[#1C2430] text-[#1C2430] dark:text-[#EAF0F7] border border-[#D5DEE8] dark:border-[#2C3748] hover:bg-slate-50 dark:hover:bg-[#2C3748]'
            }`}
          >
            Hospital Administration
          </button>
        </div>

        {/* Job Cards Stack matching Figma reference */}
        <div className="space-y-4">
          {filteredJobs.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <article
                key={job.id}
                className="bg-white dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[12px] p-6 shadow-xs hover:border-[#0A4F93] dark:hover:border-[#4C93DB] transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  
                  {/* Left Column: Badges, Title & Qualifications */}
                  <div className="space-y-3 max-w-3xl">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                        {job.employmentType}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#2C3748] text-slate-700 dark:text-slate-300">
                        Ref: {job.ref}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {job.location}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="cs-h2 font-cardo text-xl sm:text-2xl text-[#1C2430] dark:text-[#EAF0F7] font-bold">
                      {job.title}
                    </h3>

                    {/* Summary Description */}
                    <p className="cs-body text-xs sm:text-sm text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed">
                      {job.description}
                    </p>

                    {/* Qualifications & Deadline */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#1C2430] dark:text-[#EAF0F7] pt-1">
                      <span className="flex items-center gap-1.5 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0A4F93] dark:text-[#4C93DB]" />
                        {job.qualifications}
                      </span>
                      {job.certifications && (
                        <span className="flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          {job.certifications}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-[#4A5B6E] dark:text-[#A9B6C6]">
                        <Calendar className="w-3.5 h-3.5" />
                        Deadline: {job.deadline}
                      </span>
                    </div>
                  </div>

                  {/* Right Actions: Apply Button & Accordion Toggle */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 flex-shrink-0 pt-2 lg:pt-0">
                    <button
                      onClick={() => setSelectedJobForApply(job)}
                      className="min-h-[44px] px-6 py-2.5 bg-[#0A4F93] hover:bg-[#083F76] text-white font-semibold text-sm rounded-[6px] transition-colors shadow-xs cursor-pointer w-full sm:w-auto"
                    >
                      Apply for Position
                    </button>

                    <button
                      onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                      className="text-xs font-semibold text-[#0A4F93] dark:text-[#4C93DB] hover:underline flex items-center gap-1 cursor-pointer py-1"
                    >
                      <span>Role Details & Criteria</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                </div>

                {/* Expanded Accordion: Key Responsibilities */}
                {isExpanded && (
                  <div className="mt-5 pt-4 border-t border-[var(--line)] space-y-3 bg-[#EEF4FA]/50 dark:bg-[#141B26] p-4 rounded-[8px]">
                    <h4 className="text-xs font-bold text-[#1C2430] dark:text-[#EAF0F7] uppercase tracking-wider">
                      Key Clinical Duties & Accountabilities:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#4A5B6E] dark:text-[#A9B6C6]">
                      {job.duties.map((duty, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#0A4F93] dark:text-[#4C93DB] font-bold">•</span>
                          <span>{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </section>

      {/* =========================================================================
          SECTION 5: APPLICATION PROTOCOL & TIMELINE matching image_4ceb1fda.png
      ========================================================================= */}
      <section id="application-protocol" className="py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 4-Step Application Protocol */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-2 font-bold text-[#0A4F93] dark:text-[#4C93DB]">
                HOW TO APPLY
              </span>
              <h2 className="cs-h1 font-cardo text-2xl sm:text-4xl text-[#1C2430] dark:text-[#EAF0F7] font-normal mb-3">
                Application Protocol & Timeline
              </h2>
              <p className="cs-body text-sm sm:text-base text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed">
                Cedarstone Hospital maintains a transparent, merit-grounded selection framework designed to identify clinical aptitude and dedication to human dignity.
              </p>
            </div>

            {/* Steps Container */}
            <div className="space-y-4">
              
              {/* Step 1 */}
              <div className="bg-white dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[12px] p-5 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-[8px] bg-[#EEF4FA] dark:bg-[#141B26] text-[#0A4F93] dark:text-[#4C93DB] font-bold text-base flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1C2430] dark:text-[#EAF0F7] mb-1">
                    Document Compilation
                  </h3>
                  <p className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed">
                    Prepare a unified PDF containing your comprehensive Curriculum Vitae, academic transcripts, statutory body certificates (KMPDC, NCK, RPB, EBK), and three professional referees (two clinical).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[12px] p-5 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-[8px] bg-[#EEF4FA] dark:bg-[#141B26] text-[#0A4F93] dark:text-[#4C93DB] font-bold text-base flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1C2430] dark:text-[#EAF0F7] mb-1">
                    Digital Submission
                  </h3>
                  <p className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed">
                    Email your application to <strong className="text-[#0A4F93] dark:text-[#4C93DB]">careers@cedarstone.co.ke</strong> quoting the specific Position Title and Reference Number in the subject line.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[12px] p-5 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-[8px] bg-[#EEF4FA] dark:bg-[#141B26] text-[#0A4F93] dark:text-[#4C93DB] font-bold text-base flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1C2430] dark:text-[#EAF0F7] mb-1">
                    Clinical Review & Assessment
                  </h3>
                  <p className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed">
                    Shortlisted candidates participate in a competency-based interview panel, clinical scenario simulation, and statutory credential verification.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[12px] p-5 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-[8px] bg-[#EEF4FA] dark:bg-[#141B26] text-[#0A4F93] dark:text-[#4C93DB] font-bold text-base flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1C2430] dark:text-[#EAF0F7] mb-1">
                    Offer & Onboarding
                  </h3>
                  <p className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed">
                    Formal offer letters with detailed compensation benchmarking, medical benefits enrolment, and a structured 4-week clinical orientation programme.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Fair Hiring Commitment & HR Directorate matching image_4ceb1fda.png */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Fair Hiring & Zero-Fee Commitment Card */}
            <div className="bg-white dark:bg-[#1C2430] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[12px] p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-[#C8222C] font-bold text-sm font-cardo">
                <ShieldCheck className="w-5 h-5 text-[#C8222C]" />
                <span>Fair Hiring & Zero-Fee Commitment</span>
              </div>
              <p className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed">
                Cedarstone Hospital Ltd does <strong>NOT</strong> charge any fee at any stage of the recruitment process (application, interview, processing, or training). We do not solicit financial contributions via M-Pesa or bank transfers.
              </p>

              {/* Light blue highlight box */}
              <div className="bg-[#EEF4FA] dark:bg-[#141B26] p-3 rounded-[8px] border border-[#D5DEE8] dark:border-[#2C3748] text-xs text-[#0A4F93] dark:text-[#4C93DB]">
                Official hospital correspondence originates exclusively from domains ending in <strong>@cedarstone.co.ke</strong>.
              </div>

              <p className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6] leading-relaxed">
                Cedarstone is an Equal Opportunity Employer. We encourage qualified healthcare workers from all regions across Kenya to apply without regard to gender, ethnicity, or disability.
              </p>
            </div>

            {/* Human Resources Directorate Card with Navy background #072C50 */}
            <div className="bg-[#072C50] text-white rounded-[12px] p-6 space-y-4 shadow-md border border-[#0A4F93]/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[8px] bg-white/10 flex items-center justify-center text-white">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">
                    Human Resources Directorate
                  </h3>
                  <span className="text-xs text-[#BFD9F5]">
                    Direct Recruitment Enquiries
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-[#DCE9F7] pt-2 border-t border-white/15">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#BFD9F5] flex-shrink-0" />
                  <a href="mailto:careers@cedarstone.co.ke" className="hover:underline font-medium text-white">
                    careers@cedarstone.co.ke
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#BFD9F5] flex-shrink-0" />
                  <a href="tel:+254208900040" className="hover:underline text-white font-medium">
                    +254 (0) 20 890 0040 (HR Desk, 8:00 AM – 5:00 PM EAT)
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#BFD9F5] flex-shrink-0 mt-0.5" />
                  <span>4th Floor, Administration Block, Upper Hill, Nairobi</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          APPLICATION MODAL
      ========================================================================= */}
      {selectedJobForApply && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-[#1C2430] border border-[var(--line)] rounded-[16px] max-w-lg w-full p-6 sm:p-8 my-8 shadow-xl">
            <div className="flex items-start justify-between border-b border-[var(--line)] pb-3 mb-5">
              <div>
                <span className="cs-eyebrow font-cardo block text-xs">ONLINE CANDIDATE SUBMISSION</span>
                <h3 className="cs-h2 font-cardo text-xl font-bold text-[#1C2430] dark:text-[#EAF0F7]">
                  {selectedJobForApply.title}
                </h3>
                <span className="text-xs text-[#4A5B6E] dark:text-[#A9B6C6]">
                  Ref: {selectedJobForApply.ref} • {selectedJobForApply.location}
                </span>
              </div>
              <button
                onClick={() => setSelectedJobForApply(null)}
                className="min-h-[40px] min-w-[40px] rounded-[6px] border border-[var(--line)] text-[var(--text)] hover:bg-[var(--panel)] flex items-center justify-center cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {applySuccess ? (
              <div className="bg-[var(--ok-bg)] border border-[var(--ok)] text-[var(--ok-t)] p-4 rounded-[8px] text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[var(--ok)]" />
                  <span>Application Submitted Successfully!</span>
                </div>
                <p>
                  Thank you, {applicantName}. Your clinical profile for <strong>{selectedJobForApply.title}</strong> has been logged with Cedarstone HR Directorate. A receipt has been sent to {applicantEmail}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#1C2430] dark:text-[#EAF0F7] mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Dr. Achieng Omondi"
                    className="w-full min-h-[44px] px-3 py-2 bg-white dark:bg-[#141B26] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[6px] text-sm text-[var(--text)]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#1C2430] dark:text-[#EAF0F7] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="achieng@example.co.ke"
                      className="w-full min-h-[44px] px-3 py-2 bg-white dark:bg-[#141B26] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[6px] text-sm text-[var(--text)]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C2430] dark:text-[#EAF0F7] mb-1">
                      Kenyan Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full min-h-[44px] px-3 py-2 bg-white dark:bg-[#141B26] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[6px] text-sm text-[var(--text)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#1C2430] dark:text-[#EAF0F7] mb-1">
                    Professional Registration / License No. (KMPDC / NCK / EBK)
                  </label>
                  <input
                    type="text"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    placeholder="e.g. KMPDC-A9842"
                    className="w-full min-h-[44px] px-3 py-2 bg-white dark:bg-[#141B26] border border-[#D5DEE8] dark:border-[#2C3748] rounded-[6px] text-sm text-[var(--text)]"
                  />
                </div>

                <div className="border border-dashed border-[#D5DEE8] dark:border-[#2C3748] p-4 rounded-[8px] text-center bg-[#EEF4FA]/40 dark:bg-[#141B26]">
                  <Upload className="w-6 h-6 text-[#0A4F93] dark:text-[#4C93DB] mx-auto mb-1" />
                  <span className="font-bold block text-[#1C2430] dark:text-[#EAF0F7]">
                    Attach Unified PDF (CV & Certificates)
                  </span>
                  <span className="text-[11px] text-[#4A5B6E] dark:text-[#A9B6C6]">
                    Max size: 10MB (PDF format only)
                  </span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[var(--line)]">
                  <button
                    type="button"
                    onClick={() => setSelectedJobForApply(null)}
                    className="min-h-[44px] px-4 py-2 border border-[var(--line)] rounded-[6px] text-[#1C2430] dark:text-[#EAF0F7] hover:bg-[var(--panel)] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="min-h-[44px] px-6 py-2 bg-[#0A4F93] hover:bg-[#083F76] text-white font-bold rounded-[6px] cursor-pointer"
                  >
                    Submit Clinical Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};