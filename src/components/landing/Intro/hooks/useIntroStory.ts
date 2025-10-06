import { useState, useEffect, useRef } from "react";
import { storySteps } from "../data/intro-story";
import type { ResponsivePosition, Position } from "@/components/landing/Intro/model/intro";
import { useViewport } from "@/hooks/useViewport";

// Utility function to get position based on viewport width
const getResponsivePosition = (responsivePos: ResponsivePosition, width: number): Position => {
  // lg breakpoint (1024px)
  if (width >= 1024 && responsivePos.lg) {
    return responsivePos.lg;
  }

  // md breakpoint (768px)
  if (width >= 768 && responsivePos.md) {
    return responsivePos.md;
  }

  // default (mobile)
  return responsivePos.default;
};

export const useIntroStory = () => {
  const { isMobile, width } = useViewport();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [visibleResponses, setVisibleResponses] = useState<
    Record<number, number[]>
  >({});
  const [showDoodleLines, setShowDoodleLines] = useState<
    Record<number, boolean>
  >({});
  const [requestCardDimensions, setRequestCardDimensions] = useState<
    Record<number, { width: number; height: number }>
  >({});
  const [responseCardDimensions, setResponseCardDimensions] = useState<
    Record<number, Array<{ width: number; height: number }>>
  >({});
  const [positions, setPositions] = useState<
    Record<
      number,
      {
        request: Position;
        responses: Position[];
      }
    >
  >({});

  const requestCardRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const responseCardRefs = useRef<
    Record<number, Array<HTMLDivElement | null>>
  >({});

  // Update positions based on viewport
  useEffect(() => {
    const newPositions: Record<
      number,
      { request: Position; responses: Position[] }
    > = {};

    storySteps.forEach((step, index) => {
      newPositions[index] = {
        request: getResponsivePosition(step.request.position, width),
        responses: step.responses.map((res) =>
          getResponsivePosition(res.position, width)
        ),
      };
    });

    setPositions(newPositions);
  }, [width]);

  // Story step animation orchestration
  useEffect(() => {
    if (currentStepIndex >= storySteps.length) return;

    const currentStep = storySteps[currentStepIndex];

    // Initialize response refs array for this step
    if (!responseCardRefs.current[currentStepIndex]) {
      responseCardRefs.current[currentStepIndex] = [];
    }

    // Step 1: Show request card (delay 0.2s - from CCard delay prop)
    // Step 2: After request card animation completes, show doodle line
    setTimeout(() => {
      setShowDoodleLines((prev) => ({ ...prev, [currentStepIndex]: true }));
    }, 800); // 200ms delay + 600ms animation from request card

    // Step 3: After doodle line starts (1.5s animation), show responses one by one
    currentStep.responses.forEach((_, index) => {
      setTimeout(() => {
        setVisibleResponses((prev) => ({
          ...prev,
          [currentStepIndex]: [...(prev[currentStepIndex] || []), index],
        }));
      }, 1800 + index * 800); // Start after doodle + stagger each response
    });

    // Move to next step after all responses are shown (mark current as completed)
    if (currentStepIndex < storySteps.length - 1) {
      const totalDelay = 1800 + currentStep.responses.length * 800 + 2000;
      setTimeout(() => {
        setCompletedSteps((prev) => [...prev, currentStepIndex]);
        setCurrentStepIndex((prev) => prev + 1);
      }, totalDelay);
    } else {
      // Mark last step as completed
      const totalDelay = 1800 + currentStep.responses.length * 800 + 2000;
      setTimeout(() => {
        setCompletedSteps((prev) => [...prev, currentStepIndex]);
      }, totalDelay);
    }
  }, [currentStepIndex]);

  // Measure card dimensions after request card appears
  useEffect(() => {
    if (currentStepIndex >= storySteps.length) return;

    const timer = setTimeout(() => {
      const ref = requestCardRefs.current[currentStepIndex];
      if (ref) {
        setRequestCardDimensions((prev) => ({
          ...prev,
          [currentStepIndex]: {
            width: ref.scrollWidth,
            height: ref.scrollHeight,
          },
        }));
      }
    }, 850); // After request card animation completes

    return () => clearTimeout(timer);
  }, [currentStepIndex]);

  // Measure response card dimensions as they appear
  useEffect(() => {
    const stepResponses = visibleResponses[currentStepIndex];
    if (!stepResponses || stepResponses.length === 0) return;

    const timer = setTimeout(() => {
      const refs = responseCardRefs.current[currentStepIndex] || [];
      const newResponseDimensions = refs.map((ref) => {
        if (ref) {
          return { width: ref.scrollWidth, height: ref.scrollHeight };
        }
        return { width: 0, height: 0 };
      });
      setResponseCardDimensions((prev) => ({
        ...prev,
        [currentStepIndex]: newResponseDimensions,
      }));
    }, 100);

    return () => clearTimeout(timer);
  }, [visibleResponses, currentStepIndex]);

  // Handle window resize
  useEffect(() => {
    const updateDimensions = () => {
      // Update all request card dimensions
      Object.keys(requestCardRefs.current).forEach((stepIndexStr) => {
        const stepIndex = parseInt(stepIndexStr);
        const ref = requestCardRefs.current[stepIndex];
        if (ref) {
          setRequestCardDimensions((prev) => ({
            ...prev,
            [stepIndex]: {
              width: ref.scrollWidth,
              height: ref.scrollHeight,
            },
          }));
        }
      });

      // Update all response card dimensions
      Object.keys(responseCardRefs.current).forEach((stepIndexStr) => {
        const stepIndex = parseInt(stepIndexStr);
        const refs = responseCardRefs.current[stepIndex] || [];
        const newResponseDimensions = refs.map((ref) => {
          if (ref) {
            return { width: ref.scrollWidth, height: ref.scrollHeight };
          }
          return { width: 0, height: 0 };
        });
        setResponseCardDimensions((prev) => ({
          ...prev,
          [stepIndex]: newResponseDimensions,
        }));
      });
    };

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return {
    isMobile,
    currentStepIndex,
    completedSteps,
    visibleResponses,
    showDoodleLines,
    requestCardDimensions,
    responseCardDimensions,
    positions,
    requestCardRefs,
    responseCardRefs,
  };
};
