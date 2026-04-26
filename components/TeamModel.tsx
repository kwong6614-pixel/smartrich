import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

type Role = {
  title: string;
  subtitle: string;
  description: string;
};

type TeamModelProps = {
  roles: Role[];
};

export function TeamModel({ roles }: TeamModelProps) {
  const teamImages = [
    'https://www.kiggla.com/assets/img/kiggla/teams/img-1.jpg',
    'https://www.kiggla.com/assets/img/kiggla/teams/img-2.jpg',
    'https://www.kiggla.com/assets/img/kiggla/teams/img-3.jpg',
    'https://www.kiggla.com/assets/img/kiggla/teams/img-4.jpg',
  ];

  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <SectionHeading
            eyebrow="Team model"
            title="Four core roles that power every engagement"
            description="A structured team layout keeps client engagement, execution, opportunity capture, and coordination aligned without creating clutter."
          />
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {roles.map((role, index) => (
            <div key={role.title} className="card p-8">
              <div className="flex items-start gap-6">
                <Image
                  src={teamImages[index] || teamImages[0]}
                  alt={role.title}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary">{role.title}</h3>
                  <p className="mt-1 text-sm uppercase tracking-wide text-muted">{role.subtitle}</p>
                  <p className="mt-4 text-muted leading-relaxed">{role.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
