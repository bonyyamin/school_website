import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    academics: false,
    athletics: false,
    arts: false,
    events: false,
    announcements: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setPreferences({
        academics: false,
        athletics: false,
        arts: false,
        events: false,
        announcements: false
      });
    }, 3000);
  };

  const handlePreferenceChange = (key, checked) => {
    setPreferences(prev => ({
      ...prev,
      [key]: checked
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name="CheckCircle" size={32} className="text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-blue-100">
          You've successfully subscribed to our newsletter. You'll receive updates based on your preferences.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name="Mail" size={24} className="text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
        <p className="text-blue-100">
          Subscribe to our newsletter and never miss important school updates, events, and announcements.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder-white/60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">
            What would you like to receive updates about?
          </label>
          <div className="space-y-3">
            <Checkbox
              label="Academic Programs & Curriculum"
              checked={preferences.academics}
              onChange={(e) => handlePreferenceChange('academics', e.target.checked)}
              className="text-white"
            />
            <Checkbox
              label="Athletics & Sports"
              checked={preferences.athletics}
              onChange={(e) => handlePreferenceChange('athletics', e.target.checked)}
              className="text-white"
            />
            <Checkbox
              label="Arts & Cultural Events"
              checked={preferences.arts}
              onChange={(e) => handlePreferenceChange('arts', e.target.checked)}
              className="text-white"
            />
            <Checkbox
              label="School Events & Activities"
              checked={preferences.events}
              onChange={(e) => handlePreferenceChange('events', e.target.checked)}
              className="text-white"
            />
            <Checkbox
              label="Important Announcements"
              checked={preferences.announcements}
              onChange={(e) => handlePreferenceChange('announcements', e.target.checked)}
              className="text-white"
            />
          </div>
        </div>

        <Button
          type="submit"
          variant="secondary"
          fullWidth
          loading={isLoading}
          disabled={!email || isLoading}
          iconName="Send"
          iconPosition="right"
          className="bg-white text-blue-600 hover:bg-gray-100"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-white/20">
        <div className="flex items-center justify-center space-x-4 text-sm text-blue-100">
          <div className="flex items-center">
            <Icon name="Shield" size={16} className="mr-1" />
            <span>Privacy Protected</span>
          </div>
          <div className="flex items-center">
            <Icon name="X" size={16} className="mr-1" />
            <span>Unsubscribe Anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;