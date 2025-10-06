import React from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2, ArrowRight, ArrowLeft } from "lucide-react";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  isSubmitting: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  totalSteps,
  isSubmitting,
  onPrev,
  onNext,
}) => {
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t">
      <Button
        type="button"
        variant="outline"
        onClick={onPrev}
        disabled={currentStep === 1}
        className="gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Previous
      </Button>

      {currentStep < totalSteps ? (
        <Button type="button" variant="magic" onClick={onNext} className="gap-2 group">
          Next
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      ) : (
        <Button
          type="submit"
          variant="magic"
          className="gap-2 group"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
