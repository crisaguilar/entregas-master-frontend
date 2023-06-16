import React from "react";
import { Image } from "./image/Image";
import { Text } from "./text/Text";

export const App = () => {
  const helloWorld = "Hello World";

  return (
    <>
      <Text text={helloWorld} />
      <Image />
    </>
  );
};
