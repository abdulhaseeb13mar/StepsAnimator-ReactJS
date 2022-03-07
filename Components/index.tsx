import { FC } from "react";
import Animator from "./animator";
import { AnimationGroupContent } from "../../interfaces";

const AnimationGroup: FC<AnimationGroupContent> = ({
  content,
  currentStep,
  height = 450,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        // border: "1px solid red",
        width: "100%",
        overflow: "hidden",
        height: height,
      }}
    >
      {content.map((singleContent, index) => (
        <Animator order={index + 1} currentStep={currentStep}>
          {singleContent.content}
        </Animator>
      ))}
    </div>
  );
};

export default AnimationGroup;
