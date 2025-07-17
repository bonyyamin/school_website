import React from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';


const NewsFilters = ({ 
  selectedCategory, 
  setSelectedCategory, 
  searchTerm, 
  setSearchTerm, 
  sortBy, 
  setSortBy,
  onClearFilters 
}) => {
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'academics', label: 'Academics' },
    { value: 'athletics', label: 'Athletics' },
    { value: 'arts', label: 'Arts' },
    { value: 'community', label: 'Community' },
    { value: 'announcements', label: 'Announcements' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'title', label: 'Title A-Z' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
        {/* Search Input */}
        <div className="flex-1 min-w-0">
          <Input
            type="search"
            placeholder="Search news and events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Category Filter */}
        <div className="w-full lg:w-48">
          <Select
            options={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
            placeholder="Select category"
          />
        </div>

        {/* Sort Options */}
        <div className="w-full lg:w-48">
          <Select
            options={sortOptions}
            value={sortBy}
            onChange={setSortBy}
            placeholder="Sort by"
          />
        </div>

        {/* Clear Filters Button */}
        <Button
          variant="outline"
          onClick={onClearFilters}
          iconName="X"
          iconPosition="left"
          className="whitespace-nowrap"
        >
          Clear Filters
        </Button>
      </div>

      {/* Quick Filter Tags */}
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
        <span className="text-sm font-medium text-gray-600 mr-2">Quick filters:</span>
        {categories.slice(1).map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
              selectedCategory === category.value
                ? 'bg-blue-100 text-blue-800 border border-blue-200' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsFilters;