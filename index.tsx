import { useState } from "react";
import AnimationGroup from "./Components";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

const StepsAnimation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const ContentArray = [
    {
      content: (
        <Step1
          changeStep={(step) => setCurrentStep(step)}
          currentStep={currentStep}
        />
      ),
    },
    {
      content: (
        <Step2
          changeStep={(step) => setCurrentStep(step)}
          currentStep={currentStep}
        />
      ),
    },
    {
      content: (
        <Step3
          changeStep={(step) => setCurrentStep(step)}
          currentStep={currentStep}
        />
      ),
    },
    {
      content: (
        <Step4
          changeStep={(step) => setCurrentStep(step)}
          currentStep={currentStep}
        />
      ),
    },
  ];

  return <AnimationGroup content={ContentArray} currentStep={currentStep} />;
};

export default StepsAnimation;
