import { useState } from "react";

export const useStepper = (initialStep = 0, totalSteps: number) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  const nextStep = () => {
    if (activeStep < totalSteps - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setActiveStep(step);
    }
  };

  const resetSteps = () => {
    setActiveStep(initialStep);
  };

  return {
    activeStep,
    nextStep,
    prevStep,
    goToStep,
    resetSteps,
    isFirstStep: activeStep === 0,
    isLastStep: activeStep === totalSteps - 1,
    totalSteps,
  };
};
