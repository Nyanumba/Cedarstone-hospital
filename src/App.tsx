/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DepartmentGrid } from './components/DepartmentGrid';
import { DoctorDirectory } from './components/DoctorDirectory';
import { TelehealthSection } from './components/TelehealthSection';
import { PatientVisitorGuide } from './components/PatientVisitorGuide';
import { InsuranceSection } from './components/InsuranceSection';
import { PatientPortalDemo } from './components/PatientPortalDemo';
import { AppointmentModal } from './components/AppointmentModal';
import { Footer } from './components/Footer';
import { Doctor, Department, AppointmentBooking } from './types';
import { ShieldAlert, CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react';
import { HOSPITAL_CONTACTS } from './data/hospitalData';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingDoctor, setBookingDoctor] = useState<Doctor | null>(null);
  const [bookingDepartment, setBookingDepartment] = useState<Department | null>(null);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [activeToast, setActiveToast] = useState<string | null>(null);

  // Sync theme with system preference and data-theme attribute
  useEffect(() => {
    const savedTheme = localStorage.getItem('cs_theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setCurrentTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('cs_theme', nextTheme);
  };

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleOpenGeneralBooking = () => {
    setBookingDoctor(null);
    setBookingDepartment(null);
    setIsBookingOpen(true);
  };

  const handleSelectDoctorToBook = (doctor: Doctor) => {
    setBookingDoctor(doctor);
    setBookingDepartment(null);
    setIsBookingOpen(true);
  };

  const handleSelectDepartmentToBook = (department: Department) => {
    setBookingDepartment(department);
    setBookingDoctor(null);
    setIsBookingOpen(true);
  };

  const handleQuickSearch = (query: string) => {
    setSearchFilter(query);
    setCurrentSection('doctors');
    const el = document.getElementById('doctors');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookingSuccess = (booking: AppointmentBooking) => {
    setActiveToast(`Appointment confirmed for ${booking.patientName} with ${booking.doctorName} (Ref: ${booking.id})`);
    setTimeout(() => setActiveToast(null), 6000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col font-atkinson antialiased transition-colors duration-200">
      
      {/* Toast Notification */}
      {activeToast && (
        <div 
          className="fixed top-24 right-4 z-50 max-w-md bg-[var(--ok-bg)] border border-[var(--ok)] text-[var(--ok-t)] p-4 rounded-[8px] shadow-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-4"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 className="w-5 h-5 text-[var(--ok)] mt-0.5 flex-shrink-0" />
          <div className="text-xs">
            <strong className="block font-bold text-sm">Booking Saved</strong>
            <span>{activeToast}</span>
          </div>
        </div>
      )}

      {/* Main Navbar with Official Logo, Red Emergency Strip & Theme Switcher */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenGeneralBooking}
        currentTheme={currentTheme}
        onToggleTheme={handleToggleTheme}
      />

      <main className="flex-1">
        {/* Hero Section with mandated --hero gradient */}
        <Hero
          onOpenBooking={handleOpenGeneralBooking}
          onNavigateToDoctors={() => handleNavigate('doctors')}
          onNavigateToServices={() => handleNavigate('services')}
          onQuickSearch={handleQuickSearch}
        />

        {/* Clinical Services & Department Centres of Excellence */}
        <DepartmentGrid
          onSelectDepartmentToBook={handleSelectDepartmentToBook}
        />

        {/* Doctor & Specialist Directory with Filter Tabs & Cards */}
        <DoctorDirectory
          onSelectDoctorToBook={handleSelectDoctorToBook}
          searchFilter={searchFilter}
        />

        {/* Telehealth & Remote Care featuring the mandated --glow gradient card */}
        <TelehealthSection
          onBookTelehealth={handleOpenGeneralBooking}
        />

        {/* Insurance Direct Billing & Coverage matching Figma screenshot */}
        <InsuranceSection />

        {/* Patient & Visitor Guide and Visiting Schedules Table */}
        <PatientVisitorGuide />

        {/* Patient Portal Screen with Lab Results & Verified Electronic Health Records */}
        <PatientPortalDemo />

        {/* Fast Emergency Triage Banner */}
        <section className="bg-[var(--panel)] border-y border-[var(--line)] py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="cs-eyebrow font-cardo block">
                IMMEDIATE RESUSCITATION & CRITICAL CARE
              </span>
              <h2 className="cs-h2 font-cardo text-[var(--text)]">
                24/7 Level 5 Trauma Centre & Ambulance Dispatch
              </h2>
              <p className="cs-body text-sm text-[var(--text2)]">
                Direct ambulance hotline: <strong className="text-[var(--text)]">+254 700 000 911</strong> or <strong className="text-[var(--text)]">+254 20 690 3000</strong>. Upper Hill, Nairobi.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${HOSPITAL_CONTACTS.emergencyHotline}`}
                className="min-h-[44px] px-6 py-2.5 bg-[#C8222C] hover:bg-[#a61a22] text-white cs-ui rounded-[6px] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Emergency Dispatch</span>
              </a>
              <button
                onClick={handleOpenGeneralBooking}
                className="min-h-[44px] px-5 py-2.5 border border-[var(--line)] bg-[var(--bg)] text-[var(--text)] hover:bg-[var(--panel)] cs-ui rounded-[6px] transition-colors cursor-pointer"
              >
                Book non-urgent visit
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialDoctor={bookingDoctor}
        initialDepartment={bookingDepartment}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        isDark={currentTheme === 'dark'}
      />
    </div>
  );
}
