const Step4 = ({
  changeStep,
  currentStep,
}: {
  changeStep: (number: number) => void;
  currentStep: number;
}) => {
  return (
    <>
      <div>STEP 4</div>
      {/* <button onClick={() => changeStep(currentStep + 1)}>
        Step 4 forward
      </button> */}
      <button onClick={() => changeStep(currentStep - 1)}>backward</button>
      <button onClick={() => changeStep(2)}>Jump to step 2</button>
    </>
  );
};

export default Step4;
