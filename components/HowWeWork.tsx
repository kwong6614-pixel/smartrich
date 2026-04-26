import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

type HowWeWorkProps = {
  coreValues: string[];
  workPrinciples: { title: string; description: string }[];
};

export function HowWeWork({ coreValues, workPrinciples }: HowWeWorkProps) {
  const howWeWorkImages = [
    'https://www.kiggla.com/assets/img/kiggla/about/img-7.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-8.jpg',
  ];

  return (
    <section id="how-we-work" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <SectionHeading
            eyebrow="How we work"
            title="Core values and execution principles"
            description="We organize delivery around clear principles that keep US client priorities, team collaboration, and practical execution aligned."
          />
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card p-8 animate-slide-in-left image-hover-lift">
            <div className="mb-6 flex items-center gap-4">
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src={howWeWorkImages[0]}
                  alt="Core values"
                  width={60}
                  height={60}
                  className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold text-primary hover:text-primary/80 transition-colors duration-300">Core values</h3>
            </div>
            <div className="grid gap-4">
              {coreValues.map((value, index) => (
                <div key={value} className={`rounded-lg bg-primary/5 p-4 border border-primary/10 animate-fade-in-up stagger-${index + 1} hover:bg-primary/10 transition-colors duration-300`}>
                  <p className="text-muted">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-8 animate-slide-in-right image-hover-lift">
            <div className="mb-6 flex items-center gap-4">
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src={howWeWorkImages[1]}
                  alt="Work principles"
                  width={60}
                  height={60}
                  className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold text-primary hover:text-primary/80 transition-colors duration-300">Our process principles</h3>
            </div>
            <div className="space-y-4">
              {workPrinciples.map((item, index) => (
                <div key={item.title} className={`rounded-lg bg-gradient-secondary p-4 border border-primary/10 animate-fade-in-up stagger-${index + 1} hover:bg-primary/10 transition-colors duration-300`}>
                  <p className="font-semibold text-primary">{item.title}</p>
                  <p className="mt-2 text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
