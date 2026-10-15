import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import UserProfile from '../components/UserProfile';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfdfd] pt-32 pb-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/60 px-4 py-1.5 rounded-full mb-6">
            <User size={13} className="text-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-600">
              Personal Culinary Sanctuary
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-gray-900 tracking-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Culinary <span className="italic text-orange-500">Identity</span>
          </h1>

          <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.35em] max-w-2xl leading-relaxed mb-8">
            Tailor your flavor profile, define allergen boundaries, and unlock tailored
            recipe skill-matching diagnostics.
          </p>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
        </motion.div>
      </section>

      {/* Main Profile Component */}
      <main className="max-w-7xl mx-auto px-4 md:px-6">
        <UserProfile />
      </main>
    </div>
  );
};

export default ProfilePage;
