import React from 'react';
import Image from '../../../components/AppImage';

const WelcomeMessage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Principal's Image */}
          <div className="mb-8 lg:mb-0">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg"
                alt="Dr. Sarah Johnson, Principal"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-3 rounded-lg">
                <h3 className="font-semibold text-gray-900">Dr. Sarah Johnson</h3>
                <p className="text-sm text-gray-600">Principal</p>
              </div>
            </div>
          </div>

          {/* Welcome Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Welcome to Oakwood Academy
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                Dear Students, Parents, and Community Members,
              </p>
              <p className="mb-4">
                It is my privilege to welcome you to Oakwood Academy, where we believe every student has the potential to achieve greatness. Our dedicated faculty and staff work tirelessly to create an environment that fosters academic excellence, character development, and lifelong learning.
              </p>
              <p className="mb-4">
                At Oakwood Academy, we don't just prepare students for tests – we prepare them for life. Through our comprehensive curriculum, innovative programs, and supportive community, we empower our students to become confident, compassionate, and capable leaders of tomorrow.
              </p>
              <p className="mb-6">
                I invite you to explore our website and discover the many opportunities that await you at Oakwood Academy. Together, we can unlock your child's full potential and set them on a path to success.
              </p>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="italic text-gray-600">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                <p className="text-sm text-gray-500 mt-2">- Nelson Mandela</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;