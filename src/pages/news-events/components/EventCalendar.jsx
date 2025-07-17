import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 17)); // July 2025
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      date: "2025-07-20",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      type: "meeting",
      description: "Individual meetings with teachers to discuss student progress and academic performance."
    },
    {
      id: 2,
      title: "Summer Sports Camp",
      date: "2025-07-22",
      time: "8:00 AM - 12:00 PM",
      location: "Athletic Complex",
      type: "athletics",
      description: "Multi-sport summer camp for students grades 6-12 featuring basketball, soccer, and track events."
    },
    {
      id: 3,
      title: "Science Exhibition",
      date: "2025-07-25",
      time: "10:00 AM - 4:00 PM",
      location: "Science Building",
      type: "academics",
      description: "Annual science exhibition showcasing student projects and experiments from all grade levels."
    },
    {
      id: 4,
      title: "Art Gallery Opening",
      date: "2025-07-28",
      time: "6:00 PM - 8:00 PM",
      location: "Arts Center",
      type: "arts",
      description: "Opening night for student art exhibition featuring paintings, sculptures, and digital art."
    },
    {
      id: 5,
      title: "New Student Orientation",
      date: "2025-08-01",
      time: "9:00 AM - 3:00 PM",
      location: "Main Campus",
      type: "orientation",
      description: "Welcome orientation for new students and their families including campus tours and information sessions."
    }
  ];

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const getEventTypeColor = (type) => {
    const colors = {
      meeting: 'bg-blue-500',
      athletics: 'bg-green-500',
      academics: 'bg-purple-500',
      arts: 'bg-pink-500',
      orientation: 'bg-orange-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  const getEventsForDate = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDate(day);
      const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
      
      days.push(
        <div key={day} className={`h-24 border border-gray-200 p-1 ${isToday ? 'bg-blue-50' : 'bg-white'} hover:bg-gray-50 cursor-pointer`}>
          <div className={`text-sm font-medium ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
            {day}
          </div>
          <div className="mt-1 space-y-1">
            {dayEvents.slice(0, 2).map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`text-xs p-1 rounded text-white cursor-pointer hover:opacity-80 ${getEventTypeColor(event.type)}`}
              >
                {event.title.length > 15 ? `${event.title.substring(0, 15)}...` : event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500">+{dayEvents.length - 2} more</div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-900">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateMonth(-1)}
            iconName="ChevronLeft"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateMonth(1)}
            iconName="ChevronRight"
          />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-0 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="h-8 flex items-center justify-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-0 border border-gray-200">
          {renderCalendarDays()}
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">{selectedEvent.title}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedEvent(null)}
                iconName="X"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Icon name="Calendar" size={16} className="mr-2" />
                <span>{new Date(selectedEvent.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Icon name="Clock" size={16} className="mr-2" />
                <span>{selectedEvent.time}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Icon name="MapPin" size={16} className="mr-2" />
                <span>{selectedEvent.location}</span>
              </div>
              <p className="text-gray-700 mt-4">{selectedEvent.description}</p>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setSelectedEvent(null)}>
                Close
              </Button>
              <Button variant="default">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;