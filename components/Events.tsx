import React from 'react';
import { EVENTS } from '../constants';
import { Calendar, Clock, MapPin, DollarSign, ArrowRight, Activity } from 'lucide-react';

export const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-900/30 rounded-full mb-4">
             <Activity className="h-4 w-4 text-indigo-400 mr-2" />
             <span className="text-indigo-400 font-mono text-xs tracking-widest uppercase">Live Challenges</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">The Analytics Arena</h3>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400">
            Select your domain. Analyze the variables. Optimize for victory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <div key={event.id} className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] hover:-translate-y-1 overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-80"></div>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-slate-950/80 backdrop-blur border border-slate-700 text-indigo-300 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {event.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col relative z-20 -mt-8">
                <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl shadow-xl flex-1 flex flex-col">
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{event.title}</h4>
                    <p className="text-slate-400 text-sm mb-6 flex-1 border-b border-slate-800 pb-4">{event.description}</p>
                    
                    <div className="space-y-3 mb-6 font-mono text-xs">
                    <div className="flex items-center text-slate-300">
                        <Calendar className="h-3 w-3 mr-3 text-indigo-500" />
                        {event.date}
                    </div>
                    <div className="flex items-center text-slate-300">
                        <Clock className="h-3 w-3 mr-3 text-indigo-500" />
                        {event.time}
                    </div>
                    <div className="flex items-center text-slate-300">
                        <MapPin className="h-3 w-3 mr-3 text-indigo-500" />
                        {event.venue}
                    </div>
                    <div className="flex items-center text-emerald-400 font-semibold mt-2">
                        <DollarSign className="h-3 w-3 mr-3" />
                        Pool: {event.prizePool}
                    </div>
                    </div>

                    <button className="w-full py-3 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white rounded-lg font-medium transition-all flex items-center justify-center border border-indigo-500/20 hover:border-indigo-500">
                    Enter Challenge <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};