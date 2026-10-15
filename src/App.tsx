import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomScrollbar from './components/CustomScrollbar';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import ProfilePage from './pages/ProfilePage';
import ExperiencePage from './pages/ExperiencePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomScrollbar />
      <main className="text-black selection:bg-orange-500 selection:text-white transition-colors duration-500 min-h-screen flex flex-col justify-between">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
