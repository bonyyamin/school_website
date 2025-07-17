import React from 'react';
import Input from 'components/ui/Input';
import Select from 'components/ui/Select';
import Icon from 'components/AppIcon';

const SearchFilters = ({ searchTerm, setSearchTerm, selectedDepartment, setSelectedDepartment, selectedGrade, setSelectedGrade }) => {
  const departmentOptions = [
    { value: '', label: 'All Departments' },
    { value: 'english', label: 'English Language Arts' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'science', label: 'Science' },
    { value: 'social-studies', label: 'Social Studies' },
    { value: 'arts', label: 'Arts & Music' },
    { value: 'physical-education', label: 'Physical Education' },
    { value: 'technology', label: 'Technology' },
    { value: 'special-education', label: 'Special Education' },
    { value: 'administration', label: 'Administration' },
    { value: 'support-staff', label: 'Support Staff' }
  ];

  const gradeOptions = [
    { value: '', label: 'All Grade Levels' },
    { value: 'elementary', label: 'Elementary (K-5)' },
    { value: 'middle', label: 'Middle School (6-8)' },
    { value: 'high', label: 'High School (9-12)' },
    { value: 'all-grades', label: 'All Grades' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            />
            <Input
              type="text"
              placeholder="Search by name, title, or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 lg:w-auto">
          <Select
            options={departmentOptions}
            value={selectedDepartment}
            onChange={setSelectedDepartment}
            placeholder="Filter by Department"
            className="min-w-48"
          />
          
          <Select
            options={gradeOptions}
            value={selectedGrade}
            onChange={setSelectedGrade}
            placeholder="Filter by Grade Level"
            className="min-w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;