import React from 'react';
import Icon from 'components/AppIcon';

const CurriculumOverview = ({ gradeLevel }) => {
  const curriculumData = {
    elementary: {
      title: "Elementary Curriculum (K-5)",
      description: "Our elementary program focuses on building strong foundational skills in literacy, numeracy, and critical thinking while fostering creativity and social development.",
      highlights: [
        "Balanced literacy approach with phonics and whole language",
        "Hands-on mathematics with manipulatives and real-world applications",
        "Integrated science and social studies units",
        "Daily physical education and arts integration",
        "Character education and social-emotional learning"
      ],
      philosophy: "We believe in nurturing the whole child through developmentally appropriate practices that honor each student\'s unique learning style and pace."
    },
    middle: {
      title: "Middle School Curriculum (6-8)",
      description: "Our middle school program prepares students for high school success through rigorous academics, exploratory courses, and leadership opportunities.",
      highlights: [
        "Advanced mathematics including pre-algebra and algebra",
        "Laboratory-based science with inquiry-driven learning",
        "World languages and cultural studies",
        "Technology integration and digital citizenship",
        "Advisory program for social-emotional support"
      ],
      philosophy: "We support adolescents through their developmental journey with challenging academics and meaningful relationships that build confidence and character."
    },
    high: {
      title: "High School Curriculum (9-12)",
      description: "Our comprehensive high school program offers rigorous academics, Advanced Placement courses, and career preparation to ensure college and career readiness.",
      highlights: [
        "20+ Advanced Placement courses across all disciplines",
        "Dual enrollment opportunities with local colleges",
        "Career and technical education pathways",
        "Capstone research projects and internships",
        "College counseling and scholarship support"
      ],
      philosophy: "We empower students to become independent learners and responsible citizens prepared for success in college, career, and life."
    }
  };

  const data = curriculumData[gradeLevel];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Icon name="BookOpen" size={24} color="rgb(30, 58, 138)" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">{data.title}</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">{data.description}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Highlights</h3>
            <ul className="space-y-2">
              {data.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon name="Check" size={16} color="rgb(5, 150, 105)" className="mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Our Philosophy</h4>
            <p className="text-blue-800 text-sm leading-relaxed">{data.philosophy}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumOverview;