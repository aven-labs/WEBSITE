import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Search,
  Download,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  Package,
  Loader2,
  Zap,
} from "lucide-react";

interface AgentConnectProps {
  command?: string;
  agentName?: string;
  marketplace?: string;
  direction?: "horizontal" | "vertical";
  onComplete?: () => void;
}

const AgentConnect: React.FC<AgentConnectProps> = ({
  command = "Book an appointment with doctor",
  agentName = "Medical Scheduler Agent",
  marketplace = "Aven Marketplace",
  direction = "horizontal",
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [searchProgress, setSearchProgress] = useState(0);
  const [installProgress, setInstallProgress] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = [
    {
      id: "blob",
      label: "AI Assistant",
      sublabel: "Ready to assist",
      icon: Sparkles,
    },
    // { id: "command", label: "Processing Command", sublabel: "Analyzing request", icon: Package },
    // {
    //   id: "error",
    //   label: "Module Not Found",
    //   sublabel: "Agent required",
    //   icon: AlertCircle,
    // },
    {
      id: "search",
      label: "Searching Marketplace",
      sublabel: marketplace,
      icon: Search,
    },
    {
      id: "install",
      label: "Installing Agent",
      sublabel: agentName,
      icon: Download,
    },
    {
      id: "success",
      label: "Agent Connected",
      sublabel: "Ready to execute",
      icon: CheckCircle2,
    },
  ];

  // Start animation when in viewport
  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  // Auto-advance through steps
  useEffect(() => {
    if (!hasStarted) return;

    const timings = [1000, 1500, 1500, 2500, 2500, 1500];
    let timeoutId: NodeJS.Timeout;

    const advance = () => {
      if (currentStep < steps.length) {
        timeoutId = setTimeout(() => {
          setCurrentStep((prev) => prev + 1);
          if (currentStep === steps.length - 1) {
            onComplete?.();
          }
        }, timings[currentStep]);
      }
    };

    advance();
    return () => clearTimeout(timeoutId);
  }, [currentStep, hasStarted, onComplete, steps.length]);

  // Search progress animation
  useEffect(() => {
    if (currentStep === 3) {
      const interval = setInterval(() => {
        setSearchProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 3;
        });
      }, 40);
      return () => clearInterval(interval);
    } else {
      setSearchProgress(0);
    }
  }, [currentStep]);

  // Install progress animation
  useEffect(() => {
    if (currentStep === 4) {
      const interval = setInterval(() => {
        setInstallProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2.5;
        });
      }, 40);
      return () => clearInterval(interval);
    } else {
      setInstallProgress(0);
    }
  }, [currentStep]);

  const getCardStyle = (stepIndex: number) => {
    if (stepIndex < currentStep) return "border-foreground/10";
    if (stepIndex === currentStep)
      return "border-primary bg-background/10 shadow-lg shadow-primary/20";
    return "border-foreground/10 bg-background/5";
  };

  const getIconBg = (stepIndex: number) => {
    if (stepIndex === 2) return "bg-red-500/20";
    if (stepIndex === currentStep)
      return "bg-primary/20 ring-2 ring-primary/40";
    if (stepIndex < currentStep) return "bg-primary/10";
    return "bg-foreground/5";
  };

  const getIconColor = (stepIndex: number) => {
    if (stepIndex === 2 && stepIndex === currentStep) return "text-red-500";
    if (stepIndex <= currentStep) return "text-primary";
    return "text-foreground/40";
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Steps Container - Horizontal or Vertical */}
      <div className={`relative ${direction === "horizontal" ? "overflow-x-scroll w-screen scrollbar-hide" : ""}`}>
        <div className={`flex ${direction === "vertical" ? "flex-col" : "items-center justify-center"} ${direction === "horizontal" ? "gap-6 px-8 min-w-max mx-auto" : "gap-4 px-4 max-w-md mx-auto"}`}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isPast = index < currentStep;
            const isMinimized = false; // Disabled minimizing

            return (
              <div key={step.id} className={`relative items-center flex ${direction === "vertical" ? "flex-col" : "items-center"}`}>
                {/* Step Card */}
                <motion.div
                  className={`relative backdrop-blur-sm rounded-2xl transition-all duration-500 border cursor-pointer flex-shrink-0 ${getCardStyle(
                    index
                  )}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hasStarted && index <= currentStep ? 1 : 0.3,
                    y: 0,
                    width: isMinimized ? (direction === "vertical" ? "100%" : "120px") : (direction === "vertical" ? "100%" : "320px"),
                    padding: isMinimized ? "12px" : "20px",
                  }}
                  transition={{
                    delay: hasStarted ? index * 0.1 : 0,
                    width: { duration: 0.3 },
                    padding: { duration: 0.3 },
                    opacity: { duration: 0.3 },
                  }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Icon and Status */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className={`rounded-xl transition-all duration-500 ${getIconBg(
                        index
                      )}`}
                      animate={{
                        scale: isActive ? [1, 1.05, 1] : 1,
                        padding: isMinimized ? "8px" : "12px",
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: isActive ? Infinity : 0,
                      }}
                    >
                      {/* Blob effect for first step */}
                      {index === 0 && isActive && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 blur-xl scale-150" />
                      )}

                      <Icon
                        className={`relative z-10 transition-all ${
                          isMinimized ? "w-4 h-4" : "w-6 h-6"
                        } ${getIconColor(index)}`}
                      />
                    </motion.div>

                    {/* Status Indicator - Hide when minimized */}
                    {!isMinimized && (
                      <div className="flex-1">
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              key={`status-${index}`}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="flex items-center gap-2"
                            >
                              {(index === 3 || index === 4) && (
                                <Loader2 className="w-4 h-4 text-primary animate-spin" />
                              )}
                              {index === 5 && (
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                              )}
                              {index !== 3 && index !== 4 && index !== 5 && (
                                <Zap className="w-4 h-4 text-accent animate-pulse" />
                              )}
                              <span className="text-sm font-medium text-foreground/80">
                                {index === 3 && "Searching..."}
                                {index === 4 && "Installing..."}
                                {index === 5 && "Ready!"}
                                {index !== 3 &&
                                  index !== 4 &&
                                  index !== 5 &&
                                  "Active"}
                              </span>
                            </motion.div>
                          )}
                          {isPast && (
                            <motion.div
                              key={`done-${index}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium text-foreground">
                                Complete
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                  {/* Step Title - Hide when minimized */}
                  {!isMinimized && (
                    <div className="mb-3">
                      <div
                        className={`text-sm font-medium mb-1 ${
                          isActive || isPast
                            ? "text-foreground"
                            : "text-foreground/60"
                        }`}
                      >
                        {step.label}
                      </div>
                      <div className="text-xs text-foreground/60">
                        {step.sublabel}
                      </div>
                    </div>
                  )}

                  {/* Command Display */}
                  {index === 1 && isActive && !isMinimized && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mb-3"
                    >
                      <div className="bg-background/40 rounded-lg p-3 border border-foreground/10">
                        <div className="text-xs font-mono text-foreground/80">
                          "{command}"
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Search Progress Bar */}
                  {index === 3 && isActive && !isMinimized && (
                    <div className="mb-3">
                      <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          style={{ width: `${searchProgress}%` }}
                        />
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-foreground/50">
                          Finding agent
                        </span>
                        <span className="text-xs text-foreground/50">
                          {Math.round(searchProgress)}%
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Install Progress Bar */}
                  {index === 4 && isActive && !isMinimized && (
                    <div className="mb-3">
                      <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          style={{ width: `${installProgress}%` }}
                        />
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-foreground/50">
                          Installing
                        </span>
                        <span className="text-xs text-foreground/50">
                          {Math.round(installProgress)}%
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Energy Line for completed/active states */}
                  {(isPast || (isActive && index === 5)) && !isMinimized && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative h-1 mb-3"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 blur-sm rounded-full"
                        style={{ height: "4px", top: "-1.5px" }}
                      />
                    </motion.div>
                  )}

                  {/* Success Message */}
                  {index === 5 && isActive && !isMinimized && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xs text-foreground/70 text-center"
                    >
                      Agent ready to process command
                    </motion.div>
                  )}

                  {/* Floating particles for completed step */}
                  {index === 5 && isActive && !isMinimized && (
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
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`relative flex ${direction === "vertical" ? "flex-col items-center" : "items-center"} transition-all duration-300`}
                    style={direction === "vertical" 
                      ? { height: isMinimized ? "24px" : "48px", width: "2px" }
                      : { width: isMinimized ? "32px" : "64px" }
                    }
                  >
                    <div className={`${direction === "vertical" ? "h-full w-0.5" : "w-full h-0.5"} bg-foreground/10 relative`}>
                      {index < currentStep && (
                        <motion.div
                          className={`absolute ${direction === "vertical" ? "left-0 top-0 right-0" : "left-0 top-0 bottom-0"} bg-gradient-to-${direction === "vertical" ? "b" : "r"} from-primary to-accent`}
                          initial={direction === "vertical" ? { height: 0 } : { width: 0 }}
                          animate={direction === "vertical" ? { height: "100%" } : { width: "100%" }}
                          transition={{ duration: 0.6 }}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-${direction === "vertical" ? "b" : "r"} from-primary/60 to-accent/60 blur-sm`}
                            style={direction === "vertical" 
                              ? { width: "4px", left: "-1.5px" }
                              : { height: "4px", top: "-1.5px" }
                            }
                          />
                        </motion.div>
                      )}

                      {/* Data packet animation */}
                      {index === currentStep - 1 && currentStep > 0 && (
                        <motion.div
                          className={`absolute ${direction === "vertical" ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2"} w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50`}
                          animate={direction === "vertical"
                            ? {
                                y: [0, isMinimized ? 24 : 48],
                                opacity: [1, 0.5, 1],
                              }
                            : {
                                x: [0, isMinimized ? 32 : 64],
                                opacity: [1, 0.5, 1],
                              }
                          }
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AgentConnect;
