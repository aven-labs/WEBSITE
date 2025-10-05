import { Monitor, Smartphone, Laptop, Cpu, Shield, Workflow, Store, Code2 } from "lucide-react";

export const platforms = [
  // OS Boot Sequence (quicker boot)
  { name: "Linux OS", afterText: "Linux Powered Up", icon: Cpu, delay: 0 },
  { name: "Windows OS", afterText: "Windows Online", icon: Monitor, delay: 2 },
  { name: "MacOS", afterText: "MacOS Synced", icon: Laptop, delay: 4 },
  { name: "Android", afterText: "Android Connected", icon: Smartphone, delay: 6 },
  { name: "iOS", afterText: "iOS Linked", icon: Smartphone, delay: 8 },

  // Aven System Modules (still a little gap to feel like phase 2)
  { name: "Local Agent", afterText: "Agent Activated", icon: Cpu, delay: 12 },
  { name: "Cross-Device Link", afterText: "Connection Established", icon: Workflow, delay: 16 },
  { name: "Private Compute", afterText: "Secured and Ready", icon: Shield, delay: 20 },
  { name: "Agent Store", afterText: "Modules Synced", icon: Store, delay: 24 },
  { name: "Workflow Engine", afterText: "Automation Online", icon: Workflow, delay: 28 },
  { name: "Developer Mode", afterText: "Sandbox Ready", icon: Code2, delay: 32 },
];
