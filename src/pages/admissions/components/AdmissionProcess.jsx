import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AdmissionProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Submit Inquiry",
      description: "Complete our online inquiry form to express your interest in our school.",
      requirements: ["Basic student information", "Parent contact details", "Preferred grade level"],
      timeline: "Anytime",
      icon: "FileText"
    },
    {
      id: 2,
      title: "Application Submission",
      description: "Submit the complete application with all required documents.",
      requirements: ["Completed application form", "Previous school transcripts", "Birth certificate", "Immunization records"],
      timeline: "By March 15, 2025",
      icon: "Upload"
    },
    {
      id: 3,
      title: "Assessment & Interview",
      description: "Student assessment and family interview with our admissions team.",
      requirements: ["Student assessment test", "Parent-student interview", "School tour attendance"],
      timeline: "March 20-30, 2025",
      icon: "Users"
    },
    {
      id: 4,
      title: "Decision & Enrollment",
      description: "Receive admission decision and complete enrollment process.",
      requirements: ["Admission decision letter", "Enrollment contract", "Fee payment", "Orientation attendance"],
      timeline: "April 5, 2025",
      icon: "CheckCircle"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Admission Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our simple four-step process to join our school community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={step.id}
              className={`relative bg-white rounded-lg p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                activeStep === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Icon name={step.icon} size={24} color="#1E3A8A" />
                </div>
                <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm">
                {step.description}
              </p>

              <div className="mb-4">
                <div className="flex items-center text-sm text-amber-600 font-medium mb-2">
                  <Icon name="Clock" size={16} className="mr-1" />
                  {step.timeline}
                </div>
              </div>

              {activeStep === index && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {step.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                        <Icon name="Check" size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;