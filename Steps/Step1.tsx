const Step1 = ({
  changeStep,
  currentStep,
}: {
  changeStep: (number: number) => void;
  currentStep: number;
}) => {
  return (
    <div>
      <div>STEP 1</div>
      <button onClick={() => changeStep(currentStep + 1)}>forward</button>
      {/* <button onClick={() => changeStep(currentStep - 1)}>backward</button> */}
      <button onClick={() => changeStep(4)}>Jump to step 4</button>
    </div>
  );
};

export default Step1;
