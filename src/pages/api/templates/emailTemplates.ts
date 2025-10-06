import type { EmailTemplate } from "./types";

export const emailTemplates: Record<string, EmailTemplate> = {
  waitlist: {
    subject: "Aven | Waitlist Confirmed",
    heading: "Thank You for Joining the Aven",
    content: {
      mainText: [
        "We are really excited to have you on board!",
        "You are on our priority list and will be among the first to gain access once we launch.",
        'Follow us on X for updates: <a href="https://x.com/aven_labs" target="_blank" rel="noopener noreferrer">Aven Labs</a>',
      ],
      signature: "Aven Team",
    },
    variables: ["name"],
  },

  agentSubmission: {
    subject: "Agent Submission Received",
    heading: "Confirmed",
    content: {
      mainText: [
        "We have received your agent submission: {{agentName}}",
        "Our team will review your submission and get back to you within 2-3 business days.",
        "Thank you for your patience.",
      ],
      signature: "Aven Team",
    },
    variables: ["name", "agentName"],
  },

  welcome: {
    subject: "Welcome to Aven",
    heading: "Account Ready",
    content: {
      mainText: [
        "Your Aven account is now active.",
        "You can start exploring the Agent Marketplace and connect your first agent.",
      ],
      signature: "Aven Team",
    },
    variables: ["name"],
  },

  notification: {
    subject: "{{subject}}",
    heading: "{{heading}}",
    content: {
      mainText: ["{{message}}"],
      signature: "Aven Team",
    },
    variables: ["name", "subject", "heading", "message"],
  },
};
