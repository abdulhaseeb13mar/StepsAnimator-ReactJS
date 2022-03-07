const Step2 = ({
  changeStep,
  currentStep,
}: {
  changeStep: (number: number) => void;
  currentStep: number;
}) => {
  return (
    <>
      <div>STEP 2</div>
      <button onClick={() => changeStep(currentStep + 1)}>forward</button>
      <button onClick={() => changeStep(currentStep - 1)}>backward</button>
      <button onClick={() => changeStep(3)}>Jump to step 3</button>
    </>
  );
};

export default Step2;
