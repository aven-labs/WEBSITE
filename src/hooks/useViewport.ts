import { useState, useEffect } from "react";

interface ViewportState {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  isPc: boolean;
  width: number;
  height: number;
}

/**
 * Custom hook to detect viewport type and dimensions
 * 
 * Breakpoints:
 * - Mobile: < 640px (sm)
 * - Tablet: >= 640px and < 1024px (sm to lg)
 * - Laptop: >= 1024px and < 1440px (lg to xl)
 * - Desktop: >= 1440px and < 1920px (xl to 2xl)
 * - PC: >= 1920px (2xl+)
 * 
 * @returns {ViewportState} Object containing boolean flags for each viewport type and dimensions
 */
export const useViewport = (): ViewportState => {
  const [viewport, setViewport] = useState<ViewportState>({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
    isPc: false,
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setViewport({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isLaptop: width >= 1024 && width < 1440,
        isDesktop: width >= 1440 && width < 1920,
        isPc: width >= 1920,
        width,
        height,
      });
    };

    // Set initial viewport state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewport;
};
