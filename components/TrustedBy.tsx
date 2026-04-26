'use client';

import Image from 'next/image';

export function TrustedBy() {
  const logos = [
    'https://www.kiggla.com/assets/img/kiggla/marquee/logo-1.png',
    'https://www.kiggla.com/assets/img/kiggla/marquee/logo-2.png',
    'https://www.kiggla.com/assets/img/kiggla/marquee/logo-3.png',
    'https://www.kiggla.com/assets/img/kiggla/marquee/logo-4.png',
    'https://www.kiggla.com/assets/img/kiggla/marquee/logo-5.png',
    'https://www.kiggla.com/assets/img/kiggla/marquee/logo-6.png',
    'https://www.kiggla.com/assets/img/kiggla/marquee/logo-7.png',
    'https://www.kiggla.com/assets/img/kiggla/marquee/logo-8.png',
    'https://www.kiggla.com/assets/img/kiggla/marquee/logo-9.png',
    'https://www.kiggla.com/assets/img/kiggla/marquee/logo-10.png',
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary mb-4">Trusted by leading innovators</h2>
        </div>
        <div className="overflow-hidden space-y-6">
          <div className="flex animate-marquee-row gap-8">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="group flex h-32 min-w-[16rem] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/10 p-4 shadow-soft transition-all duration-300 hover:bg-white/20"
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={220}
                  height={100}
                  className="h-24 w-auto object-contain object-center opacity-100 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-row-reverse gap-8">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="group flex h-32 min-w-[16rem] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/10 p-4 shadow-soft transition-all duration-300 hover:bg-white/20"
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={220}
                  height={100}
                  className="h-24 w-auto object-contain object-center opacity-100 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-marquee-row {
          animation: marquee 32s linear infinite;
        }
        .animate-marquee-row-reverse {
          animation: marquee-reverse 32s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}