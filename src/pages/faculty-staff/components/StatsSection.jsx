import React from 'react';
import Icon from 'components/AppIcon';

const StatsSection = ({ stats }) => {
  const statItems = [
    {
      icon: 'Users',
      label: 'Total Faculty',
      value: stats.totalFaculty,
      color: 'text-blue-600'
    },
    {
      icon: 'GraduationCap',
      label: 'Advanced Degrees',
      value: stats.advancedDegrees,
      color: 'text-green-600'
    },
    {
      icon: 'Award',
      label: 'Years Combined Experience',
      value: stats.totalExperience,
      color: 'text-purple-600'
    },
    {
      icon: 'BookOpen',
      label: 'Departments',
      value: stats.departments,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {statItems.map((item, index) => (
          <div key={index} className="text-center">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-3`}>
              <Icon name={item.icon} size={24} className={item.color} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {item.value}
            </div>
            <div className="text-sm text-gray-600">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;