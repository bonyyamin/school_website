import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import WelcomeMessage from './components/WelcomeMessage';
import AnnouncementsCarousel from './components/AnnouncementsCarousel';
import StatsCards from './components/StatsCards';
import FeaturedPrograms from './components/FeaturedPrograms';
import LocationMap from './components/LocationMap';
import RecentNews from './components/RecentNews';
import SocialMediaFeed from './components/SocialMediaFeed';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Welcome Message */}
      <WelcomeMessage />
      
      {/* Announcements Carousel */}
      <AnnouncementsCarousel />
      
      {/* Stats Cards */}
      <StatsCards />
      
      {/* Featured Programs */}
      <FeaturedPrograms />
      
      {/* Location Map */}
      <LocationMap />
      
      {/* Recent News */}
      <RecentNews />
      
      {/* Social Media Feed */}
      <SocialMediaFeed />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;