import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

type Step = {
  title: string;
  description: string;
};

type WorkflowPipelineProps = {
  steps?: Step[];
};

const defaultSteps: Step[] = [
  {
    title: 'Opportunity Acquisition',
    description: 'Identify and qualify US software opportunities with enterprise buyers.',
  },
  {
    title: 'Interview Scheduling',
    description: 'Coordinate stakeholders and global teams to confirm fit and timing.',
  },
  {
    title: 'Client Interviews',
    description: 'Facilitate direct conversations to validate needs and team alignment.',
  },
  {
    title: 'Offer',
    description: 'Finalize commercial terms, scope, and operational structure.',
  },
  {
    title: 'Task Assignment',
    description: 'Translate scope into work packages and assign the right teams.',
  },
  {
    title: 'Delivery',
    description: 'Execute, refine, and report progress through iterative delivery cycles.',
  },
];

export function WorkflowPipeline({ steps = defaultSteps }: WorkflowPipelineProps) {
  const workflowImages = [
    'https://www.kiggla.com/assets/img/kiggla/about/img-1.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-2.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-3.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-4.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-5.jpg',
    'https://www.kiggla.com/assets/img/kiggla/about/img-6.jpg',
  ];

  return (
    <section id="workflow" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <SectionHeading
            eyebrow="Workflow pipeline"
            title="Six-step process from opportunity to delivery"
            description="Our workflow keeps execution clean, aligned, and easy to follow across every engagement."
          />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className={`card p-6 animate-fade-in-up stagger-${(index % 6) + 1} image-hover-lift`}>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-lg font-bold text-white animate-pulse-glow">
                  {index + 1}
                </div>
                <div className="image-hover-zoom rounded-lg overflow-hidden">
                  <Image
                    src={workflowImages[index] || workflowImages[0]}
                    alt={step.title}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary hover:text-primary/80 transition-colors duration-300">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkflowPipeline;
