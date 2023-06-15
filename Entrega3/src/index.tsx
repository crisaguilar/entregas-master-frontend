import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import { ImageComponent } from "./imageComponent";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello from React DOM</h1>
    <ImageComponent />
  </div>
);
