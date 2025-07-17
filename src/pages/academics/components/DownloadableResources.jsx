import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const DownloadableResources = () => {
  const resources = [
    {
      id: 1,
      title: "Elementary Curriculum Guide",
      description: "Comprehensive overview of K-5 curriculum standards, learning objectives, and assessment methods.",
      type: "PDF",
      size: "2.4 MB",
      lastUpdated: "January 2024",
      icon: "BookOpen",
      category: "Curriculum"
    },
    {
      id: 2,
      title: "Middle School Course Catalog",
      description: "Detailed course descriptions, prerequisites, and elective options for grades 6-8.",
      type: "PDF",
      size: "3.1 MB",
      lastUpdated: "February 2024",
      icon: "FileText",
      category: "Curriculum"
    },
    {
      id: 3,
      title: "High School Academic Handbook",
      description: "Complete guide to graduation requirements, AP courses, and college preparation programs.",
      type: "PDF",
      size: "4.2 MB",
      lastUpdated: "March 2024",
      icon: "GraduationCap",
      category: "Curriculum"
    },
    {
      id: 4,
      title: "Academic Policies & Procedures",
      description: "Official policies regarding grading, attendance, academic integrity, and student support services.",
      type: "PDF",
      size: "1.8 MB",
      lastUpdated: "January 2024",
      icon: "Shield",
      category: "Policies"
    },
    {
      id: 5,
      title: "STEM Program Overview",
      description: "Detailed information about our Science, Technology, Engineering, and Mathematics initiatives.",
      type: "PDF",
      size: "2.9 MB",
      lastUpdated: "February 2024",
      icon: "Cpu",
      category: "Programs"
    },
    {
      id: 6,
      title: "Arts & Humanities Brochure",
      description: "Showcase of our creative arts programs, music ensembles, and humanities courses.",
      type: "PDF",
      size: "3.5 MB",
      lastUpdated: "March 2024",
      icon: "Palette",
      category: "Programs"
    },
    {
      id: 7,
      title: "Assessment & Grading Guidelines",
      description: "Parent and student guide to our assessment practices and grading standards.",
      type: "PDF",
      size: "1.5 MB",
      lastUpdated: "January 2024",
      icon: "ClipboardCheck",
      category: "Policies"
    },
    {
      id: 8,
      title: "College Preparation Roadmap",
      description: "Four-year planning guide for college-bound students including course selection and timeline.",
      type: "PDF",
      size: "2.2 MB",
      lastUpdated: "February 2024",
      icon: "Map",
      category: "College Prep"
    }
  ];

  const categories = ["All", "Curriculum", "Policies", "Programs", "College Prep"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredResources = selectedCategory === "All" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      "Curriculum": "bg-blue-100 text-blue-800",
      "Policies": "bg-green-100 text-green-800",
      "Programs": "bg-purple-100 text-purple-800",
      "College Prep": "bg-amber-100 text-amber-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const handleDownload = (resource) => {
    // Simulate download
    alert(`Downloading ${resource.title}...`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Academic Resources</h2>
          <p className="text-slate-600">Download curriculum guides, policies, and program information.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Download" size={20} color="rgb(30, 58, 138)" />
          <span className="text-sm text-slate-600">{filteredResources.length} Resources</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Icon name={resource.icon} size={24} color="rgb(100, 116, 139)" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-slate-900 text-sm leading-tight">{resource.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}>
                    {resource.category}
                  </span>
                </div>
                
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-slate-500">
                    <span className="flex items-center space-x-1">
                      <Icon name="File" size={12} />
                      <span>{resource.type}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="HardDrive" size={12} />
                      <span>{resource.size}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Calendar" size={12} />
                      <span>{resource.lastUpdated}</span>
                    </span>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(resource)}
                    iconName="Download"
                    iconPosition="left"
                    iconSize={14}
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-8">
          <Icon name="FileX" size={48} color="rgb(148, 163, 184)" className="mx-auto mb-4" />
          <p className="text-slate-500">No resources found for the selected category.</p>
        </div>
      )}

      {/* Help Section */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} color="rgb(30, 58, 138)" className="flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Need Help?</h4>
              <p className="text-blue-800 text-sm mb-2">
                If you're having trouble accessing any of these resources or need additional information, please contact our Academic Office.
              </p>
              <div className="flex items-center space-x-4 text-sm text-blue-700">
                <span className="flex items-center space-x-1">
                  <Icon name="Phone" size={14} />
                  <span>(555) 123-4567</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Mail" size={14} />
                  <span>academics@school.edu</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadableResources;