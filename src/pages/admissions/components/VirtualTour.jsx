import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const VirtualTour = () => {
  const [selectedLocation, setSelectedLocation] = useState('main-entrance');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const tourLocations = [
    {
      id: 'main-entrance',
      name: 'Main Entrance',
      description: 'Welcome to our beautiful campus with modern architecture and landscaped grounds.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
      highlights: ['Reception Area', 'Administrative Offices', 'Visitor Parking', 'Security Desk']
    },
    {
      id: 'library',
      name: 'Library & Media Center',
      description: 'State-of-the-art library with over 50,000 books and digital resources.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      highlights: ['Reading Areas', 'Computer Lab', 'Study Rooms', 'Multimedia Resources']
    },
    {
      id: 'classrooms',
      name: 'Modern Classrooms',
      description: 'Interactive learning spaces equipped with smart boards and modern technology.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
      highlights: ['Smart Boards', 'Flexible Seating', 'Natural Lighting', 'Air Conditioning']
    },
    {
      id: 'science-lab',
      name: 'Science Laboratories',
      description: 'Fully equipped labs for chemistry, physics, and biology experiments.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
      highlights: ['Safety Equipment', 'Modern Instruments', 'Experiment Stations', 'Chemical Storage']
    },
    {
      id: 'gymnasium',
      name: 'Gymnasium & Sports',
      description: 'Multi-purpose gymnasium for sports, assemblies, and physical education.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      highlights: ['Basketball Court', 'Volleyball Net', 'Bleacher Seating', 'Equipment Storage']
    },
    {
      id: 'cafeteria',
      name: 'Cafeteria',
      description: 'Spacious dining area serving nutritious meals prepared by our culinary team.',
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop',
      highlights: ['Healthy Menu Options', 'Seating for 300', 'Kitchen Facilities', 'Outdoor Seating']
    },
    {
      id: 'playground',
      name: 'Playground & Outdoor Areas',
      description: 'Safe and fun outdoor spaces for recreation and physical activities.',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop',
      highlights: ['Play Equipment', 'Sports Fields', 'Garden Areas', 'Shaded Seating']
    },
    {
      id: 'arts-room',
      name: 'Arts & Music Room',
      description: 'Creative spaces for visual arts, music, and performing arts programs.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      highlights: ['Art Supplies', 'Musical Instruments', 'Performance Stage', 'Display Areas']
    }
  ];

  const currentLocation = tourLocations.find(loc => loc.id === selectedLocation);

  const handleLocationChange = (locationId) => {
    setSelectedLocation(locationId);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Virtual Campus Tour
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our campus from the comfort of your home with our interactive virtual tour
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Location Navigation */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tour Locations</h3>
            <div className="space-y-2">
              {tourLocations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleLocationChange(location.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    selectedLocation === location.id
                      ? 'bg-blue-800 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="font-medium">{location.name}</div>
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <Icon name="Info" size={16} className="mr-2" />
                Tour Tips
              </h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Click on different locations to explore</li>
                <li>• Use fullscreen mode for better viewing</li>
                <li>• Take note of facility highlights</li>
                <li>• Schedule an in-person visit</li>
              </ul>
            </div>
          </div>

          {/* Main Tour Viewer */}
          <div className="lg:col-span-3">
            <div className={`bg-gray-100 rounded-lg overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
              {/* Tour Controls */}
              <div className="bg-white p-4 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{currentLocation.name}</h3>
                  <p className="text-sm text-gray-600">{currentLocation.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleFullscreen}
                    iconName={isFullscreen ? "Minimize2" : "Maximize2"}
                    iconPosition="left"
                  >
                    {isFullscreen ? 'Exit' : 'Fullscreen'}
                  </Button>
                </div>
              </div>

              {/* Virtual Tour Image */}
              <div className={`relative ${isFullscreen ? 'h-screen' : 'h-96 md:h-[500px]'}`}>
                <Image
                  src={currentLocation.image}
                  alt={currentLocation.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Interactive Hotspots */}
                <div className="absolute inset-0">
                  {/* Example hotspots - in a real implementation, these would be positioned based on the 360° view */}
                  <button className="absolute top-1/4 left-1/3 w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform">
                    <span className="sr-only">Interactive point</span>
                  </button>
                  <button className="absolute top-1/2 right-1/4 w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform">
                    <span className="sr-only">Interactive point</span>
                  </button>
                  <button className="absolute bottom-1/3 left-1/2 w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform">
                    <span className="sr-only">Interactive point</span>
                  </button>
                </div>

                {/* Navigation Arrows */}
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  onClick={() => {
                    const currentIndex = tourLocations.findIndex(loc => loc.id === selectedLocation);
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : tourLocations.length - 1;
                    setSelectedLocation(tourLocations[prevIndex].id);
                  }}
                >
                  <Icon name="ChevronLeft" size={24} />
                </button>
                
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  onClick={() => {
                    const currentIndex = tourLocations.findIndex(loc => loc.id === selectedLocation);
                    const nextIndex = currentIndex < tourLocations.length - 1 ? currentIndex + 1 : 0;
                    setSelectedLocation(tourLocations[nextIndex].id);
                  }}
                >
                  <Icon name="ChevronRight" size={24} />
                </button>
              </div>

              {/* Location Highlights */}
              <div className="bg-white p-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Facility Highlights</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {currentLocation.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <Icon name="Check" size={16} className="mr-2 text-green-500 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tour Actions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="bg-blue-800 hover:bg-blue-900"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule In-Person Visit
              </Button>
              
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
              >
                Download Campus Map
              </Button>
              
              <Button
                variant="outline"
                iconName="Share"
                iconPosition="left"
              >
                Share Virtual Tour
              </Button>
            </div>

            {/* Additional Information */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Icon name="MapPin" size={18} className="mr-2 text-blue-600" />
                  Campus Information
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• 15-acre campus with modern facilities</p>
                  <p>• Capacity for 800 students</p>
                  <p>• Established in 1985</p>
                  <p>• LEED-certified green building</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Icon name="Clock" size={18} className="mr-2 text-blue-600" />
                  Visit Information
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Tours available Monday-Friday</p>
                  <p>• 9:00 AM - 3:00 PM</p>
                  <p>• Duration: 45-60 minutes</p>
                  <p>• Advance booking required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;