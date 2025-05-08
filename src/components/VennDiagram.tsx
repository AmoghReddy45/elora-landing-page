import React from "react";

interface VennDiagramProps {
  className?: string;
}

const VennDiagram: React.FC<VennDiagramProps> = ({ className = "" }) => {
  // Define the positions for the outer circles - evenly distributed around the ellipse
  const outerCircles = [
    {
      id: "systematic",
      label: "Systematic Agentic Network",
      position: "top",
      number: "01",
      className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
      id: "self-healing",
      label: "Self-Healing",
      position: "top-right",
      number: "02",
      className:
        "absolute top-[15%] right-[5%] -translate-y-1/4 translate-x-1/4",
    },
    {
      id: "autonomous",
      label: "Autonomous Resolution",
      position: "bottom-right",
      number: "03",
      className:
        "absolute bottom-[15%] right-[5%] translate-y-1/4 translate-x-1/4",
    },
    {
      id: "action",
      label: "Action-Driven AI",
      position: "bottom",
      number: "04",
      className: "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    },
    {
      id: "seamless",
      label: "Seamless Integration",
      position: "bottom-left",
      number: "05",
      className:
        "absolute bottom-[15%] left-[5%] translate-y-1/4 -translate-x-1/4",
    },
    {
      id: "tailored",
      label: "Tailored Experiences",
      position: "top-left",
      number: "06",
      className:
        "absolute top-[15%] left-[5%] -translate-y-1/4 -translate-x-1/4",
    },
  ];

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Intersecting circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full aspect-square max-w-[90%] max-h-[90%]">
          {/* Render the outer labels without circles */}
          {outerCircles.map((circle) => (
            <div key={circle.id} className={circle.className}>
              <div className="flex flex-col items-center">
                <div className="text-xs text-primary/60 mb-1">
                  {circle.number}
                </div>
                <div className="text-center px-2 text-sm font-medium text-gray-700">
                  {circle.label}
                </div>
              </div>
            </div>
          ))}

          {/* Center logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="/Original Logo Symbol.png"
              alt="Elora AI"
              className="w-16 h-16"
            />
          </div>

          {/* Connecting lines (simplified) */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <g fill="none" stroke="rgba(79, 70, 229, 0.1)" strokeWidth="0.5">
              {/* Circular paths connecting the outer circles */}
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="45"
                transform="rotate(30 50 50)"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="45"
                transform="rotate(60 50 50)"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="45"
                transform="rotate(90 50 50)"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="45"
                transform="rotate(120 50 50)"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="45"
                transform="rotate(150 50 50)"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VennDiagram;
