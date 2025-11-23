import React from 'react';
import { HashRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Career from './pages/Career';
import About from './pages/About';
import Admissions from './pages/Admissions';

// Using HashRouter for compatibility with environments that don't support history API fallback (like simple static hosting)
// as per general guidelines for this task environment.

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="career" element={<Career />} />
          <Route path="about" element={<About />} />
          <Route path="admissions" element={<Admissions />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => new URL(window.location.href), []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;