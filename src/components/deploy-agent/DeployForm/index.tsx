import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProgressHeader from "./ProgressHeader";
import SuccessMessage from "./SuccessMessage";
import NavigationButtons from "./NavigationButtons";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import { FormData, formSchema, TOTAL_STEPS } from "./types";

const DeployForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      agentName: "",
      description: "",
      demoVideoUrl: "",
      whatItDoes: "",
      websiteUrl: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      officeLocation: "",
      city: "",
      country: "",
      twitter: "",
      linkedin: "",
      github: "",
      discord: "",
      pricingModel: undefined,
      price: "",
      monthlyPrice: "",
      hasFreeTrial: "",
      trialDays: "",
      specialNote: "",
    },
  });

  const pricingModel = watch("pricingModel");
  const hasFreeTrial = watch("hasFreeTrial");

  const validateStep = async (step: number): Promise<boolean> => {
    let fieldsToValidate: (keyof FormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = ["agentName"];
        break;
      case 2:
        fieldsToValidate = ["description"];
        break;
      case 3:
        return true;
      case 4:
        fieldsToValidate = ["whatItDoes"];
        break;
      case 5:
        return true;
      case 6:
        fieldsToValidate = ["contactName", "contactEmail", "contactPhone"];
        break;
      case 7:
        fieldsToValidate = ["officeLocation", "city", "country"];
        break;
      case 8:
        return true;
      case 9:
        fieldsToValidate = ["pricingModel"];
        break;
    }

    const result = await trigger(fieldsToValidate);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = async () => {
    setDirection(1);
    await nextStep();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevStep();
  };

  const onSubmit = async (data: FormData) => {
    // If not on last step, go to next step instead of submitting
    if (currentStep < TOTAL_STEPS) {
      await handleNext();
      return;
    }

    // Only submit on the last step
    try {
      const response = await fetch("/api/deploy-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);

      setTimeout(() => {
        reset();
        setSubmitted(false);
        setCurrentStep(1);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="">
      {!submitted && (
        <ProgressHeader
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          progressPercentage={progressPercentage}
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="px-8"
        >
          {submitted ? (
            <SuccessMessage />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="min-h-[400px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="space-y-6"
                >
                  {currentStep === 1 && (
                    <Step1 register={register} errors={errors} />
                  )}
                  {currentStep === 2 && (
                    <Step2 register={register} errors={errors} />
                  )}
                  {currentStep === 3 && (
                    <Step3 register={register} errors={errors} />
                  )}
                  {currentStep === 4 && (
                    <Step4 register={register} errors={errors} />
                  )}
                  {currentStep === 5 && (
                    <Step5 register={register} errors={errors} />
                  )}
                  {currentStep === 6 && (
                    <Step6 register={register} errors={errors} />
                  )}
                  {currentStep === 7 && (
                    <Step7 register={register} errors={errors} />
                  )}
                  {currentStep === 8 && <Step8 register={register} />}
                  {currentStep === 9 && (
                    <Step9
                      register={register}
                      errors={errors}
                      setValue={setValue}
                      pricingModel={pricingModel}
                      hasFreeTrial={hasFreeTrial}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              <NavigationButtons
                currentStep={currentStep}
                totalSteps={TOTAL_STEPS}
                isSubmitting={isSubmitting}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </form>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DeployForm;
