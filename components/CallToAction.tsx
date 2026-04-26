import Image from 'next/image';

export function CallToAction() {
  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center text-white lg:text-left">
            <p className="text-sm uppercase tracking-wide text-white/80">Take the next step</p>
            <h2 className="mt-6 text-4xl font-bold leading-tight">
              Activate your US pipeline with global execution excellence.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 lg:mx-0">
              Partner with a team that blends US opportunity insight, operator-led direction, and global engineering capability for measurable outcomes.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@smartrich.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary transition hover:bg-white/90"
              >
                Contact SMARTRICH
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Review our pipeline
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl image-hover-lift animate-fade-in-scale">
              <Image
                src="https://www.kiggla.com/assets/img/kiggla/about/img-8.jpg"
                alt="Professional collaboration"
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl animate-float glass-effect border border-white/20">
              <p className="text-sm font-semibold text-primary">Ready to transform</p>
              <p className="mt-2 text-sm text-muted">
                Let's discuss your next project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
