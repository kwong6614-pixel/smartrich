import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

type Item = {
  title: string;
  description: string;
};

type WhyUsProps = {
  items: Item[];
};

export function WhyUs({ items }: WhyUsProps) {
  const whyUsImages = [
    'https://www.kiggla.com/assets/img/kiggla/about/img-2.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-4.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-5.jpg',
  ];

  return (
    <section id="why-us" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <SectionHeading
            eyebrow="Why SMARTRICH"
            title="Operator-led delivery with scalable transparency"
            description="Our model is built for buyers who need predictable outcomes, strong governance, and growth-ready execution."
          />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.title} className={`card p-8 text-center animate-fade-in-scale stagger-${(index % 3) + 1} image-hover-lift`}>
              <div className="image-hover-zoom rounded-lg overflow-hidden mb-6 mx-auto w-32 h-32">
                <Image
                  src={whyUsImages[index] || whyUsImages[0]}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-primary hover:text-primary/80 transition-colors duration-300">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
