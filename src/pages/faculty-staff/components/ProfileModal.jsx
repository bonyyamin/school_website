import React, { useEffect } from 'react';
import Image from 'components/AppImage';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const ProfileModal = ({ staff, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !staff) return null;

  const getDepartmentColor = (department) => {
    const colors = {
      'english': 'bg-blue-100 text-blue-800',
      'mathematics': 'bg-green-100 text-green-800',
      'science': 'bg-purple-100 text-purple-800',
      'social-studies': 'bg-orange-100 text-orange-800',
      'arts': 'bg-pink-100 text-pink-800',
      'physical-education': 'bg-red-100 text-red-800',
      'technology': 'bg-indigo-100 text-indigo-800',
      'special-education': 'bg-yellow-100 text-yellow-800',
      'administration': 'bg-gray-100 text-gray-800',
      'support-staff': 'bg-teal-100 text-teal-800'
    };
    return colors[department] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Staff Profile</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
            className="p-2"
          />
        </div>
        
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {staff.name}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium mb-2">
                    {staff.title}
                  </p>
                </div>
                
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDepartmentColor(staff.department)}`}>
                  {staff.departmentName}
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="GraduationCap" size={16} className="mr-2 flex-shrink-0" />
                  <span>{staff.education}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Calendar" size={16} className="mr-2 flex-shrink-0" />
                  <span>{staff.experience} years experience</span>
                </div>
                
                {staff.email && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Mail" size={16} className="mr-2 flex-shrink-0" />
                    <a 
                      href={`mailto:${staff.email}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {staff.email}
                    </a>
                  </div>
                )}
                
                {staff.phone && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Phone" size={16} className="mr-2 flex-shrink-0" />
                    <a 
                      href={`tel:${staff.phone}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {staff.phone}
                    </a>
                  </div>
                )}
                
                {staff.officeHours && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Clock" size={16} className="mr-2 flex-shrink-0" />
                    <span>{staff.officeHours}</span>
                  </div>
                )}
                
                {staff.office && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="MapPin" size={16} className="mr-2 flex-shrink-0" />
                    <span>{staff.office}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {staff.biography && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Biography</h4>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {staff.biography}
              </p>
            </div>
          )}
          
          {staff.teachingPhilosophy && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Teaching Philosophy</h4>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {staff.teachingPhilosophy}
              </p>
            </div>
          )}
          
          {staff.specializations && staff.specializations.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {staff.specializations.map((spec, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {staff.achievements && staff.achievements.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Achievements & Awards</h4>
              <ul className="space-y-2">
                {staff.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="Award" size={16} className="mr-2 mt-0.5 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            {staff.email && (
              <Button
                variant="default"
                onClick={() => window.location.href = `mailto:${staff.email}`}
                iconName="Mail"
                iconPosition="left"
                className="flex-1 sm:flex-none"
              >
                Send Email
              </Button>
            )}
            
            {staff.phone && (
              <Button
                variant="outline"
                onClick={() => window.location.href = `tel:${staff.phone}`}
                iconName="Phone"
                iconPosition="left"
                className="flex-1 sm:flex-none"
              >
                Call
              </Button>
            )}
            
            <Button
              variant="ghost"
              onClick={onClose}
              className="flex-1 sm:flex-none"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;