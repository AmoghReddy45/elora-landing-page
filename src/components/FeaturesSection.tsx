import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2Icon, Workflow, BarChart3Icon } from "lucide-react";
import {
  ReliableResolutionVisual,
  ActionDrivenVisual,
  GrowthVisual,
} from "./FeatureVisuals";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  visual: React.ReactNode;
  isReversed?: boolean;
}

const Feature = ({
  icon,
  title,
  description,
  visual,
  isReversed = false,
}: FeatureProps) => {
  return (
    <div className="flex flex-col gap-2.5 items-center mb-5.5 lg:mb-7 lg:flex-row lg:items-center lg:gap-4.5">
      {/* Content Section */}
      <div
        className={`w-full lg:w-1/2 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div
        className={`w-full lg:w-1/2 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
      >
        {visual}
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle2Icon className="h-6 w-6" />,
      title: "Reliable, End-to-End Resolution",
      description:
        "Our AI agents resolve up to 95% of customer queries instantly with higher first-contact resolution. The system automatically identifies needs, processes requests, and delivers real-time solutions with seamless human handoffs when needed. Handle 5x more queries while 75% of inquiries are resolved in minutes, ensuring consistent and accurate responses every time.",
      visual: <ReliableResolutionVisual />,
      isReversed: false,
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Action-Driven, Not Just Conversational",
      description:
        "Beyond simple chat, our AI performs actions, processes transactions, and delivers real solutions in real-time. Never make your users wait for help, even at 2 A.M. The platform integrates with your systems to actually solve problems, reducing resolution time by up to 80%.",
      visual: <ActionDrivenVisual />,
      isReversed: true,
    },
    {
      icon: <BarChart3Icon className="h-6 w-6" />,
      title: "Onboarding and Growth Without Friction",
      description:
        "Cut support costs and scale your customer service operations without adding complexity. Our platform acts as your agents' super-assistant, tackling FAQs and reducing repetitive tasks. This empowers your support team with improved workflows, easier ticket management, less burnout, and faster onboarding for new team members.",
      visual: <GrowthVisual />,
      isReversed: false,
    },
  ];

  return (
    <section id="features" className="bg-[#F9F9FC] py-4.5 lg:py-5.5">
      <div className="container mx-auto px-4">
        <div className="mb-3.5 lg:mb-5.5 text-center">
          <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A New Standard for Customer Support
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Our AI platform transforms how businesses handle customer service,
            delivering exceptional experiences at scale
          </p>
        </div>

        <div className="space-y-7 lg:space-y-9">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              visual={feature.visual}
              isReversed={feature.isReversed}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
