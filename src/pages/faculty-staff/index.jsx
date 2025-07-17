import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import SearchFilters from './components/SearchFilters';

import ProfileModal from './components/ProfileModal';
import DepartmentSection from './components/DepartmentSection';
import LeadershipSection from './components/LeadershipSection';
import StatsSection from './components/StatsSection';

const FacultyStaff = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock data for faculty and staff
  const facultyData = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Principal",
      department: "administration",
      departmentName: "Administration",
      gradeLevel: "all-grades",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400",
      email: "sarah.johnson@school.edu",
      phone: "(555) 123-4567",
      education: "Ed.D. Educational Leadership",
      experience: 15,
      office: "Main Office, Room 101",
      officeHours: "Mon-Fri 8:00 AM - 4:00 PM",
      isLeadership: true,
      biography: `Dr. Sarah Johnson brings over 15 years of educational leadership experience to our school community. She holds a Doctorate in Educational Leadership from State University and has been instrumental in implementing innovative teaching methodologies and student-centered learning approaches.\n\nUnder her leadership, our school has achieved significant improvements in academic performance and student engagement. Dr. Johnson is passionate about creating an inclusive learning environment where every student can thrive.`,
      teachingPhilosophy: "I believe that every student has the potential to succeed when provided with the right support, encouragement, and opportunities. Education should be a collaborative journey between students, teachers, and families.",
      specializations: ["Educational Leadership", "Curriculum Development", "Student Assessment"],
      achievements: [
        "Principal of the Year Award 2023",
        "Published researcher in Educational Leadership Quarterly",
        "Implemented successful STEM program increasing student engagement by 40%"
      ]
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Vice Principal",
      department: "administration",
      departmentName: "Administration",
      gradeLevel: "all-grades",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      email: "michael.rodriguez@school.edu",
      phone: "(555) 123-4568",
      education: "M.Ed. Educational Administration",
      experience: 12,
      office: "Main Office, Room 102",
      officeHours: "Mon-Fri 7:30 AM - 3:30 PM",
      isLeadership: true,
      biography: `Michael Rodriguez serves as our Vice Principal with a focus on student discipline, safety, and academic support programs. He has been with our school district for 12 years and has a proven track record of building positive relationships with students, staff, and families.\n\nMr. Rodriguez is known for his open-door policy and his commitment to restorative justice practices that help students learn from their mistakes and grow as individuals.`,
      teachingPhilosophy: "Discipline should be about teaching and learning, not punishment. Every interaction with a student is an opportunity to guide them toward making better choices.",
      specializations: ["Student Discipline", "Safety Protocols", "Conflict Resolution"],
      achievements: [
        "Reduced disciplinary incidents by 30% through restorative practices",
        "Certified in Crisis Prevention and Intervention",
        "Led implementation of positive behavior support systems"
      ]
    },
    {
      id: 3,
      name: "Emily Chen",
      title: "English Language Arts Teacher",
      department: "english",
      departmentName: "English Language Arts",
      gradeLevel: "high",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      email: "emily.chen@school.edu",
      phone: "(555) 123-4569",
      education: "M.A. English Literature",
      experience: 8,
      office: "Building A, Room 205",
      officeHours: "Tue, Thu 3:00-4:00 PM",
      isLeadership: false,
      biography: `Emily Chen is a dedicated English Language Arts teacher who specializes in contemporary literature and creative writing. She has been inspiring students to find their voice through writing for the past 8 years.\n\nMs. Chen is known for her innovative teaching methods that incorporate technology and multimedia to make literature come alive for her students. She sponsors the school's literary magazine and debate team.`,
      teachingPhilosophy: "Literature is a window into the human experience. Through reading and writing, students develop empathy, critical thinking skills, and the ability to express themselves effectively.",
      specializations: ["Contemporary Literature", "Creative Writing", "Digital Literacy"],
      achievements: [
        "Teacher of the Year Nominee 2022",
        "Led students to state championship in debate competition",
        "Published author of young adult fiction"
      ]
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Mathematics Department Head",
      department: "mathematics",
      departmentName: "Mathematics",
      gradeLevel: "high",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      email: "david.thompson@school.edu",
      phone: "(555) 123-4570",
      education: "M.S. Mathematics Education",
      experience: 14,
      office: "Building B, Room 301",
      officeHours: "Mon, Wed, Fri 2:30-3:30 PM",
      isLeadership: false,
      biography: `David Thompson leads our Mathematics Department with passion and expertise. With 14 years of teaching experience, he has helped countless students overcome their fear of mathematics and discover the beauty of logical thinking.\n\nMr. Thompson is particularly skilled at making complex mathematical concepts accessible to students of all ability levels. He has implemented innovative problem-based learning approaches that have significantly improved student performance.`,
      teachingPhilosophy: "Mathematics is not about memorizing formulas; it\'s about developing logical thinking and problem-solving skills that students will use throughout their lives.",
      specializations: ["Algebra", "Calculus", "Problem-Based Learning"],
      achievements: [
        "Increased AP Calculus pass rates by 45%",
        "National Board Certified Teacher",
        "Presenter at National Mathematics Teachers Conference"
      ]
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      title: "Science Department Head",
      department: "science",
      departmentName: "Science",
      gradeLevel: "middle",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
      email: "lisa.park@school.edu",
      phone: "(555) 123-4571",
      education: "Ph.D. Biology Education",
      experience: 11,
      office: "Science Building, Room 101",
      officeHours: "Tue, Thu 3:15-4:15 PM",
      isLeadership: false,
      biography: `Dr. Lisa Park brings both research experience and teaching expertise to our Science Department. With a Ph.D. in Biology Education, she has been instrumental in developing our hands-on science curriculum that emphasizes inquiry-based learning.\n\nDr. Park has secured multiple grants for laboratory equipment and has established partnerships with local universities to provide students with real research opportunities.`,
      teachingPhilosophy: "Science is best learned through exploration and discovery. Students should be encouraged to ask questions, form hypotheses, and test their ideas through experimentation.",
      specializations: ["Biology", "Environmental Science", "Research Methods"],
      achievements: [
        "Secured $50,000 grant for new laboratory equipment",
        "Published 15 peer-reviewed articles in science education",
        "Established partnership with State University research program"
      ]
    },
    {
      id: 6,
      name: "Robert Martinez",
      title: "Social Studies Teacher",
      department: "social-studies",
      departmentName: "Social Studies",
      gradeLevel: "middle",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      email: "robert.martinez@school.edu",
      phone: "(555) 123-4572",
      education: "M.A. History",
      experience: 9,
      office: "Building A, Room 150",
      officeHours: "Mon, Wed 3:00-4:00 PM",
      isLeadership: false,
      biography: `Robert Martinez is a passionate Social Studies teacher who brings history to life for his students. With a Master's degree in History and 9 years of teaching experience, he specializes in American History and civics education.\n\nMr. Martinez is known for his engaging storytelling and his ability to connect historical events to current issues, helping students understand the relevance of history in their daily lives.`,
      teachingPhilosophy: "History is not just about memorizing dates and names; it\'s about understanding how past events shape our present and future. Students should learn to think critically about historical sources and draw connections to contemporary issues.",
      specializations: ["American History", "Civics", "Historical Analysis"],
      achievements: [
        "Coordinator of annual History Fair",
        "Led student group to national competition",
        "Developed innovative curriculum on local history"
      ]
    },
    {
      id: 7,
      name: "Amanda Foster",
      title: "Art Teacher",
      department: "arts",
      departmentName: "Arts & Music",
      gradeLevel: "all-grades",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
      email: "amanda.foster@school.edu",
      phone: "(555) 123-4573",
      education: "M.F.A. Studio Art",
      experience: 7,
      office: "Art Studio, Room 220",
      officeHours: "Tue, Thu 2:45-3:45 PM",
      isLeadership: false,
      biography: `Amanda Foster is a talented artist and dedicated teacher who inspires creativity in students of all ages. With an MFA in Studio Art and 7 years of teaching experience, she has developed a comprehensive art program that covers various mediums and techniques.\n\nMs. Foster's students regularly win awards in regional art competitions, and she has organized several successful art exhibitions featuring student work.`,
      teachingPhilosophy: "Art is a universal language that allows students to express themselves and see the world from different perspectives. Every student has creative potential that can be nurtured and developed.",
      specializations: ["Drawing", "Painting", "Digital Art"],
      achievements: [
        "Students won 12 regional art competition awards",
        "Organized 5 successful student art exhibitions",
        "Featured artist in local gallery"
      ]
    },
    {
      id: 8,
      name: "James Wilson",
      title: "Physical Education Teacher",
      department: "physical-education",
      departmentName: "Physical Education",
      gradeLevel: "elementary",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400",
      email: "james.wilson@school.edu",
      phone: "(555) 123-4574",
      education: "B.S. Kinesiology",
      experience: 6,
      office: "Gymnasium Office",
      officeHours: "Mon, Fri 3:00-4:00 PM",
      isLeadership: false,
      biography: `James Wilson is an energetic Physical Education teacher who promotes healthy lifestyles and teamwork among elementary students. With a degree in Kinesiology and 6 years of teaching experience, he has developed age-appropriate fitness programs that are both fun and educational.\n\nCoach Wilson also leads several after-school sports programs and has been instrumental in promoting school-wide wellness initiatives.`,
      teachingPhilosophy: "Physical education is about more than just sports and fitness; it's about teaching students the importance of healthy habits, teamwork, and perseverance that will benefit them throughout their lives.",
      specializations: ["Elementary Fitness", "Team Sports", "Health Education"],
      achievements: [
        "Implemented successful school wellness program","Coached championship elementary basketball team","Certified in youth sports safety"
      ]
    },
    {
      id: 9,
      name: "Maria Gonzalez",title: "Technology Coordinator",department: "technology",departmentName: "Technology",gradeLevel: "all-grades",image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",email: "maria.gonzalez@school.edu",phone: "(555) 123-4575",education: "M.S. Educational Technology",experience: 5,office: "Computer Lab, Room 115",officeHours: "Daily 3:00-4:00 PM",isLeadership: false,biography: `Maria Gonzalez serves as our Technology Coordinator, helping to integrate technology into all aspects of our curriculum. With a Master's degree in Educational Technology and 5 years of experience, she has been instrumental in modernizing our school's technological infrastructure.\n\nMs. Gonzalez provides training and support to both teachers and students, ensuring that technology enhances rather than replaces traditional teaching methods.`,teachingPhilosophy: "Technology should be a tool that enhances learning and creativity, not a distraction. Students need to learn not just how to use technology, but how to use it responsibly and effectively.",
      specializations: ["Educational Technology", "Digital Citizenship", "Computer Programming"],
      achievements: [
        "Led successful 1:1 device implementation","Trained 100+ teachers in educational technology","Developed school\'s digital citizenship curriculum"
      ]
    },
    {
      id: 10,
      name: "Jennifer Adams",
      title: "Special Education Teacher",
      department: "special-education",
      departmentName: "Special Education",
      gradeLevel: "elementary",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400",
      email: "jennifer.adams@school.edu",
      phone: "(555) 123-4576",
      education: "M.Ed. Special Education",
      experience: 10,
      office: "Building C, Room 105",
      officeHours: "By appointment",
      isLeadership: false,
      biography: `Jennifer Adams is a compassionate Special Education teacher who has dedicated her career to helping students with diverse learning needs reach their full potential. With 10 years of experience and specialized training in various learning disabilities, she creates individualized learning plans that meet each student's unique needs.\n\nMs. Adams works closely with general education teachers, parents, and support staff to ensure that all students receive the support they need to succeed.`,
      teachingPhilosophy: "Every student can learn and succeed when provided with the right support and accommodations. It\'s my job to find the key that unlocks each student\'s potential.",
      specializations: ["Learning Disabilities", "Autism Spectrum Disorders", "Behavioral Support"],
      achievements: [
        "Developed innovative sensory learning program",
        "Certified in Applied Behavior Analysis",
        "Mentored 15+ new special education teachers"
      ]
    },
    {
      id: 11,
      name: "Thomas Brown",
      title: "School Counselor",
      department: "support-staff",
      departmentName: "Support Staff",
      gradeLevel: "all-grades",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400",
      email: "thomas.brown@school.edu",
      phone: "(555) 123-4577",
      education: "M.A. School Counseling",
      experience: 8,
      office: "Counseling Office, Room 120",
      officeHours: "Mon-Fri 8:00 AM - 3:30 PM",
      isLeadership: false,
      biography: `Thomas Brown serves as our School Counselor, providing academic, social, and emotional support to students and families. With a Master's degree in School Counseling and 8 years of experience, he has helped hundreds of students navigate challenges and achieve their goals.\n\nMr. Brown is known for his caring approach and his ability to connect with students from all backgrounds. He also coordinates our peer mediation program and college readiness initiatives.`,
      teachingPhilosophy: "Every student deserves to feel heard, supported, and valued. My role is to help students develop the skills and confidence they need to overcome challenges and achieve their dreams.",
      specializations: ["Crisis Intervention", "College Counseling", "Peer Mediation"],
      achievements: [
        "Increased college enrollment rate by 25%",
        "Implemented successful peer mediation program",
        "Licensed Professional Counselor"
      ]
    },
    {
      id: 12,
      name: "Patricia Lee",
      title: "Librarian",
      department: "support-staff",
      departmentName: "Support Staff",
      gradeLevel: "all-grades",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400",
      email: "patricia.lee@school.edu",
      phone: "(555) 123-4578",
      education: "M.L.S. Library Science",
      experience: 13,
      office: "Library",
      officeHours: "Mon-Fri 7:30 AM - 4:00 PM",
      isLeadership: false,
      biography: `Patricia Lee has been our dedicated Librarian for 13 years, transforming our library into a vibrant learning hub. With a Master's degree in Library Science, she has modernized our collection and implemented innovative programs that promote literacy and research skills.\n\nMs. Lee is passionate about connecting students with books and resources that inspire learning and personal growth. She coordinates reading programs, book clubs, and research workshops for students and teachers.`,
      teachingPhilosophy: "Libraries are the heart of learning communities. My goal is to foster a love of reading and learning while teaching students the research and information literacy skills they need for success.",
      specializations: ["Information Literacy", "Digital Resources", "Reading Promotion"],
      achievements: [
        "Increased library circulation by 60%",
        "Established successful summer reading program",
        "Integrated digital resources and databases"
      ]
    }
  ];

  // Department configuration
  const departments = [
    { id: 'administration', name: 'Administration' },
    { id: 'english', name: 'English Language Arts' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'science', name: 'Science' },
    { id: 'social-studies', name: 'Social Studies' },
    { id: 'arts', name: 'Arts & Music' },
    { id: 'physical-education', name: 'Physical Education' },
    { id: 'technology', name: 'Technology' },
    { id: 'special-education', name: 'Special Education' },
    { id: 'support-staff', name: 'Support Staff' }
  ];

  // Filter faculty data
  const filteredFaculty = useMemo(() => {
    return facultyData.filter(member => {
      const matchesSearch = searchTerm === '' || 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.specializations?.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDepartment = selectedDepartment === '' || member.department === selectedDepartment;
      const matchesGrade = selectedGrade === '' || member.gradeLevel === selectedGrade || member.gradeLevel === 'all-grades';
      
      return matchesSearch && matchesDepartment && matchesGrade;
    });
  }, [searchTerm, selectedDepartment, selectedGrade]);

  // Separate leadership and regular faculty
  const leaders = filteredFaculty.filter(member => member.isLeadership);
  const regularFaculty = filteredFaculty.filter(member => !member.isLeadership);

  // Group faculty by department
  const facultyByDepartment = departments.map(dept => ({
    ...dept,
    members: regularFaculty.filter(member => member.department === dept.id)
  })).filter(dept => dept.members.length > 0);

  // Calculate stats
  const stats = {
    totalFaculty: facultyData.length,
    advancedDegrees: facultyData.filter(member => 
      member.education.includes('Ph.D.') || 
      member.education.includes('Ed.D.') || 
      member.education.includes('M.')
    ).length,
    totalExperience: facultyData.reduce((sum, member) => sum + member.experience, 0),
    departments: departments.length
  };

  const handleViewProfile = (staff) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStaff(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/homepage" className="flex items-center space-x-2">
                <Icon name="GraduationCap" size={32} className="text-blue-600" />
                <span className="text-xl font-bold text-gray-900">EduCare School</span>
              </Link>
              
              <div className="hidden md:flex space-x-6">
                <Link to="/homepage" className="nav-item">Home</Link>
                <Link to="/academics" className="nav-item">Academics</Link>
                <Link to="/admissions" className="nav-item">Admissions</Link>
                <Link to="/student-life" className="nav-item">Student Life</Link>
                <Link to="/faculty-staff" className="nav-item active">Faculty & Staff</Link>
                <Link to="/news-events" className="nav-item">News & Events</Link>
              </div>
            </div>
            
            <div className="md:hidden">
              <Icon name="Menu" size={24} className="text-gray-600" />
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/homepage" className="hover:text-blue-600">Home</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-gray-900 font-medium">Faculty & Staff</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Faculty & Staff</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of educators and support staff committed to providing exceptional education and fostering student success.
          </p>
        </div>

        {/* Stats Section */}
        <StatsSection stats={stats} />

        {/* Search and Filters */}
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          selectedGrade={selectedGrade}
          setSelectedGrade={setSelectedGrade}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredFaculty.length} of {facultyData.length} faculty and staff members
          </p>
        </div>

        {/* Leadership Section */}
        {leaders.length > 0 && (
          <LeadershipSection 
            leaders={leaders} 
            onViewProfile={handleViewProfile} 
          />
        )}

        {/* Faculty by Department */}
        {facultyByDepartment.length > 0 ? (
          <div>
            {facultyByDepartment.map(department => (
              <DepartmentSection
                key={department.id}
                department={department}
                staff={department.members}
                onViewProfile={handleViewProfile}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon name="Users" size={48} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No faculty members found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters to find faculty members.
            </p>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Have Questions About Our Faculty?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you have questions about our faculty and staff or would like to schedule a meeting, please don't hesitate to contact our main office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <Icon name="Phone" size={20} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <Icon name="Mail" size={20} />
              <span>info@educareschool.edu</span>
            </div>
          </div>
        </div>
      </main>

      {/* Profile Modal */}
      <ProfileModal
        staff={selectedStaff}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={32} className="text-blue-400" />
                <span className="text-xl font-bold">EduCare School</span>
              </div>
              <p className="text-gray-300 mb-4">
                Committed to providing exceptional education and fostering student success through innovative teaching and dedicated faculty.
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Youtube" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/academics" className="text-gray-300 hover:text-white">Academics</Link></li>
                <li><Link to="/admissions" className="text-gray-300 hover:text-white">Admissions</Link></li>
                <li><Link to="/student-life" className="text-gray-300 hover:text-white">Student Life</Link></li>
                <li><Link to="/news-events" className="text-gray-300 hover:text-white">News & Events</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>123 Education St, Learning City, LC 12345</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@educareschool.edu</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EduCare School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FacultyStaff;