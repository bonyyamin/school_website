import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const NewsCard = ({ news }) => {
  const getCategoryColor = (category) => {
    const colors = {
      academics: 'bg-blue-100 text-blue-800',
      athletics: 'bg-green-100 text-green-800',
      arts: 'bg-purple-100 text-purple-800',
      community: 'bg-orange-100 text-orange-800',
      announcements: 'bg-red-100 text-red-800'
    };
    return colors[category.toLowerCase()] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(news.category)}`}>
            {news.category}
          </span>
        </div>
        {news.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full flex items-center">
              <Icon name="Star" size={12} className="mr-1" />
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Icon name="Calendar" size={16} className="mr-2" />
          <span>{formatDate(news.date)}</span>
          <span className="mx-2">•</span>
          <Icon name="User" size={16} className="mr-2" />
          <span>{news.author}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {news.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {news.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {news.tags && news.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
          <Button variant="ghost" iconName="ArrowRight" iconPosition="right" className="text-blue-600 hover:text-blue-700">
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;