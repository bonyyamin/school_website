import React from 'react';
import Icon from 'components/AppIcon';

const AcademicAchievements = () => {
  const achievements = [
    {
      id: 1,
      title: "National Blue Ribbon School",
      description: "Recognized by the U.S. Department of Education for academic excellence",
      icon: "Award",
      color: "blue"
    },
    {
      id: 2,
      title: "98% College Acceptance Rate",
      description: "Our graduates consistently gain admission to top universities",
      icon: "GraduationCap",
      color: "green"
    },
    {
      id: 3,
      title: "Average SAT Score: 1,420",
      description: "Significantly above national and state averages",
      icon: "TrendingUp",
      color: "purple"
    },
    {
      id: 4,
      title: "$3.2M in Scholarships",
      description: "Total scholarships earned by Class of 2024",
      icon: "DollarSign",
      color: "amber"
    }
  ];

  const testScores = [
    { test: "SAT Average", score: "1,420", national: "1,060", improvement: "+360" },
    { test: "ACT Average", score: "32", national: "21", improvement: "+11" },
    { test: "AP Pass Rate", score: "94%", national: "60%", improvement: "+34%" },
    { test: "State Assessment", score: "Advanced: 89%", national: "Advanced: 40%", improvement: "+49%" }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      purple: 'bg-purple-100 text-purple-800',
      amber: 'bg-amber-100 text-amber-800'
    };
    return colors[color] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="mb-8">
      {/* Achievement Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg p-8 mb-8 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Academic Excellence</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Our commitment to academic excellence is reflected in our students' outstanding achievements and recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={achievement.icon} size={24} color="white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
              <p className="text-blue-100 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Test Scores Comparison */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900">Academic Performance</h3>
          <div className="flex items-center space-x-2">
            <Icon name="BarChart3" size={20} color="rgb(30, 58, 138)" />
            <span className="text-sm text-slate-600">Compared to National Averages</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testScores.map((score, index) => (
            <div key={index} className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900">{score.test}</h4>
                <span className="text-green-600 font-medium text-sm">{score.improvement}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Our School</span>
                  <span className="font-bold text-blue-800">{score.score}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">National Average</span>
                  <span className="text-slate-500">{score.national}</span>
                </div>
              </div>
              
              <div className="mt-3 bg-slate-100 rounded-full h-2">
                <div className="bg-blue-800 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-900">156</div>
              <div className="text-sm text-slate-600">National Merit Scholars</div>
              <div className="text-xs text-green-600 mt-1">Last 5 years</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">89%</div>
              <div className="text-sm text-slate-600">4-Year College Enrollment</div>
              <div className="text-xs text-green-600 mt-1">Class of 2024</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">Top 10%</div>
              <div className="text-sm text-slate-600">State Ranking</div>
              <div className="text-xs text-green-600 mt-1">Academic Performance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicAchievements;