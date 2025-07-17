import React from 'react';
import Icon from '../../../components/AppIcon';

const StudentSupport = () => {
  const supportServices = [
    {
      id: 1,
      title: "Academic Counseling",
      description: "Personalized academic guidance to help students achieve their educational goals and plan their future career paths.",
      coordinator: "Dr. Sarah Johnson",
      email: "s.johnson@school.edu",
      phone: "(555) 123-4567",
      hours: "Monday - Friday: 8:00 AM - 4:00 PM",
      location: "Counseling Center, Room 101",
      icon: "BookOpen",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Mental Health & Wellness",
      description: "Professional counseling services providing emotional support and mental health resources for student wellbeing.",
      coordinator: "Ms. Emily Rodriguez",
      email: "e.rodriguez@school.edu",
      phone: "(555) 123-4568",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
      location: "Wellness Center, Room 205",
      icon: "Heart",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Tutoring Services",
      description: "Peer and professional tutoring programs available for all subjects to support academic success.",
      coordinator: "Mr. David Chen",
      email: "d.chen@school.edu",
      phone: "(555) 123-4569",
      hours: "Monday - Thursday: 3:30 PM - 6:00 PM",
      location: "Library Study Rooms",
      icon: "Users",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Special Needs Support",
      description: "Specialized support services for students with learning differences and accommodation needs.",
      coordinator: "Ms. Lisa Thompson",
      email: "l.thompson@school.edu",
      phone: "(555) 123-4570",
      hours: "Monday - Friday: 8:00 AM - 3:30 PM",
      location: "Special Services Office, Room 150",
      icon: "Shield",
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "Career Guidance",
      description: "College preparation, career exploration, and internship opportunities to prepare students for their future.",
      coordinator: "Mr. Michael Brown",
      email: "m.brown@school.edu",
      phone: "(555) 123-4571",
      hours: "Tuesday - Friday: 10:00 AM - 4:00 PM",
      location: "Career Center, Room 302",
      icon: "Briefcase",
      color: "bg-indigo-500"
    },
    {
      id: 6,
      title: "Peer Mediation",
      description: "Student-led conflict resolution program helping peers resolve disputes and build communication skills.",
      coordinator: "Ms. Jennifer Wilson",
      email: "j.wilson@school.edu",
      phone: "(555) 123-4572",
      hours: "Monday, Wednesday, Friday: 12:00 PM - 2:00 PM",
      location: "Mediation Room, Room 180",
      icon: "MessageCircle",
      color: "bg-teal-500"
    }
  ];

  const emergencyContacts = [
    {
      title: "Crisis Hotline",
      number: "(555) 911-HELP",
      description: "24/7 emergency mental health support"
    },
    {
      title: "School Nurse",
      number: "(555) 123-4580",
      description: "Medical emergencies and health concerns"
    },
    {
      title: "Security Office",
      number: "(555) 123-4590",
      description: "Campus safety and security issues"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Support Services</h2>
      
      {/* Support Services Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {supportServices.map(service => (
          <div key={service.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`${service.color} p-3 rounded-lg`}>
                <Icon name={service.icon} size={24} color="white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
            </div>
            
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <div className="space-y-3">
              <div className="border-t border-gray-100 pt-3">
                <h4 className="font-medium text-gray-900 mb-2">Coordinator</h4>
                <p className="text-sm text-gray-600">{service.coordinator}</p>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="Mail" size={14} />
                  <a href={`mailto:${service.email}`} className="hover:text-blue-600 transition-colors">
                    {service.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="Phone" size={14} />
                  <a href={`tel:${service.phone}`} className="hover:text-blue-600 transition-colors">
                    {service.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="Clock" size={14} />
                  <span>{service.hours}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="MapPin" size={14} />
                  <span>{service.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Contacts */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="AlertTriangle" size={24} color="rgb(239, 68, 68)" />
          <h3 className="text-lg font-semibold text-red-800">Emergency Contacts</h3>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
              <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
              <a 
                href={`tel:${contact.number}`} 
                className="text-lg font-bold text-red-600 hover:text-red-700 transition-colors block mb-1"
              >
                {contact.number}
              </a>
              <p className="text-sm text-gray-600">{contact.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <Icon name="Info" size={16} color="rgb(245, 158, 11)" className="mt-0.5" />
            <div>
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> In case of a life-threatening emergency, always call 911 first, then contact the appropriate school personnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSupport;