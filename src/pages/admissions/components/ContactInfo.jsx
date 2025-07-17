import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactInfo = () => {
  const admissionsCounselors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Director of Admissions",
      email: "s.johnson@ourschool.edu",
      phone: "(555) 123-4567",
      specialization: "Overall admissions process, high school applications",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face",
      availability: "Monday-Friday, 8:00 AM - 5:00 PM"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Elementary Admissions Counselor",
      email: "m.chen@ourschool.edu",
      phone: "(555) 123-4568",
      specialization: "Kindergarten through Grade 5 admissions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      availability: "Monday-Friday, 9:00 AM - 4:00 PM"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Middle School Admissions Counselor",
      email: "e.rodriguez@ourschool.edu",
      phone: "(555) 123-4569",
      specialization: "Grades 6-8 admissions and transition support",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      availability: "Tuesday-Saturday, 8:30 AM - 4:30 PM"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Financial Aid Coordinator",
      email: "d.thompson@ourschool.edu",
      phone: "(555) 123-4570",
      specialization: "Scholarships, financial aid, and payment plans",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      availability: "Monday-Friday, 10:00 AM - 6:00 PM"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Information' },
    { value: 'application', label: 'Application Process' },
    { value: 'requirements', label: 'Admission Requirements' },
    { value: 'financial-aid', label: 'Financial Aid & Scholarships' },
    { value: 'tour', label: 'Campus Tour Request' },
    { value: 'transfer', label: 'Transfer Student Inquiry' },
    { value: 'other', label: 'Other' }
  ];

  const handleQuickContact = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will respond within 24 hours.');
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Our Admissions Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated admissions counselors are here to guide you through every step of the application process
          </p>
        </div>

        {/* Admissions Counselors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Meet Our Admissions Counselors
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionsCounselors.map((counselor) => (
              <div key={counselor.id} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={counselor.image}
                    alt={counselor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/assets/images/no_image.png';
                    }}
                  />
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {counselor.name}
                </h4>
                <p className="text-blue-600 font-medium text-sm mb-3">
                  {counselor.title}
                </p>
                
                <p className="text-gray-600 text-sm mb-4">
                  {counselor.specialization}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center text-gray-600">
                    <Icon name="Mail" size={14} className="mr-2" />
                    <a href={`mailto:${counselor.email}`} className="hover:text-blue-600">
                      {counselor.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Icon name="Phone" size={14} className="mr-2" />
                    <a href={`tel:${counselor.phone}`} className="hover:text-blue-600">
                      {counselor.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-gray-500 text-xs">
                    <Icon name="Clock" size={12} className="mr-1" />
                    {counselor.availability}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Quick Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Icon name="MessageSquare" size={24} className="mr-3 text-blue-600" />
              Quick Inquiry Form
            </h3>
            
            <form onSubmit={handleQuickContact} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Parent/Guardian Name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
                <Select
                  label="Inquiry Type"
                  options={inquiryTypes}
                  placeholder="Select inquiry type"
                  required
                />
              </div>
              
              <Input
                label="Student Name"
                type="text"
                placeholder="Enter student's name"
                required
              />
              
              <Select
                label="Grade Interested In"
                options={[
                  { value: 'kindergarten', label: 'Kindergarten' },
                  { value: 'grade-1', label: 'Grade 1' },
                  { value: 'grade-2', label: 'Grade 2' },
                  { value: 'grade-3', label: 'Grade 3' },
                  { value: 'grade-4', label: 'Grade 4' },
                  { value: 'grade-5', label: 'Grade 5' },
                  { value: 'grade-6', label: 'Grade 6' },
                  { value: 'grade-7', label: 'Grade 7' },
                  { value: 'grade-8', label: 'Grade 8' },
                  { value: 'grade-9', label: 'Grade 9' },
                  { value: 'grade-10', label: 'Grade 10' },
                  { value: 'grade-11', label: 'Grade 11' },
                  { value: 'grade-12', label: 'Grade 12' }
                ]}
                placeholder="Select grade level"
                required
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your inquiry or questions..."
                  required
                ></textarea>
              </div>
              
              <Button
                type="submit"
                variant="default"
                fullWidth
                className="bg-blue-800 hover:bg-blue-900"
                iconName="Send"
                iconPosition="left"
              >
                Send Inquiry
              </Button>
            </form>
          </div>

          {/* Contact Information & Office Hours */}
          <div className="space-y-8">
            {/* Office Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Icon name="MapPin" size={20} className="mr-2 text-blue-600" />
                Admissions Office
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="MapPin" size={18} className="mr-3 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      123 Education Drive<br />
                      Learning City, LC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Icon name="Phone" size={18} className="mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">Main Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Icon name="Mail" size={18} className="mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">admissions@ourschool.edu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Icon name="Clock" size={20} className="mr-2 text-blue-600" />
                Office Hours
              </h3>
              
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-800">
                  <Icon name="Info" size={14} className="inline mr-1" />
                  Extended hours during application season (January-March)
                </p>
              </div>
            </div>

            {/* Campus Map */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Icon name="Navigation" size={20} className="mr-2 text-blue-600" />
                Find Us
              </h3>
              
              <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="School Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=40.7128,-74.0060&z=14&output=embed"
                  className="border-0"
                ></iframe>
              </div>
              
              <div className="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Navigation"
                  iconPosition="left"
                >
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Car"
                  iconPosition="left"
                >
                  Parking Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;