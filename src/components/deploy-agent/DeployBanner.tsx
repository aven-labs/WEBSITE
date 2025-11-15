import React from "react";
import { motion } from "framer-motion";
import { H1, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { DotPattern } from "../ui/dot-pattern";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const DeployBanner = () => {
  return (
    <section>
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <Text className="uppercase">Deploy Your Agent</Text>
          <H1 className="text-4xl leading-[1.2] md:!text-6xl">
            Can you be there?
            <br /> When we need you
          </H1>
          <Text className="text-lg text-muted mt-4">
            Submit your agent to the Uplift Marketplace. Join the growing
            community of AI builders
          </Text>
        </motion.div>
      </div>
    </section>
  );
};

export default DeployBanner;
