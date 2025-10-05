import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, MessageCircle } from "lucide-react";

const SocialAgent: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [metrics, setMetrics] = useState({
    engagement: 0,
    reach: 0,
    messages: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 500);

    const metricsInterval = setInterval(() => {
      if (isActive) {
        setMetrics((prev) => ({
          engagement: Math.min(prev.engagement + Math.floor(Math.random() * 15), 100),
          reach: Math.min(prev.reach + Math.floor(Math.random() * 20), 500),
          messages: Math.min(prev.messages + Math.floor(Math.random() * 3), 15),
        }));
      }
    }, 600);

    return () => {
      clearTimeout(timer);
      clearInterval(metricsInterval);
    };
  }, [isActive]);

  return (
    <div className="flex flex-col gap-1.5 p-2 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 min-w-[140px]">
      <div className="flex items-center gap-2">
        <motion.div
          animate={{
            scale: isActive ? [1, 1.05, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Users className={`w-4 h-4 ${isActive ? "text-purple-500" : "text-muted-foreground"}`} />
        </motion.div>

        <div className="flex flex-col">
          <span className="text-xs font-medium">Social Agent</span>
          <span className="text-[9px] text-muted-foreground">@buildinpublic</span>
        </div>
      </div>

      {/* Metrics */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 text-[10px]"
        >
          <div className="flex items-center gap-0.5">
            <TrendingUp className="w-3 h-3 text-green-500" />
            <span className="text-muted-foreground">
              {metrics.engagement}%
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <MessageCircle className="w-3 h-3 text-blue-500" />
            <span className="text-muted-foreground">
              {metrics.messages}
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <Users className="w-3 h-3 text-purple-500" />
            <span className="text-muted-foreground">
              {metrics.reach}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SocialAgent;
