"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStepper = void 0;
var react_1 = require("react");
var useStepper = function (initialStep, totalSteps) {
    if (initialStep === void 0) { initialStep = 0; }
    var _a = (0, react_1.useState)(initialStep), activeStep = _a[0], setActiveStep = _a[1];
    var nextStep = function () {
        if (activeStep < totalSteps - 1) {
            setActiveStep(function (prev) { return prev + 1; });
        }
    };
    var prevStep = function () {
        if (activeStep > 0) {
            setActiveStep(function (prev) { return prev - 1; });
        }
    };
    var goToStep = function (step) {
        if (step >= 0 && step < totalSteps) {
            setActiveStep(step);
        }
    };
    var resetSteps = function () {
        setActiveStep(initialStep);
    };
    return {
        activeStep: activeStep,
        nextStep: nextStep,
        prevStep: prevStep,
        goToStep: goToStep,
        resetSteps: resetSteps,
        isFirstStep: activeStep === 0,
        isLastStep: activeStep === totalSteps - 1,
        totalSteps: totalSteps,
    };
};
exports.useStepper = useStepper;
