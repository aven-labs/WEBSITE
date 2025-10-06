import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/landing/Hero";
import Intro from "../components/landing/Intro";
import WhatIsAven from "../components/landing/WhatIsAven";
import AvenHub from "../components/landing/AvenHub";
import IsItSecure from "../components/landing/IsItSecure";
import Pricing from "../components/landing/Pricing";
import Footer from "@/components/Footer";
import Access from "@/components/Access";

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <Intro />
      <WhatIsAven />
      <IsItSecure />
      <AvenHub />
      <Access />
      <Footer />
    </div>
  );
}

export default LandingPage;
