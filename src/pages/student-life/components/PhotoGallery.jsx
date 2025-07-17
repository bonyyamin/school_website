import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Science Fair 2024",
      category: "academic",
      type: "image",
      src: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      date: "March 2024",
      description: "Students presenting their innovative science projects at the annual science fair."
    },
    {
      id: 2,
      title: "Basketball Championship",
      category: "sports",
      type: "image",
      src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      date: "February 2024",
      description: "Our basketball team celebrating their regional championship victory."
    },
    {
      id: 3,
      title: "Drama Performance",
      category: "arts",
      type: "image",
      src: "https://images.pixabay.com/photos/2016/11/23/15/48/audience-1853662_1280.jpg",
      date: "April 2024",
      description: "Students performing in the spring theatrical production of Romeo and Juliet."
    },
    {
      id: 4,
      title: "Robotics Competition",
      category: "technology",
      type: "image",
      src: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      date: "May 2024",
      description: "Robotics team competing in the regional championship with their innovative robot design."
    },
    {
      id: 5,
      title: "Art Exhibition Opening",
      category: "arts",
      type: "image",
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      date: "January 2024",
      description: "Opening night of the student art exhibition featuring works from all grade levels."
    },
    {
      id: 6,
      title: "Soccer Tournament",
      category: "sports",
      type: "image",
      src: "https://images.pixabay.com/photos/2016/06/03/17/35/football-1433571_1280.jpg",
      date: "March 2024",
      description: "Intense moments from the inter-school soccer tournament finals."
    },
    {
      id: 7,
      title: "Music Concert",
      category: "arts",
      type: "image",
      src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      date: "December 2023",
      description: "Annual winter concert featuring our school orchestra and choir."
    },
    {
      id: 8,
      title: "Graduation Ceremony",
      category: "events",
      type: "image",
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      date: "June 2024",
      description: "Celebrating our graduating class of 2024 and their achievements."
    },
    {
      id: 9,
      title: "Chemistry Lab Session",
      category: "academic",
      type: "image",
      src: "https://images.pixabay.com/photos/2017/09/07/08/54/money-2724241_1280.jpg",
      date: "February 2024",
      description: "Students conducting experiments in our state-of-the-art chemistry laboratory."
    }
  ];

  const categories = [
    { value: 'all', label: 'All Photos', icon: 'Image' },
    { value: 'academic', label: 'Academic', icon: 'BookOpen' },
    { value: 'sports', label: 'Sports', icon: 'Trophy' },
    { value: 'arts', label: 'Arts', icon: 'Palette' },
    { value: 'technology', label: 'Technology', icon: 'Monitor' },
    { value: 'events', label: 'Events', icon: 'Calendar' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item) => {
    setLightboxImage(item);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setLightboxImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxImage(filteredItems[prevIndex]);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Photo & Video Gallery</h2>
      
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              selectedCategory === category.value
                ? 'bg-blue-500 text-white' :'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span className="text-sm font-medium">{category.label}</span>
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => openLightbox(item)}
          >
            <div className="aspect-w-4 aspect-h-3 relative">
              <Image
                src={item.src}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ZoomIn" size={32} color="white" />
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium capitalize">
                {item.category}
              </div>
            </div>
            
            <div className="p-3">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200 z-10"
            >
              <Icon name="X" size={24} color="white" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
            >
              <Icon name="ChevronLeft" size={24} color="white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
            >
              <Icon name="ChevronRight" size={24} color="white" />
            </button>
            
            {/* Image */}
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-w-full max-h-[80vh] object-contain"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <h3 className="text-lg font-semibold mb-1">{lightboxImage.title}</h3>
              <p className="text-sm opacity-90 mb-2">{lightboxImage.description}</p>
              <p className="text-xs opacity-70">{lightboxImage.date}</p>
            </div>
          </div>
        </div>
      )}

      {/* Social Media Integration */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Share Our Moments</h3>
        <p className="text-gray-600 mb-4">
          Follow us on social media to see more photos and videos from our school community!
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Icon name="Facebook" size={16} />
            <span>Facebook</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200"
          >
            <Icon name="Instagram" size={16} />
            <span>Instagram</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200"
          >
            <Icon name="Twitter" size={16} />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;