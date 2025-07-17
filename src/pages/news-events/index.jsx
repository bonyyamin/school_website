import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import FeaturedNewsCarousel from './components/FeaturedNewsCarousel';
import NewsFilters from './components/NewsFilters';
import NewsCard from './components/NewsCard';
import EventCalendar from './components/EventCalendar';
import UpcomingEvents from './components/UpcomingEvents';
import SocialMediaFeed from './components/SocialMediaFeed';
import NewsletterSignup from './components/NewsletterSignup';
import NewsArchive from './components/NewsArchive';

const NewsEventsPage = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [activeTab, setActiveTab] = useState('news');

  const navigationRoutes = [
    { path: '/homepage', label: 'Home', icon: 'Home' },
    { path: '/academics', label: 'Academics', icon: 'BookOpen' },
    { path: '/admissions', label: 'Admissions', icon: 'UserPlus' },
    { path: '/student-life', label: 'Student Life', icon: 'Users' },
    { path: '/faculty-staff', label: 'Faculty & Staff', icon: 'GraduationCap' },
    { path: '/news-events', label: 'News & Events', icon: 'Calendar' }
  ];

  const newsData = [
    {
      id: 1,
      title: "Annual Science Fair 2025 Winners Announced",
      excerpt: "Outstanding student projects showcase innovation in STEM fields with record-breaking participation from all grade levels.",
      image: "https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "academics",
      date: "2025-07-15",
      author: "Dr. Sarah Mitchell",
      featured: true,
      tags: ["science", "competition", "STEM"]
    },
    {
      id: 2,
      title: "New Athletic Complex Opens This Fall",
      excerpt: "State-of-the-art facilities include Olympic-sized pool, modern gymnasium, and outdoor track for enhanced student athletics.",
      image: "https://images.pixabay.com/photo/2016/11/29/06/15/swimming-pool-1867777_960_720.jpg",
      category: "athletics",
      date: "2025-07-14",
      author: "Coach Michael Johnson",
      featured: false,
      tags: ["facilities", "sports", "athletics"]
    },
    {
      id: 3,
      title: "Arts Department Wins Regional Competition",
      excerpt: "Drama club\'s production of \'Romeo and Juliet\' earns first place in state-wide high school theater competition.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      category: "arts",
      date: "2025-07-13",
      author: "Ms. Jennifer Adams",
      featured: false,
      tags: ["theater", "drama", "competition"]
    },
    {
      id: 4,
      title: "Community Service Day Success",
      excerpt: "Over 500 students participated in local community service projects, contributing 2,000 hours of volunteer work.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "community",
      date: "2025-07-12",
      author: "Ms. Lisa Chen",
      featured: false,
      tags: ["community", "service", "volunteer"]
    },
    {
      id: 5,
      title: "New Technology Integration Program",
      excerpt: "School introduces innovative technology program to enhance digital literacy and prepare students for future careers.",
      image: "https://images.pixabay.com/photo/2016/11/29/06/15/computer-1867758_960_720.jpg",
      category: "academics",
      date: "2025-07-11",
      author: "Dr. Robert Kim",
      featured: false,
      tags: ["technology", "digital", "innovation"]
    },
    {
      id: 6,
      title: "Spring Musical Auditions Open",
      excerpt: "Auditions for the spring musical production are now open to all students. Rehearsals begin in August.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
      category: "arts",
      date: "2025-07-10",
      author: "Mr. David Wilson",
      featured: false,
      tags: ["musical", "auditions", "theater"]
    }
  ];

  const filteredNews = newsData.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedNews = [...filteredNews].sort((a, b) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.date) - new Date(b.date);
      case 'title':
        return a.title.localeCompare(b.title);
      case 'newest':
      default:
        return new Date(b.date) - new Date(a.date);
    }
  });

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setSortBy('newest');
  };

  useEffect(() => {
    document.title = 'News & Events - Westfield High School';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/homepage" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Westfield High</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-1">
                {navigationRoutes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`nav-item ${location.pathname === route.path ? 'active' : ''}`}
                  >
                    <Icon name={route.icon} size={16} className="mr-2" />
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest happenings, achievements, and upcoming events at Westfield High School
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured News Carousel */}
        <FeaturedNewsCarousel />

        {/* Content Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('news')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'news' ?'border-blue-500 text-blue-600' :'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon name="Newspaper" size={16} className="mr-2 inline" />
                Latest News
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'events' ?'border-blue-500 text-blue-600' :'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon name="Calendar" size={16} className="mr-2 inline" />
                Events Calendar
              </button>
              <button
                onClick={() => setActiveTab('archive')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'archive' ?'border-blue-500 text-blue-600' :'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon name="Archive" size={16} className="mr-2 inline" />
                News Archive
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <NewsFilters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sortBy={sortBy}
                setSortBy={setSortBy}
                onClearFilters={handleClearFilters}
              />

              {/* News Grid */}
              {sortedNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sortedNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No news found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <UpcomingEvents />
              <SocialMediaFeed />
              <NewsletterSignup />
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <EventCalendar />
            </div>
            <div className="space-y-8">
              <UpcomingEvents />
              <NewsletterSignup />
            </div>
          </div>
        )}

        {activeTab === 'archive' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <NewsArchive />
            </div>
            <div className="space-y-8">
              <UpcomingEvents />
              <SocialMediaFeed />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">Westfield High School</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering students to achieve excellence in academics, athletics, and character development since 1952.
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Youtube" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/academics" className="text-gray-400 hover:text-white">Academics</Link></li>
                <li><Link to="/admissions" className="text-gray-400 hover:text-white">Admissions</Link></li>
                <li><Link to="/student-life" className="text-gray-400 hover:text-white">Student Life</Link></li>
                <li><Link to="/faculty-staff" className="text-gray-400 hover:text-white">Faculty & Staff</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Education Street</p>
                <p>Westfield, NY 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@westfieldhigh.edu</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Westfield High School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsEventsPage;