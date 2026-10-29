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
  Building2, 
  Upload, 
  X
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
        'Supervise daily QA calibrations and patient safety checks on MRI coils.',
        'Provide supportive patient orientation to minimize claustrophobia during scans.'
      ]
    },
    {
      id: 'job-midwife',
      ref: 'CS-NUR-2025-19',
      title: 'Clinical Midwife Specialist',
      category: 'nursing',
      employmentType: 'Full-Time Permanent',
      location: 'Maternity Pavilion',
      description: 'Provide dignified antenatal, intrapartum, and postpartum midwifery care in individual birthing suites. Manage normal physiological births and assist in emergency obstetrics.',
      qualifications: 'BSN with Midwifery or KRCHN + Higher Dip in Midwifery',
      certifications: 'Registered with Nursing Council of Kenya (NCK)',
      deadline: '30 April 2026',
      duties: [
        'Facilitate gentle birthing protocols and immediate kangaroo mother care.',
        'Monitor fetal heart rates using continuous CTG and Doppler telemetry.',
        'Assist consultant obstetricians during elective and emergency caesarean sections.',
        'Provide personalized lactation counselling and early neonatal care.'
      ]
    },
    {
      id: 'job-biomed',
      ref: 'CS-ENG-2025-02',
      title: 'Biomedical Engineering Officer',
      category: 'allied',
      employmentType: 'Full-Time Permanent',
      location: 'Operations & Engineering Block',
      description: 'Oversee preventative maintenance, calibration, and emergency repair of ventilators, anaesthesia machines, patient monitors, and dialysis units.',
      qualifications: 'BSc in Biomedical Engineering + 2 years clinical facility experience',
      certifications: 'Registered with Engineers Board of Kenya (EBK)',
      deadline: '10 May 2026',
      duties: [
        'Conduct daily pre-op checks on operating theatre and ICU life-support equipment.',
        'Manage preventive maintenance logs and medical gas delivery pipeline systems.',
        'Train nursing and clinical staff on safe medical technology operation.',
        'Maintain regulatory calibration certificates to SafeCare Level 5 standards.'
      ]
    },
    {
      id: 'job-patient-admin',
      ref: 'CS-ADM-2025-05',
      title: 'Patient Relations & Insurance Liaison',
      category: 'admin',
      employmentType: 'Full-Time Permanent',
      location: 'Central Admission Lobby',
      description: 'Guide admitted patients and relatives through direct insurance claims, SHA biometric verification, itemized fee transparency, and discharge settlement.',
      qualifications: 'Bachelor’s in Health Systems, Business Admin, or related field',
      deadline: '15 May 2026',
      duties: [
        'Liaise directly with SHA/NHIF and private insurer medical review desks for pre-authorizations.',
        'Provide compassionate financial counselling to patients regarding copays and ward tiering.',
        'Resolve admission queries swiftly to maintain dignity and smooth transitions.',
        'Audit daily discharge billing summaries for clear KES itemization.'
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
    }, 2800);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="careers-portal" className="bg-white text-[#1C2430]">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION matching image_0b844648.png
      ========================================================================= */}
      <section className="py-12 sm:py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto border-b border-[#D5DEE8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Eyebrow: WORK WITH PURPOSE */}
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF4FA] text-[#0A4F93] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0A4F93]"></span>
                WORK WITH PURPOSE
              </span>
            </div>

            {/* Display Headline in Cardo serif */}
            <h1 className="cs-display font-cardo text-[#1C2430] text-3xl sm:text-5xl lg:text-[52px] leading-[1.12] tracking-tight font-normal">
              Advance Your Clinical & Healthcare Career at Cedarstone
            </h1>

            {/* Lead paragraph */}
            <p className="cs-lead font-cardo text-[#4A5B6E] text-base sm:text-[18px] leading-[1.6] max-w-2xl">
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
                className="min-h-[46px] px-6 py-2.5 bg-[#EEF4FA] hover:bg-[#DCE9F7] text-[#0A4F93] font-bold text-sm rounded-[6px] transition-colors cursor-pointer"
              >
                Hiring Protocol & FAQ
              </button>
            </div>

            {/* Stat Counters matching Figma reference */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#D5DEE8]">
              <div>
                <strong className="block text-2xl sm:text-4xl font-bold font-cardo text-[#0A4F93]">
                  120+
                </strong>
                <span className="text-xs text-[#4A5B6E] mt-1 block">
                  Accredited CMEs Annually
                </span>
              </div>

              <div>
                <strong className="block text-2xl sm:text-4xl font-bold font-cardo text-[#0A4F93]">
                  1:4
                </strong>
                <span className="text-xs text-[#4A5B6E] mt-1 block">
                  ICU Nurse-to-Patient Ratio
                </span>
              </div>

              <div>
                <strong className="block text-2xl sm:text-4xl font-bold font-cardo text-[#0A4F93]">
                  94%
                </strong>
                <span className="text-xs text-[#4A5B6E] mt-1 block">
                  Staff Retention Rate
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Mentorship Card matching image_0b844648.png */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[16px] overflow-hidden shadow-lg border border-[#D5DEE8] bg-[#141B26]">
              {/* Kenyan Doctors Mentorship Image */}
              <img
                src="/images/careers-mentorship.jpg"
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
      <section className="py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto border-b border-[#D5DEE8]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-2 font-bold text-[#0A4F93]">
              INSTITUTION VALUES
            </span>
            <h2 className="cs-h1 font-cardo text-2xl sm:text-4xl text-[#1C2430] font-normal">
              Foundations of Clinical Excellence
            </h2>
          </div>
          <p className="cs-body text-sm sm:text-base text-[#4A5B6E] max-w-xl leading-relaxed">
            We equip healthcare professionals with uncompromising clinical standards, sustainable workloads, and structured avenues for domestic and international medical advancement.
          </p>
        </div>

        {/* 4 Institution Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#EEF4FA]/50 border border-[#D5DEE8] rounded-[12px] p-6 flex flex-col justify-between hover:border-[#0A4F93] transition-colors shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-[8px] bg-white border border-[#D5DEE8] flex items-center justify-center text-[#0A4F93] mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="cs-h3 font-cardo text-lg font-bold text-[#1C2430] mb-2">
                Clinical Mentorship & CME
              </h3>
              <p className="cs-body text-xs text-[#4A5B6E] leading-relaxed mb-6">
                Earn regular Kenya Medical Association and Nursing Council accredited CME credits through daily Grand Rounds, journal clubs, and subsidized sub-specialty fellowships.
              </p>
            </div>
            <span className="text-xs font-bold text-[#0A4F93] flex items-center gap-1 hover:underline cursor-pointer">
              Accredited Training Center →
            </span>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EEF4FA]/50 border border-[#D5DEE8] rounded-[12px] p-6 flex flex-col justify-between hover:border-[#0A4F93] transition-colors shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-[8px] bg-white border border-[#D5DEE8] flex items-center justify-center text-[#0A4F93] mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="cs-h3 font-cardo text-lg font-bold text-[#1C2430] mb-2">
                Modern Clinical Theaters
              </h3>
              <p className="cs-body text-xs text-[#4A5B6E] leading-relaxed mb-6">
                Equipped with laminar flow operating suites, 1.5T MRI, 128-slice dual-source CT, and dedicated tele-ICU telemetry monitoring systems for precision patient interventions.
              </p>
            </div>
            <span className="text-xs font-bold text-[#0A4F93] flex items-center gap-1 hover:underline cursor-pointer">
              Tier-1 Surgical Suites →
            </span>
          </div>

          {/* Card 3 */}
          <div className="bg-[#EEF4FA]/50 border border-[#D5DEE8] rounded-[12px] p-6 flex flex-col justify-between hover:border-[#0A4F93] transition-colors shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-[8px] bg-white border border-[#D5DEE8] flex items-center justify-center text-[#0A4F93] mb-5">
                <Banknote className="w-6 h-6" />
              </div>
              <h3 className="cs-h3 font-cardo text-lg font-bold text-[#1C2430] mb-2">
                Competitive Compensation
              </h3>
              <p className="cs-body text-xs text-[#4A5B6E] leading-relaxed mb-6">
                Salaries benchmarked to top Kenyan healthcare standards in KES. Includes full inpatient/outpatient cover for spouse and up to 4 dependants, gratuity/NSSF matching, and wellness perks.
              </p>
            </div>
            <span className="text-xs font-bold text-[#0A4F93] flex items-center gap-1 hover:underline cursor-pointer">
              Family Medical Benefit →
            </span>
          </div>

          {/* Card 4 */}
          <div className="bg-[#EEF4FA]/50 border border-[#D5DEE8] rounded-[12px] p-6 flex flex-col justify-between hover:border-[#0A4F93] transition-colors shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-[8px] bg-white border border-[#D5DEE8] flex items-center justify-center text-[#0A4F93] mb-5">
                <CalendarClock className="w-6 h-6" />
              </div>
              <h3 className="cs-h3 font-cardo text-lg font-bold text-[#1C2430] mb-2">
                Sustainable Rotations
              </h3>
              <p className="cs-body text-xs text-[#4A5B6E] leading-relaxed mb-6">
                Guaranteed rest days, no back-to-back 24-hour calls without compensatory off-duty intervals, protected maternity and paternity allowances, and on-site psychological support.
              </p>
            </div>
            <span className="text-xs font-bold text-[#0A4F93] flex items-center gap-1 hover:underline cursor-pointer">
              Protected Downtime →
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MULTIDISCIPLINARY COMMUNITY matching image_17084871.png
      ========================================================================= */}
      <section className="py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto border-b border-[#D5DEE8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Left Column: Heading, Subtitle & Compliance Cards */}
          <div className="lg:col-span-5 space-y-5">
            <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] font-bold text-[#0A4F93]">
              MULTIDISCIPLINARY COMMUNITY
            </span>
            <h2 className="cs-h1 font-cardo text-2xl sm:text-4xl text-[#1C2430] font-normal leading-tight">
              Caring for Nairobi With Dignity and Precision
            </h2>
            <p className="cs-body text-sm sm:text-base text-[#4A5B6E] leading-relaxed">
              Our clinicians, radiographers, biomedical engineers, and patient coordinators represent Kenya’s most dedicated talent. We operate under unified clinical protocols to ensure zero-harm standards across all inpatient and ambulatory wards.
            </p>

            <div className="space-y-3 pt-2">
              {/* Card 1 */}
              <div className="bg-white border border-[#D5DEE8] rounded-[8px] p-4 flex items-center gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-[6px] bg-[#EEF4FA] text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#1C2430]">
                    Statutory Compliance
                  </strong>
                  <span className="text-xs text-[#4A5B6E]">
                    All active staff registered with respective Kenyan professional bodies
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#D5DEE8] rounded-[8px] p-4 flex items-center gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-[6px] bg-[#EEF4FA] text-[#0A4F93] flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#1C2430]">
                    Zero Discrimination Workplace
                  </strong>
                  <span className="text-xs text-[#4A5B6E]">
                    Equal opportunity employer governed by the Kenya Employment Act
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Biomedical Engineering Unit */}
          <div className="lg:col-span-4 space-y-3">
            <div className="rounded-[12px] overflow-hidden border border-[#D5DEE8] shadow-xs bg-slate-100">
              <img
                src="/images/careers-biomedical.jpg"
                alt="Kenyan biomedical engineer testing ICU monitor at Cedarstone Hospital"
                className="w-full h-56 object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#0A4F93]">
                Biomedical Engineering Unit
              </h3>
              <p className="text-xs text-[#4A5B6E] mt-1 leading-relaxed">
                Maintaining continuous uptime across 18 specialized intensive care beds and 6 surgical suites.
              </p>
            </div>
          </div>

          {/* Right Column: Critical Care Nursing Council */}
          <div className="lg:col-span-3 space-y-3">
            <div>
              <h3 className="font-bold text-sm text-[#0A4F93]">
                Critical Care Nursing Council
              </h3>
              <p className="text-xs text-[#4A5B6E] mt-1 leading-relaxed">
                Nurse-led rounds, evidence-based sepsis protocols, and supportive clinical nurse educator mentorship.
              </p>
            </div>
            <div className="rounded-[12px] overflow-hidden border border-[#D5DEE8] shadow-xs bg-slate-100">
              <img
                src="/images/careers-nursing.jpg"
                alt="Two Kenyan critical care registered nurses reviewing charts at central nursing station"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OPEN POSITIONS IN UPPER HILL matching image_861a3084.png
      ========================================================================= */}
      <section id="open-positions" className="py-16 px-2 sm:px-4 w-[95%] max-w-[1700px] mx-auto border-b border-[#D5DEE8]">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-2 font-bold text-[#0A4F93]">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="cs-h1 font-cardo text-2xl sm:text-4xl text-[#1C2430] font-normal">
              Open Positions in Upper Hill
            </h2>
          </div>
          <span className="text-xs text-[#4A5B6E] flex items-center gap-1.5 font-medium">
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
                : 'bg-white text-[#1C2430] border border-[#D5DEE8] hover:bg-slate-50'
            }`}
          >
            All Roles ({jobs.length})
          </button>

          <button
            onClick={() => setActiveTab('doctors')}
            className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'doctors'
                ? 'bg-[#0A4F93] text-white shadow-xs'
                : 'bg-white text-[#1C2430] border border-[#D5DEE8] hover:bg-slate-50'
            }`}
          >
            Medical Doctors & Specialists
          </button>

          <button
            onClick={() => setActiveTab('nursing')}
            className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'nursing'
                ? 'bg-[#0A4F93] text-white shadow-xs'
                : 'bg-white text-[#1C2430] border border-[#D5DEE8] hover:bg-slate-50'
            }`}
          >
            Nursing & Midwifery
          </button>

          <button
            onClick={() => setActiveTab('diagnostics')}
            className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'diagnostics'
                ? 'bg-[#0A4F93] text-white shadow-xs'
                : 'bg-white text-[#1C2430] border border-[#D5DEE8] hover:bg-slate-50'
            }`}
          >
            Diagnostics & Laboratory
          </button>

          <button
            onClick={() => setActiveTab('allied')}
            className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'allied'
                ? 'bg-[#0A4F93] text-white shadow-xs'
                : 'bg-white text-[#1C2430] border border-[#D5DEE8] hover:bg-slate-50'
            }`}
          >
            Allied Health & Engineering
          </button>

          <button
            onClick={() => setActiveTab('admin')}
            className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'admin'
                ? 'bg-[#0A4F93] text-white shadow-xs'
                : 'bg-white text-[#1C2430] border border-[#D5DEE8] hover:bg-slate-50'
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
                className="bg-white border border-[#D5DEE8] rounded-[12px] p-6 shadow-xs hover:border-[#0A4F93] transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  
                  {/* Left Column: Badges, Title & Qualifications */}
                  <div className="space-y-3 max-w-3xl">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                        {job.employmentType}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        Ref: {job.ref}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {job.location}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="cs-h2 font-cardo text-xl sm:text-2xl text-[#1C2430] font-bold">
                      {job.title}
                    </h3>

                    {/* Summary Description */}
                    <p className="cs-body text-xs sm:text-sm text-[#4A5B6E] leading-relaxed">
                      {job.description}
                    </p>

                    {/* Qualifications & Deadline */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#1C2430] pt-1">
                      <span className="flex items-center gap-1.5 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0A4F93]" />
                        {job.qualifications}
                      </span>
                      {job.certifications && (
                        <span className="flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          {job.certifications}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-[#4A5B6E]">
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
                      className="text-xs font-semibold text-[#0A4F93] hover:underline flex items-center gap-1 cursor-pointer py-1"
                    >
                      <span>Role Details & Criteria</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                </div>

                {/* Expanded Accordion: Key Responsibilities */}
                {isExpanded && (
                  <div className="mt-5 pt-4 border-t border-[#D5DEE8] space-y-3 bg-[#EEF4FA]/50 p-4 rounded-[8px]">
                    <h4 className="text-xs font-bold text-[#1C2430] uppercase tracking-wider">
                      Key Clinical Duties & Accountabilities:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#4A5B6E]">
                      {job.duties.map((duty, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#0A4F93] font-bold">•</span>
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
              <span className="cs-eyebrow font-cardo block text-xs tracking-[1.4px] mb-2 font-bold text-[#0A4F93]">
                HOW TO APPLY
              </span>
              <h2 className="cs-h1 font-cardo text-2xl sm:text-4xl text-[#1C2430] font-normal mb-3">
                Application Protocol & Timeline
              </h2>
              <p className="cs-body text-sm sm:text-base text-[#4A5B6E] leading-relaxed">
                Cedarstone Hospital maintains a transparent, merit-grounded selection framework designed to identify clinical aptitude and dedication to human dignity.
              </p>
            </div>

            {/* Steps Container */}
            <div className="space-y-4">
              
              {/* Step 1 */}
              <div className="bg-white border border-[#D5DEE8] rounded-[12px] p-5 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-[8px] bg-[#EEF4FA] text-[#0A4F93] font-bold text-base flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1C2430] mb-1">
                    Document Compilation
                  </h3>
                  <p className="text-xs text-[#4A5B6E] leading-relaxed">
                    Prepare a unified PDF containing your comprehensive Curriculum Vitae, academic transcripts, statutory body certificates (KMPDC, NCK, RPB, EBK), and three professional referees (two clinical).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-[#D5DEE8] rounded-[12px] p-5 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-[8px] bg-[#EEF4FA] text-[#0A4F93] font-bold text-base flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1C2430] mb-1">
                    Digital Submission
                  </h3>
                  <p className="text-xs text-[#4A5B6E] leading-relaxed">
                    Email your application to <strong className="text-[#0A4F93]">careers@cedarstone.co.ke</strong> quoting the specific Position Title and Reference Number in the subject line.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-[#D5DEE8] rounded-[12px] p-5 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-[8px] bg-[#EEF4FA] text-[#0A4F93] font-bold text-base flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1C2430] mb-1">
                    Clinical Review & Assessment
                  </h3>
                  <p className="text-xs text-[#4A5B6E] leading-relaxed">
                    Shortlisted candidates participate in a competency-based interview panel, clinical scenario simulation, and statutory credential verification.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white border border-[#D5DEE8] rounded-[12px] p-5 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-[8px] bg-[#EEF4FA] text-[#0A4F93] font-bold text-base flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1C2430] mb-1">
                    Offer & Onboarding
                  </h3>
                  <p className="text-xs text-[#4A5B6E] leading-relaxed">
                    Formal offer letters with detailed compensation benchmarking, medical benefits enrolment, and a structured 4-week clinical orientation programme.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Fair Hiring Commitment & HR Directorate matching image_4ceb1fda.png */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Fair Hiring & Zero-Fee Commitment Card */}
            <div className="bg-white border border-[#D5DEE8] rounded-[12px] p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-[#C8222C] font-bold text-sm font-cardo">
                <ShieldCheck className="w-5 h-5 text-[#C8222C]" />
                <span>Fair Hiring & Zero-Fee Commitment</span>
              </div>
              <p className="text-xs text-[#4A5B6E] leading-relaxed">
                Cedarstone Hospital Ltd does <strong>NOT</strong> charge any fee at any stage of the recruitment process (application, interview, processing, or training). We do not solicit financial contributions via M-Pesa or bank transfers.
              </p>

              {/* Light blue highlight box */}
              <div className="bg-[#EEF4FA] p-3 rounded-[8px] border border-[#D5DEE8] text-xs text-[#0A4F93]">
                Official hospital correspondence originates exclusively from domains ending in <strong>@cedarstone.co.ke</strong>.
              </div>

              <p className="text-xs text-[#4A5B6E] leading-relaxed">
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
          <div className="bg-white border border-[#D5DEE8] rounded-[16px] max-w-lg w-full p-6 sm:p-8 my-8 shadow-xl">
            <div className="flex items-start justify-between border-b border-[#D5DEE8] pb-3 mb-5">
              <div>
                <span className="cs-eyebrow font-cardo block text-xs">ONLINE CANDIDATE SUBMISSION</span>
                <h3 className="cs-h2 font-cardo text-xl font-bold text-[#1C2430]">
                  {selectedJobForApply.title}
                </h3>
                <span className="text-xs text-[#4A5B6E]">
                  Ref: {selectedJobForApply.ref} • {selectedJobForApply.location}
                </span>
              </div>
              <button
                onClick={() => setSelectedJobForApply(null)}
                className="min-h-[40px] min-w-[40px] rounded-[6px] border border-[#D5DEE8] text-[#1C2430] hover:bg-[#EEF4FA] flex items-center justify-center cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {applySuccess ? (
              <div className="bg-[#E1F2EB] border border-[#1E7A5F] text-[#145540] p-4 rounded-[8px] text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#1E7A5F]" />
                  <span>Application Submitted Successfully!</span>
                </div>
                <p>
                  Thank you, {applicantName}. Your clinical profile for <strong>{selectedJobForApply.title}</strong> has been logged with Cedarstone HR Directorate. A receipt has been sent to {applicantEmail}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#1C2430] mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Dr. Achieng Omondi"
                    className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#D5DEE8] rounded-[6px] text-sm text-[#1C2430]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#1C2430] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="achieng@example.co.ke"
                      className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#D5DEE8] rounded-[6px] text-sm text-[#1C2430]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C2430] mb-1">
                      Kenyan Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#D5DEE8] rounded-[6px] text-sm text-[#1C2430]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#1C2430] mb-1">
                    Professional Registration / License No. (KMPDC / NCK / EBK)
                  </label>
                  <input
                    type="text"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    placeholder="e.g. KMPDC-A9842"
                    className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#D5DEE8] rounded-[6px] text-sm text-[#1C2430]"
                  />
                </div>

                <div className="border border-dashed border-[#D5DEE8] p-4 rounded-[8px] text-center bg-[#EEF4FA]/40">
                  <Upload className="w-6 h-6 text-[#0A4F93] mx-auto mb-1" />
                  <span className="font-bold block text-[#1C2430]">
                    Attach Unified PDF (CV & Certificates)
                  </span>
                  <span className="text-[11px] text-[#4A5B6E]">
                    Max size: 10MB (PDF format only)
                  </span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#D5DEE8]">
                  <button
                    type="button"
                    onClick={() => setSelectedJobForApply(null)}
                    className="min-h-[44px] px-4 py-2 border border-[#D5DEE8] rounded-[6px] text-[#1C2430] hover:bg-[#EEF4FA] cursor-pointer"
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
