import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import FacultyStaff from "pages/faculty-staff";
import Academics from "pages/academics";
import NewsEvents from "pages/news-events";
import StudentLife from "pages/student-life";
import Admissions from "pages/admissions";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/faculty-staff" element={<FacultyStaff />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;