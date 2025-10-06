import Image from "next/image";
import FemaleImage from "@/styles/images/female.png";
import CCard from "./CCard";
import DoodleLine from "./DoodleLine";
import { storySteps } from "./data/intro-story";
import { useIntroStory } from "./hooks/useIntroStory";

function Intro() {
  const {
    currentStepIndex,
    visibleResponses,
    showDoodleLines,
    requestCardDimensions,
    responseCardDimensions,
    positions,
    requestCardRefs,
    responseCardRefs,
  } = useIntroStory();

  return (
    <div
      className="mb-24 border-t relative flex justify-center items-center
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

        // Get responsive positions for this step
        const stepPositions = positions[stepIndex];
        if (!stepPositions) return null;

        return (
          <div key={`step-${stepIndex}`}>
            {/* Request Card */}
            <CCard
              ref={(el: HTMLDivElement | null) => {
                requestCardRefs.current[stepIndex] = el;
              }}
              text={step.request.text}
              xPosition={stepPositions.request.x}
              yPosition={stepPositions.request.y}
              delay={0.2}
            />

            {/* Single Doodle Line - only to first response */}
            {showDoodle && step.responses.length > 0 && (
              <DoodleLine
                start={stepPositions.request}
                end={stepPositions.responses[0]}
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
                  xPosition={stepPositions.responses[responseIndex].x}
                  yPosition={stepPositions.responses[responseIndex].y}
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
