import React from 'react';
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
  return (
    <main className="min-h-screen bg-canvas-soft text-ink selection:bg-selection-bg selection:text-selection-fg">
      <Navbar />
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
