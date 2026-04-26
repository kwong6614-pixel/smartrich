'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

type HeroProps = {
  data: {
    title: string;
    subtitle: string;
    bullets: string[];
  };
};

export function Hero({ data }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Array of hero background images from kiggla
  const heroImages = [
    'https://www.kiggla.com/assets/img/kiggla/about/img-1.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-2.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-3.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-4.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-5.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-6.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-7.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-8.jpg',
  ];

  // Auto-cycle through images
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-screen Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 hero-image-transition ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle absolute top-1/4 left-1/4 animate-float"></div>
        <div className="particle absolute top-1/3 right-1/3 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="particle absolute bottom-1/4 left-1/2 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="particle absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="particle absolute top-3/4 left-1/3 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center pt-16 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-snug animate-fade-in-up text-reveal max-w-2xl">
                {data.title}
              </h1>
              <p className="mb-7 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90 animate-fade-in-up stagger-2 max-w-2xl">
                {data.subtitle}
              </p>

              {/* Animated Feature Points */}
              <div className="mb-10 space-y-4 animate-fade-in-up stagger-3">
                {data.bullets.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-6 group"
                    style={{ animationDelay: `${(index + 3) * 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-white/80 group-hover:bg-white transition-all duration-300 animate-pulse-glow"></div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/40 to-transparent group-hover:from-white/80 transition-all duration-500"></div>
                    <p className="text-white/90 group-hover:text-white transition-colors duration-300 text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row animate-fade-in-up stagger-4">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-primary transition-all duration-500 btn-liquid hover:shadow-2xl hover:shadow-white/25 overflow-hidden"
                >
                  <span className="relative z-10">Start the conversation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="#workflow"
                  className="group inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:bg-white/20 hover:border-white/80 magnetic"
                >
                  <span className="mr-2">View our process</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side decorative element */}
            <div className="hidden lg:block relative">
              <div className="relative animate-fade-in-scale stagger-2">
                {/* Floating geometric shapes */}
                <div className="absolute -top-20 -right-20 w-40 h-40 border-4 border-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 -right-12 w-24 h-24 border-2 border-white/30 rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>

                {/* Central content card */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 animate-float glass-effect">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 animate-pulse-glow">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Innovation First</h3>
                    <p className="text-white/80 leading-relaxed">
                      Transforming ideas into digital reality with cutting-edge technology and expert execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <a
        href="#workflow"
        className="absolute bottom-8 right-8 z-20 animate-bounce-gentle"
        aria-label="Scroll to workflow"
      >
        <div className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300 cursor-pointer group">
          <span className="text-sm font-medium mb-2 group-hover:text-white/80">Scroll</span>
          <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </a>
    </section>
  );
}