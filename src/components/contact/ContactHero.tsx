import React from "react";
import { motion } from "framer-motion";
import { H1, Text } from "@/components/ui/typography";
import { DotPattern } from "../ui/dot-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ContactHero = () => {
  return (
    <section className="">
      <div className="container mx-auto px-8 py-36 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 text-center max-w-3xl mx-auto"
        >
          <Text className="uppercase">Get in Touch</Text>
          <H1 className="text-4xl md:!text-6xl">Let&apos;s Connect</H1>
          <Text className="text-lg max-w-2xl mx-auto text-muted mb-4">
            We know no one likes to fill forms, so just choose your way of
            communication and we&apos;ll come there, and if you&apos;re looking for job
            follow us on {" "}
            <Link
              href="https://wellfound.com/company/aven-labs-1"
              target="_blank"
              className="underline text-primary"
            >
              Wellfound
            </Link>
          </Text>
        </motion.div>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] animate-pulse"
        )}
      />
    </section>
  );
};

export default ContactHero;
