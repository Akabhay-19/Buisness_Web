import React from 'react';
import { COMMITTEE } from '../constants';
import { Linkedin } from 'lucide-react';

export const Committee: React.FC = () => {
  return (
    <section id="committee" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">Leadership</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Organizing Committee</h3>
          <p className="mt-4 text-slate-400">The minds behind the magic.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMMITTEE.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative w-40 h-40 rounded-full mx-auto object-cover border-4 border-slate-800 group-hover:border-indigo-500 transition-colors duration-300"
                />
              </div>
              <h4 className="text-xl font-bold text-white">{member.name}</h4>
              <p className="text-indigo-400 text-sm mb-3">{member.role}</p>
              <a href="#" className="inline-flex items-center justify-center text-slate-500 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};