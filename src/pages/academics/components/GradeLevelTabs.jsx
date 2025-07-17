import React, { useState } from 'react';


const GradeLevelTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'elementary', label: 'Elementary', grades: 'K-5' },
    { id: 'middle', label: 'Middle School', grades: '6-8' },
    { id: 'high', label: 'High School', grades: '9-12' }
  ];

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'border-blue-800 text-blue-800' :'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              <div className="text-center">
                <div className="font-semibold">{tab.label}</div>
                <div className="text-xs opacity-75">Grades {tab.grades}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradeLevelTabs;