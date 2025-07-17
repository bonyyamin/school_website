import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = () => {
  const location = useLocation();
  
  const pathMap = {
    '/homepage': 'Home',
    '/academics': 'Academics',
    '/admissions': 'Admissions',
    '/student-life': 'Student Life',
    '/faculty-staff': 'Faculty & Staff',
    '/news-events': 'News & Events',
  };

  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [{ label: 'Home', path: '/homepage' }];

    if (location.pathname !== '/homepage') {
      const currentPath = location.pathname;
      const currentLabel = pathMap[currentPath];
      
      if (currentLabel) {
        breadcrumbs.push({ label: currentLabel, path: currentPath });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center">
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={16} 
                className="mx-2 text-muted-foreground/60" 
              />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="font-medium text-foreground font-caption">
                {crumb.label}
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="font-caption hover:text-primary transition-colors duration-200 ease-out"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;