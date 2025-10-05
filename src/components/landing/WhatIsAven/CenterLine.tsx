import React, { useState, useEffect, useRef, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CenterLineProps {
  cardPositions: Array<{ id: string; y: number }>;
}

const CenterLine = forwardRef<HTMLDivElement, CenterLineProps>(
  ({ cardPositions }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10"
        style={{ width: "202px", marginLeft: "-101px" }}
      >
        {/* Left gradient mask (transparent to background) - 100px */}
        <div
          className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none"
          style={{
            width: "100px",
            background:
              "linear-gradient(to right, transparent, var(--background))",
          }}
        />

        {/* Center line container - 2px */}
        <div
          className="absolute top-0 bottom-0 z-10"
          style={{ width: "2px", left: "100px" }}
        >
          {/* Base line (dim) */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-accent/20 to-primary/20" />

          {/* Dynamic glow spots where cards hit */}
          <AnimatePresence>
            {cardPositions.map((pos) => (
              <motion.div
                key={pos.id}
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  top: `${pos.y}%`,
                  width: "20px",
                  height: "80px",
                  marginLeft: "-10px",
                  marginTop: "-40px",
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Main glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-primary animate-pulse"
                  style={{ width: "2px", left: "9px" }}
                />

                {/* Glow layers */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-primary/80 via-accent/80 to-primary/80 blur-sm opacity-60 animate-pulse"
                  style={{ width: "4px", left: "8px" }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-primary/60 via-accent/60 to-primary/60 blur-md opacity-40 animate-pulse"
                  style={{
                    width: "8px",
                    left: "6px",
                    animationDelay: "0.3s",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-primary/40 via-accent/40 to-primary/40 blur-lg opacity-20 animate-pulse"
                  style={{
                    width: "16px",
                    left: "2px",
                    animationDelay: "0.6s",
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right gradient mask (background to transparent) - 100px */}
        <div
          className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none"
          style={{
            width: "100px",
            background:
              "linear-gradient(to right, var(--background), transparent)",
          }}
        />
      </div>
    );
  }
);

CenterLine.displayName = "CenterLine";

export default CenterLine;
