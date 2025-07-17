import React from 'react';
import Image from 'components/AppImage';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const LeadershipSection = ({ leaders, onViewProfile }) => {
  if (leaders.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">School Leadership</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet our dedicated leadership team committed to educational excellence and student success.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader) => (
          <div key={leader.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {leader.name}
              </h3>
              
              <p className="text-blue-600 font-medium mb-2">
                {leader.title}
              </p>
              
              <div className="text-sm text-gray-600 mb-4">
                <div className="flex items-center justify-center mb-2">
                  <Icon name="GraduationCap" size={16} className="mr-2" />
                  <span>{leader.education}</span>
                </div>
                
                <div className="flex items-center justify-center">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  <span>{leader.experience} years experience</span>
                </div>
              </div>
              
              {leader.biography && (
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  {leader.biography.length > 120 
                    ? `${leader.biography.substring(0, 120)}...` 
                    : leader.biography
                  }
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onViewProfile(leader)}
                  iconName="Eye"
                  iconPosition="left"
                >
                  View Profile
                </Button>
                
                {leader.email && (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => window.location.href = `mailto:${leader.email}`}
                    iconName="Mail"
                    iconPosition="left"
                  >
                    Contact
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipSection;