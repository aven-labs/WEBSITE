import React from "react";
import { Apple, Monitor, Smartphone } from "lucide-react";
import { H2, Text, Small, H4 } from "@/components/ui/typography";
import FloatingCard from "./FloatingCard";

const WhatIsAven = () => {
  return (
    <section id="what-is-aven" className="py-24">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="text-center mb-16">
          <H4 className="mb-4">What is Aven?</H4>
          <H2 className="text-4xl md:text-6xl mb-6">
            First, Cross OS Local Agent
          </H2>
          <Text className="max-w-2xl mx-auto">
            Always stays on your devices and create workflows connect with mcp
            servers according to your preference
          </Text>
        </div>
      </div>
      <FloatingCard />
    </section>
  );
};

export default WhatIsAven;
