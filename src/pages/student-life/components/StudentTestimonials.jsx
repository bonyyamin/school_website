import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StudentTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Emma Johnson",
      grade: "Grade 12",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9e0e4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: `The extracurricular activities at our school have been incredible! Being part of the robotics club has not only taught me technical skills but also teamwork and problem-solving. The teachers are so supportive and always encourage us to push our boundaries.`,
      activity: "Robotics Club President",
      achievement: "State Robotics Champion 2024"
    },
    {
      id: 2,
      name: "Marcus Williams",
      grade: "Grade 11",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: `Playing basketball for our school has been the highlight of my high school experience. The coaching staff is amazing, and the team feels like a family. We've learned so much about discipline, leadership, and never giving up, both on and off the court.`,
      activity: "Basketball Team Captain",
      achievement: "Regional Championship MVP"
    },
    {
      id: 3,
      name: "Sophia Chen",
      grade: "Grade 10",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: `The art program here is phenomenal! I've been able to explore different mediums and express my creativity in ways I never thought possible. The art teachers are incredibly talented and have helped me develop my own unique style.`,
      activity: "Art Club Member",
      achievement: "National Art Competition Finalist"
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      grade: "Grade 12",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: `The debate team has transformed me into a confident speaker and critical thinker. The research skills I've developed and the friendships I've made will last a lifetime. Our school provides so many opportunities to grow and discover your passions.`,
      activity: "Debate Team Vice President",
      achievement: "State Debate Tournament Winner"
    },
    {
      id: 5,
      name: "Isabella Martinez",
      grade: "Grade 11",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: `Being part of the drama club has been life-changing! The productions we put on are professional quality, and the experience has given me confidence and stage presence. The supportive environment helps everyone shine, regardless of their experience level.`,
      activity: "Drama Club Lead Actress",
      achievement: "Best Actress - Regional Theater Festival"
    },
    {
      id: 6,
      name: "David Thompson",
      grade: "Grade 10",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: `The community service opportunities at our school have opened my eyes to the importance of giving back. Through various volunteer programs, I've learned empathy, leadership, and the value of making a positive impact in our community.`,
      activity: "Community Service Coordinator",
      achievement: "Outstanding Community Service Award"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentStudent = testimonials[currentTestimonial];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Testimonials</h2>
      
      {/* Main Testimonial Display */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Student Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src={currentStudent.image}
                alt={currentStudent.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-2">
                <Icon name="Quote" size={16} />
              </div>
            </div>
          </div>
          
          {/* Testimonial Content */}
          <div className="flex-1 text-center md:text-left">
            <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4 leading-relaxed">
              "{currentStudent.quote}"
            </blockquote>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">{currentStudent.name}</h3>
              <p className="text-blue-600 font-medium">{currentStudent.grade}</p>
              <p className="text-gray-600">{currentStudent.activity}</p>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-green-600">
                <Icon name="Award" size={16} />
                <span>{currentStudent.achievement}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
          aria-label="Previous testimonial"
        >
          <Icon name="ChevronLeft" size={20} color="currentColor" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
          aria-label="Next testimonial"
        >
          <Icon name="ChevronRight" size={20} color="currentColor" />
        </button>
      </div>
      
      {/* Testimonial Indicators */}
      <div className="flex justify-center space-x-2 mb-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      {/* All Testimonials Grid */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">All Student Voices</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((student, index) => (
            <div
              key={student.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                index === currentTestimonial
                  ? 'border-blue-500 bg-blue-50' :'border-gray-200 hover:border-gray-300 hover:shadow-sm'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src={student.image}
                  alt={student.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{student.name}</h4>
                  <p className="text-xs text-gray-500">{student.grade}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 line-clamp-3 mb-2">
                "{student.quote.substring(0, 100)}..."
              </p>
              
              <div className="flex items-center space-x-1 text-xs text-blue-600">
                <Icon name="Award" size={12} />
                <span className="truncate">{student.achievement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Share Your Story</h3>
        <p className="text-gray-600 mb-4">
          Are you a current student with an inspiring story to share? We'd love to hear about your experiences!
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
          Submit Your Testimonial
        </button>
      </div>
    </div>
  );
};

export default StudentTestimonials;