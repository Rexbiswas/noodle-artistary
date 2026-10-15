<div align="center">

# 🍜 Noodle Artistry & Food AutoSuggest Engine
### *A Next-Generation Culinary Discovery Platform with 3D Physics Cards & Cinematic Canvas Scrollytelling*

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.35-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

<p align="center">
  <b>Noodle Artistry</b> is an interactive, high-performance culinary discovery engine and recipe search experience.
  It merges <b>cinematic canvas-driven scrollytelling</b>, <b>physics-based 3D cursor parallax cards</b>,
  <b>real-time multi-dimensional auto-suggestions</b>, and <b>personalized nutritional & skill-matching diagnostics</b>.
</p>

[✨ Project Highlights](#-project-highlights) •
[🏗️ Architecture & Modules](#-architecture--modules) •
[⚡ AutoSuggest & Filter Engine](#-autosuggest--filter-engine) •
[📱 Components Breakdown](#-components-breakdown) •
[🛠️ Tech Stack](#️-tech-stack) •
[📂 File Structure](#-file-structure) •
[🚀 Quick Start](#-quick-start) •
[📖 Recipe Data Schema](#-recipe-data-schema)

---

</div>

## 📖 Overview

Standard recipe catalogs and food apps often suffer from static, uninspiring search bars and flat lists. **Noodle Artistry** re-imagines the culinary browsing experience from the ground up:

1. **Cinematic Hero Storytelling**: As users scroll, a 120-frame image sequence renders frame-by-frame on an HTML5 canvas, visually telling the story of an artisanal noodle dish coming together.
2. **Scroll-Driven Spatial Handover**: A 3D floating bowl animates seamlessly off the canvas and flies into a designated table setting in the editorial narrative section.
3. **Instant Auto-Suggest Engine**: Client-side sub-millisecond filtering across dish titles and ingredients with instantaneous faceted filters (diet, meal type, cuisine, and preparation time).
4. **3D Cursor-Responsive Cards**: Recipe previews tilt dynamically in 3D space according to cursor position with natural spring physics.
5. **Personalized Culinary Profile & Matching**: Compares user culinary skill tiers (*Novice*, *Intermediate*, *Master Chef*) with recipe difficulty to display instant skill compatibility (*"Perfect Match"*, *"Challenge Mode"*, *"Advanced Project"*), alongside allergen warnings and local review persistence.

---

## ✨ Project Highlights

- 🎬 **120-Frame Canvas Scrollytelling**: Custom HTML5 canvas engine scrubbing through high-res rendered frames synchronized with scroll progress via Framer Motion.
- 🎴 **Interactive 3D Tilt Cards**: 3D perspective transforms with spring smoothing (`useMotionValue`, `useTransform`, `useSpring`) that follow the user's cursor.
- 🔍 **Multi-Dimensional AutoSuggest**:
  - **Text Query**: Live regex/substring match across recipe title and all listed ingredients.
  - **Meal Type**: Breakfast, Lunch, Dinner.
  - **Dietary Preference**: Vegetarian, Vegan, Gluten-Free.
  - **Cuisine**: Indian, Chinese, Continental.
  - **Time Range**: Under 15m, 30m, 45m, or Any duration.
- 🥗 **Nutritional Drawer & Deep Recipe Insights**:
  - Macro nutritional breakdown (Calories, Protein, Carbs, Fat).
  - Ingredient checklist with exact measurements and step-by-step instructions.
  - Dynamic skill-level matching against user profile.
  - Verified user reviews and interactive rating submission stored in `localStorage`.
- 👤 **Custom Culinary Profile Management**:
  - Skill tier selection with animated indicators.
  - Interactive chip-tag manager for preferred ingredients, avoided foods, and allergies.
  - Real-time dietary restriction toggles.
- 🧭 **Adaptive Glassmorphic Pill Header**:
  - Seamlessly transforms from a transparent full-width navbar to an ultra-clean floating glassmorphic pill on scroll.

---

## 🏗️ Architecture & Modules

```
                             [ User Scroll Input ]
                                       │
            ┌──────────────────────────┴──────────────────────────┐
            ▼                                                     ▼
   [ ScrollyCanvas.tsx ]                                [ App.tsx Navbar ]
  120-frame canvas sequence                            Dynamic pill transition
            │                                                     │
            ▼                                                     ▼
   [ FloatingPlate.tsx ]                               [ Dishes.tsx Spotlight ]
  3D flight physics handover                           Fullscreen sticky showcase
            │                                                     │
            └──────────────────────────┬──────────────────────────┘
                                       │
                                       ▼
                             [ SearchRecipes.tsx ]
                     Instant Client-side Filter & AutoSuggest
                                       │
                     ┌─────────────────┴─────────────────┐
                     ▼                                   ▼
              [ TiltCard (3D) ]               [ RecipeDetails Modal ]
            Cursor-follow physics              • Nutrition drawer
                                               • Step-by-step guide
                                               • User reviews (localStorage)
                                               • Skill matching
                                                         │
                                                         ▼
                                                [ UserProfile.tsx ]
                                             Preferences & dietary tags
```

---

## ⚡ AutoSuggest & Filter Engine

The search and filter architecture runs entirely on client-side memory via React `useMemo`, ensuring immediate 0ms response latency without unnecessary network roundtrips:

```typescript
const filteredRecipes = useMemo(() => {
  return recipesData.filter((recipe) => {
    // 1. Text Search across Title and Ingredients list
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      recipe.name.toLowerCase().includes(query) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(query)
      );

    // 2. Faceted Filters
    const matchesMeal = selectedMeal === "All" || recipe.mealType === selectedMeal;
    const matchesDiet = selectedDiet === "All" || recipe.diet === selectedDiet;
    const matchesCuisine = selectedCuisine === "All" || recipe.cuisine === selectedCuisine;
    const matchesTime = recipe.cookTime <= maxTime;

    return matchesSearch && matchesMeal && matchesDiet && matchesCuisine && matchesTime;
  });
}, [searchQuery, selectedMeal, selectedDiet, selectedCuisine, maxTime]);
```

---

## 📱 Components Breakdown

### 1. `ScrollyCanvas.tsx` (`src/components/animations/`)
- Preloads 120 sequential frames from `/public/food-sequence/`.
- Ties window scroll (`scrollYProgress`) to active frame indices.
- Utilizes an HTML5 `<canvas>` rendering pipeline with responsive aspect-ratio cover calculations.

### 2. `FloatingPlate.tsx` (`src/components/animations/`)
- Calculates dynamic spatial coordinates using `useAnimationFrame` and `getBoundingClientRect()`.
- Launches a 3D flying noodle dish across 3D viewport space that rotates 360° and lands directly inside the `#plate-destination` container in the About section.

### 3. `About.tsx` (`src/components/About.tsx`)
- Editorial brand narrative section styled with classic serif typography (`Cormorant Garamond`).
- Features the receiving slot for the flying plate transition and philosophy copy.

### 4. `Dishes.tsx` (`src/components/Dishes.tsx`)
- Viewport-locked sticky presentation showcasing signature recipes (*Zen Garden Ramen*, *Velvet Chili Silk*, *Harvest Umami Bowl*).
- Scroll-driven backdrop scale and typography fade transitions.

### 5. `SearchRecipes.tsx` (`src/components/SearchRecipes.tsx`)
- Houses the search bar, category chips, time slider/pills, and the grid of 3D tilt cards.
- Manages search states and triggers the full-detail recipe modal on card click.

### 6. `RecipeDetails.tsx` (`src/components/RecipeDetails.tsx`)
- Sliding modal window showing:
  - **Macro Nutrients**: Calories, Protein, Carbs, Fat.
  - **Skill Match Diagnostic**: Compares profile cooking tier against dish difficulty.
  - **Preparation & Cooking Timeline**: Visual time and difficulty badges.
  - **Ingredients & Preparation**: Formatted checkable ingredients with step-by-step instructions.
  - **Reviews & Ratings**: Add review form with instant `localStorage` persistence.

### 7. `UserProfile.tsx` (`src/components/UserProfile.tsx`)
- Interactive culinary dashboard for the user.
- Allows configuring:
  - Skill level: *Novice*, *Intermediate*, *Master Chef*.
  - Dietary restrictions: *Vegetarian*, *Vegan*, *Gluten-Free*, *None*.
  - Tag inputs with dynamic addition and removal for **Preferred Ingredients**, **Avoided Ingredients**, and **Allergens**.

---

## 🛠️ Tech Stack

| Category | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Library** | [React](https://react.dev/) | `^19.2.0` | UI architecture & concurrent features |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `~5.9.3` | Strict end-to-end type safety |
| **Build Tool** | [Vite](https://vitejs.dev/) | `^7.3.1` | Instant HMR and optimized production build |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^3.4.19` | Utility-first responsive styling |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) | `^12.35.0` | 3D spring physics, scroll progress, and animations |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.577.0` | Ultra-clean iconography |

---

## 📂 File Structure

```text
noodle-artistary-food-auto-suggest/
├── public/
│   ├── food-sequence/             # 120-frame image sequence for scrollytelling
│   │   ├── frame_000_delay-0.066s.png
│   │   └── ...
│   └── images/                    # Static image assets
├── src/
│   ├── assets/                    # Project asset files
│   ├── components/
│   │   ├── animations/
│   │   │   ├── FloatingPlate.tsx  # Dynamic 3D flying plate physics transition
│   │   │   └── ScrollyCanvas.tsx  # 120-frame HTML5 canvas scrollytelling
│   │   ├── About.tsx              # Editorial philosophy & plate target landing
│   │   ├── Dishes.tsx             # Signature dishes spotlight sticky showcase
│   │   ├── Overlay.tsx            # Hero title and subtitle animation overlay
│   │   ├── RecipeDetails.tsx      # Nutritional macros, ingredients & reviews modal
│   │   ├── SearchRecipes.tsx      # Live AutoSuggest engine & 3D tilt cards
│   │   ├── StarRating.tsx         # Interactive & display star rating component
│   │   └── UserProfile.tsx        # Culinary profile, skill tier & tag manager
│   ├── data/
│   │   └── recipes.json           # Comprehensive recipe catalog with nutrition & reviews
│   ├── App.tsx                    # Main layout, adaptive navbar, scroll listeners
│   ├── App.css                    # Custom CSS keyframes and typography rules
│   ├── index.css                  # Tailwind directives and utility classes
│   └── main.tsx                   # React root entry point
├── index.html                     # HTML template with Google Fonts
├── package.json                   # Project dependencies and npm scripts
├── tailwind.config.js             # Tailwind CSS theme configuration
├── tsconfig.json                  # TypeScript compiler settings
└── vite.config.ts                 # Vite bundler configuration
```


## 📖 Recipe Data Schema

Recipes in `src/data/recipes.json` adhere to the following TypeScript interface:

```typescript
interface Recipe {
  id: number;
  name: string;
  mealType: "Breakfast" | "Lunch" | "Dinner";
  diet: "Vegetarian" | "Vegan" | "Gluten-Free" | "None";
  cuisine: "Indian" | "Chinese" | "Continental" | string;
  cookTime: number; // In minutes
  rating: number; // e.g., 4.8
  image: string; // URL or local path
  prepTime: string; // e.g., "15 mins"
  difficulty: "Easy" | "Medium" | "Hard";
  nutrition?: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
  };
  ingredients: string[];
  instructions: string[];
  reviews?: {
    name: string;
    comment: string;
    rating: number;
  }[];
}
```

### Example Recipe Entry
```json
{
  "id": 1,
  "name": "Veg Noodles",
  "mealType": "Dinner",
  "diet": "Vegetarian",
  "cuisine": "Chinese",
  "cookTime": 20,
  "rating": 4.8,
  "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800",
  "prepTime": "20 mins",
  "difficulty": "Easy",
  "nutrition": {
    "calories": "350 kcal",
    "protein": "12g",
    "carbs": "55g",
    "fat": "8g"
  },
  "ingredients": [
    "Noodles",
    "Cabbage",
    "Carrots",
    "Capsicum",
    "Soy Sauce",
    "Oil",
    "Garlic"
  ],
  "instructions": [
    "Boil noodles until tender and drain.",
    "Heat oil in a wok and sauté garlic.",
    "Add vegetables and stir-fry on high heat.",
    "Toss in noodles with sauces."
  ],
  "reviews": [
    {
      "name": "Aria",
      "comment": "Perfectly balanced!",
      "rating": 5
    }
  ]
}
```


