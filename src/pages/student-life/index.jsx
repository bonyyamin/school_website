import React from 'react';
import Navigation from './components/Navigation';
import HeroCarousel from './components/HeroCarousel';
import ExtracurricularActivities from './components/ExtracurricularActivities';
import StudentAchievements from './components/StudentAchievements';
import EventsCalendar from './components/EventsCalendar';
import StudentSupport from './components/StudentSupport';
import PhotoGallery from './components/PhotoGallery';
import StudentTestimonials from './components/StudentTestimonials';

const StudentLife = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <HeroCarousel />
        </div>

        {/* Main Content Grid */}
        <div className="space-y-12">
          {/* Extracurricular Activities */}
          <section>
            <ExtracurricularActivities />
          </section>

          {/* Student Achievements */}
          <section>
            <StudentAchievements />
          </section>

          {/* Events Calendar */}
          <section>
            <EventsCalendar />
          </section>

          {/* Student Support Services */}
          <section>
            <StudentSupport />
          </section>

          {/* Photo Gallery */}
          <section>
            <PhotoGallery />
          </section>

          {/* Student Testimonials */}
          <section>
            <StudentTestimonials />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Greenwood High School</h3>
              <p className="text-gray-400 text-sm mb-4">
                Nurturing excellence in education and character development since 1985.
              </p>
              <div className="text-sm text-gray-400">
                <p>123 Education Lane</p>
                <p>Springfield, ST 12345</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/academics" className="hover:text-white transition-colors">Academics</a></li>
                <li><a href="/admissions" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="/student-life" className="hover:text-white transition-colors">Student Life</a></li>
                <li><a href="/faculty-staff" className="hover:text-white transition-colors">Faculty & Staff</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Student Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Library</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Counseling</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-blue-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 bg-pink-600 rounded"></div>
                </a>
              </div>
              <p className="text-sm text-gray-400">
                Follow us for the latest updates and school news.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Greenwood High School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentLife;