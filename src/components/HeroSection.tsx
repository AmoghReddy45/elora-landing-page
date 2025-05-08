import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import HeroMockup from "./HeroMockup";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  backgroundPattern?: string;
  mockupImage?: string;
  onPrimaryCtaClick?: () => void;
}

const HeroSection = ({
  headline = "Conversational AI Platform for Customer Service",
  subheadline = "Transform customer service with reliable, compliant AI agents that autonomously resolve up to 95% of complex inquiries — end-to-end, actionably, and always on-brand.",
  primaryCtaText = "Request Early Access",
  backgroundPattern = "/abstract-lines-pattern.svg",
  mockupImage = "/app-mockup.png",
  onPrimaryCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-auto min-h-[500px] bg-background flex items-center justify-center overflow-hidden pt-0">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 bg-white">
        <div
          className="absolute inset-0 opacity-25 z-0"
          style={{
            backgroundImage: `url(${backgroundPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 z-0" />
      </div>

      {/* Content container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <div className="mb-4">
          <span className="text-primary bg-primary/20 px-4 py-2 rounded-full text-sm font-medium inline-block">
            The Future of AI Customer Engagement
          </span>
        </div>
        <h1
          className={cn(
            "font-display text-3xl md:text-4xl lg:text-5xl font-bold",
            "text-foreground mb-6 tracking-tight leading-tight",
          )}
        >
          {headline}
        </h1>
        <p
          className={cn(
            "font-sans text-base md:text-lg lg:text-xl",
            "text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed",
          )}
        >
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <Button
            size="lg"
            onClick={onPrimaryCtaClick}
            className="text-base px-6 py-4 h-auto font-medium w-full sm:w-auto shadow-sm hover:bg-primary/90 active:scale-[0.98] transition-all duration-300"
          >
            {primaryCtaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Mockup Image */}
        <div className="relative w-full max-w-4xl mx-auto mt-4 z-20">
          <div className="w-full overflow-hidden rounded-t-2xl shadow-2xl">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
