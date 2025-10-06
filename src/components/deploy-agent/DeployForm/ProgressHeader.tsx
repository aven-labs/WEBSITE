import React from "react";
import { motion } from "framer-motion";
import { H1, H4, Text } from "@/components/ui/typography";

interface ProgressHeaderProps {
  currentStep: number;
  totalSteps: number;
  progressPercentage: number;
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({
  currentStep,
  totalSteps,
  progressPercentage,
}) => {
  return (
    <>
      {/* Progress Bar */}
      <div>
        <div className="h-1 fixed top-0 left-0 w-screen bg-border overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </>
  );
};

export default ProgressHeader;
