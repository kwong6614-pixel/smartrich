'use client';

import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return { ref, isIntersecting, hasIntersected };
}

export function AnimatedSection({
  children,
  className = '',
  animationClass = 'animate-fade-in-up',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  delay?: number;
}) {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`${className} ${hasIntersected ? animationClass : 'opacity-0 translate-y-6'}`}
      style={{
        animationDelay: hasIntersected ? `${delay}ms` : undefined,
        animationFillMode: hasIntersected ? 'forwards' : undefined,
      }}
    >
      {children}
    </div>
  );
}