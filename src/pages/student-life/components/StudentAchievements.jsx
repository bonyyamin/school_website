import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StudentAchievements = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedYear, setSelectedYear] = useState('2024');

  const achievements = [
    {
      id: 1,
      title: "State Science Fair Winner",
      student: "Emma Johnson",
      grade: "Grade 11",
      category: "academic",
      year: "2024",
      date: "March 15, 2024",
      description: "First place in Environmental Science category for innovative water purification project.",
      image: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      award: "Gold Medal"
    },
    {
      id: 2,
      title: "Regional Basketball Championship",
      student: "Marcus Williams",
      grade: "Grade 12",
      category: "sports",
      year: "2024",
      date: "February 28, 2024",
      description: "Led the school basketball team to victory in the regional championship finals.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      award: "Championship Trophy"
    },
    {
      id: 3,
      title: "National Art Competition",
      student: "Sophia Chen",
      grade: "Grade 10",
      category: "arts",
      year: "2024",
      date: "April 10, 2024",
      description: "Second place in national high school art competition for digital art category.",
      image: "https://images.pixabay.com/photos/2017/09/07/08/54/money-2724241_1280.jpg",
      award: "Silver Medal"
    },
    {
      id: 4,
      title: "Robotics World Championship",
      student: "Alex Rodriguez",
      grade: "Grade 11",
      category: "technology",
      year: "2024",
      date: "May 20, 2024",
      description: "Team captain leading school robotics team to top 10 finish at world championships.",
      image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      award: "Excellence Award"
    },
    {
      id: 5,
      title: "State Debate Championship",
      student: "Isabella Martinez",
      grade: "Grade 12",
      category: "academic",
      year: "2024",
      date: "January 25, 2024",
      description: "Outstanding performance in state-level debate competition, advancing to nationals.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      award: "State Champion"
    },
    {
      id: 6,
      title: "Community Service Award",
      student: "David Thompson",
      grade: "Grade 10",
      category: "community",
      year: "2024",
      date: "June 5, 2024",
      description: "Recognized for 200+ hours of community service and leadership in local charity initiatives.",
      image: "https://images.pixabay.com/photos/2016/11/21/12/51/aid-1845350_1280.jpg",
      award: "Service Excellence"
    }
  ];

  const filters = [
    { value: 'all', label: 'All Categories', icon: 'Award' },
    { value: 'academic', label: 'Academic', icon: 'BookOpen' },
    { value: 'sports', label: 'Sports', icon: 'Trophy' },
    { value: 'arts', label: 'Arts', icon: 'Palette' },
    { value: 'technology', label: 'Technology', icon: 'Monitor' },
    { value: 'community', label: 'Community', icon: 'Users' }
  ];

  const years = ['2024', '2023', '2022'];

  const filteredAchievements = achievements.filter(achievement => {
    const matchesCategory = selectedFilter === 'all' || achievement.category === selectedFilter;
    const matchesYear = achievement.year === selectedYear;
    return matchesCategory && matchesYear;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Student Achievements</h2>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Year Filter */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => setSelectedFilter(filter.value)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              selectedFilter === filter.value
                ? 'bg-blue-500 text-white' :'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon name={filter.icon} size={16} />
            <span className="text-sm font-medium">{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAchievements.map(achievement => (
          <div key={achievement.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="relative h-48">
              <Image
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                {achievement.award}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} color="white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{achievement.student}</p>
                  <p className="text-xs text-gray-500">{achievement.grade}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{achievement.date}</span>
                </div>
                <span className="capitalize bg-gray-100 px-2 py-1 rounded">
                  {achievement.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAchievements.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Award" size={48} color="currentColor" className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500">No achievements found for the selected filters.</p>
        </div>
      )}
    </div>
  );
};

export default StudentAchievements;