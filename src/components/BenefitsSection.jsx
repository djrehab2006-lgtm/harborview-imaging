import React from 'react';
import { TrendingUp, Shield, Target, Zap, Award } from 'lucide-react';

function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Increase customer confidence",
      description: "Realistic lifestyle imagery helps customers visualize your products in real-world contexts, building immediate trust."
    },
    {
      icon: Target,
      title: "Reduce hesitation",
      description: "Show exactly what products look like in use, eliminating doubt and accelerating purchase decisions."
    },
    {
      icon: TrendingUp,
      title: "Boost conversion rates",
      description: "Professional lifestyle visuals consistently outperform plain product shots in driving sales and engagement."
    },
    {
      icon: Zap,
      title: "Improve ad performance",
      description: "Eye-catching, cinematic imagery stops the scroll and dramatically improves click-through rates."
    },
    {
      icon: Award,
      title: "Strengthen brand identity",
      description: "Consistent, high-quality imagery across all products creates a cohesive, premium brand experience."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-primary-50 via-white to-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-6">
            Why It Works
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Product listings with lifestyle visuals consistently deliver measurable business results:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col p-8 rounded-2xl bg-white border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl text-center bg-primary-600 rounded-2xl p-12 shadow-2xl">
          <p className="text-2xl font-bold text-white mb-4">
            Customers don't want to guess what a product will look like in real life.
          </p>
          <p className="text-xl text-primary-100">
            We show them.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
