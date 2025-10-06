import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { H1, H4, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

// Zod validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  gender: z.string().optional(),
  vision: z
    .string()
    .min(20, { message: "Please share at least 20 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      gender: "",
      vision: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Submit to Airtable
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        reset();
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  const genderValue = watch("gender");

  return (
    <div className="container py-6 md:py-24 md:pb-44 mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="md:max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <H4 className="text-md uppercase text-secondary-foreground mb-4">
            Early Access
          </H4>
          <H1 className="text-4xl md:!text-5xl mb-4">Join Our Waitlist</H1>
          <Text className="text-muted">
            Join Us, Be the first to experience the future of AI assistance.
          </Text>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="md:px-8"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <H4 className="text-2xl mb-2">You're on the list!</H4>
              <Text className="text-muted-foreground">
                We'll notify you when we launch
              </Text>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...register("name")}
                  className={
                    errors.name
                      ? "border-destructive focus-visible:ring-destructive"
                      : ""
                  }
                />
                {errors.name && (
                  <p className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className={
                    errors.email
                      ? "border-destructive focus-visible:ring-destructive"
                      : ""
                  }
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Gender Field */}
              <div className="space-y-2">
                <Label htmlFor="gender">
                  Gender{" "}
                  <span className="text-muted-foreground text-xs font-normal">
                    (Optional)
                  </span>
                </Label>
                <Select
                  value={genderValue}
                  onValueChange={(value) => setValue("gender", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="prefer-not-to-say">
                      Prefer not to say
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Vision Field */}
              <div className="space-y-2">
                <Label htmlFor="vision">
                  If you have Jarvis in your life, how will it change your life?{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="vision"
                  placeholder="Share your vision of how AI assistance would transform your daily life..."
                  {...register("vision")}
                  rows={5}
                  className={`resize-none ${
                    errors.vision
                      ? "border-destructive focus-visible:ring-destructive"
                      : ""
                  }`}
                />
                {errors.vision && (
                  <p className="text-sm text-destructive">
                    {errors.vision.message}
                  </p>
                )}
                <Text className="text-xs text-muted">
                  Tell us your story - what would you do differently?
                </Text>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="magic"
                size="lg"
                className="w-full gap-2 group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Us
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <Text className="text-xs text-center text-muted">
                By joining, you agree to receive updates about Aven. We respect
                your privacy.
              </Text>
            </form>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WaitlistForm;
