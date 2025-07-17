import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const contactInfo = {
    address: "1234 Education Boulevard, Oakwood, CA 90210",
    phone: "(555) 123-4567",
    email: "info@oakwoodacademy.edu",
    hours: {
      weekdays: "7:30 AM - 4:00 PM",
      saturday: "8:00 AM - 12:00 PM",
      sunday: "Closed"
    }
  };

  // Mock coordinates for Oakwood Academy
  const lat = 34.0522;
  const lng = -118.2437;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Campus</h2>
          <p className="text-lg text-gray-600">
            Located in the heart of Oakwood, our beautiful campus is easily accessible and welcoming to all
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Oakwood Academy Location"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`}
              className="border-0"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} color="#2563eb" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} color="#059669" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} color="#7c3aed" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">{contactInfo.hours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Saturday</span>
                  <span className="text-gray-600">{contactInfo.hours.saturday}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-600">{contactInfo.hours.sunday}</span>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Bus" size={20} color="#2563eb" />
                  <span className="text-gray-700">School bus service available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Car" size={20} color="#2563eb" />
                  <span className="text-gray-700">Free parking for visitors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Train" size={20} color="#2563eb" />
                  <span className="text-gray-700">Metro station 0.5 miles away</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directions */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Directions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">From Downtown</h4>
              <p className="text-gray-600">
                Take Highway 101 North to Exit 15 (Education Blvd). Turn right and continue for 2 miles. 
                The school will be on your left side.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">From Airport</h4>
              <p className="text-gray-600">
                Take Airport Boulevard to Highway 405 South. Merge onto Highway 101 North and follow 
                the directions above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;