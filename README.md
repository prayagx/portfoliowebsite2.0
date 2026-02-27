# Prayag Gupta | AI Engineer Portfolio

A premium, highly-interactive portfolio website designed to showcase projects, skills, and experience in Artificial Intelligence, Backend Optimization, and Data Engineering. 

Built with a focus on modern web aesthetics ("AI Dark Mode"), smooth micro-interactions, and scalable architecture.

## 🔗 Live URL
[Link to Live Site]((Insert Netlify URL Here))

---

## 🛠️ Architecture & Tech Stack

This project is built using modern front-end tooling to ensure lightning-fast performance and a modular codebase.

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (using the modern CSS-variable engine `@theme`)
- **Animations:** Framer Motion (for Scroll Reveals and FadeIns)
- **Icons:** Lucide React
- **Hosting:** Netlify (configured for SPA routing via `public/_redirects`)

## ✨ Key Features & Highlights

- **Dynamic UI & Micro-interactions:**
  - **Mouse-Tracking Glow:** A custom React `useEffect` hook maps the user's cursor coordinates to a fixed radial gradient overlay, creating a "flashlight" effect across the dark background.
  - **Framer Motion Scroll Reveals:** Every section uses a centralized `<FadeIn>` wrapper component that dynamically animates content into the viewport based on scroll position.
  - **Advanced CSS Textures:** Utilizes a highly subtle inline SVG noise filter (`mix-blend-overlay`) and geometric CSS grid to provide structural depth without compromising performance.
  - **Glassmorphism:** Leverages Tailwind's `backdrop-blur` utilities to create frosted glass cards (`.glass-card`) that react and lift on hover.
  
- **Backend-less Contact System:** 
  - The contact form is fully functional upon deployment, utilizing **FormSubmit** to route JSON `POST` requests directly to the configured email inbox, bypassing the need for a dedicated backend server or direct API keys in the client-side code.

---

## 📂 Repository Structure

```text
├── public/                # Static assets (Favicon, PDF Resume, _redirects)
├── src/
│   ├── components/        # Reusable UI architecture (Header, Footer, FadeIn, MouseGlow)
│   ├── sections/          # Major layout blocks (Hero, About, Skills, Projects, Contact)
│   ├── index.css          # Tailwind v4 configuration and global design system tokens
│   ├── App.tsx            # Root component handling the layout stack
│   └── main.tsx           # React entry point
├── package.json           # Dependencies and build scripts
└── vite.config.ts         # Vite bundler configuration
```

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prayagx/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🧑‍💻 Author
**Prayag Gupta**  
*Aspiring AI Engineer focused on backend optimization and intelligent automation.*
- [LinkedIn](https://www.linkedin.com/in/prayag-gupta-3920b022a)
- [GitHub](https://github.com/prayagx)
