import React from "react";
import { motion } from "framer-motion";
import { H1, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { DotPattern } from "../ui/dot-pattern";
import { cn } from "@/lib/utils";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

const DiscordBanner = () => {
  return (
    <section>
      <div className="container border-b mx-auto px-8 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <Text className="underline">Join Our Community</Text>
          <H1 className="text-4xl md:!text-6xl">
            Connect with Future Builders
          </H1>
          <Text className="text-lg text-muted mb-4">
            Join our Discord community to stay updated, share ideas, and be part
            of the revolution
          </Text>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Button
              size="lg"
              className="gap-2 group bg-[#444FBE] hover:bg-[#5f67bd]"
              onClick={() => window.open("https://discord.gg/aven", "_blank")}
            >
              <DiscordLogoIcon />
              Join Discord Community
            </Button>
          </motion.div>
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

export default DiscordBanner;
