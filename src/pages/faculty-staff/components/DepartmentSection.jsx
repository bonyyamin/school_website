import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import StaffCard from './StaffCard';

const DepartmentSection = ({ department, staff, onViewProfile }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const getDepartmentIcon = (dept) => {
    const icons = {
      'english': 'BookOpen',
      'mathematics': 'Calculator',
      'science': 'Microscope',
      'social-studies': 'Globe',
      'arts': 'Palette',
      'physical-education': 'Activity',
      'technology': 'Monitor',
      'special-education': 'Heart',
      'administration': 'Building',
      'support-staff': 'Users'
    };
    return icons[dept] || 'Users';
  };

  const getDepartmentColor = (dept) => {
    const colors = {
      'english': 'text-blue-600',
      'mathematics': 'text-green-600',
      'science': 'text-purple-600',
      'social-studies': 'text-orange-600',
      'arts': 'text-pink-600',
      'physical-education': 'text-red-600',
      'technology': 'text-indigo-600',
      'special-education': 'text-yellow-600',
      'administration': 'text-gray-600',
      'support-staff': 'text-teal-600'
    };
    return colors[dept] || 'text-gray-600';
  };

  if (staff.length === 0) return null;

  return (
    <div className="mb-8">
      <div 
        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <Icon 
            name={getDepartmentIcon(department.id)} 
            size={24} 
            className={getDepartmentColor(department.id)} 
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {department.name}
            </h2>
            <p className="text-sm text-gray-600">
              {staff.length} {staff.length === 1 ? 'member' : 'members'}
            </p>
          </div>
        </div>
        
        <Icon 
          name={isExpanded ? 'ChevronUp' : 'ChevronDown'} 
          size={20} 
          className="text-gray-500" 
        />
      </div>
      
      {isExpanded && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {staff.map((member) => (
            <StaffCard
              key={member.id}
              staff={member}
              onViewProfile={onViewProfile}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DepartmentSection;