import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TailorMadeSection from "./TailorMadeSection";
import SocialProofSection from "./SocialProofSection";
import LeadCaptureForm from "./LeadCaptureForm";
import WaitlistModal from "./WaitlistModal";
import { Button } from "./ui/button";

const Home = () => {
  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    const header = document.getElementById("site-header");

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        header?.classList.add("-translate-y-full");
      } else {
        // Scrolling up or at top
        header?.classList.remove("-translate-y-full");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm py-3 px-6 md:px-10 transition-transform duration-300"
        id="site-header"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 pl-0">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2"
            >
              <div className="h-8 w-auto flex items-center justify-center">
                <img
                  src="/Original Logo Symbol.png"
                  alt="Elora Logo"
                  className="h-full w-auto"
                />
              </div>
              <span className="font-bold text-xl tracking-normal">
                Elora AI
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-medium hover:text-primary transition-colors tracking-wide"
            >
              Features
            </a>
            <a
              href="#tailormade"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("tailormade")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-medium hover:text-primary transition-colors tracking-wide"
            >
              Tailor-Made AI
            </a>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-medium hover:text-primary transition-colors tracking-wide"
            >
              Industries
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-medium hover:text-primary transition-colors tracking-wide"
            >
              Get Started
            </a>
          </nav>

          <div className="flex items-center gap-4 pr-0">
            <WaitlistModal buttonSize="sm" />
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="hero" className="py-12 md:py-16">
          <HeroSection />
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-28 bg-muted/50">
          <FeaturesSection />
        </section>

        {/* Tailor Made AI Agent Section */}
        <section id="tailormade">
          <TailorMadeSection />
        </section>

        {/* Social Proof Section */}
        <section id="testimonials" className="py-20 md:py-28">
          <SocialProofSection />
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="py-20 md:py-28 bg-primary/5">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-normal">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who have transformed their
              business with our solution.
            </p>
            <div className="max-w-md mx-auto">
              <LeadCaptureForm
                title="Join Our Waitlist"
                description="Get early access to Elora AI's platform."
                submitButtonText="Join Waitlist"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-auto flex items-center justify-center">
                  <img
                    src="/Original Logo Symbol.png"
                    alt="Elora Logo"
                    className="h-full w-auto"
                  />
                </div>
                <span className="font-bold text-xl tracking-normal">
                  Elora AI
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Transforming customer service with conversational AI solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-base">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-base">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-base">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Elora AI, Inc. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
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
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
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
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
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
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
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
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
