import React from "react";
import { motion } from "framer-motion";
import { H2, H4, Text } from "../../ui/typography";
import { ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const securityFeatures = [
  "Nothing is Stored in Cloud",
  "Open Source",
  "Building in Public",
];

function IsItSecure() {
  return (
    <div id="is-it-secure" className="px-8 py-36">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
        <motion.div
          className="space-y-6 col-span-1 lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <H4>Is It Secure?</H4>
          <H2 className="text-4xl md:text-6xl w-full lg:w-3/4 leading-[1.2]">
            Your data on your device connected with on-demand token based data
            transfer{" "}
          </H2>
        </motion.div>

        {/* Simple animated list */}
        <div className="flex pt-4 gap-8 flex-col justify-center">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + index * 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={cn("group")}
            >
              <motion.div
                className={cn(
                  "flex border rounded-xl relative left- p-8 items-center"
                )}
                style={{
                  left: `-${index * 100}px`,
                }}
                whileHover={{ x: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Text className="text-lg flex items-center gap-4 md:text-xl lg:text-2xl font-medium text-muted group-hover:text-primary transition-colors duration-300">
                  <ArrowRight className="group-hover:text-primary text-foreground/30" />{" "}
                  {feature}
                </Text>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IsItSecure;
