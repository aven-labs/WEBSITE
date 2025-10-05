import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Point {
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
}

interface DoodleLineProps {
  start: Point;
  end: Point;
  isVisible?: boolean;
  delay?: number;
  cardWidth?: number;
  cardHeight?: number;
  targetCardWidth?: number;
  targetCardHeight?: number;
  curvature?: {
    cp1Offset: number;
    cp2Offset: number;
    curveAmount: number;
  };
}

const DoodleLine: React.FC<DoodleLineProps> = ({
  start,
  end,
  isVisible = true,
  delay = 0,
  cardWidth = 300,
  cardHeight = 120,
  targetCardHeight = 120,
  curvature = {
    cp1Offset: 0.25,
    cp2Offset: 0.75,
    curveAmount: 0.15,
  },
}) => {
  const controls = useAnimation();
  const arrowControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Convert percentage positions to container-relative units
  const startCenterX = dimensions.width * (start.x / 100);
  const startCenterY = dimensions.height * (start.y / 100);
  const endCenterX = dimensions.width * (end.x / 100);
  const endCenterY = dimensions.height * (end.y / 100);

  // Calculate connection points
  const startX = startCenterX + cardWidth;
  const startY = startCenterY + cardHeight / 2;
  const endX = endCenterX;
  const endY = endCenterY + targetCardHeight / 2;

  const deltaX = endX - startX;
  const deltaY = endY - startY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  // Create smooth hand-drawn style path with gentle curves
  const generateSmoothWobblyPath = () => {
    const segments = 20; // More segments for smoother curves
    const wobbleIntensity = 1.5; // Reduced for subtler effect

    // Control points for smooth S-curve or gentle arc
    const midX = startX + deltaX * 0.5;
    const midY = startY + deltaY * 0.5;

    // Offset middle point for natural curve
    const perpX = -deltaY / distance;
    const perpY = deltaX / distance;
    const curvePixels = Math.min(distance * curvature.curveAmount, 60); // Use custom curve amount

    const cp1X = startX + deltaX * curvature.cp1Offset;
    const cp1Y = startY + deltaY * curvature.cp1Offset + perpY * curvePixels;
    const cp2X = startX + deltaX * curvature.cp2Offset;
    const cp2Y = startY + deltaY * curvature.cp2Offset + perpY * curvePixels * 0.5;

    let path = `M ${startX} ${startY}`;
    let points = [];

    // Generate smooth bezier curve points
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;

      // Cubic bezier formula
      const x =
        Math.pow(1 - t, 3) * startX +
        3 * Math.pow(1 - t, 2) * t * cp1X +
        3 * (1 - t) * Math.pow(t, 2) * cp2X +
        Math.pow(t, 3) * endX;

      const y =
        Math.pow(1 - t, 3) * startY +
        3 * Math.pow(1 - t, 2) * t * cp1Y +
        3 * (1 - t) * Math.pow(t, 2) * cp2Y +
        Math.pow(t, 3) * endY;

      // Add very subtle wobble
      const wobbleX = (Math.random() - 0.5) * wobbleIntensity;
      const wobbleY = (Math.random() - 0.5) * wobbleIntensity;

      points.push({ x: x + wobbleX, y: y + wobbleY });
    }

    // Use quadratic curves between points for smoothness
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpX = (prev.x + curr.x) / 2;
      const cpY = (prev.y + curr.y) / 2;

      if (i === 1) {
        path += ` L ${curr.x} ${curr.y}`;
      } else {
        path += ` Q ${prev.x} ${prev.y}, ${cpX} ${cpY}`;
      }
    }

    // Complete the path to end point
    const lastPoint = points[points.length - 1];
    path += ` L ${lastPoint.x} ${lastPoint.y}`;

    return path;
  };

  const pathData = generateSmoothWobblyPath();

  // Create smooth hand-drawn arrow head
  const arrowSize = 10;
  const arrowAngle = Math.atan2(deltaY, deltaX);

  const arrowTip = { x: endX, y: endY };
  const arrowBase1 = {
    x:
      endX -
      arrowSize * Math.cos(arrowAngle - Math.PI / 7) +
      (Math.random() - 0.5) * 1,
    y:
      endY -
      arrowSize * Math.sin(arrowAngle - Math.PI / 7) +
      (Math.random() - 0.5) * 1,
  };
  const arrowBase2 = {
    x:
      endX -
      arrowSize * Math.cos(arrowAngle + Math.PI / 7) +
      (Math.random() - 0.5) * 1,
    y:
      endY -
      arrowSize * Math.sin(arrowAngle + Math.PI / 7) +
      (Math.random() - 0.5) * 1,
  };

  const arrowPath = `M ${arrowBase1.x} ${arrowBase1.y} 
                     L ${arrowTip.x} ${arrowTip.y} 
                     L ${arrowBase2.x} ${arrowBase2.y}`;

  useEffect(() => {
    if (isVisible) {
      controls.start({
        pathLength: 1,
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: delay,
        },
      });

      arrowControls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
          delay: delay + 1.2,
        },
      });
    }
  }, [isVisible, controls, arrowControls, delay, dimensions]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <svg
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        <defs>
          <filter id="subtle-pencil">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="2"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="0.8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.3 0"
              in="coloredBlur"
              result="whiteBlur"
            />
            <feMerge>
              <feMergeNode in="whiteBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main smooth wobbly path */}
        <motion.path
          d={pathData}
          stroke="#fff"
          strokeWidth={2}
          fill="none"
          style={{
            filter: "url(#subtle-pencil) url(#soft-glow)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            opacity: 0.75,
          }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={controls}
        />

        {/* Arrow head */}
        <motion.path
          d={arrowPath}
          stroke="#fff"
          strokeWidth={2}
          fill="none"
          style={{
            filter: "url(#subtle-pencil) url(#soft-glow)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            opacity: 0.75,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={arrowControls}
        />

        {/* Moving dot */}
        <motion.circle
          r={2}
          fill="#fff"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isVisible ? [0, 0.8, 0] : [0, 0, 0],
            transition: {
              duration: 1.5,
              delay: delay,
              times: [0, 0.5, 1],
            },
          }}
          style={{
            filter: "url(#soft-glow)",
          }}
        >
          <animateMotion
            dur="1.5s"
            begin={`${delay}s`}
            fill="freeze"
            path={pathData}
          />
        </motion.circle>
      </svg>
    </div>
  );
};

export default DoodleLine;
