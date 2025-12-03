import React from 'react';
import { MapPin, Award, Users } from 'lucide-react';

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-6">
              Photorealistic Lifestyle Imagery
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Based in Charleston, SC, we specialize in transforming standard product photography into photorealistic lifestyle imagery. By combining cutting-edge AI technology with expert graphic design, we create images that look professionally shot on location — without the cost, time, or logistics of traditional photography.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Whether you need lifestyle shots for e-commerce, marketing materials, or social media content, we deliver hyper-realistic imagery that makes customers feel the product before they buy — driving confidence, reducing hesitation, and increasing conversions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Local to Charleston</h4>
                  <p className="text-neutral-600 text-sm">Based in Charleston, SC, serving e-commerce brands and retailers nationwide.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 flex-shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Expert Quality</h4>
                  <p className="text-neutral-600 text-sm">AI-powered scene creation refined by expert design for photorealistic results.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 flex-shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Client-Focused</h4>
                  <p className="text-neutral-600 text-sm">Fast turnaround without sacrificing quality — perfect for busy e-commerce teams.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764535460930.jpeg?search_term=charleston,man,hat,boat,dock,spanish,moss,sunset,lowcountry" 
                alt="Charleston lowcountry scene with boat dock and Spanish moss"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white px-8 py-6 rounded-xl shadow-xl border-2 border-primary-500">
              <p className="text-3xl font-bold">Charleston, SC</p>
              <p className="text-primary-50">Where creativity meets southern charm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;