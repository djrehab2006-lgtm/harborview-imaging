import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="home_header" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src="https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1765212014534.png?search_term=harborview,imaging,co,logo,elegant,typography" 
              alt="Harborview Imaging Co. Logo" 
              className="h-[180px] w-auto object-contain -my-10"
              style={{ imageRendering: 'auto', WebkitFontSmoothing: 'antialiased' }}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-xs font-medium text-neutral-700 hover:text-primary-600 transition-colors">
              What We Do
            </a>
            <Link to="/portfolio" className="text-xs font-medium text-neutral-700 hover:text-primary-600 transition-colors">
              Portfolio
            </Link>
            <a href="/#benefits" className="text-xs font-medium text-neutral-700 hover:text-primary-600 transition-colors">
              Why It Works
            </a>
            <a href="/#about" className="text-xs font-medium text-neutral-700 hover:text-primary-600 transition-colors">
              About
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-xs font-semibold text-white hover:bg-primary-700 transition-colors shadow-sm">
              Get Started
            </a>
          </nav>

          <button 
            className="md:hidden p-2 ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4">
          <nav className="flex flex-col gap-4">
            <a href="/#services" className="text-xs font-medium text-neutral-700 hover:text-primary-600 transition-colors">
              What We Do
            </a>
            <Link to="/portfolio" className="text-xs font-medium text-neutral-700 hover:text-primary-600 transition-colors">
              Portfolio
            </Link>
            <a href="/#benefits" className="text-xs font-medium text-neutral-700 hover:text-primary-600 transition-colors">
              Why It Works
            </a>
            <a href="/#about" className="text-xs font-medium text-neutral-700 hover:text-primary-600 transition-colors">
              About
            </a>
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 transition-colors shadow-sm">
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;