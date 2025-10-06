import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";
import { sendTemplatedEmail } from "./templates/emailService";

type ResponseData = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Validate environment variables
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName =
      process.env.AIRTABLE_TABLE_AGENT_NAME || "AgentSubmissions";

    if (!apiKey || !baseId) {
      console.error("Missing Airtable configuration");
      return res.status(500).json({
        message: "Server configuration error",
        error: "Airtable credentials not configured",
      });
    }

    // Extract form data
    const {
      agentName,
      description,
      demoVideoUrl,
      whatItDoes,
      websiteUrl,
      contactName,
      contactEmail,
      contactPhone,
      officeLocation,
      city,
      country,
      twitter,
      linkedin,
      github,
      discord,
      pricingModel,
      price,
      monthlyPrice,
      hasFreeTrial,
      trialDays,
      specialNote,
    } = req.body;

    // Validate required fields
    if (
      !agentName ||
      !description ||
      !whatItDoes ||
      !contactName ||
      !contactEmail ||
      !contactPhone ||
      !officeLocation ||
      !city ||
      !country ||
      !pricingModel
    ) {
      return res.status(400).json({
        message: "Missing required fields",
        error: "Please fill in all required fields",
      });
    }

    // Initialize Airtable
    const base = new Airtable({ apiKey }).base(baseId);
    // Create record in Airtable
    const record = await base(tableName).create([
      {
        fields: {
          "Agent Name": agentName,
          Description: description,
          "Demo Video URL": demoVideoUrl || "",
          "What It Does": whatItDoes,
          "Website URL": websiteUrl || "",
          "Contact Name": contactName,
          "Contact Email": contactEmail,
          "Contact Phone": contactPhone,
          "Office Location": officeLocation,
          City: city,
          Country: country,
          Twitter: twitter || "",
          LinkedIn: linkedin || "",
          GitHub: github || "",
          Discord: discord || "",
          "Pricing Model": pricingModel,
          Price: parseFloat(price) || 0,
          "Monthly Price": parseFloat(monthlyPrice) || 0,
          "Has Free Trial": hasFreeTrial ? "Yes" : "No",
          "Trial Days": trialDays || 0,
          "Special Note": specialNote || "",
          Status: "Pending Review",
        },
      },
    ]);

    console.log("Successfully created record:", record[0].id);

    // Send confirmation email using template
    try {
      await sendTemplatedEmail("agentSubmission", contactEmail, {
        name: contactName,
        agentName: agentName,
      });
      console.log("Confirmation email sent to:", contactEmail);
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Don't fail the request if email fails, just log it
    }

    return res.status(200).json({
      message: "Agent submitted successfully!",
    });
  } catch (error: any) {
    console.error("Error submitting to Airtable:", error);

    // Handle specific Airtable errors
    if (error.statusCode === 401) {
      return res.status(500).json({
        message: "Configuration error",
        error: "Invalid Airtable credentials",
      });
    }

    if (error.statusCode === 404) {
      return res.status(500).json({
        message: "Configuration error",
        error: "Airtable base or table not found",
      });
    }

    return res.status(500).json({
      message: "Failed to submit",
      error: error.message || "An unexpected error occurred",
    });
  }
}
