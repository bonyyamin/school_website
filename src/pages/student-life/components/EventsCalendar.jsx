import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const EventsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events = [
    {
      id: 1,
      title: "Basketball Championship Finals",
      date: "2024-07-20",
      time: "3:00 PM - 5:00 PM",
      location: "Main Gymnasium",
      type: "sports",
      description: "Final match of the inter-school basketball championship. Come support our team!"
    },
    {
      id: 2,
      title: "Science Fair Exhibition",
      date: "2024-07-22",
      time: "9:00 AM - 3:00 PM",
      location: "Science Building",
      type: "academic",
      description: "Annual science fair showcasing student research projects and innovations."
    },
    {
      id: 3,
      title: "Drama Club Performance",
      date: "2024-07-25",
      time: "7:00 PM - 9:00 PM",
      location: "School Auditorium",
      type: "arts",
      description: "Spring theatrical production of \'Romeo and Juliet\' by our drama club."
    },
    {
      id: 4,
      title: "Parent-Teacher Conference",
      date: "2024-07-28",
      time: "2:00 PM - 6:00 PM",
      location: "Various Classrooms",
      type: "academic",
      description: "Quarterly parent-teacher meetings to discuss student progress."
    },
    {
      id: 5,
      title: "Art Exhibition Opening",
      date: "2024-08-02",
      time: "6:00 PM - 8:00 PM",
      location: "Art Gallery",
      type: "arts",
      description: "Opening night for student art exhibition featuring works from all grade levels."
    },
    {
      id: 6,
      title: "Robotics Competition",
      date: "2024-08-05",
      time: "10:00 AM - 4:00 PM",
      location: "STEM Lab",
      type: "technology",
      description: "Regional robotics competition hosted by our school\'s robotics club."
    }
  ];

  const eventTypes = {
    sports: { color: 'bg-blue-500', icon: 'Trophy' },
    academic: { color: 'bg-green-500', icon: 'BookOpen' },
    arts: { color: 'bg-purple-500', icon: 'Palette' },
    technology: { color: 'bg-orange-500', icon: 'Monitor' }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getEventsForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };

  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Events Calendar</h2>
      
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upcoming Events List */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map(event => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-3">
                  <div className={`${eventTypes[event.type].color} p-2 rounded-lg flex-shrink-0`}>
                    <Icon name={eventTypes[event.type].icon} size={16} color="white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                    
                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={12} />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={12} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="MapPin" size={12} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar View */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Calendar View</h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h4>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Icon name="ChevronLeft" size={16} />
                </button>
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Icon name="ChevronRight" size={16} />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 font-medium text-gray-500">
                  {day}
                </div>
              ))}
              
              {/* Calendar Days */}
              {Array.from({ length: 35 }, (_, index) => {
                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), index - 6);
                const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
                const hasEvents = getEventsForDate(date).length > 0;
                const isToday = date.toDateString() === new Date().toDateString();
                
                return (
                  <div
                    key={index}
                    className={`p-2 cursor-pointer rounded transition-colors duration-200 ${
                      isCurrentMonth 
                        ? isToday 
                          ? 'bg-blue-500 text-white' 
                          : hasEvents 
                            ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' :'text-gray-900 hover:bg-gray-100' :'text-gray-400'
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    <div className="relative">
                      {date.getDate()}
                      {hasEvents && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Event Types Legend */}
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Event Types</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.entries(eventTypes).map(([type, config]) => (
                <div key={type} className="flex items-center space-x-2">
                  <div className={`${config.color} w-3 h-3 rounded`}></div>
                  <span className="capitalize text-gray-600">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;