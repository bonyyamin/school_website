import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ExtracurricularActivities = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const activities = [
    {
      id: 1,
      category: "Sports",
      icon: "Trophy",
      color: "bg-blue-500",
      activities: [
        {
          name: "Basketball Team",
          description: "Competitive basketball program for all skill levels with regular tournaments and inter-school competitions.",
          schedule: "Monday, Wednesday, Friday - 3:30 PM to 5:00 PM",
          location: "Main Gymnasium"
        },
        {
          name: "Soccer Club",
          description: "Develop teamwork and athletic skills through soccer training and matches against other schools.",
          schedule: "Tuesday, Thursday - 4:00 PM to 5:30 PM",
          location: "Sports Field"
        },
        {
          name: "Swimming Team",
          description: "Professional swimming coaching with focus on technique, endurance, and competitive swimming.",
          schedule: "Monday to Friday - 6:00 AM to 7:30 AM",
          location: "School Pool"
        }
      ]
    },
    {
      id: 2,
      category: "Academic Clubs",
      icon: "BookOpen",
      color: "bg-green-500",
      activities: [
        {
          name: "Science Olympiad",
          description: "Competitive science program covering biology, chemistry, physics, and earth sciences.",
          schedule: "Wednesday - 3:30 PM to 5:00 PM",
          location: "Science Laboratory"
        },
        {
          name: "Math Club",
          description: "Advanced mathematics problem-solving and preparation for math competitions.",
          schedule: "Thursday - 3:30 PM to 4:30 PM",
          location: "Room 205"
        },
        {
          name: "Debate Society",
          description: "Develop public speaking and critical thinking skills through structured debates and competitions.",
          schedule: "Friday - 3:30 PM to 5:00 PM",
          location: "Auditorium"
        }
      ]
    },
    {
      id: 3,
      category: "Arts & Culture",
      icon: "Palette",
      color: "bg-purple-500",
      activities: [
        {
          name: "Drama Club",
          description: "Theater productions, acting workshops, and performance opportunities throughout the year.",
          schedule: "Tuesday, Thursday - 3:30 PM to 5:30 PM",
          location: "Drama Studio"
        },
        {
          name: "Music Ensemble",
          description: "Instrumental and vocal music groups performing at school events and community concerts.",
          schedule: "Monday, Wednesday - 3:30 PM to 5:00 PM",
          location: "Music Room"
        },
        {
          name: "Art Studio",
          description: "Explore various art mediums including painting, sculpture, and digital art creation.",
          schedule: "Friday - 3:30 PM to 5:30 PM",
          location: "Art Studio"
        }
      ]
    },
    {
      id: 4,
      category: "Technology",
      icon: "Monitor",
      color: "bg-orange-500",
      activities: [
        {
          name: "Robotics Club",
          description: "Build and program robots for competitions while learning engineering and programming skills.",
          schedule: "Tuesday, Thursday - 3:30 PM to 5:30 PM",
          location: "STEM Lab"
        },
        {
          name: "Coding Club",
          description: "Learn programming languages and develop software projects in a collaborative environment.",
          schedule: "Wednesday - 3:30 PM to 5:00 PM",
          location: "Computer Lab"
        },
        {
          name: "Digital Media",
          description: "Create videos, podcasts, and digital content for school communications and projects.",
          schedule: "Friday - 3:30 PM to 5:00 PM",
          location: "Media Center"
        }
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Extracurricular Activities</h2>
      
      <div className="space-y-4">
        {activities.map((category) => (
          <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <div className={`${category.color} p-2 rounded-lg`}>
                  <Icon name={category.icon} size={20} color="white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                <span className="text-sm text-gray-500">
                  ({category.activities.length} activities)
                </span>
              </div>
              <Icon 
                name={expandedCategory === category.id ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                color="currentColor" 
              />
            </button>
            
            {expandedCategory === category.id && (
              <div className="px-6 py-4 bg-white">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.activities.map((activity, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <h4 className="font-semibold text-gray-900 mb-2">{activity.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                      <div className="space-y-2 text-xs text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={14} />
                          <span>{activity.schedule}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="MapPin" size={14} />
                          <span>{activity.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtracurricularActivities;