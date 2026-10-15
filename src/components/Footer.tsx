import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-30 pt-32 pb-16 bg-gray-50 border-t border-gray-100 px-6 md:px-12">
      <div className="max-w-wide mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 mb-24">
        {/* Brand Pillar */}
        <div className="md:col-span-5 space-y-8">
          <Link to="/" className="flex items-center gap-3 group">
            <ChefHat size={30} className="text-orange-500" />
            <span className="text-3xl logo-font">
              <span className="text-orange-500">Noodle</span>
              <span className="text-gray-900 ml-2">Artistry</span>
            </span>
          </Link>
          <p
            className="text-gray-500 text-lg font-light leading-relaxed max-w-md"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A cinematic culinary studio dedicated to the intersection of ancient noodle craft
            and digital transcendence. Every dish is a canvas, every broth a story.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Archives', 'Studio'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-orange-500 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Matrix */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-900">
            Navigation
          </h4>
          <ul className="space-y-3.5">
            <li>
              <Link
                to="/"
                className="text-gray-400 text-sm font-light hover:text-orange-500 transition-colors"
              >
                Home Experience
              </Link>
            </li>
            <li>
              <Link
                to="/recipes"
                className="text-gray-400 text-sm font-light hover:text-orange-500 transition-colors"
              >
                Gourmet Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-gray-400 text-sm font-light hover:text-orange-500 transition-colors"
              >
                Member Profile
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="text-gray-400 text-sm font-light hover:text-orange-500 transition-colors"
              >
                Cinematic Scrolly
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-6">
          <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-900">
            Identity
          </h4>
          <ul className="space-y-3.5">
            <li>
              <Link
                to="/profile"
                className="text-gray-400 text-sm font-light hover:text-orange-500 transition-colors"
              >
                Dietary Guardrails
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-gray-400 text-sm font-light hover:text-orange-500 transition-colors"
              >
                Skill Diagnostics
              </Link>
            </li>
            <li>
              <Link
                to="/recipes"
                className="text-gray-400 text-sm font-light hover:text-orange-500 transition-colors"
              >
                Faceted Filter Engine
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Node */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-900">
            Reach Out
          </h4>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            studio@noodleartistry.com
            <br />
            Manhattan, NY • Worldwide
          </p>
          <div className="pt-2">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-orange-500/60">
              EST. 2026
            </span>
          </div>
        </div>
      </div>

      {/* Legal & Credits Line */}
      <div className="max-w-wide mx-auto pt-12 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            &copy; 2026 Noodle Artistry. All Essence Reserved.
          </p>
          <span className="hidden sm:inline text-gray-300">•</span>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
            Designed by <span className="text-orange-500 font-black">Rishi Biswas</span>
          </p>
        </div>
        <div className="flex gap-8">
          {['Privacy Policy', 'Terms of Service', 'Cookie Usage'].map((legal) => (
            <a
              key={legal}
              href="#"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-gray-900 transition-colors"
            >
              {legal}
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-[10px] italic">
          Visuals via{' '}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-orange-500"
          >
            Unsplash
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
