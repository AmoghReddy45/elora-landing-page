import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";
import { submitLeadForm } from "@/api/leads";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

interface LeadCaptureFormProps {
  title?: string;
  description?: string;
  submitButtonText?: string;
  onSubmit?: (values: FormValues) => void;
}

const LeadCaptureForm = ({
  title = "Request a Demo",
  description = "See how Elora AI can transform your customer service experience.",
  submitButtonText = "Join Waitlist",
  onSubmit,
}: LeadCaptureFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    if (onSubmit) {
      onSubmit(values);
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Call the submitLeadForm function directly instead of using fetch
      const result = await submitLeadForm(values);

      if (!result.success) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      console.log("Form submitted successfully:", values);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        "There was an error submitting your information. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-center font-display">
          {title}
        </CardTitle>
        <CardDescription className="text-center text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-10 space-y-5">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <h3 className="text-xl font-medium text-center font-display">
              Thank you for your interest!
            </h3>
            <p className="text-center text-muted-foreground leading-relaxed">
              A member of our team will contact you shortly to schedule your
              personalized demo.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                form.reset();
              }}
              className="mt-2"
            >
              Request another demo
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-5"
            >
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Email*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@company.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter className="px-0 pt-6">
                <Button
                  type="submit"
                  className="w-full py-6 text-base font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : submitButtonText}
                </Button>
              </CardFooter>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
};

export default LeadCaptureForm;
