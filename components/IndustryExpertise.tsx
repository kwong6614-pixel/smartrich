import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

type IndustryExpertiseProps = {
  industries: string[];
  coreValues: string[];
};

export function IndustryExpertise({ industries, coreValues }: IndustryExpertiseProps) {
  const industryImages = [
    'https://www.kiggla.com/assets/img/kiggla/industry/img-1.jpg',
    'https://www.kiggla.com/assets/img/kiggla/industry/img-2.jpg',
    'https://www.kiggla.com/assets/img/kiggla/industry/img-3.jpg',
    'https://www.kiggla.com/assets/img/kiggla/industry/img-4.jpg',
    'https://www.kiggla.com/assets/img/kiggla/industry/img-5.jpg',
    'https://www.kiggla.com/assets/img/kiggla/industry/img-6.jpg',
  ];

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <SectionHeading
            eyebrow="Industry & expertise"
            title="Expertise designed for US pipeline and global execution"
            description="We combine deep software capability with disciplined workflow and operator-led client alignment."
          />
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card p-8">
            <h3 className="mb-6 text-2xl font-semibold text-primary">Our Services</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry, index) => (
                <div key={industry} className="group relative overflow-hidden rounded-xl bg-gradient-secondary p-6 transition hover:shadow-lg">
                  <Image
                    src={industryImages[index] || industryImages[0]}
                    alt={industry}
                    width={300}
                    height={200}
                    className="mb-4 h-32 w-full rounded-lg object-cover transition group-hover:scale-105"
                  />
                  <h4 className="text-lg font-semibold text-text">{industry}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-8">
            <h3 className="mb-6 text-2xl font-semibold text-primary">Core Values</h3>
            <div className="grid gap-4">
              {coreValues.map((value) => (
                <div key={value} className="rounded-lg bg-primary/5 p-4 border border-primary/10">
                  <p className="text-muted">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
