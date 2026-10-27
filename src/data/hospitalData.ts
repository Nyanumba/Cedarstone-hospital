import { Department, Doctor, VisitingSchedule, LabResult } from '../types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'emergency',
    name: 'Emergency & Level 5 Trauma Centre',
    shortDescription: 'Dedicated 24-hour resuscitation, rapid triage, and high-velocity trauma surgery.',
    fullDescription: 'Equipped with dedicated adult and pediatric resuscitation bays, a rooftop helipad, and instant access to CT scanning and catheterization labs within 10 minutes of arrival.',
    leadSpecialist: 'Dr. Kevin Kiprop',
    phone: '+254 700 000 911',
    location: 'Ground Floor, North Wing (Direct Ambulance Access)',
    emergency24h: true,
    services: [
      '24/7 Resuscitation & Acute Trauma Surgery',
      'Advanced Cardiac Life Support (ACLS)',
      'Pediatric Emergency Care',
      'Toxicology & Poison Control',
      'Direct-to-Cath Lab Stroke and STEMI Protocol'
    ]
  },
  {
    id: 'maternal-child',
    name: 'Maternal, Fetal & Pediatric Care',
    shortDescription: 'Comprehensive antenatal care, private delivery suites, Level III NICU, and child wellness.',
    fullDescription: 'Our Mother and Child Pavilion provides family-centred obstetric care, high-risk maternal-fetal medicine, and neonatal intensive care with continuous paediatric monitoring.',
    leadSpecialist: 'Dr. Amina Wanjiru',
    phone: '+254 20 690 3100',
    location: 'Tower B, 2nd & 3rd Floors',
    emergency24h: true,
    services: [
      'Natural & Assisted Birthing Suites',
      'High-Risk Pregnancy Consultations',
      'Level III Neonatal Intensive Care Unit (NICU)',
      'Well-Baby Immunization & Growth Tracking',
      'Pediatric Specialist Outpatient Clinics'
    ]
  },
  {
    id: 'cardiology',
    name: 'Heart & Vascular Institute',
    shortDescription: 'Modern bi-plane cardiac catheterization, echocardiography, and open heart surgery.',
    fullDescription: 'Specialised preventive cardiology, interventional stenting, pacemaker implantation, and cardiac rehabilitation overseen by board-certified cardiac surgeons and nurses.',
    leadSpecialist: 'Dr. Daniel Otieno',
    phone: '+254 20 690 3200',
    location: 'Tower A, 4th Floor',
    emergency24h: false,
    services: [
      'Bi-plane Angiography & Stenting',
      'Transthoracic & Transesophageal Echocardiograms',
      'Electrophysiology & Pacemaker Clinic',
      'Cardiothoracic Surgical Theatres',
      'Supervised Cardiac Rehabilitation Gymnasium'
    ]
  },
  {
    id: 'oncology',
    name: 'Comprehensive Cancer Care Centre',
    shortDescription: 'Early diagnostic screening, chemotherapy infusion suites, and compassionate palliative care.',
    fullDescription: 'Multidisciplinary oncology boards combining medical oncologists, surgical oncologists, radiation physicists, and dedicated psycho-social support for cancer warriors and their families.',
    leadSpecialist: 'Dr. Mercy Muthoni',
    phone: '+254 20 690 3300',
    location: 'Garden Pavilion, Ground Floor',
    emergency24h: false,
    services: [
      'Outpatient Chemotherapy Infusion Suites',
      'Targeted Immunotherapy & Biologicals',
      'Cancer Screening & Biopsy Diagnostics',
      'Palliative Care & Pain Management Clinic',
      'Patient Support Groups & Nutritional Therapy'
    ]
  },
  {
    id: 'surgery',
    name: 'Advanced Surgery & Endoscopy Suites',
    shortDescription: 'Minimally invasive laparoscopic procedures, general surgery, and neurosurgery.',
    fullDescription: 'Six state-of-the-art laminar flow operating theatres equipped for precision endoscopic, robotic-assisted, laparoscopic, and complex reconstructive surgeries.',
    leadSpecialist: 'Dr. Brian Wafula',
    phone: '+254 20 690 3400',
    location: 'Tower A, 3rd Floor',
    emergency24h: true,
    services: [
      'Laparoscopic Gastrointestinal Surgeries',
      'Neurosurgery & Spine Stabilization',
      'Vascular & Microvascular Surgery',
      'Day Surgery Recovery Unit',
      'Post-Anesthesia Care Unit (PACU)'
    ]
  },
  {
    id: 'radiology',
    name: 'Diagnostic Imaging & Molecular Labs',
    shortDescription: 'Ultra-low-dose 128-slice CT, 3.0 Tesla Silent MRI, 4D Ultrasound, and digital X-ray.',
    fullDescription: 'Providing rapid, high-definition diagnostic imaging read by fellowship-trained radiologists, with instant PACS distribution to referring clinicians across East Africa.',
    leadSpecialist: 'Dr. Peter Kamau',
    phone: '+254 20 690 3500',
    location: 'Ground Floor, Diagnostics Wing',
    emergency24h: true,
    services: [
      '3.0 Tesla Silent MRI Imaging',
      '128-Slice Low-Dose Computed Tomography (CT)',
      'Digital 3D Mammography & Breast Biopsy',
      'High-Resolution Doppler Ultrasound',
      'Fluoroscopy & Portable Bedside Digital X-Ray'
    ]
  },
  {
    id: 'internal-medicine',
    name: 'Internal Medicine & Chronic Disease',
    shortDescription: 'Evidence-based management of hypertension, diabetes, kidney disease, and infectious conditions.',
    fullDescription: 'Integrated outpatient clinics helping patients proactively manage chronic health conditions through personalized care plans, clinical nutrition, and regular monitoring.',
    leadSpecialist: 'Dr. Faith Achieng',
    phone: '+254 20 690 3600',
    location: 'Tower B, 1st Floor',
    emergency24h: false,
    services: [
      'Diabetes & Endocrinology Specialist Clinic',
      'Hypertension & Cardiovascular Risk Assessment',
      'Nephrology & Haemodialysis Centre',
      'Infectious Disease & Travel Health Advice',
      'Executive Wellness Screening Packages'
    ]
  },
  {
    id: 'orthopedics',
    name: 'Orthopaedics & Sports Rehabilitation',
    shortDescription: 'Total joint replacements, sports injury arthroscopy, and spine care.',
    fullDescription: 'Restoring functional mobility and pain-free living through joint reconstructions, fracture care, and intensive physical therapy led by licensed physiotherapists.',
    leadSpecialist: 'Dr. Brian Wafula',
    phone: '+254 20 690 3700',
    location: 'Tower B, Ground Floor',
    emergency24h: false,
    services: [
      'Total Knee & Hip Arthroplasty (Replacements)',
      'Arthroscopic ACL & Rotator Cuff Repairs',
      'Pediatric Orthopaedics & Deformity Correction',
      'Hydrotherapy & Physical Rehabilitation Centre',
      'Spine Health & Ergonomic Pain Clinic'
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-amina-wanjiru',
    name: 'Dr. Amina Wanjiru',
    title: 'Consultant Obstetrician & Gynaecologist',
    qualifications: 'MBChB (UoN), MMed O&G (UoN), Fellow Maternal-Fetal Medicine (UCT)',
    departmentId: 'maternal-child',
    departmentName: 'Maternal, Fetal & Pediatric Care',
    bio: 'Dr. Wanjiru brings over 16 years of expertise in high-risk obstetric management, antenatal care, and minimally invasive gynaecological procedures. She chairs Cedarstone’s Maternal Health Committee.',
    languages: ['English', 'Kiswahili'],
    nextSlot: 'Tue 28 Oct at 09:30 EAT',
    feeKES: 3500,
    clinicDays: 'Mon, Tue, Thu (08:30 - 15:30)',
    badge: 'Chief of Maternal Care',
    imageAlt: 'Dr. Amina Wanjiru, senior consultant obstetrician and gynaecologist in white clinical coat'
  },
  {
    id: 'doc-daniel-otieno',
    name: 'Dr. Daniel Otieno',
    title: 'Consultant Cardiothoracic Surgeon',
    qualifications: 'MBChB (Moi), FCS-ECSA (Cardiothoracic Surgery), Fellow Adult Cardiac Surgery',
    departmentId: 'cardiology',
    departmentName: 'Heart & Vascular Institute',
    bio: 'Recognized for pioneering minimally invasive cardiac valve surgeries in Kenya. Dr. Otieno has completed over 850 open-heart procedures and focuses on both adult and congenital cardiac care.',
    languages: ['English', 'Kiswahili', 'Dholuo'],
    nextSlot: 'Wed 29 Oct at 10:00 EAT',
    feeKES: 4500,
    clinicDays: 'Wed, Fri (09:00 - 16:00)',
    badge: 'Lead Cardiac Surgeon',
    imageAlt: 'Dr. Daniel Otieno, consultant cardiothoracic surgeon standing beside surgical monitoring display'
  },
  {
    id: 'doc-grace-chebet',
    name: 'Dr. Grace Chebet',
    title: 'Senior Pediatrician & Child Health Specialist',
    qualifications: 'MBChB (UoN), MMed Paediatrics & Child Health, Dip Pediatric Allergy',
    departmentId: 'maternal-child',
    departmentName: 'Maternal, Fetal & Pediatric Care',
    bio: 'Dedicated to newborn survival, childhood respiratory illnesses, and childhood developmental milestones. Dr. Chebet advocates for empathetic, family-centred pediatric care.',
    languages: ['English', 'Kiswahili', 'Kalenjin'],
    nextSlot: 'Tue 28 Oct at 14:00 EAT',
    feeKES: 3000,
    clinicDays: 'Mon, Wed, Fri (08:00 - 15:00)',
    badge: 'Pediatric Director',
    imageAlt: 'Dr. Grace Chebet, pediatric specialist holding stethoscope and smiling warmly'
  },
  {
    id: 'doc-peter-kamau',
    name: 'Dr. Peter Kamau',
    title: 'Head of Diagnostic Radiology & Interventional Imaging',
    qualifications: 'MBChB (UoN), MSc Radiology (Wits), European Diploma in Radiology (EDiR)',
    departmentId: 'radiology',
    departmentName: 'Diagnostic Imaging & Molecular Labs',
    bio: 'Specialist in 3T MRI neuroimaging, multiparametric prostate imaging, and image-guided diagnostic biopsies with dual accreditation across Kenya and South Africa.',
    languages: ['English', 'Kiswahili', 'Kikuyu'],
    nextSlot: 'Tue 28 Oct at 11:15 EAT',
    feeKES: 3500,
    clinicDays: 'Mon, Tue, Wed, Thu, Fri (08:30 - 16:30)',
    badge: 'Director of Radiology',
    imageAlt: 'Dr. Peter Kamau, lead radiologist analyzing high-resolution digital imaging scans'
  },
  {
    id: 'doc-faith-achieng',
    name: 'Dr. Faith Achieng',
    title: 'Senior Consultant Physician & Endocrinologist',
    qualifications: 'MBChB (UoN), MMed Internal Medicine, Fellowship in Endocrinology (Oxford)',
    departmentId: 'internal-medicine',
    departmentName: 'Internal Medicine & Chronic Disease',
    bio: 'Specialising in complex diabetes, thyroid disorders, and metabolic health. Dr. Achieng leads Cedarstone’s Lifestyle & Chronic Disease Care Pathway.',
    languages: ['English', 'Kiswahili'],
    nextSlot: 'Thu 30 Oct at 09:00 EAT',
    feeKES: 3500,
    clinicDays: 'Tue, Thu, Sat (09:00 - 14:00)',
    badge: 'Lead Endocrinologist',
    imageAlt: 'Dr. Faith Achieng, consultant endocrinologist reviewing patient treatment notes'
  },
  {
    id: 'doc-brian-wafula',
    name: 'Dr. Brian Wafula',
    title: 'Consultant Orthopedic & Trauma Surgeon',
    qualifications: 'MBChB (Moi), MMed Orthopedic Surgery (UoN), Fellowship Arthroscopy (Germany)',
    departmentId: 'orthopedics',
    departmentName: 'Orthopaedics & Sports Rehabilitation',
    bio: 'Dr. Wafula specializes in reconstructive knee and hip arthroplasty, complex trauma fractures, and arthroscopic shoulder repair for active professionals and athletes.',
    languages: ['English', 'Kiswahili', 'Luhya'],
    nextSlot: 'Wed 29 Oct at 13:30 EAT',
    feeKES: 4000,
    clinicDays: 'Mon, Wed, Fri (09:00 - 15:30)',
    badge: 'Chief of Orthopaedics',
    imageAlt: 'Dr. Brian Wafula, orthopaedic surgeon dressed in scrubs explaining a joint model'
  },
  {
    id: 'doc-mercy-muthoni',
    name: 'Dr. Mercy Muthoni',
    title: 'Consultant Medical Oncologist',
    qualifications: 'MBChB (UoN), MRCP (UK), MMed Medical Oncology, ESMO Certified',
    departmentId: 'oncology',
    departmentName: 'Comprehensive Cancer Care Centre',
    bio: 'Focused on precision cancer therapy, breast and gastrointestinal oncology, and clinical trials access for East African patients. Known for compassionate and attentive bedside care.',
    languages: ['English', 'Kiswahili'],
    nextSlot: 'Fri 31 Oct at 10:30 EAT',
    feeKES: 4500,
    clinicDays: 'Mon, Wed, Fri (09:00 - 15:00)',
    badge: 'Senior Oncologist',
    imageAlt: 'Dr. Mercy Muthoni, consultant oncologist consulting with a patient care team'
  },
  {
    id: 'doc-kevin-kiprop',
    name: 'Dr. Kevin Kiprop',
    title: 'Chief Medical Officer & Critical Care Specialist',
    qualifications: 'MBChB (UoN), MMed Anaesthesiology & Intensive Care, EDIC Fellow',
    departmentId: 'emergency',
    departmentName: 'Emergency & Level 5 Trauma Centre',
    bio: 'Directs the emergency response division and the 24-bed multi-disciplinary Intensive Care Unit. Has over 18 years of clinical leadership in critical resuscitation systems.',
    languages: ['English', 'Kiswahili'],
    nextSlot: 'Available 24/7 (On Duty)',
    feeKES: 3500,
    clinicDays: 'Daily Resuscitation & ICU Rounds',
    badge: 'Chief Medical Officer',
    imageAlt: 'Dr. Kevin Kiprop, chief medical officer reviewing hospital triage monitoring systems'
  }
];

export const VISITING_SCHEDULES: VisitingSchedule[] = [
  {
    ward: 'General Inpatient Wards (Male, Female, Pediatric)',
    hours: '12:30 - 14:00 EAT and 16:30 - 18:30 EAT',
    notes: 'Quiet rest hours strictly observed between visiting sessions to promote patient recovery.',
    visitorLimit: 'Maximum 2 visitors at bedside simultaneously'
  },
  {
    ward: 'Intensive Care Unit (ICU) & High Dependency Unit (HDU)',
    hours: '13:00 - 14:00 EAT and 17:00 - 18:00 EAT',
    notes: 'Immediate next of kin only. Sanitization gowning and shoe covers required at entrance.',
    visitorLimit: '1 visitor at a time (15-minute rotation)'
  },
  {
    ward: 'Maternity & Post-Natal Suites',
    hours: '10:00 - 12:00 EAT, 13:00 - 14:30 EAT, 17:00 - 19:00 EAT',
    notes: 'Partner/named primary support person permitted 24 hours in private delivery suites.',
    visitorLimit: '2 visitors plus partner'
  },
  {
    ward: 'Day Surgery Recovery Ward',
    hours: 'Continuous during discharge preparation',
    notes: 'One designated adult family member must accompany patient for safe discharge transport.',
    visitorLimit: '1 adult companion'
  }
];

export const INSURANCE_PARTNERS = [
  { name: 'Social Health Authority (SHA) / NHIF', code: 'SHA-KE', acceptedFor: 'Inpatient & Outpatient', preAuthNeeded: 'For planned surgeries only' },
  { name: 'Jubilee Health Insurance', code: 'JUB-01', acceptedFor: 'Full SmartCard Direct Billing', preAuthNeeded: 'Over KES 25,000' },
  { name: 'CIC Insurance Group', code: 'CIC-MED', acceptedFor: 'Outpatient, Maternity & Inpatient', preAuthNeeded: 'Over KES 20,000' },
  { name: 'AAR Insurance Kenya', code: 'AAR-CORP', acceptedFor: 'Biometric SmartCard Direct Billing', preAuthNeeded: 'Admission only' },
  { name: 'Britam Healthcare', code: 'BRT-MED', acceptedFor: 'Direct Inpatient & Outpatient', preAuthNeeded: 'Elective procedures' },
  { name: 'First Assurance Kenya', code: 'FA-KENYA', acceptedFor: 'Direct Billing Facility', preAuthNeeded: 'Admission only' },
  { name: 'Old Mutual Health', code: 'OM-KE', acceptedFor: 'Executive & Standard Plans', preAuthNeeded: 'Over KES 30,000' },
  { name: 'APA Insurance', code: 'APA-HEALTH', acceptedFor: 'Full Outpatient & Inpatient', preAuthNeeded: 'Hospitalization' }
];

export const SAMPLE_LAB_RESULTS: LabResult[] = [
  {
    id: 'LAB-8921-GLU',
    testName: 'Fasting Blood Glucose (FBG)',
    testDate: '24/10/2026',
    result: '5.2 mmol/L',
    referenceRange: '3.9 - 6.1 mmol/L',
    status: 'Normal',
    doctorReviewer: 'Dr. Faith Achieng'
  },
  {
    id: 'LAB-8921-LIP',
    testName: 'Lipid Profile (Total Cholesterol)',
    testDate: '24/10/2026',
    result: '4.6 mmol/L',
    referenceRange: '< 5.2 mmol/L',
    status: 'Normal',
    doctorReviewer: 'Dr. Faith Achieng'
  },
  {
    id: 'LAB-8921-CBC',
    testName: 'Full Haemogram (Haemoglobin)',
    testDate: '24/10/2026',
    result: '14.8 g/dL',
    referenceRange: '13.5 - 17.5 g/dL',
    status: 'Normal',
    doctorReviewer: 'Dr. Peter Kamau'
  },
  {
    id: 'LAB-8742-VIT',
    testName: 'Serum 25-Hydroxy Vitamin D',
    testDate: '18/10/2026',
    result: '28 ng/mL',
    referenceRange: '30 - 100 ng/mL',
    status: 'Attention',
    doctorReviewer: 'Dr. Amina Wanjiru'
  }
];

export const HOSPITAL_CONTACTS = {
  emergencyHotline: '+254 700 000 911',
  generalEnquiries: '+254 20 690 3000',
  mpesaPaybill: '542000',
  address: 'Hospital Road, Upper Hill, Nairobi, Kenya',
  postalAddress: 'P.O. Box 45012-00100 Nairobi',
  email: 'care@cedarstone.co.ke',
  ambulanceDispatch: '+254 711 000 911',
  visitingInquiries: '+254 20 690 3015'
};
