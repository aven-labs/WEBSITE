import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface CCardProps {
  text: string;
  xPosition: number;
  yPosition: number;
  delay?: number;
  className?: string;
  isResponse?: boolean;
  Component?: React.ComponentType<any>;
}

const CCard = React.forwardRef<HTMLDivElement, CCardProps>(
  (
    {
      text,
      xPosition,
      yPosition,
      delay = 0,
      className,
      isResponse = false,
      Component,
    },
    ref
  ) => {
    const localRef = useRef<HTMLDivElement>(null);
    const setRefs = (node: HTMLDivElement) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
      localRef.current = node;
    };

    const isInView = useInView(localRef, {
      once: true,
      margin: "-100px",
    });

    return (
      <motion.div
        ref={setRefs}
        initial={{ opacity: 0, x: isResponse ? 20 : -20, y: 0 }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: isResponse ? 20 : -20, y: 0 }
        }
        transition={{
          duration: 0.6,
          delay: isInView ? delay : 0,
          ease: [0.23, 1, 0.32, 1],
        }}
        className={cn(
          "absolute backdrop-blur-md rounded-2xl p-8 z-3 text-lg text-background transform",
          "bg-background/20",
          className
        )}
        style={{
          left: `${xPosition}%`,
          top: `${yPosition}%`,
        }}
      >
        {Component ? <Component /> : text}
      </motion.div>
    );
  }
);

CCard.displayName = "CCard";

export default CCard;