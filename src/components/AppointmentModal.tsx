import React, { useState } from 'react';
import { DOCTORS, DEPARTMENTS, HOSPITAL_CONTACTS, INSURANCE_PARTNERS } from '../data/hospitalData';
import { Doctor, Department, AppointmentBooking } from '../types';
import { Calendar, Check, Clock, User, Phone, Mail, Shield, AlertCircle, Printer, X, Download } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: Doctor | null;
  initialDepartment?: Department | null;
  onBookingSuccess: (booking: AppointmentBooking) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDoctor,
  initialDepartment,
  onBookingSuccess
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form states
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(
    initialDoctor ? initialDoctor.id : DOCTORS[0].id
  );
  const [appointmentDate, setAppointmentDate] = useState<string>('2026-10-28');
  const [appointmentTime, setAppointmentTime] = useState<string>('09:30 AM');
  const [patientName, setPatientName] = useState<string>('Amina Wanjiru');
  const [patientPhone, setPatientPhone] = useState<string>('+254 712 345 678');
  const [patientEmail, setPatientEmail] = useState<string>('amina.wanjiru@example.co.ke');
  const [paymentMethod, setPaymentMethod] = useState<'MPESA' | 'INSURANCE' | 'CASH'>('MPESA');
  const [insuranceProvider, setInsuranceProvider] = useState<string>(INSURANCE_PARTNERS[0].name);
  const [insurancePolicyNo, setInsurancePolicyNo] = useState<string>('SHA-9842104-KE');
  
  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  // Completed booking reference
  const [completedBooking, setCompletedBooking] = useState<AppointmentBooking | null>(null);

  // Update selection if prop changes
  React.useEffect(() => {
    if (initialDoctor) {
      setSelectedDoctorId(initialDoctor.id);
    } else if (initialDepartment) {
      const matchDoc = DOCTORS.find(d => d.departmentId === initialDepartment.id);
      if (matchDoc) setSelectedDoctorId(matchDoc.id);
    }
  }, [initialDoctor, initialDepartment]);

  if (!isOpen) return null;

  const currentDoctor = DOCTORS.find((d) => d.id === selectedDoctorId) || DOCTORS[0];

  const validateStep = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (step === 2) {
      if (!appointmentDate) {
        errs.appointmentDate = 'Please select a preferred date for your appointment.';
      }
      if (!appointmentTime) {
        errs.appointmentTime = 'Please select a preferred time slot.';
      }
    }

    if (step === 3) {
      if (!patientName.trim()) {
        errs.patientName = 'Please enter your full legal name as it appears on your ID or insurance card.';
      }
      if (!patientPhone.trim() || !patientPhone.includes('+254')) {
        errs.patientPhone = 'Please provide a valid Kenyan phone number starting with +254 (e.g. +254 712 345 678).';
      }
      if (!patientEmail.trim() || !patientEmail.includes('@')) {
        errs.patientEmail = 'Please provide an active email address for your appointment confirmation.';
      }
      if (paymentMethod === 'INSURANCE' && !insurancePolicyNo.trim()) {
        errs.insurancePolicyNo = 'Please enter your member ID, policy number, or NHIF/SHA number.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep()) {
      if (step === 1) setStep(2);
      else if (step === 2) setStep(3);
      else if (step === 3) {
        // Finalize booking
        const newBooking: AppointmentBooking = {
          id: `CSH-2026-${Math.floor(1000 + Math.random() * 9000)}`,
          patientName,
          patientPhone,
          patientEmail,
          doctorId: currentDoctor.id,
          doctorName: currentDoctor.name,
          departmentName: currentDoctor.departmentName,
          date: appointmentDate,
          timeSlot: appointmentTime,
          paymentMethod,
          insuranceProvider: paymentMethod === 'INSURANCE' ? insuranceProvider : undefined,
          feeKES: currentDoctor.feeKES,
          status: 'Confirmed',
          createdAt: new Date().toLocaleDateString('en-GB')
        };
        setCompletedBooking(newBooking);
        onBookingSuccess(newBooking);
        setStep(4);
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="bg-[var(--bg)] border border-[var(--line)] rounded-[16px] max-w-2xl w-full p-6 sm:p-8 my-8 shadow-xl max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[var(--line)] pb-4 mb-6">
          <div>
            <span className="cs-eyebrow font-cardo block mb-1">
              PATIENT APPOINTMENT BOOKING
            </span>
            <h2 id="booking-modal-title" className="cs-h2 font-cardo text-[var(--text)]">
              {step === 4 ? 'Appointment confirmed' : 'Schedule your consultation'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] p-2 rounded-[6px] border border-[var(--line)] text-[var(--text)] hover:bg-[var(--panel)] flex items-center justify-center font-bold text-lg cursor-pointer"
            aria-label="Close appointment booking dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step progress (unboxed text indicators) */}
        {step < 4 && (
          <div className="mb-6 pb-4 border-b border-[var(--line)] flex items-center justify-between text-xs font-bold text-[var(--text2)]">
            <span className={step >= 1 ? 'text-[var(--blue)] font-bold' : ''}>1. Specialist</span>
            <span>·</span>
            <span className={step >= 2 ? 'text-[var(--blue)] font-bold' : ''}>2. Date & Time</span>
            <span>·</span>
            <span className={step >= 3 ? 'text-[var(--blue)] font-bold' : ''}>3. Patient & Billing</span>
          </div>
        )}

        {/* STEP 1: Select Specialist & Department */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="doctor-select" className="block text-sm font-bold text-[var(--text)] mb-2">
                Select consulting doctor or specialist clinic
              </label>
              <select
                id="doctor-select"
                value={selectedDoctorId}
                onChange={(e) => setSelectedDoctorId(e.target.value)}
                className="w-full min-h-[44px] px-3 py-2 bg-[var(--bg)] border border-[var(--text2)] rounded-[6px] text-sm text-[var(--text)] focus-visible:outline-2 focus-visible:outline-[var(--focus)]"
              >
                {DOCTORS.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} — {doc.departmentName} ({doc.title})
                  </option>
                ))}
              </select>
              <p className="text-xs text-[var(--text2)] mt-1.5">
                Each consultation includes clinical history review, physical examination, and care guidance.
              </p>
            </div>

            {/* Selected Doctor Summary Card */}
            <div className="bg-[var(--panel)] border border-[var(--line)] rounded-[8px] p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="cs-h3 font-cardo text-[var(--text)] text-base">
                    {currentDoctor.name}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--text2)]">
                    {currentDoctor.title}
                  </p>
                  <p className="text-xs text-[var(--text2)] italic">
                    {currentDoctor.qualifications}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[var(--text2)] block">Consultation Fee</span>
                  <strong className="text-sm font-bold text-[var(--blue)]">
                    KES {currentDoctor.feeKES.toLocaleString()}
                  </strong>
                </div>
              </div>

              <p className="cs-body text-xs text-[var(--text)]">
                {currentDoctor.bio}
              </p>

              <div className="flex items-center gap-2 text-xs text-[var(--blue)] font-bold pt-2 border-t border-[var(--line)]">
                <Clock className="w-4 h-4" />
                <span>Earliest standard clinic slot: {currentDoctor.nextSlot}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[var(--line)]">
              <button
                type="button"
                onClick={onClose}
                className="min-h-[44px] px-5 py-2.5 border border-[var(--line)] text-[var(--text)] cs-ui rounded-[6px] hover:bg-[var(--panel)] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="min-h-[44px] px-6 py-2.5 bg-[var(--btn)] hover:bg-[var(--btn-h)] text-white cs-ui rounded-[6px] transition-colors cursor-pointer"
              >
                Continue to date selection
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Select Date & Time Slot */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="appointment-date" className="block text-sm font-bold text-[var(--text)] mb-2">
                Select appointment date (DD/MM/YYYY)
              </label>
              <input
                id="appointment-date"
                type="date"
                value={appointmentDate}
                min="2026-10-27"
                max="2026-12-31"
                onChange={(e) => setAppointmentDate(e.target.value)}
                aria-describedby={errors.appointmentDate ? 'date-error' : undefined}
                className={`w-full min-h-[44px] px-3 py-2 bg-[var(--bg)] rounded-[6px] text-sm text-[var(--text)] border ${
                  errors.appointmentDate ? 'border-2 border-[var(--red)]' : 'border-[var(--text2)]'
                }`}
              />
              {errors.appointmentDate && (
                <p id="date-error" className="text-xs text-[var(--red)] font-semibold mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.appointmentDate}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-[var(--text)] mb-2">
                Available consultation time slot (East Africa Time)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['09:00 AM', '09:30 AM', '10:30 AM', '11:15 AM', '02:00 PM', '02:45 PM', '03:30 PM', '04:15 PM'].map((slot) => {
                  const isSelected = appointmentTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setAppointmentTime(slot)}
                      className={`min-h-[44px] px-3 py-2 text-xs font-bold rounded-[6px] border transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--blue)] text-white border-[var(--blue)]'
                          : 'bg-[var(--bg)] text-[var(--text)] border-[var(--line)] hover:bg-[var(--panel)]'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
              {errors.appointmentTime && (
                <p className="text-xs text-[var(--red)] font-semibold mt-1">
                  {errors.appointmentTime}
                </p>
              )}
            </div>

            {/* Info Alert: 8px radius, full 1px border, icon + bold lead */}
            <div className="bg-[var(--panel)] border border-[var(--line)] rounded-[8px] p-4 text-xs text-[var(--text)] flex items-start gap-3">
              <Clock className="w-5 h-5 text-[var(--blue)] mt-0.5 flex-shrink-0" />
              <div>
                <strong className="block text-[var(--text)] text-sm mb-0.5">Please arrive 15 minutes before your time</strong>
                Check in at the Upper Hill Outpatient Reception (Ground Floor) to register your vital signs with the nursing team.
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-[var(--line)]">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="min-h-[44px] px-5 py-2.5 border border-[var(--line)] text-[var(--text)] cs-ui rounded-[6px] hover:bg-[var(--panel)] cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="min-h-[44px] px-6 py-2.5 bg-[var(--btn)] hover:bg-[var(--btn-h)] text-white cs-ui rounded-[6px] cursor-pointer"
              >
                Continue to patient details
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Patient Information & Payment Method */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <label htmlFor="patient-name" className="block text-sm font-bold text-[var(--text)] mb-1">
                Full legal name (Patient)
              </label>
              <input
                id="patient-name"
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="e.g. Amina Wanjiru"
                aria-describedby={errors.patientName ? 'name-error' : undefined}
                className={`w-full min-h-[44px] px-3 py-2 bg-[var(--bg)] rounded-[6px] text-sm text-[var(--text)] border ${
                  errors.patientName ? 'border-2 border-[var(--red)]' : 'border-[var(--text2)]'
                }`}
              />
              {errors.patientName && (
                <p id="name-error" className="text-xs text-[var(--red)] font-semibold mt-1">
                  {errors.patientName}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="patient-phone" className="block text-sm font-bold text-[var(--text)] mb-1">
                  Kenyan phone number (+254)
                </label>
                <input
                  id="patient-phone"
                  type="tel"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="+254 7XX XXX XXX"
                  aria-describedby={errors.patientPhone ? 'phone-error' : undefined}
                  className={`w-full min-h-[44px] px-3 py-2 bg-[var(--bg)] rounded-[6px] text-sm text-[var(--text)] border ${
                    errors.patientPhone ? 'border-2 border-[var(--red)]' : 'border-[var(--text2)]'
                  }`}
                />
                {errors.patientPhone && (
                  <p id="phone-error" className="text-xs text-[var(--red)] font-semibold mt-1">
                    {errors.patientPhone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="patient-email" className="block text-sm font-bold text-[var(--text)] mb-1">
                  Email address
                </label>
                <input
                  id="patient-email"
                  type="email"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  placeholder="amina@example.co.ke"
                  aria-describedby={errors.patientEmail ? 'email-error' : undefined}
                  className={`w-full min-h-[44px] px-3 py-2 bg-[var(--bg)] rounded-[6px] text-sm text-[var(--text)] border ${
                    errors.patientEmail ? 'border-2 border-[var(--red)]' : 'border-[var(--text2)]'
                  }`}
                />
                {errors.patientEmail && (
                  <p id="email-error" className="text-xs text-[var(--red)] font-semibold mt-1">
                    {errors.patientEmail}
                  </p>
                )}
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="pt-2 border-t border-[var(--line)]">
              <label className="block text-sm font-bold text-[var(--text)] mb-2">
                Preferred settlement method (KES {currentDoctor.feeKES.toLocaleString()})
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('MPESA')}
                  className={`min-h-[44px] p-3 text-xs font-bold rounded-[6px] border text-center transition-colors cursor-pointer ${
                    paymentMethod === 'MPESA'
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-600'
                      : 'border-[var(--line)] text-[var(--text)] hover:bg-[var(--panel)]'
                  }`}
                >
                  M-PESA Paybill
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('INSURANCE')}
                  className={`min-h-[44px] p-3 text-xs font-bold rounded-[6px] border text-center transition-colors cursor-pointer ${
                    paymentMethod === 'INSURANCE'
                      ? 'bg-[var(--panel)] text-[var(--blue)] border-[var(--blue)]'
                      : 'border-[var(--line)] text-[var(--text)] hover:bg-[var(--panel)]'
                  }`}
                >
                  Insurance / SHA
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('CASH')}
                  className={`min-h-[44px] p-3 text-xs font-bold rounded-[6px] border text-center transition-colors cursor-pointer ${
                    paymentMethod === 'CASH'
                      ? 'bg-[var(--panel)] text-[var(--text)] border-[var(--text)]'
                      : 'border-[var(--line)] text-[var(--text)] hover:bg-[var(--panel)]'
                  }`}
                >
                  Hospital Cashier
                </button>
              </div>
            </div>

            {paymentMethod === 'INSURANCE' && (
              <div className="bg-[var(--panel)] p-4 rounded-[8px] space-y-3 border border-[var(--line)]">
                <div>
                  <label htmlFor="ins-provider" className="block text-xs font-bold text-[var(--text)] mb-1">
                    Select Insurance Scheme
                  </label>
                  <select
                    id="ins-provider"
                    value={insuranceProvider}
                    onChange={(e) => setInsuranceProvider(e.target.value)}
                    className="w-full min-h-[44px] px-3 py-2 bg-[var(--bg)] border border-[var(--text2)] rounded-[6px] text-xs text-[var(--text)]"
                  >
                    {INSURANCE_PARTNERS.map((ins) => (
                      <option key={ins.code} value={ins.name}>{ins.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="ins-policy" className="block text-xs font-bold text-[var(--text)] mb-1">
                    Member ID / Policy Number / SHA ID
                  </label>
                  <input
                    id="ins-policy"
                    type="text"
                    value={insurancePolicyNo}
                    onChange={(e) => setInsurancePolicyNo(e.target.value)}
                    placeholder="e.g. SHA-1234567 or JUB-98214"
                    className="w-full min-h-[44px] px-3 py-2 bg-[var(--bg)] border border-[var(--text2)] rounded-[6px] text-xs text-[var(--text)]"
                  />
                  {errors.insurancePolicyNo && (
                    <p className="text-xs text-[var(--red)] font-semibold mt-1">
                      {errors.insurancePolicyNo}
                    </p>
                  )}
                </div>
              </div>
            )}

            {paymentMethod === 'MPESA' && (
              <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 p-3 rounded-[8px] text-xs text-emerald-900 dark:text-emerald-200">
                <strong>M-PESA Paybill Instructions:</strong> Cedarstone Paybill is <strong>{HOSPITAL_CONTACTS.mpesaPaybill}</strong>. An instant STK push prompt for KES {currentDoctor.feeKES.toLocaleString()} will be sent to <strong>{patientPhone}</strong> upon clicking confirm.
              </div>
            )}

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-[var(--line)]">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="min-h-[44px] px-5 py-2.5 border border-[var(--line)] text-[var(--text)] cs-ui rounded-[6px] hover:bg-[var(--panel)] cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="min-h-[44px] px-6 py-2.5 bg-[var(--btn)] hover:bg-[var(--btn-h)] text-white cs-ui rounded-[6px] cursor-pointer"
              >
                Confirm and book appointment
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Confirmation Receipt */}
        {step === 4 && completedBooking && (
          <div className="space-y-6">
            {/* Success Alert */}
            <div className="bg-[var(--ok-bg)] border border-[var(--ok)] rounded-[8px] p-4 text-[var(--ok-t)] flex items-start gap-3">
              <Check className="w-5 h-5 text-[var(--ok)] mt-0.5 flex-shrink-0" />
              <div>
                <strong className="block text-sm font-bold text-[var(--ok-t)]">
                  Appointment successfully scheduled!
                </strong>
                A confirmation SMS has been dispatched to {completedBooking.patientPhone} with your clinic pass.
              </div>
            </div>

            {/* Official Booking Voucher */}
            <div className="border border-[var(--line)] rounded-[12px] p-5 bg-[var(--bg)] space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                <div>
                  <span className="text-xs text-[var(--text2)] block">Booking Reference</span>
                  <span className="font-mono font-bold text-base text-[var(--blue)]">
                    {completedBooking.id}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[var(--text2)] block">Status</span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[var(--ok-bg)] text-[var(--ok-t)] border border-[var(--ok)]">
                    Confirmed
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[var(--text2)] block">Patient Name</span>
                  <strong className="text-sm text-[var(--text)]">{completedBooking.patientName}</strong>
                </div>
                <div>
                  <span className="text-[var(--text2)] block">Assigned Doctor</span>
                  <strong className="text-sm text-[var(--text)]">{completedBooking.doctorName}</strong>
                </div>
                <div>
                  <span className="text-[var(--text2)] block">Specialty & Department</span>
                  <span className="text-[var(--text)]">{completedBooking.departmentName}</span>
                </div>
                <div>
                  <span className="text-[var(--text2)] block">Clinic Date & Time</span>
                  <span className="text-[var(--text)] font-semibold">{completedBooking.date} at {completedBooking.timeSlot}</span>
                </div>
                <div>
                  <span className="text-[var(--text2)] block">Consultation Fee</span>
                  <span className="text-[var(--text)] font-semibold">KES {completedBooking.feeKES.toLocaleString()} ({completedBooking.paymentMethod})</span>
                </div>
                <div>
                  <span className="text-[var(--text2)] block">Hospital Location</span>
                  <span className="text-[var(--text)]">Upper Hill, Hospital Road, Nairobi</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="min-h-[44px] px-4 py-2 border border-[var(--line)] text-[var(--text)] cs-ui rounded-[6px] hover:bg-[var(--panel)] flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print clinic voucher</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="min-h-[44px] px-6 py-2.5 bg-[var(--btn)] hover:bg-[var(--btn-h)] text-white cs-ui rounded-[6px] cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
