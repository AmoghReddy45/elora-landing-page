import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LeadCaptureForm from "./LeadCaptureForm";
import { Button } from "./ui/button";

interface WaitlistModalProps {
  triggerText?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const WaitlistModal = ({
  triggerText = "Join Waitlist",
  buttonVariant = "default",
  buttonSize = "sm",
  className,
}: WaitlistModalProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} size={buttonSize} className={className}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join Our Waitlist</DialogTitle>
          <DialogDescription>
            Be among the first to experience Elora AI's revolutionary customer
            service solution.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <LeadCaptureForm
            title="Join Our Waitlist"
            description="Get early access to Elora AI's platform."
            submitButtonText="Join Waitlist"
            onSubmit={() => {
              // Close the modal after successful submission
              // The form component handles the actual submission
              setTimeout(() => setOpen(false), 3000);
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
