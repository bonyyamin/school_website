import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecentNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Oakwood Academy Students Win State Science Competition",
      excerpt: "Our robotics team secured first place in the state-wide STEM competition, showcasing innovative solutions to real-world problems.",
      image: "https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg",
      category: "Academics",
      date: "2024-03-15",
      author: "Dr. Michael Chen",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 2,
      title: "New Arts Wing Opens with Grand Celebration",
      excerpt: "The state-of-the-art arts facility features professional studios, a black box theater, and digital media production suites.",
      image: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg",
      category: "Campus News",
      date: "2024-03-12",
      author: "Sarah Williams",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 3,
      title: "Student Athletes Receive College Scholarships",
      excerpt: "Fifteen senior athletes have been awarded full scholarships to Division I universities across the country.",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
      category: "Athletics",
      date: "2024-03-10",
      author: "Coach Robert Martinez",
      readTime: "2 min read",
      featured: false
    },
    {
      id: 4,
      title: "International Exchange Program Expands",
      excerpt: "New partnerships with schools in Japan, Germany, and Australia offer students unprecedented global learning opportunities.",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
      category: "Global Programs",
      date: "2024-03-08",
      author: "Ms. Elena Rodriguez",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 5,
      title: "Environmental Club Launches Sustainability Initiative",
      excerpt: "Students lead campus-wide recycling program and install solar panels, reducing school's carbon footprint by 30%.",
      image: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg",
      category: "Student Life",
      date: "2024-03-05",
      author: "Green Team",
      readTime: "3 min read",
      featured: false
    },
    {
      id: 6,
      title: "Alumni Success: Tech Entrepreneur Returns as Guest Speaker",
      excerpt: "Class of 2015 graduate shares journey from Oakwood Academy to founding a successful tech startup valued at $50M.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      category: "Alumni",
      date: "2024-03-03",
      author: "Alumni Relations",
      readTime: "4 min read",
      featured: false
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Academics': 'bg-blue-100 text-blue-800',
      'Campus News': 'bg-green-100 text-green-800',
      'Athletics': 'bg-orange-100 text-orange-800',
      'Global Programs': 'bg-purple-100 text-purple-800',
      'Student Life': 'bg-yellow-100 text-yellow-800',
      'Alumni': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-lg text-gray-600">
            Stay informed about the latest happenings in our school community
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(featuredArticle.category)}`}>
                      FEATURED
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(featuredArticle.category)}`}>
                      {featuredArticle.category}
                    </span>
                    <span className="text-sm text-gray-500">{featuredArticle.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} color="#6b7280" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{featuredArticle.author}</p>
                        <p className="text-xs text-gray-500">{formatDate(featuredArticle.date)}</p>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.slice(0, 6).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                      <Icon name="User" size={12} color="#6b7280" />
                    </div>
                    <span className="text-xs text-gray-600">{article.author}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    Read More
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            View All News & Events
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;