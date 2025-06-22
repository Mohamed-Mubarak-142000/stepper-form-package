import React, { useCallback, useState } from "react";
import { Stepper, StepperProps } from "@mantine/core";
import {
  useForm,
  FormProvider,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
  UseFormProps,
  Path,
} from "react-hook-form";

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

export const DEFAULT_STEPPER_CLASSES = {
  stepIcon: `
    relative
    border-[1px]
    bg-basic-white
    border-gray-300
    z-10
    mx-3
    data-[completed=true]:bg-primary-1
    data-[completed=true]:text-white
    data-[progress=true]:bg-primary-1
    data-[progress=true]:text-white
    data-[progress=true]:before:content-['']
    data-[progress=true]:before:absolute
    data-[progress=true]:before:inset-0
    data-[progress=true]:before:rounded-full
    data-[progress=true]:before:-z-10
    data-[progress=true]:before:scale-[1.4]
    data-[progress=true]:before:border-[1px]
    data-[progress=true]:before:border-dashed
    data-[progress=true]:before:border-primary-1
  `,
  step: `
    data-[progress=true]:bg-transparent
    data-[completed=true]:bg-transparent
  `,
  stepLabel: "font-bold text-[15px] text-gray-600",
  stepDescription: "text-sm text-gray-500",
};

export const DEFAULT_STEPPER_PROPS = {
  size: "sm",
  classNames: DEFAULT_STEPPER_CLASSES,
};

export const StepperForm = <T extends FieldValues>({
  steps,
  onSubmit,
  stepperProps,
  icons,
  header,
  formMethods,
  formOptions,
}: StepperFormProps<T>) => {
  const [activeStep, setActiveStep] = useState(0);

  const internalMethods = useForm<T>(formOptions);
  const methods = formMethods || internalMethods;

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const isLastStep = activeStep === steps.length - 1;

  const { trigger, clearErrors, handleSubmit } = methods;

  const handleNext = useCallback(async () => {
    const currentStep = steps[activeStep];
    const stepFields = currentStep.fields;
    const isValid = stepFields ? await trigger(stepFields as Path<T>[]) : true;

    if (isValid) {
      clearErrors();
      setActiveStep((prev) => prev + 1);
    }
  }, [activeStep, steps, trigger, clearErrors]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {header?.({
          nextStep: handleNext,
          prevStep,
          isLastStep,
          activeStep,
        })}

        <Stepper
          className="p-10 rounded-xl bg-basic-white shadow-form-sheet"
          active={activeStep}
          completedIcon={icons?.completed}
          {...stepperProps}
        >
          {steps.map((step, index) => (
            <Stepper.Step
              key={index}
              label={step.label}
              description={step.description}
              icon={activeStep === index ? icons?.active : undefined}
            >
              <div className="mt-6">{step.component}</div>
            </Stepper.Step>
          ))}
        </Stepper>
      </form>
    </FormProvider>
  );
};
