import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialMediaFeed = () => {
  const socialPosts = [
    {
      id: 1,
      platform: "instagram",
      username: "@oakwoodacademy",
      content: "Congratulations to our debate team for winning the regional championship! 🏆 #OakwoodPride #DebateChampions",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
      likes: 234,
      comments: 18,
      timestamp: "2 hours ago",
      verified: true
    },
    {
      id: 2,
      platform: "twitter",
      username: "@OakwoodAcademy",
      content: "Our students are making a difference! The Environmental Club's sustainability project has reduced our campus carbon footprint by 30%. 🌱 #GoGreen #Sustainability",
      image: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg",
      likes: 156,
      comments: 12,
      retweets: 45,
      timestamp: "4 hours ago",
      verified: true
    },
    {
      id: 3,
      platform: "facebook",
      username: "Oakwood Academy",
      content: "Thank you to all the families who attended our Spring Arts Showcase! The talent displayed by our students was truly remarkable. 🎭🎨",
      image: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg",
      likes: 189,
      comments: 24,
      shares: 15,
      timestamp: "6 hours ago",
      verified: true
    },
    {
      id: 4,
      platform: "instagram",
      username: "@oakwoodacademy",
      content: "Science Fair 2024 was a huge success! Our young scientists presented innovative projects that could change the world. 🔬⚗️ #ScienceFair #Innovation",
      image: "https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg",
      likes: 298,
      comments: 31,
      timestamp: "1 day ago",
      verified: true
    }
  ];

  const getPlatformIcon = (platform) => {
    const icons = {
      instagram: "Instagram",
      twitter: "Twitter", 
      facebook: "Facebook"
    };
    return icons[platform] || "Share";
  };

  const getPlatformColor = (platform) => {
    const colors = {
      instagram: "text-pink-600",
      twitter: "text-blue-400",
      facebook: "text-blue-600"
    };
    return colors[platform] || "text-gray-600";
  };

  const formatEngagement = (platform, post) => {
    switch (platform) {
      case 'instagram':
        return `${post.likes} likes • ${post.comments} comments`;
      case 'twitter':
        return `${post.likes} likes • ${post.retweets} retweets • ${post.comments} replies`;
      case 'facebook':
        return `${post.likes} likes • ${post.comments} comments • ${post.shares} shares`;
      default:
        return `${post.likes} likes • ${post.comments} comments`;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Our Journey</h2>
          <p className="text-lg text-gray-600 mb-6">
            Stay connected with our school community through social media
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors">
              <Icon name="Instagram" size={24} />
              <span className="font-medium">Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition-colors">
              <Icon name="Twitter" size={24} />
              <span className="font-medium">Twitter</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <Icon name="Facebook" size={24} />
              <span className="font-medium">Facebook</span>
            </a>
          </div>
        </div>

        {/* Social Media Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Post Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getPlatformColor(post.platform)} bg-gray-100`}>
                      <Icon name={getPlatformIcon(post.platform)} size={20} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold text-gray-900">{post.username}</span>
                        {post.verified && (
                          <Icon name="CheckCircle" size={16} color="#3b82f6" />
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{post.timestamp}</span>
                    </div>
                  </div>
                  
                  <button className="text-gray-400 hover:text-gray-600">
                    <Icon name="MoreHorizontal" size={20} />
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4">
                <p className="text-gray-800 mb-4 leading-relaxed">
                  {post.content}
                </p>
                
                {post.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt="Social media post"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Post Engagement */}
              <div className="px-4 py-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {formatEngagement(post.platform, post)}
                  </span>
                  
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                      <Icon name="Heart" size={16} />
                      <span className="text-sm">Like</span>
                    </button>
                    
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">Comment</span>
                    </button>
                    
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors">
                      <Icon name="Share" size={16} />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Online Community</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Follow us on social media to stay updated with daily activities, student achievements, and important announcements from Oakwood Academy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Icon name="Instagram" size={20} className="mr-2" />
                Follow on Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Icon name="Twitter" size={20} className="mr-2" />
                Follow on Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaFeed;