import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VennDiagram from "./VennDiagram";

interface IndustryTabProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

interface IndustryPointProps {
  title: string;
  description: string;
}

interface SocialProofSectionProps {}

const IndustryTab = ({ name, isActive, onClick }: IndustryTabProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-medium text-sm transition-all duration-300 rounded-full ${
        isActive
          ? "text-white bg-primary shadow-md"
          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
      }`}
    >
      {name}
    </button>
  );
};

const SaaSPoints: IndustryPointProps[] = [
  {
    title: "Feature Adoption Walkthroughs",
    description:
      "Seamless in-app guidance, faster onboarding, and real-time customer training at scale.",
  },
  {
    title: "Automated Ticket Deflection",
    description:
      "Reduce support volume by intelligently addressing common issues before tickets are created.",
  },
  {
    title: "24/7 Onboarding Assistance",
    description:
      "Provide continuous support and guidance without human intervention.",
  },
  {
    title: "User Behavior Analytics",
    description:
      "Gain insights into how users interact with your product to optimize features and improve retention.",
  },
];

const FintechPoints: IndustryPointProps[] = [
  {
    title: "Fraud Detection and Transaction Alerts",
    description:
      "Real-time alerts for unusual transactions, guiding customers with secure, compliant support.",
  },
  {
    title: "Account Recovery Automation",
    description:
      "Streamline account recovery processes with secure verification and guided assistance.",
  },
  {
    title: "Transaction Dispute Support",
    description:
      "Guide customers through dispute resolution with clear steps and real-time updates.",
  },
  {
    title: "Financial Advisory Assistance",
    description:
      "Provide personalized financial guidance and product recommendations based on user behavior and goals.",
  },
];

const HealthcarePoints: IndustryPointProps[] = [
  {
    title: "HIPAA-Compliant Patient Support",
    description:
      "Appointment reminders, intake form assistance, and patient queries handled securely.",
  },
  {
    title: "Secure Medical Q&A Agents",
    description:
      "Provide accurate medical information while maintaining strict compliance standards.",
  },
  {
    title: "Real-time Appointment Scheduling",
    description:
      "Simplify the booking process with intelligent scheduling assistance.",
  },
  {
    title: "Treatment Plan Adherence",
    description:
      "Help patients follow prescribed treatments with timely reminders and progress tracking.",
  },
];

const RealEstatePoints: IndustryPointProps[] = [
  {
    title: "Instant Lead Capture and Qualification",
    description:
      "Never miss a potential buyer or seller with 24/7 response that qualifies leads and schedules agent consultations.",
  },
  {
    title: "Listing Information On Demand",
    description:
      "Answer detailed questions about your properties instantly, providing accurate information on pricing and features.",
  },
  {
    title: "Team Productivity",
    description:
      "Free your estate agents to focus on closing deals by automating follow-ups and routine client communications.",
  },
  {
    title: "Client Journey Management",
    description:
      "Guide clients through each step of their transaction with timely updates and process explanations.",
  },
];

const SocialProofSection = ({}: SocialProofSectionProps) => {
  const [activeTab, setActiveTab] = useState("SaaS");
  const [activePoint, setActivePoint] = useState<number>(0);

  const tabs = ["SaaS", "Fintech", "Healthcare", "Real Estate"];

  const getActivePoints = () => {
    switch (activeTab) {
      case "SaaS":
        return SaaSPoints;
      case "Fintech":
        return FintechPoints;
      case "Healthcare":
        return HealthcarePoints;
      case "Real Estate":
        return RealEstatePoints;
      default:
        return SaaSPoints;
    }
  };

  const handlePointClick = (index: number) => {
    setActivePoint(index);
  };

  return (
    <section className="py-28 bg-[#F0F4FF]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-normal text-primary">
              Built for Industries Where Experience Matters
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Tailored AI solutions for SaaS, Fintech, Healthcare, and Real
              Estate.
            </p>

            {/* Industry Tabs */}
            <div className="flex flex-wrap gap-3 mt-8">
              {tabs.map((tab) => (
                <IndustryTab
                  key={tab}
                  name={tab}
                  isActive={activeTab === tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setActivePoint(0); // Reset active point when changing tabs
                  }}
                />
              ))}
            </div>

            <div className="space-y-6 mt-8">
              {getActivePoints().map((point, index) => (
                <div key={index} className="space-y-2">
                  <div
                    className="flex items-start gap-4 cursor-pointer"
                    onClick={() => handlePointClick(index)}
                  >
                    <div className="text-primary mt-1 transition-transform duration-300">
                      <ArrowRight
                        className={`h-5 w-5 transform ${activePoint === index ? "" : "-rotate-45"} transition-transform duration-300`}
                      />
                    </div>
                    <p className="text-xl font-medium">{point.title}</p>
                  </div>
                  <div
                    className={`ml-9 overflow-hidden transition-all duration-300 ${activePoint === index ? "h-[80px] opacity-100 bg-primary/5 p-3 rounded-lg" : "h-0 opacity-0"}`}
                  >
                    <p className="text-base text-gray-500">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="group border-primary text-primary hover:text-primary hover:bg-primary/5 mt-4 px-6 py-2 rounded-full"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right side: Venn Diagram */}
          <div className="w-full rounded-xl flex items-center justify-center h-[600px] overflow-visible">
            <VennDiagram className="scale-110 transform translate-x-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
