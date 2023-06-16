import React from "react";
import "./Text.scss";

interface Props {
  text: string;
}

export const Text: React.FC<Props> = (props: Props) => {
  return (
    <div className="hello-world">
      <p>{props.text}</p>
    </div>
  );
};
