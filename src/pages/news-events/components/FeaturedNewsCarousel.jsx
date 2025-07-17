import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedNewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredNews = [
    {
      id: 1,
      title: "Annual Science Fair 2025 Winners Announced",
      excerpt: "Outstanding student projects showcase innovation in STEM fields with record-breaking participation from all grade levels.",
      image: "https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Academics",
      date: "2025-07-15",
      author: "Dr. Sarah Mitchell",
      featured: true
    },
    {
      id: 2,
      title: "New Athletic Complex Opens This Fall",
      excerpt: "State-of-the-art facilities include Olympic-sized pool, modern gymnasium, and outdoor track for enhanced student athletics.",
      image: "https://images.pixabay.com/photo/2016/11/29/06/15/swimming-pool-1867777_960_720.jpg",
      category: "Athletics",
      date: "2025-07-14",
      author: "Coach Michael Johnson",
      featured: true
    },
    {
      id: 3,
      title: "Arts Department Wins Regional Competition",
      excerpt: "Drama club\'s production of \'Romeo and Juliet\' earns first place in state-wide high school theater competition.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      category: "Arts",
      date: "2025-07-13",
      author: "Ms. Jennifer Adams",
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredNews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="relative h-96 md:h-[500px]">
        {featuredNews.map((news, index) => (
          <div
            key={news.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <Image
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <div className="max-w-4xl">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-sm font-medium rounded-full mb-3">
                    {news.category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
                    {news.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <span>By {news.author}</span>
                      <span>•</span>
                      <span>{new Date(news.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200"
        aria-label="Previous slide"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200"
        aria-label="Next slide"
      >
        <Icon name="ChevronRight" size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredNews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedNewsCarousel;