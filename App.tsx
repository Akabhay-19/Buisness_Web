import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Committee } from './components/Committee';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Committee />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;