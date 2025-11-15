import { H2, Text, Small, H4 } from "@/components/ui/typography";
import FloatingCard from "./FloatingCard";

const WhatIsAven = () => {
  return (
    <section id="what-is-aven" className="py-6 md:py-24">
      <div className="container px-8 mx-auto">
        {/* Main Content */}
        <div className="mb-16">
          <H4 className="mb-4">What is Uplift?</H4>
          <H2 className="text-4xl md:text-6xl mb-6">Your Personal AI Control Center</H2>
          <div className="flex flex-col gap-4 max-w-3xl">
            <Text>
              It brings all your AI tools, assistants, and agents together into one simple system.
            </Text>
            <Text>
              It remembers everything you teach it, connects to the agents you install, and can perform tasks for you
            </Text>
            <Text>
              across all your devices, automatically, securely, and without needing the cloud.
            </Text>
          </div>
        </div>
      </div>
      <FloatingCard />
    </section>
  );
};

export default WhatIsAven;
