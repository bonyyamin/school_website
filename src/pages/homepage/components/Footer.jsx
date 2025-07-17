import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Faculty & Staff', path: '/faculty-staff' },
    { name: 'News & Events', path: '/news-events' }
  ];

  const resources = [
    { name: 'Parent Portal', path: '#' },
    { name: 'Student Portal', path: '#' },
    { name: 'Library', path: '#' },
    { name: 'Calendar', path: '#' },
    { name: 'Policies', path: '#' }
  ];

  const contactInfo = {
    address: "1234 Education Boulevard, Oakwood, CA 90210",
    phone: "(555) 123-4567",
    email: "info@oakwoodacademy.edu",
    fax: "(555) 123-4568"
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="GraduationCap" size={24} color="white" />
              </div>
              <span className="text-xl font-bold">Oakwood Academy</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Empowering tomorrow's leaders through excellence in education, innovation, and character development since 1985.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={16} color="#9ca3af" className="mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} color="#9ca3af" className="flex-shrink-0" />
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} color="#9ca3af" className="flex-shrink-0" />
                <span className="text-gray-300 text-sm">{contactInfo.email}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Printer" size={16} color="#9ca3af" className="flex-shrink-0" />
                <span className="text-gray-300 text-sm">{contactInfo.fax}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Oakwood Academy. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>

        {/* Accreditation */}
        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">Accredited by:</p>
            <div className="flex flex-wrap justify-center items-center space-x-6 text-xs text-gray-500">
              <span>Western Association of Schools and Colleges (WASC)</span>
              <span>•</span>
              <span>National Association of Independent Schools (NAIS)</span>
              <span>•</span>
              <span>California Association of Independent Schools (CAIS)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;