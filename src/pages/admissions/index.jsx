import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import HeroSection from './components/HeroSection';
import AdmissionProcess from './components/AdmissionProcess';
import ApplicationForm from './components/ApplicationForm';
import FeeStructure from './components/FeeStructure';
import ScholarshipInfo from './components/ScholarshipInfo';
import AdmissionRequirements from './components/AdmissionRequirements';
import VirtualTour from './components/VirtualTour';
import FAQSection from './components/FAQSection';
import ContactInfo from './components/ContactInfo';

const Admissions = () => {
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Academics', path: '/academics', icon: 'BookOpen' },
    { name: 'Admissions', path: '/admissions', icon: 'Users' },
    { name: 'Student Life', path: '/student-life', icon: 'Heart' },
    { name: 'Faculty & Staff', path: '/faculty-staff', icon: 'GraduationCap' },
    { name: 'News & Events', path: '/news-events', icon: 'Calendar' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/homepage" className="flex items-center">
              <div className="bg-blue-800 text-white p-2 rounded-lg mr-3">
                <Icon name="GraduationCap" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-900">Excellence Academy</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <Icon name={item.icon} size={18} className="mr-2" />
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/homepage" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
            <span className="text-gray-900 font-medium">Admissions</span>
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <main>
        <HeroSection />
        <AdmissionProcess />
        <ApplicationForm />
        <FeeStructure />
        <ScholarshipInfo />
        <AdmissionRequirements />
        <VirtualTour />
        <FAQSection />
        <ContactInfo />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                  <Icon name="GraduationCap" size={20} />
                </div>
                <span className="text-lg font-bold">Excellence Academy</span>
              </div>
              <p className="text-gray-400 text-sm">
                Nurturing minds, building futures. Excellence in education since 1985.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/academics" className="hover:text-white">Academics</Link></li>
                <li><Link to="/admissions" className="hover:text-white">Admissions</Link></li>
                <li><Link to="/student-life" className="hover:text-white">Student Life</Link></li>
                <li><Link to="/faculty-staff" className="hover:text-white">Faculty & Staff</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Admissions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Application Process</li>
                <li>Requirements</li>
                <li>Financial Aid</li>
                <li>Campus Tours</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center">
                  <Icon name="MapPin" size={14} className="mr-2" />
                  123 Education Drive, Learning City, LC 12345
                </p>
                <p className="flex items-center">
                  <Icon name="Phone" size={14} className="mr-2" />
                  (555) 123-4567
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={14} className="mr-2" />
                  info@excellenceacademy.edu
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Excellence Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Admissions;