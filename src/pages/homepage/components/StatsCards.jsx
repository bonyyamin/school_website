import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsCards = () => {
  const stats = [
    {
      id: 1,
      title: "Total Enrollment",
      value: "1,247",
      description: "Students across all grades",
      icon: "Users",
      color: "bg-blue-500",
      trend: "+5.2%",
      trendUp: true
    },
    {
      id: 2,
      title: "Graduation Rate",
      value: "98.5%",
      description: "Class of 2023 success rate",
      icon: "GraduationCap",
      color: "bg-green-500",
      trend: "+2.1%",
      trendUp: true
    },
    {
      id: 3,
      title: "Student-Teacher Ratio",
      value: "12:1",
      description: "Personalized learning experience",
      icon: "BookOpen",
      color: "bg-purple-500",
      trend: "Optimal",
      trendUp: true
    },
    {
      id: 4,
      title: "College Acceptance",
      value: "94%",
      description: "Students accepted to top universities",
      icon: "Award",
      color: "bg-orange-500",
      trend: "+3.8%",
      trendUp: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the measurable success that defines our commitment to educational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon name={stat.icon} size={24} color="white" />
                </div>
                
                {/* Trend Indicator */}
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  stat.trendUp ? 'text-green-600' : 'text-red-600'
                }`}>
                  <Icon 
                    name={stat.trendUp ? "TrendingUp" : "TrendingDown"} 
                    size={16} 
                    color={stat.trendUp ? "#059669" : "#dc2626"} 
                  />
                  <span>{stat.trend}</span>
                </div>
              </div>

              {/* Stats Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  {stat.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>

              {/* Progress Bar (Visual Enhancement) */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${stat.color.replace('bg-', 'bg-').replace('-500', '-400')}`}
                    style={{ width: `${Math.random() * 40 + 60}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Academic Year 2023-2024 Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <span className="font-medium text-gray-900">National Merit Scholars:</span> 23 students
              </div>
              <div>
                <span className="font-medium text-gray-900">AP Courses Offered:</span> 28 subjects
              </div>
              <div>
                <span className="font-medium text-gray-900">Extracurricular Activities:</span> 45+ clubs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCards;