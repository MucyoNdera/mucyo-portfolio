import React from 'react';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Publications } from './components/sections/Publications';
import { GeoVisuals } from './components/sections/GeoVisuals';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50/50 to-amber-50/30">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <ErrorBoundary>
        <Experience />
      </ErrorBoundary>
      <ErrorBoundary>
        <Skills />
      </ErrorBoundary>
      <ErrorBoundary>
        <Projects />
      </ErrorBoundary>
      <ErrorBoundary>
        <Publications />
      </ErrorBoundary>
      <ErrorBoundary>
        <GeoVisuals />
      </ErrorBoundary>
      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;