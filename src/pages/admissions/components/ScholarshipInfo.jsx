import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ScholarshipInfo = () => {
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  const scholarships = [
    {
      id: 1,
      name: "Academic Excellence Scholarship",
      amount: "Up to 50% tuition",
      description: "Awarded to students demonstrating exceptional academic performance and potential.",
      eligibility: [
        "Minimum GPA of 3.8 or equivalent",
        "Standardized test scores in top 10%",
        "Strong recommendation letters",
        "Essay submission required"
      ],
      deadline: "February 15, 2025",
      renewable: true,
      icon: "Award"
    },
    {
      id: 2,
      name: "Need-Based Financial Aid",
      amount: "Up to 75% tuition",
      description: "Financial assistance for families demonstrating economic need.",
      eligibility: [
        "Complete financial aid application",
        "Submit tax returns and financial documents",
        "Family income below specified threshold",
        "Interview with financial aid committee"
      ],
      deadline: "March 1, 2025",
      renewable: true,
      icon: "Heart"
    },
    {
      id: 3,
      name: "Leadership & Service Scholarship",
      amount: "Up to 30% tuition",
      description: "Recognizes students with outstanding leadership qualities and community service.",
      eligibility: [
        "Demonstrated leadership experience",
        "Minimum 100 hours community service",
        "Leadership portfolio submission",
        "Interview with selection committee"
      ],
      deadline: "February 28, 2025",
      renewable: true,
      icon: "Users"
    },
    {
      id: 4,
      name: "Arts & Creative Scholarship",
      amount: "Up to 40% tuition",
      description: "For students with exceptional talent in visual arts, music, or performing arts.",
      eligibility: [
        "Portfolio or audition submission",
        "Minimum 2 years experience in chosen field",
        "Teacher recommendation in arts area",
        "Commitment to school arts programs"
      ],
      deadline: "January 31, 2025",
      renewable: true,
      icon: "Palette"
    },
    {
      id: 5,
      name: "STEM Innovation Scholarship",
      amount: "Up to 35% tuition",
      description: "Supporting future innovators in Science, Technology, Engineering, and Mathematics.",
      eligibility: [
        "Strong performance in STEM subjects",
        "Science fair or competition participation",
        "STEM project portfolio",
        "Interest in advanced STEM courses"
      ],
      deadline: "February 20, 2025",
      renewable: true,
      icon: "Zap"
    },
    {
      id: 6,
      name: "Sibling Discount",
      amount: "10-15% tuition",
      description: "Automatic discount for families with multiple children enrolled.",
      eligibility: [
        "Two or more siblings enrolled simultaneously",
        "10% discount for second child",
        "15% discount for third child and beyond",
        "Applied automatically upon enrollment"
      ],
      deadline: "Ongoing",
      renewable: false,
      icon: "Users2"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Review Eligibility",
      description: "Check requirements for each scholarship program"
    },
    {
      step: 2,
      title: "Gather Documents",
      description: "Collect transcripts, recommendations, and required materials"
    },
    {
      step: 3,
      title: "Complete Application",
      description: "Submit online application with all supporting documents"
    },
    {
      step: 4,
      title: "Interview Process",
      description: "Participate in scholarship committee interview if selected"
    },
    {
      step: 5,
      title: "Award Notification",
      description: "Receive scholarship decision with enrollment package"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Scholarships & Financial Aid
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe every deserving student should have access to quality education. Explore our comprehensive scholarship and financial aid programs.
          </p>
        </div>

        {/* Scholarship Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scholarships.map((scholarship) => (
            <div 
              key={scholarship.id}
              className={`bg-white border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedScholarship === scholarship.id 
                  ? 'border-blue-500 shadow-lg' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedScholarship(
                selectedScholarship === scholarship.id ? null : scholarship.id
              )}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Icon name={scholarship.icon} size={24} color="#1E3A8A" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {scholarship.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{scholarship.amount}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4 text-sm">
                {scholarship.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-amber-600">
                  <Icon name="Clock" size={16} className="mr-1" />
                  {scholarship.deadline}
                </div>
                {scholarship.renewable && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    Renewable
                  </span>
                )}
              </div>

              {selectedScholarship === scholarship.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Eligibility Requirements:</h4>
                  <ul className="space-y-1">
                    {scholarship.eligibility.map((req, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
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

        {/* Application Process */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Scholarship Application Process
          </h3>

          <div className="grid md:grid-cols-5 gap-6">
            {applicationProcess.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
                
                {index < applicationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Financial Aid Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
              <Icon name="Calculator" size={20} className="mr-2" />
              Financial Aid Calculator
            </h3>
            <p className="text-blue-800 mb-4">
              Use our online calculator to estimate your potential financial aid eligibility based on your family's financial situation.
            </p>
            <Button 
              variant="default" 
              className="bg-blue-800 hover:bg-blue-900"
              iconName="Calculator"
              iconPosition="left"
            >
              Calculate Aid Eligibility
            </Button>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
              <Icon name="Phone" size={20} className="mr-2" />
              Financial Aid Office
            </h3>
            <div className="space-y-2 text-green-800">
              <p className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                financialaid@ourschool.edu
              </p>
              <p className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                (555) 123-4567
              </p>
              <p className="flex items-center">
                <Icon name="Clock" size={16} className="mr-2" />
                Mon-Fri: 8:00 AM - 5:00 PM
              </p>
            </div>
            <Button 
              variant="outline" 
              className="mt-4 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipInfo;