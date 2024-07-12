import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import App from "../App.jsx";
import Task2 from "../tasks/Task2.jsx";
import Example3 from "../components/Example3.jsx";
import Task3 from "../tasks/Task3.jsx";
import Task4 from "../tasks/Task4.jsx";
import Example1 from "../components/Example1.jsx";
import ImageEx from "../components/ImageEx.jsx";
import Task5 from "../tasks/Task5.jsx";
import Task6 from "../tasks/Task6.jsx";
import List from "../components/List.jsx";

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
      <ComponentPreview path="/Task3">
        <Task3 />
      </ComponentPreview>
      <ComponentPreview path="/Task4">
        <Task4 />
      </ComponentPreview>
      <ComponentPreview path="/Example1">
        <Example1 />
      </ComponentPreview>
      <ComponentPreview path="/ImageEx">
        <ImageEx />
      </ComponentPreview>
      <ComponentPreview path="/Task5">
        <Task5 />
      </ComponentPreview>
      <ComponentPreview path="/Task6">
        <Task6 />
      </ComponentPreview>
      <ComponentPreview path="/List">
        <List />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
