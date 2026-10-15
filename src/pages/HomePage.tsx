import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollyCanvas from '../components/animations/ScrollyCanvas';
import FloatingPlate from '../components/animations/FloatingPlate';
import About from '../components/About';
import Dishes from '../components/Dishes';
import { ChefHat, Search, ArrowRight, Sparkles, User, ShieldCheck, Flame } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Cinematic Scrollytelling Section */}
      <section className="relative z-10">
        <ScrollyCanvas />
      </section>

      {/* Flying Plate Transition */}
      <FloatingPlate />

      {/* About Section - Integrated with the transition */}
      <About />

      {/* Signature Dishes - Higher z-index to cover fixed hero elements */}
      <section id="dishes" className="relative z-30 py-20 bg-white">
        <div className="section-divider opacity-50 mb-20" />
        <Dishes />
      </section>

      {/* Decorative Transition 1: ESSENCE */}
      <div className="relative h-[40vh] bg-white overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="section-divider opacity-30" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative"
        >
          <div className="absolute inset-0 blur-[100px] bg-orange-500/5 rounded-full" />
          <h2
            className="text-[15vw] font-black text-gray-900/[0.03] italic leading-none tracking-tighter"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ESSENCE
          </h2>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-px h-24 bg-gradient-to-b from-orange-500/50 to-transparent" />
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-500/40">
            The Core of Identity
          </p>
        </div>
      </div>

      {/* Feature Spotlight: Recipe Discovery Hub */}
      <section className="relative z-30 py-28 bg-[#fdfdfd] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative p-10 md:p-20 rounded-[3rem] bg-white border border-gray-100 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1.5 rounded-full">
                  <Sparkles size={13} className="text-orange-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-600">
                    Live AutoSuggest &amp; 3D Tilt Cards
                  </span>
                </div>
                <h2
                  className="text-4xl md:text-6xl text-gray-900 tracking-tight leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Intelligent Recipe <br />
                  <span className="italic text-orange-500">Discovery Engine</span>
                </h2>
                <p className="text-gray-500 text-base font-light leading-relaxed max-w-xl">
                  Search instantaneously across cuisines, ingredients, and prep times with
                  3D perspective cards, step-by-step culinary walkthroughs, and verified community ratings.
                </p>
                <div className="pt-4">
                  <Link
                    to="/recipes"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white rounded-full font-black uppercase tracking-[0.25em] text-[10px] hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 active:scale-95"
                  >
                    <Search size={14} />
                    <span>Explore All Recipes</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <Flame size={20} className="text-orange-500" />
                  <div className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Macro Nutrients
                  </div>
                  <p className="text-xs text-gray-400">Calories, protein, carbs &amp; fats calculated per dish.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <ShieldCheck size={20} className="text-emerald-500" />
                  <div className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Dietary Badges
                  </div>
                  <p className="text-xs text-gray-400">Vegetarian, Vegan &amp; Gluten-Free multi-filtering.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-2 col-span-2">
                  <User size={20} className="text-violet-500" />
                  <div className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Skill Matching Diagnostics
                  </div>
                  <p className="text-xs text-gray-400">Calculates difficulty compatibility directly against your personal profile.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Transition 2: CRAFT */}
      <div className="relative h-[40vh] bg-white overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="section-divider opacity-30" />
        <motion.div
          animate={{ rotate: [0, 1, -1, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <div className="absolute inset-0 blur-[120px] bg-orange-500/10 rounded-full" />
          <h2
            className="text-[15vw] font-black text-gray-900/[0.03] italic leading-none tracking-tighter"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            CRAFT
          </h2>
        </motion.div>
      </div>

      {/* Profile Callout */}
      <section className="relative z-30 py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1.5 rounded-full">
            <User size={13} className="text-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-600">
              Personalized Experience
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl text-gray-900 tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Curate Your <span className="italic text-orange-500">Culinary Identity</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.35em] max-w-xl mx-auto leading-relaxed">
            Set allergens, save preferred ingredients, and track cooking skill milestones.
          </p>
          <div>
            <Link
              to="/profile"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-black uppercase tracking-[0.25em] text-[10px] hover:bg-black transition-all shadow-lg active:scale-95"
            >
              <User size={14} />
              <span>Configure Member Profile</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative z-30 py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12 md:p-24 rounded-[3rem] text-center overflow-hidden bg-white border border-gray-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-900/[0.01] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="flex flex-col items-center gap-6 mb-12">
                <ChefHat size={32} className="text-orange-500/40" />
                <div className="h-px w-20 bg-orange-200" />
              </div>

              <h2
                className="text-5xl md:text-7xl mb-8 tracking-tighter text-gray-900"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                Join the <span className="italic text-gray-400">Culinary Vanguard</span>
              </h2>

              <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.4em] max-w-xl mx-auto mb-16 leading-loose">
                Curated inspiration, signature techniques, and early access to archival recipes.
                Pure artistry, delivered monthly.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-10">
                <input
                  type="email"
                  placeholder="Enter your digital letterbox"
                  className="w-full md:flex-grow bg-gray-50/50 border border-gray-100 rounded-2xl py-5 px-8 text-gray-900 focus:outline-none focus:border-orange-200 transition-all font-light placeholder:text-gray-300 text-sm"
                />
                <button className="w-full md:w-auto px-10 py-5 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-orange-500 transition-all shadow-xl active:scale-95">
                  Subscribe
                </button>
              </div>
              <p className="text-[9px] font-black uppercase tracking-[0.6em] text-gray-300">
                Privacy prioritized. No noise, just essence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
