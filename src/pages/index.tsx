import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/landing/Hero";
import Intro from "../components/landing/Intro";
import WhatIsAven from "../components/landing/WhatIsAven";
import WhyAven from "../components/landing/WhyAven";
import IsItSecure from "../components/landing/IsItSecure";
import Pricing from "../components/landing/Pricing";

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <Intro />
      {/* <WhatIsAven /> */}
      {/* <WhyAven /> */}
      {/* <IsItSecure /> */}
      {/* <Pricing /> */}

      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
