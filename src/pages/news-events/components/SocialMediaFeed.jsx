import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialMediaFeed = () => {
  const socialPosts = [
    {
      id: 1,
      platform: 'twitter',
      author: 'Westfield High School',
      handle: '@WestfieldHigh',
      content: "Congratulations to our debate team for winning the regional championship! 🏆 Their hard work and dedication truly paid off. #WestfieldPride #DebateChampions",
      timestamp: "2025-07-16T14:30:00Z",
      likes: 124,
      shares: 18,
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      platform: 'facebook',
      author: 'Westfield High School',
      handle: 'WestfieldHighSchool',
      content: `Beautiful morning at our school garden! 🌱 Students from the Environmental Club have been working hard to maintain our sustainable garden project. Fresh vegetables will be donated to the local food bank.`,
      timestamp: "2025-07-16T09:15:00Z",
      likes: 89,
      shares: 12,
      image: "https://images.pixabay.com/photo/2016/08/11/23/48/vegetables-1587400_960_720.jpg"
    },
    {
      id: 3,
      platform: 'instagram',
      author: 'Westfield High School',
      handle: '@westfieldhigh',
      content: "Behind the scenes of our upcoming theater production! 🎭 Our talented drama students are putting the finishing touches on costumes and set design. Opening night is July 25th!",
      timestamp: "2025-07-15T16:45:00Z",
      likes: 156,
      shares: 23,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      platform: 'twitter',
      author: 'Westfield High School',
      handle: '@WestfieldHigh',
      content: "Reminder: Parent-Teacher conferences are scheduled for July 20th. Please check your email for your assigned time slot. Looking forward to discussing your child\'s progress! 📚",
      timestamp: "2025-07-15T11:20:00Z",
      likes: 67,
      shares: 34,
      image: null
    }
  ];

  const getPlatformIcon = (platform) => {
    const icons = {
      twitter: 'Twitter',
      facebook: 'Facebook',
      instagram: 'Instagram'
    };
    return icons[platform] || 'Share2';
  };

  const getPlatformColor = (platform) => {
    const colors = {
      twitter: 'text-blue-500',
      facebook: 'text-blue-600',
      instagram: 'text-pink-500'
    };
    return colors[platform] || 'text-gray-500';
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Icon name="Share2" size={20} className="mr-2 text-blue-600" />
            Social Media Updates
          </h3>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" iconName="Twitter" className="text-blue-500" />
            <Button variant="ghost" size="sm" iconName="Facebook" className="text-blue-600" />
            <Button variant="ghost" size="sm" iconName="Instagram" className="text-pink-500" />
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
        {socialPosts.map((post) => (
          <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-full bg-gray-100 ${getPlatformColor(post.platform)}`}>
                <Icon name={getPlatformIcon(post.platform)} size={16} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-medium text-gray-900">{post.author}</span>
                  <span className="text-sm text-gray-500">{post.handle}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{formatTimestamp(post.timestamp)}</span>
                </div>
                
                <p className="text-gray-700 mb-3 leading-relaxed">
                  {post.content}
                </p>
                
                {post.image && (
                  <div className="mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt="Social media post"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-red-500 transition-colors duration-200">
                    <Icon name="Heart" size={16} />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors duration-200">
                    <Icon name="Share" size={16} />
                    <span>{post.shares}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors duration-200">
                    <Icon name="ExternalLink" size={16} />
                    <span>View Post</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t bg-gray-50">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            Follow us on social media for daily updates and behind-the-scenes content
          </p>
          <div className="flex justify-center space-x-3">
            <Button variant="outline" size="sm" iconName="Twitter" className="text-blue-500">
              Follow
            </Button>
            <Button variant="outline" size="sm" iconName="Facebook" className="text-blue-600">
              Like
            </Button>
            <Button variant="outline" size="sm" iconName="Instagram" className="text-pink-500">
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFeed;