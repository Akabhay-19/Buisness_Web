import React from 'react';
import { FEST_NAME, FEST_DATE } from '../constants';
import { ChevronDown, Calendar, MapPin, Database } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      {/* Grid overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.8),rgba(15,23,42,0.95))] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 mb-8 border border-indigo-500/50 rounded-full bg-indigo-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)]">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-indigo-300 text-sm font-mono tracking-widest uppercase">Decisions Driven by Data</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6 drop-shadow-2xl">
          BUSINESS <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient-x">INTELLIGENCE</span>
          <br/> SUMMIT
        </h1>
        
        <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-400 font-light leading-relaxed">
          Decoding the future of corporate strategy through analytics. Join 3,000+ visionaries for the ultimate test of <span className="text-indigo-400 font-semibold">quantitative skill</span> and <span className="text-purple-400 font-semibold">leadership</span>.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 font-mono text-sm">
          <div className="flex items-center text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
            <Calendar className="h-4 w-4 mr-2 text-indigo-400" />
            <span>{FEST_DATE}</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-slate-700"></div>
          <div className="flex items-center text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
            <MapPin className="h-4 w-4 mr-2 text-indigo-400" />
            <span>Main Data Center, Quad</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#events" className="group relative px-8 py-4 bg-slate-900 text-white rounded-lg font-bold text-lg overflow-hidden border border-indigo-500/50 hover:border-indigo-400 transition-all shadow-[0_0_20px_rgba(79,70,229,0.15)] hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]">
            <div className="absolute inset-0 w-full h-full bg-indigo-600/10 group-hover:bg-indigo-600/20 transition-colors"></div>
            <span className="relative flex items-center">
              Explore Analytics <Database className="ml-2 h-4 w-4" />
            </span>
          </a>
          <a href="#register" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-indigo-600/20">
            Register for Access
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-500 hover:text-indigo-400 transition-colors">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
};