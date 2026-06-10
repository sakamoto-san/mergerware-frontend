import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import WhyChooseUs from './components/WhyChooseUs';
import NewsEvents from './components/NewsEvents';
import Awards from './components/Awards';
import Partners from './components/Partners';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <main className="min-h-screen bg-canvas-soft text-ink selection:bg-selection-bg selection:text-selection-fg">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Partners />
      <BentoGrid />
      <Stats />
      <WhyChooseUs />
      <NewsEvents />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
