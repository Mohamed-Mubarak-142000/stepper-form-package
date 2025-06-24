# 🚀 React Hook Form Stepper (`react-multi-form-step`)

A fully customizable and reusable multi-step form component built with **React Hook Form**, **Mantine UI**, **Tailwind CSS**, and **shadcn/ui**.  
This package makes it super easy to create multi-step forms with step-wise validation, custom layout, and smooth navigation — all using the familiar power of `react-hook-form`.

---

## 📦 Installation

Install the package and required peer dependencies:

```bash
npm install react-multi-form-step react-hook-form @mantine/core @mantine/hooks @tabler/icons-react

✅ You also need to have Tailwind CSS and optionally shadcn/ui installed if you're using UI components like buttons or inputs.

🔧 Requirements
This package assumes your project is already using:

    React 18+

    Tailwind CSS

    React Hook Form

    Mantine UI (@mantine/core, @mantine/hooks)

    Optional: shadcn/ui or lucide-react for consistent styling and icons



✨ Features

    ✅ Seamless integration with react-hook-form

    ✅ Per-step field validation (only validate fields for the current step)

    ✅ Conditional logic for navigating between steps

    ✅ Fully customizable step components and layout

    ✅ Header and footer customization (add your own buttons)

    ✅ Modern UI powered by Mantine Stepper, Tailwind, and shadcn/ui

    ✅ TypeScript support with strong typing and field safety



🛠️ Usage
1. Create your form instance

import { useForm } from "react-hook-form";

const formMethods = useForm({
  mode: "onChange",
  defaultValues: {
    stepOne: {
      name: "",
      email: "",
    },
    stepTwo: {
      address: "",
    },
  },
});

2. Define your steps

Each step should include a label, the fields to validate in that step, and a component to render.

const steps = [
  {
    label: "Basic Info",
    fields: ["stepOne.name", "stepOne.email"],
    component: <BasicInfoStep formMethods={formMethods} />,
  },
  {
    label: "Address Info",
    fields: ["stepTwo.address"],
    component: <AddressStep formMethods={formMethods} />,
  },
];

3. Use the StepperForm component

import { StepperForm } from "react-multi-form-step";
import { FaCheck } from "react-icons/fa";
import { Send, Users } from "lucide-react";
import { IconCircleArrowRight } from "@tabler/icons-react";

<StepperForm
  steps={steps}
  onSubmit={(data) => console.log("Form submitted:", data)}
  formMethods={formMethods}
  icons={{
    completed: <FaCheck className="text-white" />,
  }}
  header={({ prevStep, isLastStep, nextStep, methods }) => (
    <div className="flex justify-between items-center mb-4">
      <button onClick={prevStep} className="btn-outline">Back</button>
      <button
        onClick={
          isLastStep
            ? methods.handleSubmit((data) => console.log("Submit", data))
            : nextStep
        }
        type={isLastStep ? "submit" : "button"}
        className="btn-primary flex items-center"
      >
        {isLastStep ? <Send size={18} className="me-2" /> : <IconCircleArrowRight className="me-2" />}
        {isLastStep ? "Submit" : "Next"}
      </button>
    </div>
  )}
/>


🧩 Optional: External FormProvider Usage
In some cases, you might want to wrap the <StepperForm /> with your own <FormProvider>.
This gives you full access to the form context (useFormContext()) outside the stepper, for example:

When you want to access formMethods in a parent component (like App or AddUserPage)

When you need to show global form errors or track submission state externally

When you want to conditionally render something based on form values before or after the stepper

🛠️ How to use your own FormProvider
If you need to control the form context manually, wrap your StepperForm like this:

tsx
Copy
Edit
import { useForm, FormProvider } from "react-hook-form";

const formMethods = useForm();

<FormProvider {...formMethods}>
  <StepperForm
    steps={steps}
    onSubmit={handleSubmit}
    formMethods={formMethods}
  />
</FormProvider>


⚠️ If you wrap StepperForm with your own <FormProvider>, make sure not to pass formOptions to the component, since you're already initializing the form externally.

❓ Why would I need this?
By default, StepperForm creates and provides its own form context internally.
But if you want to:

Access formMethods outside the stepper

Share form state across other components or outside the scope of steps

Add your own custom validation or side-effects globally

Then using an external FormProvider gives you maximum flexibility.

🧠 Best Practice
If you're building a larger form with custom header, logic, and external controls, we recommend you manage the form instance externally and pass it via formMethods.
This makes your form more composable and testable.

✅ Final Tip
You can choose one of two approaches:

Let StepperForm handle everything internally (simpler for small forms)

Manage the form yourself and pass formMethods and <FormProvider> (better for full control)

Both are supported — it's up to your use case. 🎯



⚙️ Props Reference
Prop	Type	Required	Description
steps	StepConfig[]	✅	List of step configuration objects (label, fields, component)
onSubmit	(data: any) => void	✅	Callback triggered after final step submission
formMethods	UseFormReturn<T>	✅	Your useForm() instance
header	ReactNode or ({...}) => JSX	❌	Custom header with full control (e.g. for nav buttons like Back/Next)
footer	ReactNode or ({...}) => JSX	❌	Optional footer renderer
icons	{ completed?: ReactNode }	❌	Icon to show for completed steps



🧠 Field Validation
You only need to validate fields relevant to the current step — just include them in the fields array of the step object:

fields: ["user.name", "user.email"]

Only these fields will be validated before moving to the next step.
🧩 Example File Structure

src/
├─ components/
│  ├─ stepper/
│  │  └─ StepperForm.tsx
│  ├─ steps/
│  │  ├─ BasicInfoStep.tsx
│  │  └─ AddressStep.tsx
├─ App.tsx



📤 Contributing
Contributions are welcome! Follow these steps:

    Fork the repo

    Create a new branch: git checkout -b my-feature

    Make your changes

    Commit: git commit -m "Add feature"

    Push and open a Pull Request

Feel free to open issues for bugs, suggestions, or feature requests.
📎 Links

    🔗 NPM Package: https://www.npmjs.com/package/react-multi-form-step

    👨‍💻 Author: Mohamed Mubarak

    🌐 React Hook Form: https://react-hook-form.com

    📚 Mantine UI: https://mantine.dev
```
