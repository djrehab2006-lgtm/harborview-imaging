import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="home_header" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764603839507.png?search_term=harborview,imaging,logo,cursive,signature,text" 
              alt="Harborview Imaging Co. Logo" 
              className="h-16"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors">What We Do</a>
            <Link to="/portfolio" className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors">Portfolio</Link>
            <a href="/#benefits" className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors">Why It Works</a>
            <a href="/#about" className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors">About</a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors">
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
