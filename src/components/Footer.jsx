import React from 'react';

function Footer() {
  return (
    <footer id="home_footer" className="bg-neutral-900 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src="https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764603839507.png?search_term=harborview,imaging,logo,cursive,signature,text" 
                alt="Harborview Imaging Co. Logo" 
                className="h-16"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Transforming product photography into cinematic masterpieces through AI and expert design.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-500 transition-colors text-sm">What We Do</a>
              </li>
              <li>
                <a href="#portfolio" className="text-neutral-400 hover:text-primary-500 transition-colors text-sm">Portfolio</a>
              </li>
              <li>
                <a href="#benefits" className="text-neutral-400 hover:text-primary-500 transition-colors text-sm">Why It Works</a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-primary-500 transition-colors text-sm">About</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-primary-500 transition-colors text-sm">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              © 2024 Harborview Imaging Co. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm">
              Crafted with precision by{' '}
              <a 
                href="https://biela.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Biela.dev
              </a>
              , powered by{' '}
              <a 
                href="https://teachmecode.ae/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                TeachMeCode® Institute
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
