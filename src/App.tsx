/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InsuranceSection } from './components/InsuranceSection';
import { CentresOfExcellence } from './components/CentresOfExcellence';
import { InstitutionalDignity } from './components/InstitutionalDignity';
import { PatientVisitorGuide } from './components/PatientVisitorGuide';
import { ConsultantDirectory } from './components/ConsultantDirectory';
import { AboutUs } from './components/AboutUs';
import { CareersPortal } from './components/CareersPortal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('home');

  // Enforce light mode by default permanently
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'about') {
      setCurrentSection('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'careers') {
      setCurrentSection('careers');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'home') {
      setCurrentSection('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If on about or careers page, switch back to home view first then scroll to target section
    if (currentSection === 'about' || currentSection === 'careers') {
      setCurrentSection('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }

    setCurrentSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1C2430] flex flex-col font-atkinson antialiased">
      
      {/* Main Navbar: Official Cedarstone Logo, 95% Width, No Appointment Modal Button */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {currentSection === 'about' ? (
          /* Dedicated About Us Page matching image_1a3d369a.png, image_9736255f.png, image_515c1c1d.png, image_932e6f77.png */
          <AboutUs onNavigateToServices={() => handleNavigate('services')} />
        ) : currentSection === 'careers' ? (
          /* Dedicated Careers Portal matching image_0b844648.png, image_c38a9e51.png, image_17084871.png, image_861a3084.png, image_4ceb1fda.png */
          <CareersPortal />
        ) : (
          /* 
            Strict Home Page Section Sequencing:
            1. Hero ("World-Class Healthcare Grounded in Compassion")
            2. Direct Billing and Insurance Section (image_d14d8a9e.png)
            3. Centre of Excellence (image_d3e4a371.png)
            4. Institutional Dignity and Care Section (image_77f96661.png)
            5. Visiting Hours & Clinical Recovery Protocol
            6. Consultancy Section (image_4b9acc70.png)
          */
          <>
            {/* 1. Hero Section */}
            <Hero
              onNavigateToServices={() => handleNavigate('services')}
              onNavigateToVisiting={() => handleNavigate('visitors')}
            />

            {/* 2. Direct Billing & Insurance Section */}
            <InsuranceSection />

            {/* 3. Centres of Excellence */}
            <CentresOfExcellence />

            {/* 4. Institutional Dignity & Care Section */}
            <InstitutionalDignity />

            {/* 5. Simplified Visiting Hours & Clinical Recovery Protocol */}
            <PatientVisitorGuide />

            {/* 6. Consultancy / Senior Clinical Leadership Section */}
            <ConsultantDirectory />
          </>
        )}
      </main>

      {/* Comprehensive Footer with Defined Dark Gradient */}
      <Footer
        onNavigate={handleNavigate}
        isDark={true}
      />
    </div>
  );
}
