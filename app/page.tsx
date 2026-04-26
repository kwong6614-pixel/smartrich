import { CallToAction } from '../components/CallToAction';
import { Hero } from '../components/Hero';
import { IndustryExpertise } from '../components/IndustryExpertise';
import { WorkflowPipeline } from '../components/WorkflowPipeline';
import { WhyUs } from '../components/WhyUs';
import { HowWeWork } from '../components/HowWeWork';
import { TrustedBy } from '../components/TrustedBy';
import { WhoWeAre } from '../components/WhoWeAre';
import { TeamModel } from '../components/TeamModel';
import { AnimatedSection } from '../components/AnimatedSection';
import { heroData, industries, pipelineSteps, whyUsData, coreValues, howWeWork, teamRoles } from '../lib/content';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface text-text">
      <Hero data={heroData} />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-12 lg:px-10">
        <AnimatedSection animationClass="animate-slide-in-left" delay={200}>
          <TrustedBy />
        </AnimatedSection>
        <AnimatedSection animationClass="animate-fade-in-scale" delay={400}>
          <WhoWeAre />
        </AnimatedSection>
        <AnimatedSection animationClass="animate-slide-in-left" delay={500}>
          <TeamModel roles={teamRoles} />
        </AnimatedSection>
        <AnimatedSection animationClass="animate-slide-in-right" delay={600}>
          <IndustryExpertise industries={industries} coreValues={coreValues} />
        </AnimatedSection>
        <AnimatedSection animationClass="animate-fade-in-up" delay={800}>
          <WorkflowPipeline steps={pipelineSteps} />
        </AnimatedSection>
        <AnimatedSection animationClass="animate-slide-in-left" delay={1000}>
          <HowWeWork coreValues={coreValues} workPrinciples={howWeWork} />
        </AnimatedSection>
        <AnimatedSection animationClass="animate-fade-in-scale" delay={1200}>
          <WhyUs items={whyUsData} />
        </AnimatedSection>
        <AnimatedSection animationClass="animate-slide-in-right" delay={1400}>
          <CallToAction />
        </AnimatedSection>
      </div>
    </main>
  );
}
