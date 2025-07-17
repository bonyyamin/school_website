import React, { useState } from 'react';
import NewsCard from './NewsCard';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const NewsArchive = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const itemsPerPage = 6;

  const archiveNews = [
    {
      id: 1,
      title: "Annual Science Fair 2025 Winners Announced",
      excerpt: "Outstanding student projects showcase innovation in STEM fields with record-breaking participation from all grade levels.",
      image: "https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Academics",
      date: "2025-07-15",
      author: "Dr. Sarah Mitchell",
      featured: true
    },
    {
      id: 2,
      title: "New Athletic Complex Opens This Fall",
      excerpt: "State-of-the-art facilities include Olympic-sized pool, modern gymnasium, and outdoor track for enhanced student athletics.",
      image: "https://images.pixabay.com/photo/2016/11/29/06/15/swimming-pool-1867777_960_720.jpg",
      category: "Athletics",
      date: "2025-07-14",
      author: "Coach Michael Johnson",
      featured: false
    },
    {
      id: 3,
      title: "Arts Department Wins Regional Competition",
      excerpt: "Drama club\'s production of \'Romeo and Juliet\' earns first place in state-wide high school theater competition.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      category: "Arts",
      date: "2025-07-13",
      author: "Ms. Jennifer Adams",
      featured: false
    },
    {
      id: 4,
      title: "Community Service Day Success",
      excerpt: "Over 500 students participated in local community service projects, contributing 2,000 hours of volunteer work.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Community",
      date: "2025-06-28",
      author: "Ms. Lisa Chen",
      featured: false
    },
    {
      id: 5,
      title: "Graduation Ceremony 2025 Highlights",
      excerpt: "Celebrating the achievements of 324 graduating seniors as they embark on their next chapter in life.",
      image: "https://images.pixabay.com/photo/2017/05/10/19/29/graduation-2301449_960_720.jpg",
      category: "Announcements",
      date: "2025-06-15",
      author: "Principal Robert Davis",
      featured: false
    },
    {
      id: 6,
      title: "Spring Concert Series Finale",
      excerpt: "Music department concludes successful spring concert series with outstanding performances from all ensembles.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
      category: "Arts",
      date: "2025-05-20",
      author: "Mr. David Wilson",
      featured: false
    },
    {
      id: 7,
      title: "State Championship Victory",
      excerpt: "Varsity basketball team brings home the state championship trophy after an undefeated season.",
      image: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Athletics",
      date: "2025-03-15",
      author: "Coach Sarah Thompson",
      featured: false
    },
    {
      id: 8,
      title: "New STEM Lab Opening",
      excerpt: "Cutting-edge science and technology laboratory opens to provide students with hands-on learning experiences.",
      image: "https://images.pixabay.com/photo/2017/09/07/08/54/money-2724241_960_720.jpg",
      category: "Academics",
      date: "2025-02-10",
      author: "Dr. Michael Rodriguez",
      featured: false
    }
  ];

  const yearOptions = [
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' }
  ];

  const monthOptions = [
    { value: 'all', label: 'All Months' },
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  const filteredNews = archiveNews.filter(news => {
    const newsDate = new Date(news.date);
    const newsYear = newsDate.getFullYear().toString();
    const newsMonth = String(newsDate.getMonth() + 1).padStart(2, '0');
    
    if (selectedYear !== 'all' && newsYear !== selectedYear) return false;
    if (selectedMonth !== 'all' && newsMonth !== selectedMonth) return false;
    
    return true;
  });

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
    
    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    // Previous button
    if (currentPage > 1) {
      buttons.push(
        <Button
          key="prev"
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          iconName="ChevronLeft"
        />
      );
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          variant={i === currentPage ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      buttons.push(
        <Button
          key="next"
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          iconName="ChevronRight"
        />
      );
    }

    return buttons;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Icon name="Archive" size={20} className="mr-2 text-blue-600" />
            News Archive
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Select
              options={yearOptions}
              value={selectedYear}
              onChange={setSelectedYear}
              placeholder="Select year"
              className="w-full sm:w-32"
            />
            <Select
              options={monthOptions}
              value={selectedMonth}
              onChange={setSelectedMonth}
              placeholder="Select month"
              className="w-full sm:w-40"
            />
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredNews.length)} of {filteredNews.length} articles
        </div>
      </div>

      {paginatedNews.length > 0 ? (
        <>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>

          {totalPages > 1 && (
            <div className="p-6 border-t bg-gray-50">
              <div className="flex items-center justify-center space-x-2">
                {renderPaginationButtons()}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="p-12 text-center">
          <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
          <h4 className="text-lg font-medium text-gray-900 mb-2">No articles found</h4>
          <p className="text-gray-600">
            No news articles match your selected filters. Try adjusting your search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsArchive;