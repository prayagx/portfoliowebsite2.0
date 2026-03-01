import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Dashboard from './sections/Dashboard';
import Projects from './sections/Projects';
import AITestCases from './sections/AITestCases';
import Contact from './sections/Contact';
import { MeshBackground } from './components/MeshBackground';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary selection:bg-primary-500/30 selection:text-primary-500 font-sans overflow-hidden">
      <MeshBackground />
      <CustomCursor />

      <div className="relative z-10">
        <Header />

        <main>
          <Hero />
          <Dashboard />
          <About />
          <Projects />
          <AITestCases />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
