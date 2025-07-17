import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      date: "2025-07-20",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      type: "meeting",
      registrationRequired: true,
      spotsAvailable: 45
    },
    {
      id: 2,
      title: "Summer Sports Camp",
      date: "2025-07-22",
      time: "8:00 AM - 12:00 PM",
      location: "Athletic Complex",
      type: "athletics",
      registrationRequired: true,
      spotsAvailable: 12
    },
    {
      id: 3,
      title: "Science Exhibition",
      date: "2025-07-25",
      time: "10:00 AM - 4:00 PM",
      location: "Science Building",
      type: "academics",
      registrationRequired: false,
      spotsAvailable: null
    },
    {
      id: 4,
      title: "Art Gallery Opening",
      date: "2025-07-28",
      time: "6:00 PM - 8:00 PM",
      location: "Arts Center",
      type: "arts",
      registrationRequired: false,
      spotsAvailable: null
    },
    {
      id: 5,
      title: "New Student Orientation",
      date: "2025-08-01",
      time: "9:00 AM - 3:00 PM",
      location: "Main Campus",
      type: "orientation",
      registrationRequired: true,
      spotsAvailable: 8
    }
  ];

  const getEventTypeIcon = (type) => {
    const icons = {
      meeting: 'Users',
      athletics: 'Trophy',
      academics: 'BookOpen',
      arts: 'Palette',
      orientation: 'GraduationCap'
    };
    return icons[type] || 'Calendar';
  };

  const getEventTypeColor = (type) => {
    const colors = {
      meeting: 'text-blue-600 bg-blue-50',
      athletics: 'text-green-600 bg-green-50',
      academics: 'text-purple-600 bg-purple-50',
      arts: 'text-pink-600 bg-pink-50',
      orientation: 'text-orange-600 bg-orange-50'
    };
    return colors[type] || 'text-gray-600 bg-gray-50';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `In ${diffDays} days`;
    
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Icon name="Calendar" size={20} className="mr-2 text-blue-600" />
            Upcoming Events
          </h3>
          <Button variant="ghost" size="sm" iconName="ArrowRight">
            View All
          </Button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${getEventTypeColor(event.type)}`}>
                <Icon name={getEventTypeIcon(event.type)} size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">
                      {event.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                      <div className="flex items-center">
                        <Icon name="Calendar" size={14} className="mr-1" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    {event.registrationRequired && (
                      <div className="mb-2">
                        {event.spotsAvailable !== null && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            event.spotsAvailable < 20 
                              ? 'bg-red-100 text-red-800' :'bg-green-100 text-green-800'
                          }`}>
                            {event.spotsAvailable} spots left
                          </span>
                        )}
                      </div>
                    )}
                    <Button
                      variant={event.registrationRequired ? "default" : "outline"}
                      size="sm"
                      iconName={event.registrationRequired ? "UserPlus" : "Info"}
                      iconPosition="left"
                    >
                      {event.registrationRequired ? "Register" : "Learn More"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t bg-gray-50">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            Stay updated with all school events and activities
          </p>
          <Button variant="outline" iconName="Bell" iconPosition="left">
            Subscribe to Event Notifications
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;