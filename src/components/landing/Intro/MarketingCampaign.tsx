import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Loader2,
  CheckCircle2,
  Package,
  Boxes,
  Sparkles,
} from "lucide-react";

const MarketingCampaign: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Installation stages
  const stages = [
    { name: "Downloading packages", icon: Download },
    { name: "Installing dependencies", icon: Package },
    { name: "Configuring agents", icon: Boxes },
  ];

  useEffect(() => {
    // Progress through stages
    const timer1 = setTimeout(() => setCurrentStage(1), 1200);
    const timer2 = setTimeout(() => setCurrentStage(2), 2400);
    const timer3 = setTimeout(() => setCurrentStage(3), 3600);

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsComplete(true), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="w-[300px] relative text-background">
      {!isComplete ? (
        <>
          {/* Header */}
          <div className="mb-4">
            <p className="font-medium text-base">Installing Marketing Agent</p>
            <p className="text-xs text-background/60 mt-0.5">
              Setting up automation...
            </p>
          </div>

          {/* Installation stages */}
          <div className="flex flex-col gap-2 mb-4">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = currentStage === index;
              const isCompleted = currentStage > index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: currentStage >= index ? 1 : 0.3,
                    x: 0,
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 py-1"
                >
                  <div className="flex-shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-background" />
                    ) : isActive ? (
                      <Loader2 className="w-4 h-4 text-background animate-spin" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-background" />
                    )}
                  </div>

                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <Icon className="w-4 h-4 text-background flex-shrink-0" />
                    <p
                      className={`text-sm ${
                        currentStage >= index
                          ? "text-background/80"
                          : "text-background/40"
                      }`}
                    >
                      {stage.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="mb-2">
            <div className="h-1.5 bg-background/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-background rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Progress percentage */}
          <div className="flex justify-between items-center text-xs text-background/60">
            <span>Installing...</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </>
      ) : (
        /* Success Message */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="flex flex-col items-center justify-center py-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            className="relative mb-4"
          >
            <CheckCircle2 className=" text-background" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-medium text-lg text-background mb-1"
          >
            Installation Complete!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-background text-center"
          >
            Marketing Agent is Ready
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default MarketingCampaign;
