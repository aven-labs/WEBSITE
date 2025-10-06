import Navbar from "@/components/Navbar";
import React from "react";
import { DeployBanner, DeployForm } from "@/components/deploy-agent";
import Footer from "@/components/Footer";

function DeployYourAgent() {
  return (
    <main>
      <Navbar />
      <div className="grid min-h-screen place-content-center md:grid-cols-2 max-md:py-12 gap-32 container px-8 mx-auto">
        <DeployBanner />
        <DeployForm />
      </div>
      <Footer />
    </main>
  );
}

export default DeployYourAgent;
