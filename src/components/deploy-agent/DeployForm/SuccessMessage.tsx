import React from "react";
import { motion } from "framer-motion";
import { H4, Text } from "@/components/ui/typography";
import { CheckCircle2 } from "lucide-react";

const SuccessMessage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center bg-foreground/4 rounded-2xl py-12"
    >
      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle2 className="w-8 h-8 text-primary" />
      </div>
      <Text className="text-muted w-2/3 mx-auto text-lg">
        We will review your submission and get back to you within 7 days.
      </Text>
    </motion.div>
  );
};

export default SuccessMessage;
