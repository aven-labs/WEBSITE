import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FemaleImage from "@/styles/images/female.png";
import CCard from "./CCard";
import DoodleLine from "./DoodleLine";
import { storySteps } from "@/data/intro-story";

function Intro() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [visibleResponses, setVisibleResponses] = useState<number[]>([]);
  const [showDoodleLine, setShowDoodleLine] = useState(false);
  const [requestCardDimensions, setRequestCardDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [responseCardDimensions, setResponseCardDimensions] = useState<
    Array<{ width: number; height: number }>
  >([]);
  const requestCardRef = useRef<HTMLDivElement>(null);
  const responseCardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const currentStep = storySteps[currentStepIndex];

  useEffect(() => {
    // Reset when step changes
    setVisibleResponses([]);
    setShowDoodleLine(false);
    
    if (currentStep) {
      // Step 1: Show request card (delay 0.2s - from CCard delay prop)
      // Step 2: After request card animation completes, show doodle line
      setTimeout(() => {
        setShowDoodleLine(true);
      }, 800); // 200ms delay + 600ms animation from request card

      // Step 3: After doodle line starts (1.5s animation), show responses one by one
      currentStep.responses.forEach((_, index) => {
        setTimeout(() => {
          setVisibleResponses((prev) => [...prev, index]);
        }, 1800 + index * 800); // Start after doodle + stagger each response
      });

      // Move to next step after all responses are shown
      if (currentStepIndex < storySteps.length - 1) {
        const totalDelay = 1800 + currentStep.responses.length * 800 + 2000;
        setTimeout(() => {
          setCurrentStepIndex((prev) => prev + 1);
        }, totalDelay);
      }
    }
  }, [currentStepIndex, currentStep]);

  // Measure card dimensions after request card appears
  useEffect(() => {
    const timer = setTimeout(() => {
      // Update request card dimensions
      if (requestCardRef.current) {
        setRequestCardDimensions({
          width: requestCardRef.current.scrollWidth,
          height: requestCardRef.current.scrollHeight,
        });
      }
    }, 850); // After request card animation completes

    return () => clearTimeout(timer);
  }, [currentStepIndex]);

  // Measure response card dimensions as they appear
  useEffect(() => {
    if (visibleResponses.length === 0) return;

    const timer = setTimeout(() => {
      const newResponseDimensions = responseCardRefs.current.map((ref) => {
        if (ref) {
          return { width: ref.scrollWidth, height: ref.scrollHeight };
        }
        return { width: 0, height: 0 };
      });
      setResponseCardDimensions(newResponseDimensions);
    }, 100);

    return () => clearTimeout(timer);
  }, [visibleResponses]);

  // Handle window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (requestCardRef.current) {
        setRequestCardDimensions({
          width: requestCardRef.current.scrollWidth,
          height: requestCardRef.current.scrollHeight,
        });
      }

      const newResponseDimensions = responseCardRefs.current.map((ref) => {
        if (ref) {
          return { width: ref.scrollWidth, height: ref.scrollHeight };
        }
        return { width: 0, height: 0 };
      });
      setResponseCardDimensions(newResponseDimensions);
    };

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      className="mb-24 border-t min-h-[90vh] relative flex justify-center items-center overflow-hidden
            bg-gradient-to-b from-background/5 via-foreground/50 to-foreground"
    >
      <Image
        className="h-full z-2 object-cover img-hor w-fit"
        alt="An lady using aven to ease her life"
        src={FemaleImage}
        width={5120}
        height={5120}
      />

      {currentStep && (
        <>
          {/* Request Card */}
          <CCard
            ref={requestCardRef}
            key={`request-${currentStepIndex}`}
            text={currentStep.request.text}
            xPosition={currentStep.request.position.x}
            yPosition={currentStep.request.position.y}
            delay={0.2}
          />

          {/* Single Doodle Line - only to first response */}
          {showDoodleLine && currentStep.responses.length > 0 && (
            <DoodleLine
              start={currentStep.request.position}
              end={currentStep.responses[0].position}
              isVisible={showDoodleLine}
              delay={0}
              cardWidth={requestCardDimensions.width}
              cardHeight={requestCardDimensions.height}
              targetCardWidth={responseCardDimensions[0]?.width || 300}
              targetCardHeight={responseCardDimensions[0]?.height || 120}
              curvature={currentStep.responses[0].curvature}
            />
          )}

          {/* Response Cards */}
          {currentStep.responses.map(({ ...response }, responseIndex) => {
            if (!visibleResponses.includes(responseIndex)) return null;

            return (
              <CCard
                key={`response-${currentStepIndex}-${responseIndex}`}
                ref={(el: HTMLDivElement | null) => {
                  responseCardRefs.current[responseIndex] = el;
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
        </>
      )}
    </div>
  );
}

export default Intro;