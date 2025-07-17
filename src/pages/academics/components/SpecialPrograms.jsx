import React from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import Button from 'components/ui/Button';

const SpecialPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "STEM Excellence Initiative",
      description: "Comprehensive science, technology, engineering, and mathematics program with state-of-the-art laboratories and equipment.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      metrics: [
        { label: "Students Enrolled", value: "450+" },
        { label: "STEM Competitions Won", value: "15" },
        { label: "College STEM Acceptance", value: "92%" }
      ],
      features: [
        "Robotics and coding labs",
        "3D printing and design studio",
        "Research partnerships with universities",
        "STEM competition teams"
      ],
      icon: "Cpu"
    },
    {
      id: 2,
      title: "Creative Arts Academy",
      description: "Comprehensive arts program encompassing visual arts, music, theater, and digital media with professional-grade facilities.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
      metrics: [
        { label: "Arts Students", value: "320+" },
        { label: "Annual Performances", value: "25" },
        { label: "Art Scholarships Earned", value: "$2.1M" }
      ],
      features: [
        "Professional recording studio",
        "Digital art and animation lab",
        "Black box theater space",
        "Gallery exhibition opportunities"
      ],
      icon: "Palette"
    },
    {
      id: 3,
      title: "Advanced Placement Program",
      description: "Extensive AP course offerings across all academic disciplines, preparing students for college-level work and earning college credit.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      metrics: [
        { label: "AP Courses Offered", value: "22" },
        { label: "Students Taking AP", value: "85%" },
        { label: "AP Pass Rate", value: "94%" }
      ],
      features: [
        "College-level curriculum",
        "Experienced AP-certified teachers",
        "Exam preparation support",
        "College credit opportunities"
      ],
      icon: "Award"
    },
    {
      id: 4,
      title: "Global Studies Program",
      description: "International education initiative featuring world languages, cultural exchange, and global citizenship development.",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=250&fit=crop",
      metrics: [
        { label: "Languages Offered", value: "5" },
        { label: "Exchange Students", value: "40+" },
        { label: "Cultural Events", value: "12/year" }
      ],
      features: [
        "Student exchange programs",
        "International partnerships",
        "Cultural immersion experiences",
        "Global citizenship curriculum"
      ],
      icon: "Globe"
    }
  ];

  return (
    <div className="mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Special Programs</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Discover our signature programs designed to challenge, inspire, and prepare students for success in their chosen fields.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {programs.map((program) => (
          <div key={program.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-lg flex items-center justify-center">
                  <Icon name={program.icon} size={24} color="rgb(30, 58, 138)" />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{program.description}</p>
              
              {/* Success Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-slate-50 rounded-lg">
                {program.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold text-blue-800">{metric.value}</div>
                    <div className="text-xs text-slate-600">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Program Features */}
              <div className="mb-4">
                <h4 className="font-semibold text-slate-900 mb-2">Program Features</h4>
                <ul className="space-y-1">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={14} color="rgb(5, 150, 105)" className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button
                variant="outline"
                iconName="ArrowRight"
                iconPosition="right"
                className="w-full"
                onClick={() => alert(`Learn more about ${program.title}`)}
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialPrograms;