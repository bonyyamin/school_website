import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const AnnouncementsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const announcements = [
    {
      id: 1,
      title: "Spring Break Schedule",
      content: "Spring break will be from March 25-29, 2024. Classes resume on April 1st. Have a wonderful break!",
      date: "2024-03-15",
      priority: "high",
      icon: "Calendar"
    },
    {
      id: 2,
      title: "Science Fair Winners Announced",
      content: "Congratulations to our Science Fair winners! The awards ceremony will be held on March 22nd at 3:00 PM in the auditorium.",
      date: "2024-03-14",
      priority: "medium",
      icon: "Award"
    },
    {
      id: 3,
      title: "Parent-Teacher Conferences",
      content: "Parent-teacher conferences are scheduled for April 5-6. Please sign up for your preferred time slot through the parent portal.",
      date: "2024-03-13",
      priority: "high",
      icon: "Users"
    },
    {
      id: 4,
      title: "New Library Hours",
      content: "The library will now be open until 6:00 PM on weekdays to provide more study time for students.",
      date: "2024-03-12",
      priority: "low",
      icon: "BookOpen"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % announcements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Announcements</h2>
          <p className="text-lg text-gray-600">Stay updated with important school news and events</p>
        </div>

        <div className="relative bg-gray-50 rounded-lg p-6 shadow-lg">
          {/* Carousel Content */}
          <div className="min-h-[200px] flex items-center">
            <div className="w-full">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name={announcements[currentSlide].icon} size={24} color="#2563eb" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {announcements[currentSlide].title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(announcements[currentSlide].priority)}`}>
                      {announcements[currentSlide].priority.toUpperCase()}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {announcements[currentSlide].content}
                  </p>
                  
                  <p className="text-sm text-gray-500">
                    Posted on {new Date(announcements[currentSlide].date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <Icon name="ChevronLeft" size={20} color="#374151" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <Icon name="ChevronRight" size={20} color="#374151" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsCarousel;