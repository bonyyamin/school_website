import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "STEM Excellence Program",
      description: "Advanced Science, Technology, Engineering, and Mathematics curriculum with hands-on laboratory experiences and robotics competitions.",
      image: "https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg",
      icon: "Cpu",
      features: ["Advanced Robotics Lab", "3D Printing Workshop", "Coding Bootcamps", "Science Olympiad"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Creative Arts Academy",
      description: "Comprehensive arts education including visual arts, music, theater, and digital media production with professional-grade facilities.",
      image: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg",
      icon: "Palette",
      features: ["Professional Art Studios", "Music Recording Studio", "Theater Productions", "Digital Media Lab"],
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Athletic Excellence",
      description: "Competitive sports programs with state-of-the-art facilities, professional coaching, and scholarship opportunities.",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
      icon: "Trophy",
      features: ["15 Varsity Sports", "Olympic-size Pool", "Fitness Center", "Sports Medicine"],
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "Global Leadership",
      description: "International exchange programs, Model UN, debate team, and community service initiatives to develop future leaders.",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
      icon: "Globe",
      features: ["Exchange Programs", "Model United Nations", "Debate Championships", "Community Service"],
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "Advanced Placement",
      description: "Comprehensive AP program with 28 courses available, college-level curriculum, and dedicated college counseling support.",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg",
      icon: "BookOpen",
      features: ["28 AP Courses", "College Counseling", "University Partnerships", "Scholarship Prep"],
      color: "bg-red-500"
    },
    {
      id: 6,
      title: "Innovation Lab",
      description: "Entrepreneurship and innovation program with startup incubator, business plan competitions, and mentorship opportunities.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      icon: "Lightbulb",
      features: ["Startup Incubator", "Business Competitions", "Mentor Network", "Patent Applications"],
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our innovative programs designed to nurture talent, foster creativity, and prepare students for success in the 21st century
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Program Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 ${program.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <Icon name={program.icon} size={24} color="white" />
                  </div>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={16} color="#059669" className="mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Explore Our Programs?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Schedule a campus tour to see our facilities firsthand and meet with program coordinators to discuss your interests and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Schedule Campus Tour
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-blue-700"
              >
                Download Program Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;