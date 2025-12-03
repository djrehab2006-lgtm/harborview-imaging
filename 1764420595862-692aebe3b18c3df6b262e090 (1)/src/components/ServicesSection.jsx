import React from 'react';
import { CheckCircle } from 'lucide-react';

function ServicesSection() {
  const qualities = [
    "Clean, realistic lighting",
    "Natural shadows and texture",
    "Real-world environments",
    "Consistent branding across collections",
    "Editorial-quality detail"
  ];

  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-xl leading-8 text-neutral-600 max-w-3xl mx-auto mb-8">
            We take standard retailer product photos and reimagine them into stunning, lifelike scenes that capture attention, build trust, and increase sales. No shoots, no locations, no complications — just polished, believable images that elevate your entire brand.
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-6">
            What We Do
          </h2>
          <p className="text-lg text-neutral-600">
            We transform basic stock photos into high-quality, photorealistic lifestyle images that look like they were taken on location.
          </p>
          <p className="text-lg text-neutral-600 mt-4">
            Whether your brand sells apparel, accessories, home goods, wellness products, or specialty retail, our imagery makes your customers feel the product before they buy it.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Every image is crafted with intention:</h3>
            <div className="space-y-4">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-primary-600" />
                  </div>
                  <p className="text-lg text-neutral-700">{quality}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
