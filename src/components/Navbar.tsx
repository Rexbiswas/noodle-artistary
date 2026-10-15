import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Search, User as UserIcon, Sparkles, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isExperience = location.pathname === '/experience';
  const isDarkHero = (isHome || isExperience) && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change & unlock scroll
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Top subtle gradient for contrast on dark hero */}
      {isDarkHero && (
        <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent z-[990] pointer-events-none transition-opacity duration-700" />
      )}

      {/* Adaptive Pill Navbar Container */}
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-[1000] flex justify-between items-center transition-all duration-700 ease-[0.19, 1, 0.22, 1] top-3 md:top-6 w-[94%] md:w-[70%] lg:w-[58%] rounded-full py-2.5 md:py-4 px-4 md:px-8 ${
          !isDarkHero
            ? 'bg-white/90 backdrop-blur-xl border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)]'
            : 'bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)]'
        }`}
      >
        {/* 1. Sequence: Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer group select-none flex-shrink-0"
        >
          <ChefHat
            className={`transition-all duration-500 ${
              isDarkHero ? 'text-white' : 'text-orange-500'
            }`}
            size={isDarkHero ? 26 : 22}
          />
          <span
            className={`text-xl sm:text-2xl md:text-3xl logo-font tracking-tight flex items-center transition-colors duration-500 ${
              isDarkHero ? 'text-white' : ''
            }`}
          >
            <span className="text-orange-500">Noodle</span>
            <span
              className={`${
                isDarkHero ? 'text-white/95' : 'text-gray-900'
              } ml-1.5`}
            >
              Artistry
            </span>
          </span>
        </Link>

        {/* MOBILE CONTROLS: 2. Search Icon + 3. Animated Hamburger Bar */}
        <div className="flex md:hidden items-center gap-2">
          {/* 2. Search Icon */}
          <NavLink
            to="/recipes"
            aria-label="Search Recipes"
            className={({ isActive }) =>
              `w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                isActive
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : isDarkHero
                  ? 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                  : 'bg-gray-100 text-gray-700 hover:text-orange-500 hover:bg-gray-200/70 border border-gray-200/60'
              }`
            }
          >
            <Search size={16} />
          </NavLink>

          {/* 3. Animated Hamburger Bar */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle drawer menu"
            className={`w-9 h-9 rounded-full flex flex-col items-center justify-center gap-1.5 transition-all ${
              menuOpen
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : isDarkHero
                ? 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                : 'bg-gray-100 text-gray-800 hover:text-orange-500 hover:bg-gray-200/70 border border-gray-200/60'
            }`}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="w-4 h-0.5 bg-current rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="w-4 h-0.5 bg-current rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="w-4 h-0.5 bg-current rounded-full origin-center"
            />
          </button>
        </div>

        {/* DESKTOP CONTROLS: Full Horizontal Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `text-[11px] font-bold transition-all duration-300 flex items-center gap-1.5 uppercase tracking-[0.2em] relative py-1 ${
                isActive
                  ? 'text-orange-500'
                  : isDarkHero
                  ? 'text-white/80 hover:text-white'
                  : 'text-gray-500 hover:text-orange-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Search size={14} />
                <span>Recipes</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `text-[11px] font-bold transition-all duration-300 flex items-center gap-1.5 uppercase tracking-[0.2em] relative py-1 ${
                isActive
                  ? 'text-orange-500'
                  : isDarkHero
                  ? 'text-white/80 hover:text-white'
                  : 'text-gray-500 hover:text-orange-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <UserIcon size={14} />
                <span>Profile</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `transition-all duration-300 rounded-full text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 active:scale-95 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                  : !isDarkHero
                  ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md shadow-orange-500/20'
                  : 'bg-white text-orange-500 hover:bg-orange-50 shadow-xl'
              }`
            }
          >
            <Sparkles size={12} />
            <span>Experience</span>
          </NavLink>
        </div>
      </nav>

      {/* MOBILE ANIMATED DRAWER (Slide-over with Backdrop) */}
      <AnimatePresence>
        {menuOpen && (
          <div className="md:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[1100]"
            />

            {/* Slide-in Animated Drawer Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 w-[84%] max-w-[340px] bg-white z-[1200] shadow-2xl flex flex-col justify-between p-6 sm:p-8 rounded-l-[2.5rem] border-l border-gray-100"
            >
              {/* Drawer Top / Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 group"
                  >
                    <ChefHat size={22} className="text-orange-500" />
                    <span className="text-2xl logo-font tracking-tight">
                      <span className="text-orange-500">Noodle</span>
                      <span className="text-gray-900 ml-1.5">Artistry</span>
                    </span>
                  </Link>

                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close drawer"
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-orange-50 text-gray-500 hover:text-orange-500 flex items-center justify-center transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Navigation Links in Drawer */}
                <div className="pt-8 space-y-3">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 px-2">
                    Menu Navigation
                  </div>

                  {/* RECIPES */}
                  <NavLink
                    to="/recipes"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3.5 py-4 px-5 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] transition-all ${
                        isActive
                          ? 'bg-orange-50 text-orange-500 border border-orange-200/70 font-black shadow-sm'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
                      }`
                    }
                  >
                    <Search size={16} className="text-orange-500" />
                    <span>Recipes</span>
                  </NavLink>

                  {/* PROFILE */}
                  <NavLink
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3.5 py-4 px-5 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] transition-all ${
                        isActive
                          ? 'bg-orange-50 text-orange-500 border border-orange-200/70 font-black shadow-sm'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
                      }`
                    }
                  >
                    <UserIcon size={16} className="text-orange-500" />
                    <span>Profile</span>
                  </NavLink>

                  {/* EXPERIENCE (Full-width Orange Pill) */}
                  <div className="pt-4">
                    <NavLink
                      to="/experience"
                      onClick={() => setMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-orange-500 text-white font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-orange-500/30 active:scale-95 transition-all"
                    >
                      <Sparkles size={15} />
                      <span>Experience</span>
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom / Footer */}
              <div className="pt-6 border-t border-gray-100 text-center space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                  Designed by <span className="text-orange-500">Rishi Biswas</span>
                </p>
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300">
                  EST. 2026 • Noodle Artistry
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
