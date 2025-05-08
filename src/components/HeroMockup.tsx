import React from "react";
import { CheckCircle2 } from "lucide-react";

const HeroMockup = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 relative">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="h-8 w-auto flex items-center justify-center">
              <img
                src="/Original Logo Symbol.png"
                alt="Elora Logo"
                className="h-full w-auto"
              />
            </div>
            <span className="font-semibold tracking-normal">Elora AI</span>
          </div>
          <div className="flex items-center gap-2 text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm">
            <CheckCircle2 size={16} />
            <span>Active</span>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 bg-gradient-to-b from-white to-gray-50">
          <div className="p-6">
            <div className="text-center mb-8">
              <h3 className="text-lg font-medium mb-1">Ask our AI anything</h3>
              <p className="text-sm text-muted-foreground">
                Get instant answers to your questions
              </p>
            </div>

            <div className="space-y-6">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-primary/5 p-3 rounded-lg max-w-[80%] border-r-2 border-primary">
                  <p className="text-sm">
                    Hi, I just saw a charge on my account that I don't
                    recognize. Can you help?
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex justify-start">
                <div className="bg-muted/30 p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">
                    Of course! Let's take care of that. Could you please confirm
                    the last four digits of the card associated with the
                    transaction?
                  </p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-primary/5 p-3 rounded-lg max-w-[80%] border-r-2 border-primary">
                  <p className="text-sm">Sure, it's 1038.</p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex justify-start">
                <div className="bg-muted/30 p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">
                    Thank you. I see a transaction for $6,200 to Lighthouse
                    Properties attempted today at 1:00 PM. Is this the charge
                    you're referring to?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-2 bg-muted/20 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Ask me any question"
              className="flex-1 bg-transparent border-none outline-none text-sm"
              disabled
            />
            <button className="text-primary">
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
                className="lucide lucide-send"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Fade-out effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/75 via-white/50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroMockup;
