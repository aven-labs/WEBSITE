import Navbar from "@/components/Navbar";
import React from "react";
import { ContactHero, ContactMethods } from "@/components/contact";
import Footer from "@/components/Footer";

function Contact() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactMethods />
      <Footer />
    </main>
  );
}

export default Contact;
