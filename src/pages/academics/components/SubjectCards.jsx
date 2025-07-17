import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const SubjectCards = ({ gradeLevel }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const subjectData = {
    elementary: [
      {
        id: 1,
        subject: "Language Arts",
        icon: "BookOpen",
        description: "Comprehensive literacy program focusing on reading, writing, speaking, and listening skills.",
        objectives: [
          "Develop phonemic awareness and decoding skills",
          "Build vocabulary and comprehension strategies",
          "Practice creative and expository writing",
          "Engage in collaborative discussions"
        ],
        sampleProjects: [
          "Author study and book reports",
          "Creative storytelling presentations",
          "Poetry recitation and analysis",
          "Research projects on topics of interest"
        ]
      },
      {
        id: 2,
        subject: "Mathematics",
        icon: "Calculator",
        description: "Hands-on approach to mathematical concepts with real-world applications and problem-solving.",
        objectives: [
          "Master basic arithmetic operations",
          "Understand place value and number sense",
          "Explore geometry and measurement",
          "Develop logical reasoning skills"
        ],
        sampleProjects: [
          "Math journals and problem-solving portfolios",
          "Geometry scavenger hunts",
          "Data collection and graphing activities",
          "Real-world math applications"
        ]
      },
      {
        id: 3,
        subject: "Science",
        icon: "Microscope",
        description: "Inquiry-based science exploration covering life, earth, and physical sciences.",
        objectives: [
          "Observe and describe natural phenomena",
          "Conduct simple experiments",
          "Learn scientific vocabulary",
          "Develop curiosity about the world"
        ],
        sampleProjects: [
          "Plant growth experiments",
          "Weather tracking and reporting",
          "Simple machines investigations",
          "Animal habitat dioramas"
        ]
      },
      {
        id: 4,
        subject: "Social Studies",
        icon: "Globe",
        description: "Exploration of communities, cultures, and citizenship through interactive learning.",
        objectives: [
          "Understand community helpers and roles",
          "Learn about different cultures and traditions",
          "Develop map and geography skills",
          "Practice good citizenship"
        ],
        sampleProjects: [
          "Community helper interviews",
          "Cultural celebration presentations",
          "Historical timeline creation",
          "Geography mapping activities"
        ]
      }
    ],
    middle: [
      {
        id: 1,
        subject: "English Language Arts",
        icon: "PenTool",
        description: "Advanced literacy skills with focus on literature analysis, research, and persuasive writing.",
        objectives: [
          "Analyze literary themes and character development",
          "Write persuasive and informative essays",
          "Conduct research using multiple sources",
          "Participate in formal debates and discussions"
        ],
        sampleProjects: [
          "Novel study and literary analysis papers",
          "Research projects on historical topics",
          "Creative writing portfolios",
          "Multimedia presentations on social issues"
        ]
      },
      {
        id: 2,
        subject: "Mathematics",
        icon: "Calculator",
        description: "Pre-algebra and algebra concepts with emphasis on problem-solving and mathematical reasoning.",
        objectives: [
          "Master algebraic expressions and equations",
          "Understand geometric principles and proofs",
          "Analyze data and probability",
          "Apply mathematics to real-world situations"
        ],
        sampleProjects: [
          "Mathematical modeling projects",
          "Geometry construction challenges",
          "Statistical analysis of school data",
          "Financial literacy simulations"
        ]
      },
      {
        id: 3,
        subject: "Science",
        icon: "Atom",
        description: "Laboratory-based learning in life science, earth science, and physical science.",
        objectives: [
          "Design and conduct controlled experiments",
          "Understand scientific method and inquiry",
          "Explore cellular biology and genetics",
          "Study earth systems and space science"
        ],
        sampleProjects: [
          "Cell model construction and presentation",
          "Weather station data collection",
          "Chemistry lab investigations",
          "Ecosystem research and conservation plans"
        ]
      },
      {
        id: 4,
        subject: "World Languages",
        icon: "Languages",
        description: "Spanish and French language acquisition with cultural immersion experiences.",
        objectives: [
          "Develop conversational skills in target language",
          "Understand cultural contexts and traditions",
          "Practice reading and writing skills",
          "Build global awareness and communication"
        ],
        sampleProjects: [
          "Cultural exchange video projects",
          "Foreign language storytelling",
          "International pen pal correspondence",
          "Cultural festival presentations"
        ]
      }
    ],
    high: [
      {
        id: 1,
        subject: "Advanced Placement Courses",
        icon: "Award",
        description: "College-level coursework in 20+ subjects preparing students for AP examinations.",
        objectives: [
          "Master college-level content and skills",
          "Develop critical thinking and analysis",
          "Prepare for AP examinations",
          "Earn college credit while in high school"
        ],
        sampleProjects: [
          "AP Research capstone projects",
          "Historical document analysis (AP History)",
          "Laboratory research (AP Sciences)",
          "Literary criticism essays (AP English)"
        ]
      },
      {
        id: 2,
        subject: "STEM Programs",
        icon: "Cpu",
        description: "Integrated science, technology, engineering, and mathematics with hands-on projects.",
        objectives: [
          "Apply engineering design process",
          "Develop programming and coding skills",
          "Understand advanced mathematical concepts",
          "Conduct scientific research projects"
        ],
        sampleProjects: [
          "Robotics competition teams",
          "Mobile app development",
          "Environmental sustainability research",
          "3D printing and design challenges"
        ]
      },
      {
        id: 3,
        subject: "Career Pathways",
        icon: "Briefcase",
        description: "Career and technical education preparing students for workforce entry or further education.",
        objectives: [
          "Develop industry-specific skills",
          "Gain real-world work experience",
          "Understand career opportunities",
          "Build professional networks"
        ],
        sampleProjects: [
          "Internship placements with local businesses",
          "Professional portfolio development",
          "Industry certification preparation",
          "Entrepreneurship business plans"
        ]
      },
      {
        id: 4,
        subject: "Arts & Humanities",
        icon: "Palette",
        description: "Creative expression through visual arts, music, theater, and humanities studies.",
        objectives: [
          "Develop artistic skills and techniques",
          "Understand cultural and historical contexts",
          "Express creativity through various media",
          "Appreciate diverse artistic traditions"
        ],
        sampleProjects: [
          "Art exhibition and gallery shows",
          "Musical performances and concerts",
          "Theater productions and drama festivals",
          "Creative writing publications"
        ]
      }
    ]
  };

  const subjects = subjectData[gradeLevel] || [];

  const toggleExpanded = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {subjects.map((subject) => (
        <div key={subject.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Icon name={subject.icon} size={20} color="rgb(217, 119, 6)" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{subject.subject}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{subject.description}</p>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleExpanded(subject.id)}
              iconName={expandedCard === subject.id ? "ChevronUp" : "ChevronDown"}
              iconPosition="right"
              className="w-full"
            >
              {expandedCard === subject.id ? "Show Less" : "View Details"}
            </Button>
            
            {expandedCard === subject.id && (
              <div className="mt-4 pt-4 border-t border-slate-200 animate-fade-in">
                <div className="mb-4">
                  <h4 className="font-medium text-slate-900 mb-2">Learning Objectives</h4>
                  <ul className="space-y-1">
                    {subject.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="Target" size={14} color="rgb(59, 130, 246)" className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Sample Projects</h4>
                  <ul className="space-y-1">
                    {subject.sampleProjects.map((project, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="Lightbulb" size={14} color="rgb(245, 158, 11)" className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectCards;