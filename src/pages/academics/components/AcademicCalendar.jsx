import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const AcademicCalendar = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const calendarEvents = [
    {
      id: 1,
      title: "First Day of School",
      date: "2024-08-26",
      type: "semester",
      description: "Welcome back students! School begins at 8:00 AM."
    },
    {
      id: 2,
      title: "Labor Day Holiday",
      date: "2024-09-02",
      type: "holiday",
      description: "No school - Labor Day holiday."
    },
    {
      id: 3,
      title: "Parent-Teacher Conferences",
      date: "2024-09-15",
      type: "event",
      description: "Evening conferences from 4:00 PM - 8:00 PM."
    },
    {
      id: 4,
      title: "Fall Break",
      date: "2024-10-14",
      type: "holiday",
      description: "Fall break begins - classes resume October 21st."
    },
    {
      id: 5,
      title: "Mid-Term Exams",
      date: "2024-10-28",
      type: "exam",
      description: "Mid-term examination period begins."
    },
    {
      id: 6,
      title: "Thanksgiving Break",
      date: "2024-11-25",
      type: "holiday",
      description: "Thanksgiving holiday - classes resume December 2nd."
    },
    {
      id: 7,
      title: "Winter Concert",
      date: "2024-12-10",
      type: "event",
      description: "Annual winter concert at 7:00 PM in the auditorium."
    },
    {
      id: 8,
      title: "Final Exams",
      date: "2024-12-16",
      type: "exam",
      description: "Final examination period begins."
    },
    {
      id: 9,
      title: "Winter Break",
      date: "2024-12-23",
      type: "holiday",
      description: "Winter break begins - classes resume January 8th."
    },
    {
      id: 10,
      title: "Spring Semester Begins",
      date: "2025-01-08",
      type: "semester",
      description: "Welcome back! Spring semester begins."
    }
  ];

  const filters = [
    { id: 'all', label: 'All Events', icon: 'Calendar' },
    { id: 'semester', label: 'Semester', icon: 'BookOpen' },
    { id: 'exam', label: 'Exams', icon: 'FileText' },
    { id: 'holiday', label: 'Holidays', icon: 'Sun' },
    { id: 'event', label: 'Events', icon: 'Star' }
  ];

  const getEventTypeColor = (type) => {
    const colors = {
      semester: 'bg-blue-100 text-blue-800 border-blue-200',
      exam: 'bg-red-100 text-red-800 border-red-200',
      holiday: 'bg-green-100 text-green-800 border-green-200',
      event: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const filteredEvents = selectedFilter === 'all' 
    ? calendarEvents 
    : calendarEvents.filter(event => event.type === selectedFilter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Academic Calendar</h2>
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={20} color="rgb(30, 58, 138)" />
          <span className="text-sm text-slate-600">2024-2025 School Year</span>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={selectedFilter === filter.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedFilter(filter.id)}
            iconName={filter.icon}
            iconPosition="left"
            iconSize={16}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Calendar Events List */}
      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <div key={event.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-slate-900">{event.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{formatDate(event.date)}</p>
                <p className="text-sm text-slate-500">{event.description}</p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-slate-700">
                    {new Date(event.date).getDate()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-8">
          <Icon name="Calendar" size={48} color="rgb(148, 163, 184)" className="mx-auto mb-4" />
          <p className="text-slate-500">No events found for the selected filter.</p>
        </div>
      )}

      {/* Download Calendar */}
      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-slate-900">Download Full Calendar</h4>
            <p className="text-sm text-slate-600">Get the complete academic calendar for the 2024-2025 school year.</p>
          </div>
          <Button
            variant="outline"
            iconName="Download"
            iconPosition="left"
            onClick={() => alert('Calendar download would start here')}
          >
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;