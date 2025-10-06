export interface AgentData {
  id: string;
  name: string;
  description: string;
  category: string;
  capabilities: string[];
  marketplace: string;
  version: string;
  icon?: string;
}

export const sampleAgents: AgentData[] = [
  {
    id: "agent-marketing-001",
    name: "Marketing Agent",
    description: "AI-powered marketing automation agent that creates campaigns, analyzes trends, and optimizes social media presence",
    category: "Marketing",
    capabilities: [
      "Campaign Creation",
      "Social Media Management",
      "Trend Analysis",
      "Content Generation",
      "Audience Targeting"
    ],
    marketplace: "Aven Marketplace",
    version: "2.1.0",
    icon: "📱"
  },
  {
    id: "agent-analytics-002",
    name: "Analytics Agent",
    description: "Advanced data analytics agent that processes metrics, generates insights, and creates visual reports",
    category: "Analytics",
    capabilities: [
      "Data Processing",
      "Predictive Analysis",
      "Report Generation",
      "KPI Tracking",
      "Visualization"
    ],
    marketplace: "Aven Marketplace",
    version: "1.8.5",
    icon: "📊"
  },
  {
    id: "agent-support-003",
    name: "Customer Support Agent",
    description: "Intelligent customer service agent that handles inquiries, resolves issues, and provides 24/7 support",
    category: "Support",
    capabilities: [
      "Ticket Management",
      "Live Chat",
      "Knowledge Base",
      "Sentiment Analysis",
      "Multi-language Support"
    ],
    marketplace: "Aven Marketplace",
    version: "3.0.2",
    icon: "💬"
  },
  {
    id: "agent-sales-004",
    name: "Sales Agent",
    description: "Smart sales agent that qualifies leads, manages pipeline, and closes deals automatically",
    category: "Sales",
    capabilities: [
      "Lead Qualification",
      "Pipeline Management",
      "Email Outreach",
      "CRM Integration",
      "Deal Forecasting"
    ],
    marketplace: "Aven Marketplace",
    version: "2.5.1",
    icon: "💼"
  },
  {
    id: "agent-content-005",
    name: "Content Creation Agent",
    description: "Creative agent that generates blog posts, articles, and multimedia content with AI",
    category: "Content",
    capabilities: [
      "Article Writing",
      "SEO Optimization",
      "Image Generation",
      "Video Scripting",
      "Content Calendar"
    ],
    marketplace: "Aven Marketplace",
    version: "1.9.3",
    icon: "✍️"
  },
  {
    id: "agent-research-006",
    name: "Research Agent",
    description: "Autonomous research agent that gathers information, analyzes data, and summarizes findings",
    category: "Research",
    capabilities: [
      "Web Scraping",
      "Data Compilation",
      "Source Verification",
      "Trend Detection",
      "Report Synthesis"
    ],
    marketplace: "Aven Marketplace",
    version: "2.2.0",
    icon: "🔍"
  }
];

export const marketplaceStats = {
  totalAgents: 247,
  categories: 12,
  activeUsers: "50K+",
  averageRating: 4.8,
  installsToday: 1432
};

export const connectionStages = [
  {
    stage: "connecting",
    duration: 1500,
    description: "Establishing secure connection to marketplace"
  },
  {
    stage: "searching",
    duration: 3000,
    description: "Scanning available agents and matching capabilities"
  },
  {
    stage: "installing",
    duration: 2000,
    description: "Downloading and configuring agent"
  },
  {
    stage: "plugging",
    duration: 1500,
    description: "Integrating agent into your system"
  },
  {
    stage: "complete",
    duration: 0,
    description: "Agent ready and operational"
  }
];
