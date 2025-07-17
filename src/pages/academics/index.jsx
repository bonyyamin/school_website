import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from 'components/AppIcon';
import GradeLevelTabs from './components/GradeLevelTabs';
import CurriculumOverview from './components/CurriculumOverview';
import SubjectCards from './components/SubjectCards';
import AcademicCalendar from './components/AcademicCalendar';
import SpecialPrograms from './components/SpecialPrograms';
import FacultySpotlight from './components/FacultySpotlight';
import AcademicAchievements from './components/AcademicAchievements';
import DownloadableResources from './components/DownloadableResources';
import AcademicSearch from './components/AcademicSearch';

const AcademicsPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('elementary');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const navigationRoutes = [
    { path: '/homepage', label: 'Home', icon: 'Home' },
    { path: '/academics', label: 'Academics', icon: 'BookOpen' },
    { path: '/admissions', label: 'Admissions', icon: 'UserPlus' },
    { path: '/student-life', label: 'Student Life', icon: 'Users' },
    { path: '/faculty-staff', label: 'Faculty & Staff', icon: 'GraduationCap' },
    { path: '/news-events', label: 'News & Events', icon: 'Calendar' }
  ];

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setShowSearchResults(results.length > 0);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setShowSearchResults(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/homepage" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} color="white" />
                </div>
                <span className="text-xl font-bold text-slate-900">Oakwood Academy</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-1">
                {navigationRoutes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`nav-item ${location.pathname === route.path ? 'active' : ''}`}
                  >
                    <Icon name={route.icon} size={16} className="mr-2" />
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-slate-600 hover:text-slate-900">
                <Icon name="Search" size={20} />
              </button>
              <button className="p-2 text-slate-600 hover:text-slate-900 md:hidden">
                <Icon name="Menu" size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Academic Excellence</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive curriculum designed to challenge, inspire, and prepare students for success in college, career, and life.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Academic Search */}
        <AcademicSearch onSearchResults={handleSearchResults} />

        {/* Conditional Content Based on Search */}
        {showSearchResults ? (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Search Results</h2>
              <button
                onClick={() => setShowSearchResults(false)}
                className="text-blue-800 hover:text-blue-900 flex items-center space-x-2"
              >
                <Icon name="X" size={16} />
                <span>Close Search</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Grade Level Tabs */}
            <GradeLevelTabs activeTab={activeTab} onTabChange={handleTabChange} />

            {/* Tab Content */}
            <div className="py-8">
              {/* Curriculum Overview */}
              <CurriculumOverview gradeLevel={activeTab} />

              {/* Subject Cards */}
              <SubjectCards gradeLevel={activeTab} />
            </div>
          </>
        )}

        {/* Academic Calendar */}
        <AcademicCalendar />

        {/* Special Programs */}
        <SpecialPrograms />

        {/* Academic Achievements */}
        <AcademicAchievements />

        {/* Faculty Spotlight */}
        <FacultySpotlight />

        {/* Downloadable Resources */}
        <DownloadableResources />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} color="white" />
                </div>
                <span className="text-xl font-bold">Oakwood Academy</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Committed to academic excellence and character development since 1985.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/academics" className="text-slate-300 hover:text-white">Academics</Link></li>
                <li><Link to="/admissions" className="text-slate-300 hover:text-white">Admissions</Link></li>
                <li><Link to="/student-life" className="text-slate-300 hover:text-white">Student Life</Link></li>
                <li><Link to="/faculty-staff" className="text-slate-300 hover:text-white">Faculty & Staff</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={14} />
                  <span>123 Education Lane, Learning City, LC 12345</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} />
                  <span>info@oakwoodacademy.edu</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <button className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600">
                  <Icon name="Facebook" size={16} />
                </button>
                <button className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600">
                  <Icon name="Twitter" size={16} />
                </button>
                <button className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600">
                  <Icon name="Instagram" size={16} />
                </button>
                <button className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600">
                  <Icon name="Youtube" size={16} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Oakwood Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AcademicsPage;