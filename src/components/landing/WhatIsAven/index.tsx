import { H2, Text, Small, H4 } from "@/components/ui/typography";
import FloatingCard from "./FloatingCard";

const WhatIsAven = () => {
  return (
    <section id="what-is-aven" className="py-6 md:py-24">
      <div className="container px-8 mx-auto">
        {/* Main Content */}
        <div className="md:text-center mb-16">
          <H4 className="mb-4">What is Aven?</H4>
          <H2 className="text-4xl md:text-6xl mb-6">Aven Goes With You</H2>
          <Text className="max-w-2xl mx-auto">
            Lives on your devices, whether it&apos;s your computer, tablet, or phone.
            Aven is designed to be accessible and functional wherever you are.
          </Text>
        </div>
      </div>
      <FloatingCard />
    </section>
  );
};

export default WhatIsAven;
