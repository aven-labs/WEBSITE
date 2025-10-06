import Navbar from "@/components/Navbar";
import React from "react";
import { DiscordBanner, WaitlistForm } from "@/components/waitlist";
import Footer from "@/components/Footer";

function Waitlist() {
  return (
    <main>
      <Navbar />
      <WaitlistForm />
      <Footer />
    </main>
  );
}

export default Waitlist;
