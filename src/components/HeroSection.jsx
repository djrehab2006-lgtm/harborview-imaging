import React from 'react';
import { ArrowRight, Wand2 } from 'lucide-react';

function HeroSection() {
  return (
    <section id="home_hero" className="relative pt-24 overflow-hidden">
      <div className="relative w-full h-[35vh] overflow-hidden bg-neutral-900">
        <img 
          src="https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1765278943238.jpeg" 
          alt="Woman in white dress walking on Charleston cobblestone street with pastel historic buildings and palm trees"
          className="w-full h-full object-cover object-[center_15%]"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent">
          <div className="mx-auto max-w-4xl text-center px-6">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl drop-shadow-lg">
              HYPER-REAL LIFESTYLE VISUALS
              <span className="text-white"> CRAFTED TO CONVERT</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
    </section>
  );
}

export default HeroSection;