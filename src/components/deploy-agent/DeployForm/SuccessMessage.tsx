import React from "react";
import { motion } from "framer-motion";
import { H4, Text } from "@/components/ui/typography";
import { CheckCircle2 } from "lucide-react";

const SuccessMessage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle2 className="w-8 h-8 text-primary" />
      </div>
      <H4 className="text-2xl mb-2">Agent Submitted Successfully! 🎉</H4>
      <Text className="text-muted-foreground mb-2">
        Thank you for submitting your agent.
      </Text>
      <Text className="text-muted-foreground font-semibold">
        We will contact you within 7 days
      </Text>
    </motion.div>
  );
};

export default SuccessMessage;
