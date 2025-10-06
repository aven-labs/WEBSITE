import * as z from "zod";

export const formSchema = z.object({
  // Step 1
  agentName: z.string().min(2, { message: "Agent name must be at least 2 characters" }),
  // Step 2
  description: z.string().min(20, { message: "Description must be at least 20 characters" }),
  // Step 3
  demoVideoUrl: z.string().optional(),
  // Step 4
  whatItDoes: z.string().min(30, { message: "Please provide at least 30 characters" }),
  // Step 5
  websiteUrl: z.string().optional(),
  // Step 6
  contactName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  contactEmail: z.string().email({ message: "Please enter a valid email address" }),
  contactPhone: z.string().min(10, { message: "Please enter a valid phone number" }),
  // Step 7
  officeLocation: z.string().min(5, { message: "Please provide office location" }),
  city: z.string().min(2, { message: "City is required" }),
  country: z.string().min(2, { message: "Country is required" }),
  // Step 8
  twitter: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  discord: z.string().optional(),
  // Step 9
  pricingModel: z.enum(["free", "onetime", "subscription"]),
  price: z.string().optional(),
  monthlyPrice: z.string().optional(),
  hasFreeTrial: z.string().optional(),
  trialDays: z.string().optional(),
  specialNote: z.string().optional(),
});

export type FormData = z.infer<typeof formSchema>;

export const TOTAL_STEPS = 9;
