export declare const useStepper: (initialStep: number | undefined, totalSteps: number) => {
    activeStep: number;
    nextStep: () => void;
    prevStep: () => void;
    goToStep: (step: number) => void;
    resetSteps: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
    totalSteps: number;
};
