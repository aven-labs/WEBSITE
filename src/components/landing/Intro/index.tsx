import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FemaleImage from "@/styles/images/female.png";
import CCard from "./CCard";
import DoodleLine from "./DoodleLine";
import { storySteps } from "@/data/intro-story";

function Intro() {
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
  const requestCardRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const responseCardRefs = useRef<
    Record<number, Array<HTMLDivElement | null>>
  >({});

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

  return (
    <div
      className="mb-24 border-t min-h-[90vh] relative flex justify-center items-center
            bg-gradient-to-b from-background/5 via-foreground/50 to-foreground"
    >
      <Image
        className="h-full z-2 object-cover img-hor w-fit"
        alt="An lady using aven to ease her life"
        src={FemaleImage}
        width={5120}
        height={5120}
      />

      {/* Render all steps that have been started */}
      {storySteps.map((step, stepIndex) => {
        // Only render if this step has started (current or completed)
        if (stepIndex > currentStepIndex) return null;

        const stepResponses = visibleResponses[stepIndex] || [];
        const showDoodle = showDoodleLines[stepIndex] || false;
        const reqDims = requestCardDimensions[stepIndex] || {
          width: 300,
          height: 120,
        };
        const resDims = responseCardDimensions[stepIndex] || [];

        return (
          <div key={`step-${stepIndex}`}>
            {/* Request Card */}
            <CCard
              ref={(el: HTMLDivElement | null) => {
                requestCardRefs.current[stepIndex] = el;
              }}
              text={step.request.text}
              xPosition={step.request.position.x}
              yPosition={step.request.position.y}
              delay={0.2}
            />

            {/* Single Doodle Line - only to first response */}
            {showDoodle && step.responses.length > 0 && (
              <DoodleLine
                start={step.request.position}
                end={step.responses[0].position}
                isVisible={showDoodle}
                delay={0}
                cardWidth={reqDims.width}
                cardHeight={reqDims.height}
                targetCardWidth={resDims[0]?.width || 300}
                targetCardHeight={resDims[0]?.height || 120}
                curvature={step.responses[0].curvature}
              />
            )}

            {/* Response Cards */}
            {step.responses.map((response, responseIndex) => {
              if (!stepResponses.includes(responseIndex)) return null;

              return (
                <CCard
                  key={`response-${stepIndex}-${responseIndex}`}
                  ref={(el: HTMLDivElement | null) => {
                    if (!responseCardRefs.current[stepIndex]) {
                      responseCardRefs.current[stepIndex] = [];
                    }
                    responseCardRefs.current[stepIndex][responseIndex] = el;
                  }}
                  text={response.text}
                  xPosition={response.position.x}
                  yPosition={response.position.y}
                  delay={0.3}
                  isResponse={true}
                  Component={response.Component}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Intro;