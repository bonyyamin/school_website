import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our School Community
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover excellence in education. Start your journey with us today and unlock your child's potential in a nurturing, innovative learning environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="default" 
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3"
              iconName="FileText"
              iconPosition="left"
            >
              Start Application
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Tour
            </Button>
          </div>

          <div className="bg-amber-500 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 animate-pulse">
            <Icon name="Clock" size={20} />
            <span className="font-semibold">Application Deadline: March 15, 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;