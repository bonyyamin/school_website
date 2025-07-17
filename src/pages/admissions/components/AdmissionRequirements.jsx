import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AdmissionRequirements = () => {
  const [expandedGrade, setExpandedGrade] = useState('elementary');

  const gradeRequirements = {
    kindergarten: {
      title: 'Kindergarten',
      ageRequirement: 'Must be 5 years old by September 1st',
      requirements: [
        'Completed application form',
        'Birth certificate (certified copy)',
        'Immunization records',
        'Pre-kindergarten assessment',
        'Parent interview'
      ],
      testing: 'Developmental readiness assessment',
      interview: 'Parent-child interview (30 minutes)',
      documents: [
        'Birth certificate',
        'Immunization records',
        'Emergency contact information',
        'Medical forms'
      ]
    },
    elementary: {
      title: 'Elementary (Grades 1-5)',
      ageRequirement: 'Age-appropriate for grade level',
      requirements: [
        'Completed application form',
        'Previous school transcripts',
        'Teacher recommendation letter',
        'Academic assessment test',
        'Student and parent interview'
      ],
      testing: 'Math and reading assessment appropriate for grade level',
      interview: 'Family interview (45 minutes)',
      documents: [
        'Official transcripts from previous school',
        'Standardized test scores (if available)',
        'Teacher recommendation',
        'Birth certificate',
        'Immunization records'
      ]
    },
    middle: {
      title: 'Middle School (Grades 6-8)',
      ageRequirement: 'Age-appropriate for grade level',
      requirements: [
        'Completed application form',
        'Official transcripts (last 2 years)',
        'Two teacher recommendations',
        'Entrance examination',
        'Student and parent interview',
        'Writing sample'
      ],
      testing: 'Comprehensive entrance exam covering math, English, science, and social studies',
      interview: 'Student interview (30 min) + Family interview (30 min)',
      documents: [
        'Official transcripts (grades 4-current)',
        'Standardized test scores',
        'Two teacher recommendations',
        'Disciplinary records',
        'Extracurricular activity records'
      ]
    },
    high: {
      title: 'High School (Grades 9-12)',
      ageRequirement: 'Age-appropriate for grade level',
      requirements: [
        'Completed application form',
        'Official high school transcripts',
        'Three teacher recommendations',
        'Standardized test scores (PSAT/SAT/ACT)',
        'Entrance examination',
        'Student essay',
        'Student and parent interview'
      ],
      testing: 'Comprehensive entrance exam and placement tests for advanced courses',
      interview: 'Individual student interview (45 min) + Family interview (30 min)',
      documents: [
        'Official high school transcripts',
        'Standardized test scores (PSAT/SAT/ACT)',
        'Three teacher recommendations',
        'Personal essay',
        'Extracurricular activity portfolio',
        'Community service records'
      ]
    }
  };

  const generalRequirements = [
    {
      category: 'Academic Standards',
      items: [
        'Demonstrated academic ability appropriate for grade level',
        'Commitment to academic excellence and growth',
        'Willingness to participate in school community',
        'Alignment with school values and mission'
      ]
    },
    {
      category: 'Behavioral Expectations',
      items: [
        'Respectful and cooperative behavior',
        'Commitment to school honor code',
        'Positive attitude toward learning',
        'Ability to work collaboratively with peers'
      ]
    },
    {
      category: 'Family Commitment',
      items: [
        'Support for school policies and procedures',
        'Active participation in school community',
        'Commitment to educational partnership',
        'Timely communication with school staff'
      ]
    }
  ];

  const importantDates = [
    { date: 'January 15, 2025', event: 'Application Opens', icon: 'Calendar' },
    { date: 'February 15, 2025', event: 'Scholarship Application Deadline', icon: 'Award' },
    { date: 'March 1, 2025', event: 'Financial Aid Deadline', icon: 'DollarSign' },
    { date: 'March 15, 2025', event: 'Application Deadline', icon: 'Clock' },
    { date: 'March 20-30, 2025', event: 'Testing & Interview Period', icon: 'Users' },
    { date: 'April 5, 2025', event: 'Admission Decisions Released', icon: 'Mail' },
    { date: 'April 20, 2025', event: 'Enrollment Confirmation Deadline', icon: 'CheckCircle' },
    { date: 'August 15, 2025', event: 'New Student Orientation', icon: 'GraduationCap' }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Admission Requirements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Detailed requirements and criteria for each grade level to help you prepare your application
          </p>
        </div>

        {/* Grade Level Requirements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements by Grade Level</h3>
          
          <div className="space-y-4">
            {Object.entries(gradeRequirements).map(([key, grade]) => (
              <div key={key} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => setExpandedGrade(expandedGrade === key ? null : key)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{grade.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{grade.ageRequirement}</p>
                  </div>
                  <Icon 
                    name={expandedGrade === key ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-gray-500"
                  />
                </button>

                {expandedGrade === key && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      {/* Requirements */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Icon name="CheckSquare" size={18} className="mr-2 text-blue-600" />
                          Application Requirements
                        </h5>
                        <ul className="space-y-2">
                          {grade.requirements.map((req, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <Icon name="Check" size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Documents */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Icon name="FileText" size={18} className="mr-2 text-blue-600" />
                          Required Documents
                        </h5>
                        <ul className="space-y-2">
                          {grade.documents.map((doc, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <Icon name="File" size={16} className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testing */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Icon name="BookOpen" size={18} className="mr-2 text-blue-600" />
                          Testing Requirements
                        </h5>
                        <p className="text-sm text-gray-600">{grade.testing}</p>
                      </div>

                      {/* Interview */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Icon name="MessageCircle" size={18} className="mr-2 text-blue-600" />
                          Interview Process
                        </h5>
                        <p className="text-sm text-gray-600">{grade.interview}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* General Requirements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">General Admission Criteria</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {generalRequirements.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                      <Icon name="Check" size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Important Admission Dates
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {importantDates.map((item, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Icon name={item.icon} size={20} color="#1E3A8A" />
                </div>
                <p className="font-semibold text-gray-900 text-sm mb-1">{item.event}</p>
                <p className="text-blue-600 text-sm font-medium">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionRequirements;