import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Smartphone, Loader2, Zap, CheckCircle2 } from "lucide-react";

interface PlatformPowerUpProps {
  before: string;
  after: string;
  icon?: React.ComponentType<{ className?: string }>;
  triggerSuccess?: boolean; // External trigger for success state
}

const PlatformPowerUp: React.FC<PlatformPowerUpProps> = ({
  before,
  after,
  icon: Icon,
  triggerSuccess = false,
}) => {
  const [stage, setStage] = useState<"installing" | "powering" | "complete">(
    "installing"
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset to installing when triggerSuccess becomes false (new cycle)
    if (!triggerSuccess) {
      setStage("installing");
      setProgress(0);
    }
  }, [triggerSuccess]);

  useEffect(() => {
    // Installing stage - progress from 0 to 100
    if (stage === "installing") {
      const installInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(installInterval);
            // Don't auto-advance, wait for triggerSuccess
            return 100;
          }
          return prev + 3;
        });
      }, 40);

      return () => clearInterval(installInterval);
    }
  }, [stage]);

  useEffect(() => {
    // When triggerSuccess is true and we're at 100%, move to powering
    if (triggerSuccess && progress >= 100 && stage === "installing") {
      setStage("powering");
    }
  }, [triggerSuccess, progress, stage]);

  useEffect(() => {
    if (stage === "powering") {
      // Power up stage - wait 1.5s then complete
      const powerTimer = setTimeout(() => {
        setStage("complete");
      }, 1500);
      return () => clearTimeout(powerTimer);
    }
  }, [stage]);

  return (
    <div className="w-[320px] relative">
      {/* Main Card */}
      <div
        className={`relative bg-background/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-700 border`}
      >
        {/* Icon and Status */}
        <div className="flex items-start gap-4 mb-4">
          {/* Platform Icon */}
          <div
            className={`p-3 rounded-xl transition-all duration-500 ${
              stage === "complete"
                ? "bg-primary/20 ring-2 ring-primary/40"
                : "bg-foreground/5"
            }`}
          >
            {Icon ? (
              <Icon className="w-6 h-6 text-foreground" />
            ) : (
              <Monitor className="w-6 h-6 text-foreground" />
            )}
          </div>

          {/* Status Indicator */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {stage === "installing" && (
                <motion.div
                  key="installing"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-center gap-2"
                >
                  <Loader2 className="w-4 h-4 text-foreground/60 animate-spin" />
                  <span className="text-sm font-medium text-foreground/80">
                    Installing...
                  </span>
                </motion.div>
              )}
              {stage === "powering" && (
                <motion.div
                  key="powering"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-sm font-medium text-foreground/80">
                    Powering Up...
                  </span>
                </motion.div>
              )}
              {stage === "complete" && (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Ready!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Platform Name Transition */}
        <div className="mb-4">
          <AnimatePresence mode="wait">
            {stage !== "complete" ? (
              <motion.div
                key="before"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-foreground/60 text-sm"
              >
                {before}
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-sm font-medium text-foreground"
              >
                {after}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress Bar (only during installing) */}
        {stage === "installing" && (
          <div className="mb-3">
            <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-foreground/50">Installing</span>
              <span className="text-xs text-foreground/50">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        )}

        {/* Glowing Energy Line (during powering and complete) */}
        {(stage === "powering" || stage === "complete") && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-1 mb-3"
          >
            {/* Main line */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-pulse rounded-full" />

            {/* Glow layers */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 blur-sm animate-pulse rounded-full"
              style={{ height: "4px", top: "-1.5px" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 blur-md animate-pulse rounded-full"
              style={{ height: "8px", top: "-3.5px", animationDelay: "0.3s" }}
            />
          </motion.div>
        )}

        {/* Completion Message */}
        {stage === "complete" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs text-foreground/70 text-center"
          >
            System initialized and ready
          </motion.div>
        )}
      </div>

      {/* Floating particles effect on complete */}
      {stage === "complete" && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              initial={{
                x: "50%",
                y: "50%",
                opacity: 0,
              }}
              animate={{
                x: `${50 + (Math.random() - 0.5) * 100}%`,
                y: `${50 + (Math.random() - 0.5) * 100}%`,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default PlatformPowerUp;
