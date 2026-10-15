import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollyCanvas from '../components/animations/ScrollyCanvas';
import FloatingPlate from '../components/animations/FloatingPlate';
import About from '../components/About';
import Dishes from '../components/Dishes';
import { ArrowRight, Search, User } from 'lucide-react';

const ExperiencePage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Cinematic Canvas Sequence Hero */}
      <section className="relative z-10">
        <ScrollyCanvas />
      </section>

      {/* Synchronized 3D Flight Transition */}
      <FloatingPlate />

      {/* Brand Philosophy Narrative */}
      <div className="bg-white text-black">
        <About />
      </div>

      {/* Signature Dishes Spotlight Reel */}
      <section className="relative z-30">
        <Dishes />
      </section>

      {/* Next Destinations CTA */}
      <section className="relative z-30 py-32 bg-white text-black px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-orange-500 text-xs font-bold uppercase tracking-[0.5em] mb-4">
              Where to Next
            </h3>
            <h2
              className="text-5xl md:text-7xl text-gray-900 mb-8 tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Continue the <span className="italic text-orange-500">Journey</span>
            </h2>
            <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.35em] max-w-xl mx-auto mb-16 leading-relaxed">
              Dive into our interactive search engine or customize your personal dietary parameters.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/recipes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-orange-500 text-white rounded-full font-black uppercase tracking-[0.25em] text-[10px] hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95"
              >
                <Search size={14} />
                <span>Explore Recipes</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/profile"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-full font-black uppercase tracking-[0.25em] text-[10px] hover:bg-black transition-all shadow-lg active:scale-95"
              >
                <User size={14} />
                <span>Culinary Profile</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
