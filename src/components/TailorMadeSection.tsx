import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TailorMadeSection = () => {
  const [activePoint, setActivePoint] = useState<number>(0);

  const points = [
    {
      title: "Built on a System of Specialized AI Agents",
      description:
        "Combine modular, task-specific agents that collaborate to resolve complex customer journeys end-to-end.",
    },
    {
      title: "Flex to Your Business, Scale Without Limits",
      description:
        "Seamlessly expand support capacity as you grow — without sacrificing speed, trust, or personalization.",
    },
    {
      title: "Self-Healing Agents That Adapt and Recover Automatically",
      description:
        "Agents learn from real interactions, roll back safely when needed, and maintain peak performance with minimal oversight.",
    },
  ];

  const handlePointClick = (index: number) => {
    setActivePoint(index);
  };

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-normal">
              Build Your AI — Tailor-Made for Your Business
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Deploy AI agents designed to match your goals, your systems, and
              your standards — without requiring AI expertise. Integrate
              directly into your workflows, systems, and knowledge base,
              empowering your agents to take real action on behalf of your
              customers.
            </p>

            <div className="space-y-6 mt-8">
              {points.map((point, index) => (
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
              Discover How
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Agent Interface Visual */}
          <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto lg:ml-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-auto flex items-center justify-center">
                  <img
                    src="/Original Logo Symbol.png"
                    alt="Elora Logo"
                    className="h-full w-auto"
                  />
                </div>
                <span className="font-semibold tracking-normal">
                  Elora Agent
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check-circle"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Online</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  How can I help you today?
                </p>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border-l-2 border-primary">
                <div className="flex items-start gap-2">
                  <p className="text-sm flex-1">
                    I want to update the agent with our new shipping policy
                  </p>
                  <div className="flex-shrink-0 text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-file-text"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" x2="8" y1="13" y2="13" />
                      <line x1="16" x2="8" y1="17" y2="17" />
                      <line x1="10" x2="8" y1="9" y2="9" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-2 text-green-500 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Document uploaded successfully</span>
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  I'll help you update the agent with the new shipping policy.
                  I've received your document. Would you like me to extract the
                  key points or implement the entire policy as is?
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-center bg-green-50 text-green-600 py-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check-circle mr-2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p className="font-medium">Your Agent is ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailorMadeSection;
