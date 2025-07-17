import React, { useState } from 'react';
import Image from 'components/AppImage';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const StaffCard = ({ staff, onViewProfile }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

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
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gray-100">
              <Image
                src={staff.image}
                alt={staff.name}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="User" size={32} className="text-gray-400" />
                </div>
              )}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {staff.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {staff.title}
                </p>
              </div>
              
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDepartmentColor(staff.department)} whitespace-nowrap`}>
                {staff.departmentName}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="GraduationCap" size={16} className="mr-2 flex-shrink-0" />
                <span className="truncate">{staff.education}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Calendar" size={16} className="mr-2 flex-shrink-0" />
                <span>{staff.experience} years of experience</span>
              </div>
              
              {staff.email && (
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Mail" size={16} className="mr-2 flex-shrink-0" />
                  <a 
                    href={`mailto:${staff.email}`}
                    className="text-blue-600 hover:text-blue-800 truncate"
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
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onViewProfile(staff)}
                iconName="Eye"
                iconPosition="left"
                className="flex-1 sm:flex-none"
              >
                View Profile
              </Button>
              
              {staff.email && (
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => window.location.href = `mailto:${staff.email}`}
                  iconName="Mail"
                  iconPosition="left"
                  className="flex-1 sm:flex-none"
                >
                  Contact
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;