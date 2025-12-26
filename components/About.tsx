import React from 'react';
import { FEST_DESCRIPTION, FEST_NAME } from '../constants';
import { Target, Users, BarChart2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
              alt="Data Analytics Dashboard" 
              className="relative rounded-xl shadow-2xl border border-slate-700 w-full h-[400px] object-cover bg-slate-800"
            />
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-slate-900/95 backdrop-blur-xl p-6 rounded-xl border border-indigo-500/30 shadow-2xl hidden md:block">
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-indigo-400">15+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Simulations</div>
                </div>
                <div className="text-center border-l border-slate-700 pl-8">
                  <div className="text-3xl font-mono font-bold text-purple-400">$20k</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Grant Pool</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0">
            <div className="flex items-center space-x-2 mb-4">
               <span className="h-px w-8 bg-indigo-500"></span>
               <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">The Mission</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Data</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Decision</span>
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
              {FEST_DESCRIPTION} {FEST_NAME} is not just a fest; it's a data-driven ecosystem. We bring together future analysts, strategists, and leaders to solve complex business problems using real-world datasets.
            </p>

            <div className="space-y-6">
              <div className="flex group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white group-hover:text-indigo-300 transition-colors">Data-Backed Simulations</h4>
                  <p className="mt-2 text-slate-400 text-sm">Competitions powered by live market data and real corporate APIs.</p>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">Networking Nodes</h4>
                  <p className="mt-2 text-slate-400 text-sm">Connect with data scientists, investment bankers, and fintech pioneers.</p>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:border-pink-500/50 transition-colors">
                    <Target className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white group-hover:text-pink-300 transition-colors">Precision & Strategy</h4>
                  <p className="mt-2 text-slate-400 text-sm">Where accuracy wins. Prove your hypothesis with statistical rigor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};