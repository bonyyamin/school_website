import React from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const FacultySpotlight = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      position: "Head of Mathematics Department",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0d0e5?w=300&h=300&fit=crop&crop=face",
      credentials: "Ph.D. Mathematics, Stanford University",
      experience: "15 years",
      philosophy: "Mathematics is not just about numbers; it\'s about developing logical thinking and problem-solving skills that serve students throughout their lives.",
      achievements: [
        "National Mathematics Teacher of the Year 2022",
        "Published researcher in mathematical education",
        "Led school to state championship in Math Olympiad"
      ],
      subjects: ["Advanced Calculus", "Statistics", "AP Mathematics"]
    },
    {
      id: 2,
      name: "Mr. James Rodriguez",
      position: "Science Department Chair",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      credentials: "M.S. Chemistry, MIT",
      experience: "12 years",
      philosophy: "Science education should inspire curiosity and wonder about the natural world while developing critical thinking and experimental skills.",
      achievements: [
        "Regional Science Fair Judge",
        "Developed innovative lab curriculum",
        "Mentored 50+ students to science competitions"
      ],
      subjects: ["AP Chemistry", "Environmental Science", "Research Methods"]
    },
    {
      id: 3,
      name: "Ms. Emily Chen",
      position: "English Department Head",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      credentials: "M.A. English Literature, Harvard University",
      experience: "18 years",
      philosophy: "Literature and writing are powerful tools for understanding ourselves and our world, fostering empathy and critical thinking.",
      achievements: [
        "Published author of young adult fiction",
        "State Writing Competition Coordinator",
        "Developed creative writing program"
      ],
      subjects: ["AP English Literature", "Creative Writing", "World Literature"]
    },
    {
      id: 4,
      name: "Dr. Michael Thompson",
      position: "History Department Chair",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      credentials: "Ph.D. History, Yale University",
      experience: "20 years",
      philosophy: "History teaches us to think critically about the past to better understand the present and shape a better future.",
      achievements: [
        "Fulbright Scholar",
        "Historical society board member",
        "Curriculum consultant for state standards"
      ],
      subjects: ["AP World History", "American Government", "European History"]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Faculty Spotlight</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Meet our dedicated educators who bring expertise, passion, and innovation to the classroom every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facultyMembers.map((faculty) => (
          <div key={faculty.id} className="border border-slate-200 rounded-lg p-6 hover:shadow-sm transition-shadow duration-200">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900">{faculty.name}</h3>
                <p className="text-blue-800 font-medium text-sm">{faculty.position}</p>
                <p className="text-slate-600 text-sm">{faculty.credentials}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} color="rgb(100, 116, 139)" />
                    <span className="text-xs text-slate-500">{faculty.experience}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Teaching Philosophy</h4>
              <p className="text-sm text-slate-600 leading-relaxed italic">"{faculty.philosophy}"</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Key Achievements</h4>
              <ul className="space-y-1">
                {faculty.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Star" size={14} color="rgb(245, 158, 11)" className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Subjects Taught</h4>
              <div className="flex flex-wrap gap-2">
                {faculty.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultySpotlight;