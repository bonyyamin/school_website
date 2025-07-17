import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Navigation = () => {
  const location = useLocation();

  const navigationItems = [
    {
      path: '/homepage',
      label: 'Home',
      icon: 'Home'
    },
    {
      path: '/academics',
      label: 'Academics',
      icon: 'BookOpen'
    },
    {
      path: '/admissions',
      label: 'Admissions',
      icon: 'UserPlus'
    },
    {
      path: '/student-life',
      label: 'Student Life',
      icon: 'Users'
    },
    {
      path: '/faculty-staff',
      label: 'Faculty & Staff',
      icon: 'GraduationCap'
    },
    {
      path: '/news-events',
      label: 'News & Events',
      icon: 'Calendar'
    }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Icon name="GraduationCap" size={24} color="white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Greenwood High</h1>
              <p className="text-xs text-gray-500">Excellence in Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600 font-medium' :'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200">
              <Icon name="Menu" size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200 py-2">
          <div className="grid grid-cols-3 gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center space-y-1 p-3 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600' :'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;