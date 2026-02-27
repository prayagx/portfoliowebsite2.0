import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { MouseGlow } from './components/MouseGlow';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary selection:bg-primary-500/30 selection:text-primary-500 font-sans overflow-hidden">
      <MouseGlow />

      <div className="relative z-10">
        <Header />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
