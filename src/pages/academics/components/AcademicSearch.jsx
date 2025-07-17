import React, { useState, useMemo, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Input from 'components/ui/Input';
import Select from 'components/ui/Select';

const AcademicSearch = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  // Mock academic data for search
  const academicData = [
    {
      id: 1,
      title: "Advanced Placement Biology",
      type: "Course",
      grade: "high",
      subject: "Science",
      description: "College-level biology course covering molecular biology, genetics, evolution, and ecology.",
      keywords: ["AP", "biology", "science", "college", "molecular", "genetics", "evolution"]
    },
    {
      id: 2,
      title: "Elementary Mathematics Curriculum",
      type: "Curriculum",
      grade: "elementary",
      subject: "Mathematics",
      description: "Comprehensive math program focusing on number sense, operations, and problem-solving.",
      keywords: ["math", "elementary", "numbers", "operations", "problem solving", "curriculum"]
    },
    {
      id: 3,
      title: "Middle School Spanish Language",
      type: "Course",
      grade: "middle",
      subject: "World Languages",
      description: "Introductory Spanish course emphasizing conversation, culture, and basic grammar.",
      keywords: ["spanish", "language", "conversation", "culture", "grammar", "middle school"]
    },
    {
      id: 4,
      title: "High School Creative Writing",
      type: "Course",
      grade: "high",
      subject: "English",
      description: "Advanced writing course focusing on poetry, short stories, and personal narrative.",
      keywords: ["writing", "creative", "poetry", "stories", "narrative", "english", "literature"]
    },
    {
      id: 5,
      title: "STEM Robotics Program",
      type: "Program",
      grade: "high",
      subject: "Technology",
      description: "Hands-on robotics program combining engineering, programming, and competition.",
      keywords: ["STEM", "robotics", "engineering", "programming", "competition", "technology"]
    },
    {
      id: 6,
      title: "Elementary Art Integration",
      type: "Program",
      grade: "elementary",
      subject: "Arts",
      description: "Cross-curricular program integrating visual arts with core academic subjects.",
      keywords: ["art", "integration", "visual", "cross-curricular", "elementary", "creative"]
    },
    {
      id: 7,
      title: "Middle School Science Fair",
      type: "Event",
      grade: "middle",
      subject: "Science",
      description: "Annual science fair showcasing student research projects and experiments.",
      keywords: ["science fair", "research", "experiments", "projects", "middle school", "annual"]
    },
    {
      id: 8,
      title: "Advanced Placement Calculus",
      type: "Course",
      grade: "high",
      subject: "Mathematics",
      description: "College-level calculus course covering limits, derivatives, and integrals.",
      keywords: ["AP", "calculus", "mathematics", "college", "limits", "derivatives", "integrals"]
    }
  ];

  const gradeOptions = [
    { value: '', label: 'All Grade Levels' },
    { value: 'elementary', label: 'Elementary (K-5)' },
    { value: 'middle', label: 'Middle School (6-8)' },
    { value: 'high', label: 'High School (9-12)' }
  ];

  const subjectOptions = [
    { value: '', label: 'All Subjects' },
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Science', label: 'Science' },
    { value: 'English', label: 'English Language Arts' },
    { value: 'World Languages', label: 'World Languages' },
    { value: 'Arts', label: 'Arts' },
    { value: 'Technology', label: 'Technology' }
  ];

  const searchResults = useMemo(() => {
    let filtered = academicData;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(query))
      );
    }

    // Filter by grade level
    if (selectedGrade) {
      filtered = filtered.filter(item => item.grade === selectedGrade);
    }

    // Filter by subject
    if (selectedSubject) {
      filtered = filtered.filter(item => item.subject === selectedSubject);
    }

    return filtered;
  }, [searchQuery, selectedGrade, selectedSubject]);

  React.useEffect(() => {
    onSearchResults(searchResults);
  }, [searchResults, onSearchResults]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedGrade('');
    setSelectedSubject('');
  };

  const getTypeIcon = (type) => {
    const icons = {
      'Course': 'BookOpen',
      'Curriculum': 'FileText',
      'Program': 'Star',
      'Event': 'Calendar'
    };
    return icons[type] || 'Search';
  };

  const getTypeColor = (type) => {
    const colors = {
      'Course': 'bg-blue-100 text-blue-800',
      'Curriculum': 'bg-green-100 text-green-800',
      'Program': 'bg-purple-100 text-purple-800',
      'Event': 'bg-amber-100 text-amber-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="Search" size={24} color="rgb(30, 58, 138)" />
        <h2 className="text-2xl font-bold text-slate-900">Academic Search</h2>
      </div>

      {/* Search Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Input
          type="search"
          placeholder="Search courses, programs, or topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="md:col-span-1"
        />
        
        <Select
          placeholder="Select grade level"
          options={gradeOptions}
          value={selectedGrade}
          onChange={setSelectedGrade}
        />
        
        <Select
          placeholder="Select subject"
          options={subjectOptions}
          value={selectedSubject}
          onChange={setSelectedSubject}
        />
      </div>

      {/* Search Stats and Clear */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-slate-600">
            {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
          </span>
          {(searchQuery || selectedGrade || selectedSubject) && (
            <button
              onClick={clearFilters}
              className="text-sm text-blue-800 hover:text-blue-900 flex items-center space-x-1"
            >
              <Icon name="X" size={14} />
              <span>Clear filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Search Results */}
      <div className="space-y-4">
        {searchResults.map((result) => (
          <div key={result.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Icon name={getTypeIcon(result.type)} size={20} color="rgb(100, 116, 139)" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{result.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{result.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                  {result.type}
                </span>
                <span className="text-xs text-slate-500">
                  {result.grade === 'elementary' ? 'K-5' : 
                   result.grade === 'middle' ? '6-8' : 
                   result.grade === 'high' ? '9-12' : result.grade}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-slate-500">
                <span className="flex items-center space-x-1">
                  <Icon name="Tag" size={12} />
                  <span>{result.subject}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Users" size={12} />
                  <span>{result.grade.charAt(0).toUpperCase() + result.grade.slice(1)} School</span>
                </span>
              </div>
              
              <button className="text-blue-800 hover:text-blue-900 text-sm font-medium flex items-center space-x-1">
                <span>Learn More</span>
                <Icon name="ArrowRight" size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {searchResults.length === 0 && (searchQuery || selectedGrade || selectedSubject) && (
        <div className="text-center py-8">
          <Icon name="SearchX" size={48} color="rgb(148, 163, 184)" className="mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-900 mb-2">No results found</h3>
          <p className="text-slate-500 mb-4">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
          <button
            onClick={clearFilters}
            className="text-blue-800 hover:text-blue-900 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AcademicSearch;