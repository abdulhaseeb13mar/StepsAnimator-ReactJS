const Step3 = ({
  changeStep,
  currentStep,
}: {
  changeStep: (number: number) => void;
  currentStep: number;
}) => {
  return (
    <>
      <div>STEP 3</div>
      <button onClick={() => changeStep(currentStep + 1)}>forward</button>
      <button onClick={() => changeStep(currentStep - 1)}>backward</button>
      <button onClick={() => changeStep(1)}>Jumpt to step 1</button>
    </>
  );
};

export default Step3;
