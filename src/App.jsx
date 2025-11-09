import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  return (
    <div className="min-h-screen relative text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;