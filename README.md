# 🎯 Job Navigator

**Special Career Roadmap Platform for Vocational High School Students**

A modern web platform built with Next.js 14, TypeScript, and Tailwind CSS to help vocational high school students manage their career journey, set daily goals, and build a professional portfolio.

---

## ✨ Features

### 🗺️ Career Roadmap
- Visualize your 3-year journey from Grade 1 to Grade 3
- Set and track major milestones (certifications, competitions, projects)
- Timeline UI showing your current position and progress

### 🎯 Daily Quest
- Set 3 daily goals every morning
- Gamified checklist with progress tracking
- GitHub-style contribution graph to visualize consistency

### 📦 Project Archive
- Upload and showcase your projects, assignments, and achievements
- Support for images, GitHub links, deployment URLs
- Tag-based organization (#React, #Python, #AWS, etc.)

### 📊 Dashboard
- Overview of your roadmap completion rate
- Recent activity log
- D-Day counter for important events (job fairs, interviews, etc.)

---

## 🚀 Getting Started

### Prerequisites
You **must** have Node.js installed to run this project.

**Download Node.js (LTS version):**
- Visit: [https://nodejs.org/](https://nodejs.org/)
- Download and install the **LTS (Long Term Support)** version
- **Restart your terminal/computer** after installation

**Verify installation:**
```bash
node -v
npm -v
```

### Installation

1. **Clone or navigate to the project directory:**
```bash
cd c:/Users/minbl/OneDrive/문서/antigravity/20260214_myportfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Visit [http://localhost:3000](http://localhost:3000)

---

## 🗄️ Database Setup (Supabase)

This project uses **Supabase** as the backend database.

### Steps:
1. Go to [https://supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to **SQL Editor** in your Supabase dashboard
4. Copy the contents of `src/supabase/schema.sql` and run it
5. Go to **Project Settings > API** and copy:
   - `URL` (Project URL)
   - `anon/public` key

6. Create a `.env.local` file in the project root:
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

7. Restart the dev server after adding the `.env.local` file

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Icons:** Lucide React
- **Deployment:** Vercel / GitHub Pages

---

## 📂 Project Structure

```
├── src/
│   ├── app/              # Next.js pages (using App Router)
│   │   ├── page.tsx      # Dashboard (homepage)
│   │   ├── roadmap/      # Career roadmap page
│   │   ├── layout.tsx    # Root layout with sidebar
│   │   └── globals.css   # Global styles
│   ├── lib/              # Utility functions
│   │   ├── utils.ts      # Class name helpers
│   │   └── supabase.ts   # Supabase client
│   └── supabase/
│       └── schema.sql    # Database schema
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 Design System

- **Primary Color:** Royal Blue (#4169E1) - Trust and reliability
- **Secondary Color:** Mint Green (#98FF98) - Growth and freshness
- **Font:** Inter (Google Fonts)
- **Responsive:** Mobile-first design

---

## 📝 License

This project is for educational purposes.

---

## 🤝 Contributing

Feel free to fork this project and customize it for your own needs!

---

**Built with ❤️ for vocational high school students pursuing their dreams.**
