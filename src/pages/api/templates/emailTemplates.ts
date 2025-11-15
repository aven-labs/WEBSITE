import type { EmailTemplate } from "./types";

export const emailTemplates: Record<string, EmailTemplate> = {
  waitlist: {
    subject: "You’re on the Uplift Waitlist",
    heading: "Welcome to Uplift",
    content: {
      mainText: [
        "We’re excited to have you on board.",
        "You’re on our priority list and will be among the first to access Uplift when we launch.",
        'Follow our progress here: <a href="https://x.com/aven_labs" target="_blank" rel="noopener noreferrer">Uplift Labs</a>',
      ],
      signature: "The Uplift Team",
    },
    variables: ["name"],
  },

  agentSubmission: {
    subject: "Agent Submission Received",
    heading: "Thanks for Sharing Your Agent",
    content: {
      mainText: [
        "Hi {{name}},",
        "We’ve received your agent: **{{agentName}}**.",
        "Our team will review it and get back to you within 7 business days.",
        "We appreciate your patience and can’t wait to see what you’ve built.",
        'Follow updates here: <a href="https://x.com/aven_labs" target="_blank" rel="noopener noreferrer">Uplift Labs</a>',
      ],
      signature: "The Uplift Team",
    },
    variables: ["name", "agentName"],
  },

  welcome: {
    subject: "Welcome to Uplift",
    heading: "Your Account is Ready",
    content: {
      mainText: [
        "Hi {{name}},",
        "Your Uplift account is active and ready to explore.",
        "Start browsing the Agent Marketplace and connect your first agent.",
        "We’re glad to have you in our community and excited to see what you create.",
      ],
      signature: "The Uplift Team",
    },
    variables: ["name"],
  },

  notification: {
    subject: "{{subject}}",
    heading: "{{heading}}",
    content: {
      mainText: [
        "Hi {{name}},",
        "{{message}}",
        "Thanks for being part of the Uplift community.",
      ],
      signature: "The Uplift Team",
    },
    variables: ["name", "subject", "heading", "message"],
  },
};
