import React from 'react';
import { ArrowRight, Wand2 } from 'lucide-react';

function HeroSection() {
  return (
    <section id="home_hero" className="relative pt-32 pb-20 overflow-hidden min-h-[400px] sm:min-h-[600px]">
      <div className="absolute inset-0">
        <img 
          src="https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764543353486.jpeg" 
          alt="Charleston lifestyle photography background" 
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 via-neutral-900/10 to-neutral-900/30"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 lg:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
            HYPER-REAL LIFESTYLE VISUALS
            <span className="text-white"> CRAFTED TO CONVERT</span>
          </h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
    </section>
  );
}

export default HeroSection;
