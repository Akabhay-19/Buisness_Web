import React from 'react';
import { FEST_NAME } from '../constants';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-2xl font-bold tracking-tighter text-white block mb-2">{FEST_NAME}</span>
            <p className="text-slate-500 text-sm">© 2025 Innovision Fest Committee. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="mailto:contact@innovision.edu" className="text-slate-400 hover:text-indigo-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};