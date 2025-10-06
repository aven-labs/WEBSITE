import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import PlatformPowerUp from "./PlatformPowerUp";
import { platforms } from "@/data/poerups";

type Platform = {
  name: string;
  afterText: string;
  icon?: React.ComponentType<{ className?: string }>;
  delay: number;
};

interface CardProps {
  platform: Platform;
  centerLineRef: React.RefObject<HTMLDivElement | null>;
  endTriggerRef: React.RefObject<HTMLDivElement | null>;
}

function Card({ platform, centerLineRef, endTriggerRef }: CardProps) {
  const [triggerSuccess, setTriggerSuccess] = useState(false); // Trigger success when crossing center
  const [hasCrossedCenter, setHasCrossedCenter] = useState(false);
  const [hasResetAfterEnd, setHasResetAfterEnd] = useState(false);
  const [randomY, setRandomY] = useState(() => Math.random() * 50 + 10); // Random Y position between 10% and 90%
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-200);

  const opacity = useMotionValue(1);

  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (
        typeof window === "undefined" ||
        !centerLineRef.current ||
        !cardRef.current ||
        !endTriggerRef.current
      )
        return;

      const viewportWidth = window.innerWidth;

      // Fade in effect at the start (first 200px)
      if (latest < 0) {
        const fadeInProgress = (latest + 200) / 200; // 0 to 1
        opacity.set(Math.max(0, Math.min(1, fadeInProgress)));
      }
      // Fade out effect at the end (last 300px before leaving viewport)
      else if (latest > viewportWidth - 300) {
        const fadeOutProgress = (viewportWidth + 200 - latest) / 500; // 1 to 0
        opacity.set(Math.max(0, Math.min(1, fadeOutProgress)));
      }
      // Full opacity in the middle
      else {
        opacity.set(1);
      }

      const centerLineX = centerLineRef.current.getBoundingClientRect().left;
      const endTriggerX = endTriggerRef.current.getBoundingClientRect().left;
      const cardRect = cardRef.current.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;

      // Check if card center has crossed the vertical center line
      if (
        cardCenterX >= centerLineX - 10 &&
        cardCenterX <= centerLineX + 10 &&
        !hasCrossedCenter
      ) {
        setTriggerSuccess(true); // Trigger the success animation
        setHasCrossedCenter(true);
      }

      // Reset text when card hits the end trigger line
      if (
        cardCenterX >= endTriggerX - 10 &&
        cardCenterX <= endTriggerX + 10 &&
        hasCrossedCenter &&
        !hasResetAfterEnd
      ) {
        setHasResetAfterEnd(true);
      }

      // Reset all state when card goes back to start (animation loops)
      if (latest < -100 && hasResetAfterEnd) {
        setHasCrossedCenter(false);
        setHasResetAfterEnd(false);
        setTriggerSuccess(false); // Reset success trigger
        // Generate new random Y position for next cycle
        setRandomY(Math.random() * 50 + 10);
      }
    });

    return () => unsubscribe();
  }, [
    platform.name,
    platform.afterText,
    x,
    hasCrossedCenter,
    hasResetAfterEnd,
    centerLineRef,
    endTriggerRef,
  ]);
  return (
    <motion.div
      ref={cardRef}
      className="absolute"
      style={{
        x,
        opacity,
        top: `${randomY}%`,
      }}
      animate={{ x: "calc(100vw + 200px)" }}
      transition={{
        duration: 8,
        delay: platform.delay, // initial delay
        repeat: Infinity,
        repeatDelay: platforms.length * 2.5, // extra delay before repeating cycle
        ease: "linear",
      }}
    >
      <PlatformPowerUp
        before={platform.name}
        after={platform.afterText}
        icon={platform.icon}
        triggerSuccess={triggerSuccess}
      />
    </motion.div>
  );
}

function FloatingCard() {
  const centerLineRef = useRef<HTMLDivElement>(null);
  const startTriggerRef = useRef<HTMLDivElement>(null);
  const endTriggerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-[60vh] mx-auto">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--foreground) 1px, transparent 1px),
            linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Start Trigger line (left edge - invisible) */}
      <div
        ref={startTriggerRef}
        className="absolute left-0 top-0 bottom-0 w-px z-10"
      />

      {/* Vertical center line with Siri-like glow */}
      <div
        ref={centerLineRef}
        className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10"
        style={{ width: "2px" }}
      ></div>

      {/* End Trigger line (right edge - invisible) */}
      <div
        ref={endTriggerRef}
        className="absolute right-0 top-0 bottom-0 w-px z-10"
      />

      {/* Cards moving from left to right infinitely */}
      {platforms.map((platform) => (
        <Card
          key={platform.name}
          platform={platform}
          centerLineRef={centerLineRef}
          endTriggerRef={endTriggerRef}
        />
      ))}
    </div>
  );
}

export default FloatingCard;
