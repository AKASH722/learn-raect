import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import App from "../App.jsx";
import Task2 from "../tasks/Task2.jsx";
import Example3 from "../components/Example3.jsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/ComponentPreviews">
        <ComponentPreviews />
      </ComponentPreview>
      <ComponentPreview path="/Task2">
        <Task2 />
      </ComponentPreview>
      <ComponentPreview path="/Example3">
        <Example3 />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
