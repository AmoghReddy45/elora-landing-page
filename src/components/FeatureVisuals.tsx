import React from "react";
import {
  CheckCircle2,
  MessageSquare,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export const ReliableResolutionVisual = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6">
      <div className="aspect-video relative">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4 border-b pb-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-auto flex items-center justify-center">
                <img
                  src="/Original Logo Symbol.png"
                  alt="Elora Logo"
                  className="h-full w-auto"
                />
              </div>
              <span className="font-semibold tracking-normal">
                Elora Estate
              </span>
            </div>
            <div className="flex items-center gap-2 text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm">
              <CheckCircle2 size={16} />
              <span>95% Resolution</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col space-y-3 overflow-y-auto">
            <div className="bg-muted/30 p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">
                How can I help you find your ideal property today?
              </p>
            </div>

            <div className="bg-primary/5 p-3 rounded-lg max-w-[80%] self-end border-r-2 border-primary">
              <p className="text-sm">
                I'm interested in properties in the Cedar Park area with at
                least 3 bedrooms
              </p>
            </div>

            <div className="bg-muted/30 p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">
                I'd be happy to help! I see you're looking for at least 3
                bedrooms in Cedar Park. What's your approximate budget range?
              </p>
            </div>

            <div className="bg-primary/5 p-3 rounded-lg max-w-[80%] self-end border-r-2 border-primary">
              <p className="text-sm">Around $450,000 to $550,000</p>
            </div>

            <div className="bg-muted/30 p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">
                Great! I've found 8 properties matching your criteria. Would you
                like to schedule a viewing with one of our agents? We have
                availability tomorrow at 3:00 PM or Saturday at 10:00 AM.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border">
            <div className="flex items-center justify-center bg-green-50 text-green-600 py-2 rounded-lg">
              <CheckCircle2 size={16} className="mr-2" />
              <p className="text-sm font-medium">Lead Qualified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ActionDrivenVisual = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6">
      <div className="aspect-video relative">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4 border-b pb-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-auto flex items-center justify-center">
                <img
                  src="/Original Logo Symbol.png"
                  alt="Elora Logo"
                  className="h-full w-auto"
                />
              </div>
              <span className="font-semibold tracking-normal">Elora SaaS</span>
            </div>
            <div className="flex items-center gap-2 text-blue-500 bg-blue-50 px-3 py-1 rounded-full text-sm">
              <ArrowRight size={16} />
              <span>Processing</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col space-y-3 overflow-y-auto">
            <div className="bg-primary/5 p-3 rounded-lg max-w-[80%] self-end border-r-2 border-primary">
              <p className="text-sm">
                I need to upgrade my subscription plan but keep getting an error
              </p>
            </div>

            <div className="bg-muted/30 p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">
                I can help with that upgrade. Looking at your account, I see
                you're trying to move from Basic to Pro. There's an outstanding
                invoice that's blocking the upgrade. Would you like me to
                process that payment now?
              </p>
            </div>

            <div className="bg-primary/5 p-3 rounded-lg max-w-[80%] self-end border-r-2 border-primary">
              <p className="text-sm">
                Yes, please process it with my card on file
              </p>
            </div>

            <div className="bg-muted/30 p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">
                Payment processed successfully! I've now upgraded your account
                to the Pro plan. All new features are active immediately. I've
                also applied a 10% loyalty discount for the inconvenience.
              </p>
            </div>

            <div className="bg-primary/5 p-3 rounded-lg max-w-[80%] self-end border-r-2 border-primary">
              <p className="text-sm">Thank you!</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border">
            <div className="flex items-center justify-center bg-blue-50 text-blue-600 py-2 rounded-lg">
              <ArrowRight size={16} className="mr-2" />
              <p className="text-sm font-medium">Issue Resolved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GrowthVisual = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6">
      <div className="aspect-video relative">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4 border-b pb-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-auto flex items-center justify-center">
                <img
                  src="/Original Logo Symbol.png"
                  alt="Elora Logo"
                  className="h-full w-auto"
                />
              </div>
              <span className="font-semibold tracking-normal">
                Elora Dashboard
              </span>
            </div>
            <div className="flex items-center gap-2 text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm">
              <BarChart3 size={16} />
              <span>Analytics</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col overflow-y-auto text-xs">
            {/* Dashboard Overview */}
            <div className="text-sm text-muted-foreground mb-3">
              A detailed overview of your metrics, usage, and customers
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {/* Potential Clients */}
              <div className="bg-secondary/30 p-3 rounded-lg">
                <div className="flex items-center gap-1.5 mb-1 text-muted-foreground">
                  <div className="p-1 rounded-full bg-primary/10">
                    <CheckCircle2 size={12} className="text-primary" />
                  </div>
                  <span>Potential Clients</span>
                </div>
                <div className="text-lg font-semibold">245</div>
              </div>

              {/* Pipeline Value */}
              <div className="bg-secondary/30 p-3 rounded-lg">
                <div className="flex items-center gap-1.5 mb-1 text-muted-foreground">
                  <div className="p-1 rounded-full bg-primary/10">
                    <MessageSquare size={12} className="text-primary" />
                  </div>
                  <span>Pipeline Value</span>
                </div>
                <div className="text-lg font-semibold">$2,500,430</div>
              </div>

              {/* Open Sessions */}
              <div className="bg-secondary/30 p-3 rounded-lg">
                <div className="flex items-center gap-1.5 mb-1 text-muted-foreground">
                  <div className="p-1 rounded-full bg-primary/10">
                    <MessageSquare size={12} className="text-primary" />
                  </div>
                  <span>Open Sessions</span>
                </div>
                <div className="text-lg font-semibold">4</div>
              </div>

              {/* Domain Performance */}
              <div className="bg-secondary/30 p-3 rounded-lg">
                <div className="flex items-center gap-1.5 mb-1 text-muted-foreground">
                  <div className="p-1 rounded-full bg-primary/10">
                    <CheckCircle2 size={12} className="text-primary" />
                  </div>
                  <span>Domain Performance</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  <span className="text-xs">elora.ai</span>
                </div>
              </div>
            </div>

            {/* Cash Flow Section */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="p-1 rounded-full bg-primary/10">
                    <ArrowRight size={12} className="text-primary" />
                  </div>
                  <span className="font-medium">Cash Flow</span>
                  <span className="text-muted-foreground text-xs">
                    Last 30 days
                  </span>
                </div>
                <span className="text-primary text-xs">See All</span>
              </div>

              <div className="flex gap-4 mb-2">
                {/* Money In */}
                <div className="flex-1 bg-secondary/20 p-2 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">
                    MONEY IN
                  </div>
                  <div className="font-semibold">$5,083</div>
                </div>
                {/* Money Out */}
                <div className="flex-1 bg-secondary/20 p-2 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">
                    MONEY OUT
                  </div>
                  <div className="font-semibold">$485</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Stripe</span>
                    <span>$3,514</span>
                  </div>
                  <div className="h-1.5 bg-secondary/30 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[70%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Crypto Academy</span>
                    <span>$1,817</span>
                  </div>
                  <div className="h-1.5 bg-secondary/30 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[40%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
