import React from "react";
import { StepperProps } from "@mantine/core";
import { UseFormReturn, FieldValues, SubmitHandler, UseFormProps, Path } from "react-hook-form";
export type Step<T extends FieldValues> = {
    label: string;
    description?: string;
    fields?: readonly Path<T>[];
    component: React.ReactNode;
};
export type StepperFormProps<T extends FieldValues> = {
    steps: Step<T>[];
    onSubmit: SubmitHandler<T>;
    stepperProps?: Partial<StepperProps>;
    icons?: {
        completed?: React.ReactNode;
        active?: React.ReactNode;
    };
    header?: (props: {
        nextStep: () => Promise<void>;
        prevStep: () => void;
        isLastStep: boolean;
        activeStep: number;
    }) => React.ReactNode;
    formMethods?: UseFormReturn<T>;
    formOptions?: UseFormProps<T>;
};
export declare const DEFAULT_STEPPER_CLASSES: {
    stepIcon: string;
    step: string;
    stepLabel: string;
    stepDescription: string;
};
export declare const DEFAULT_STEPPER_PROPS: {
    size: string;
    classNames: {
        stepIcon: string;
        step: string;
        stepLabel: string;
        stepDescription: string;
    };
};
export declare const StepperForm: <T extends FieldValues>({ steps, onSubmit, stepperProps, icons, header, formMethods, formOptions, }: StepperFormProps<T>) => React.JSX.Element;
