import React from 'react';
import { ArrowRight } from 'lucide-react';

function LowQualityToHD() {
  return (
    <section id="portfolio" className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-6">
            We can take poor quality stock photos and make them into a HD lifestyle shoot.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="aspect-[4/5] relative">
              <img 
                src="https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764423234647.webp?search_term=gold,blue,beaded,bracelet,jewelry,product,white,background"
                alt="Before: Low-quality stock product photo of gold and blue beaded bracelet"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-neutral-900/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white text-sm font-semibold">BEFORE: Low-Quality Stock Photo</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="aspect-[4/5] relative">
              <img 
                src="https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764423234643.jpeg?search_term=bracelet,jewelry,lifestyle,model,woman,outdoor,natural,light,bokeh,hd"
                alt="After: HD lifestyle shot of bracelet worn by woman outdoors with natural lighting"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary-600 px-4 py-2 rounded-lg shadow-lg">
                <span className="text-white text-sm font-semibold">AFTER: HD Lifestyle Result</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioShowcase() {
  const beforeAfterSets = [
    {
      before: {
        url: "https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764542637940.jpeg",
        alt: "Before: Stock product photo of tan fringe jacket with turquoise necklace on retail display"
      },
      after: {
        url: "https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764542637946.jpeg",
        alt: "After: Cinematic lifestyle shot of fringe jacket on Charleston cobblestone street with historic brick buildings"
      }
    },
    {
      before: {
        url: "https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764514525624.jpeg?search_term=white,dress,blue,embroidered,product,clothing",
        alt: "Before: Stock product photo of white dress with blue embroidery"
      },
      after: {
        url: "https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764514525637.jpeg?search_term=charleston,cobblestone,street,white,dress,lifestyle,model,historic,spanish,moss",
        alt: "After: Cinematic lifestyle shot on Charleston cobblestone street with Spanish moss"
      }
    },
    {
      before: {
        url: "https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764422863224.jpeg?search_term=plaid,shirt,button,down,product,clothing,menswear",
        alt: "Before: Stock product photo of plaid button-down shirt"
      },
      after: {
        url: "https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764422863230.jpeg?search_term=charleston,rainbow,row,historic,street,model,menswear,lifestyle",
        alt: "After: Cinematic lifestyle shot on Charleston historic street"
      }
    },
    {
      before: {
        url: "https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764422989909.jpeg?search_term=olive,green,quilted,vest,product,outerwear,menswear",
        alt: "Before: Stock product photo of olive green quilted vest"
      },
      after: {
        url: "https://content-studio.biela.dev/content-studio/692aebe3b18c3df6b262e090/1764420595862-692aebe3b18c3df6b262e090/1764422989914.jpeg?search_term=charleston,historic,pastel,buildings,cobblestone,lifestyle,model,menswear,spanish,moss",
        alt: "After: Cinematic lifestyle shot on Charleston historic street with pastel buildings"
      }
    }
  ];

  return (
    <>
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-600 mb-6">
              Your products. Elevated.
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-6">
              FROM STOCK PHOTO TO LIFESTYLE SCENE
            </h2>
            <p className="text-lg text-neutral-600">
              See the dramatic transformation: standard retailer product shots reimagined into stunning, photorealistic scenes that capture attention and drive sales.
            </p>
          </div>

          <div className="space-y-24">
            {beforeAfterSets.map((set, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-[4/5] relative">
                      <img 
                        src={set.before.url}
                        alt={set.before.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-neutral-900/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <span className="text-white text-sm font-semibold">BEFORE: Stock Photo</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-[4/5] relative">
                      <img 
                        src={set.after.url}
                        alt={set.after.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-primary-600 px-4 py-2 rounded-lg shadow-lg">
                        <span className="text-white text-sm font-semibold">AFTER: Cinematic Result</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                {index < beforeAfterSets.length - 1 && (
                  <div className="flex items-center justify-center">
                    <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="/portfolio" className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all duration-200">
              View Our Work
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <LowQualityToHD />
    </>
  );
}

export default PortfolioShowcase;