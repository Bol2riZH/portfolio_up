import { Analytics } from '@vercel/analytics/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProjectPage from './pages/Project';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:id' element={<ProjectPage />} />
      </Routes>
      <Analytics />
    </Router>
  );
};

export default App;
