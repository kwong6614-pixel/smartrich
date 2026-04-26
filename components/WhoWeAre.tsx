import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

export function WhoWeAre() {
  const industries = [
    {
      title: 'Startups & SMEs',
      description: 'Empowering early-stage companies with scalable, cost-effective tech solutions to drive rapid innovation.',
      image: 'https://www.kiggla.com/assets/img/kiggla/industry/img-1.jpg',
    },
    {
      title: 'Enterprise IT',
      description: 'Optimizing large-scale infrastructure with secure, high-performance, and adaptable enterprise IT systems.',
      image: 'https://www.kiggla.com/assets/img/kiggla/industry/img-2.jpg',
    },
    {
      title: 'Healthcare & Life Sciences',
      description: 'Delivering secure, compliant digital tools to improve care delivery and streamline patient data workflows.',
      image: 'https://www.kiggla.com/assets/img/kiggla/industry/img-3.jpg',
    },
    {
      title: 'Financial Services & FinTech',
      description: 'Building secure digital banking platforms with automation, analytics, and full compliance management.',
      image: 'https://www.kiggla.com/assets/img/kiggla/industry/img-4.jpg',
    },
    {
      title: 'Retail & E-Commerce',
      description: 'Enhancing customer experience with AI, seamless omnichannel integration, and smart inventory control.',
      image: 'https://www.kiggla.com/assets/img/kiggla/industry/img-5.jpg',
    },
    {
      title: 'Manufacturing & Logistics',
      description: 'Streamlining operations with IoT, predictive analytics, and supply chain automation at every stage.',
      image: 'https://www.kiggla.com/assets/img/kiggla/industry/img-6.jpg',
    },
  ];

  return (
    <section id="who-we-are" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Who We Are</h2>
          <p className="text-xl text-muted">Redefining What's Possible</p>
        </div>

        {/* Mission, Vision, Story */}
        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          <div className="card p-8 text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
            <p className="text-muted leading-relaxed">
              At SMARTRICH, our mission is to bridge the gap between cutting-edge technology and real business outcomes. We help organizations unlock their full potential through strategic IT consulting and intelligent solutions.
            </p>
          </div>
          <div className="card p-8 text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
            <p className="text-muted leading-relaxed">
              We're committed to creating customized, scalable, and secure systems that empower businesses to innovate faster, adapt smarter, and grow sustainably in an ever-evolving digital landscape.
            </p>
          </div>
          <div className="card p-8 text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Story</h3>
            <p className="text-muted leading-relaxed">
              Founded with a passion for technology and business excellence, SMARTRICH has grown from a small consulting firm to a global leader in digital transformation, serving clients across multiple industries.
            </p>
          </div>
        </div>

        {/* Impact Across Industries */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="Discover our Impact"
              title="Across Industries"
              description="We deliver tailored solutions that drive innovation and growth in diverse sectors."
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div key={industry.title} className={`card p-6 group image-hover-lift animate-fade-in-up stagger-${(index % 6) + 1}`}>
                <div className="image-hover-zoom rounded-lg overflow-hidden mb-4">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">{industry.title}</h3>
                <p className="text-muted leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}