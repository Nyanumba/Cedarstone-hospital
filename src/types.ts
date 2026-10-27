export type DepartmentId = 
  | 'emergency' 
  | 'maternal-child' 
  | 'cardiology' 
  | 'oncology' 
  | 'surgery' 
  | 'radiology' 
  | 'internal-medicine' 
  | 'orthopedics';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  departmentId: DepartmentId;
  departmentName: string;
  bio: string;
  languages: string[];
  nextSlot: string; // e.g. "Tue 28 Oct at 09:30 EAT"
  feeKES: number;
  clinicDays: string;
  badge?: string;
  imageAlt: string;
}

export interface Department {
  id: DepartmentId;
  name: string;
  shortDescription: string;
  fullDescription: string;
  leadSpecialist: string;
  phone: string;
  location: string;
  emergency24h: boolean;
  services: string[];
}

export interface AppointmentBooking {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  doctorId: string;
  doctorName: string;
  departmentName: string;
  date: string; // DD/MM/YYYY
  timeSlot: string;
  paymentMethod: 'MPESA' | 'INSURANCE' | 'CASH';
  insuranceProvider?: string;
  feeKES: number;
  status: 'Confirmed' | 'Pending';
  createdAt: string;
}

export interface VisitingSchedule {
  ward: string;
  hours: string;
  notes: string;
  visitorLimit: string;
}

export interface LabResult {
  id: string;
  testName: string;
  testDate: string; // DD/MM/YYYY
  result: string;
  referenceRange: string;
  status: 'Normal' | 'Attention' | 'Pending';
  doctorReviewer: string;
}
