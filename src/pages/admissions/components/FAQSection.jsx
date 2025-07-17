import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Questions', icon: 'HelpCircle' },
    { id: 'application', name: 'Application Process', icon: 'FileText' },
    { id: 'requirements', name: 'Requirements', icon: 'CheckSquare' },
    { id: 'fees', name: 'Fees & Financial Aid', icon: 'DollarSign' },
    { id: 'academics', name: 'Academics', icon: 'BookOpen' },
    { id: 'campus', name: 'Campus Life', icon: 'Users' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'application',
      question: 'When does the application process open?',
      answer: `The application process for the 2025-2026 school year opens on January 15, 2025. We encourage families to apply early as we review applications on a rolling basis. The final application deadline is March 15, 2025.`
    },
    {
      id: 2,
      category: 'application',
      question: 'Can I save my application progress and complete it later?',
      answer: `Yes! Our online application system allows you to save your progress at any time. Simply create an account and you can return to complete your application whenever convenient. Your information will be securely stored for up to 90 days.`
    },
    {
      id: 3,
      category: 'requirements',
      question: 'What documents are required for admission?',
      answer: `Required documents vary by grade level but typically include: completed application form, previous school transcripts, teacher recommendations, birth certificate, immunization records, and standardized test scores (for higher grades). Please check the specific requirements for your child's grade level.`
    },
    {
      id: 4,
      category: 'requirements',question: 'Is there an entrance exam?',
      answer: `Yes, students applying for grades 1-12 will take an age-appropriate assessment test. For elementary grades, this focuses on basic math and reading skills. Middle and high school students take comprehensive exams covering multiple subjects. Kindergarten applicants undergo a developmental readiness assessment.`
    },
    {
      id: 5,
      category: 'fees',question: 'What is the total cost of attendance?',
      answer: `Tuition varies by grade level: Elementary (K-5): $12,500, Middle School (6-8): $14,500, High School (9-12): $16,500. Additional fees include registration, technology, activities, and optional services like lunch program. Please refer to our detailed fee structure for complete information.`
    },
    {
      id: 6,
      category: 'fees',question: 'Do you offer financial aid or scholarships?',
      answer: `Yes! We offer various scholarship programs including Academic Excellence (up to 50% tuition), Need-Based Financial Aid (up to 75% tuition), Leadership & Service, Arts & Creative, and STEM Innovation scholarships. We also provide sibling discounts and payment plan options.`
    },
    {
      id: 7,
      category: 'fees',question: 'What payment options are available?',
      answer: `We offer three payment plans: Annual Payment (5% discount), Semester Payment (2% discount), and Monthly Payment (10 installments). Payments can be made by check, ACH transfer, or credit card. Late payment fees apply after a 10-day grace period.`
    },
    {
      id: 8,
      category: 'academics',question: 'What is your student-to-teacher ratio?',
      answer: `We maintain small class sizes to ensure personalized attention: Kindergarten-Grade 2: 15:1 ratio, Grades 3-5: 18:1 ratio, Grades 6-8: 20:1 ratio, Grades 9-12: 22:1 ratio. This allows our teachers to provide individualized instruction and support.`
    },
    {
      id: 9,
      category: 'academics',question: 'Do you offer Advanced Placement (AP) courses?',
      answer: `Yes, we offer 15 AP courses for high school students including AP English, Mathematics, Sciences, Social Studies, and World Languages. Students typically begin taking AP courses in their junior year, with some exceptional students starting in sophomore year.`
    },
    {
      id: 10,
      category: 'campus',question: 'What extracurricular activities are available?',
      answer: `We offer over 30 clubs and activities including Student Government, Drama Club, Science Olympiad, Debate Team, various sports teams, Music Ensembles, Art Club, Community Service groups, and Academic Honor Societies. New clubs can be formed based on student interest.`
    },
    {
      id: 11,
      category: 'campus',question: 'Do you provide transportation?',
      answer: `We offer bus transportation for students living within a 15-mile radius of the school. Bus routes are established based on enrollment patterns each year. Transportation fees are separate from tuition. Car pool coordination assistance is also available for families.`
    },
    {
      id: 12,
      category: 'application',question: 'When will I receive an admission decision?',
      answer: `Admission decisions are released on April 5, 2025. All families will receive notification via email and postal mail. Accepted students have until April 20, 2025, to confirm enrollment and submit the required deposit.`
    },
    {
      id: 13,
      category: 'requirements',question: 'Can students transfer mid-year?',answer: `Mid-year transfers are considered on a case-by-case basis depending on space availability and the student's academic standing. Transfer students must complete the full application process including testing and interviews. We recommend contacting our admissions office to discuss specific situations.`
    },
    {
      id: 14,
      category: 'campus',
      question: 'What is your school lunch program like?',
      answer: `Our cafeteria serves nutritious, freshly prepared meals daily with options for various dietary restrictions including vegetarian, gluten-free, and allergy-friendly choices. Students can purchase lunch daily or participate in our annual lunch program. Menus are posted monthly on our website.`
    },
    {
      id: 15,
      category: 'academics',
      question: 'How do you support students with learning differences?',
      answer: `We have a dedicated Learning Support team that works with students who have documented learning differences. Services include individualized education plans, extended time for tests, note-taking assistance, and small group instruction. We work closely with families and outside professionals.`
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our admission process
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="mb-6">
            <Input
              type="search"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mx-auto"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                <Icon name={category.icon} size={16} className="mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <Icon 
                    name={expandedFAQ === faq.id ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-gray-500 flex-shrink-0"
                  />
                </button>

                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or selecting a different category.
              </p>
            </div>
          )}
        </div>

        {/* Contact for More Questions */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-blue-800 mb-4">
            Our admissions team is here to help you through the process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center text-blue-800">
              <Icon name="Phone" size={16} className="mr-2" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center text-blue-800">
              <Icon name="Mail" size={16} className="mr-2" />
              <span>admissions@ourschool.edu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;