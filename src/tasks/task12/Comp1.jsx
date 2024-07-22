import React, { useContext } from "react";
import { Styles } from "./Task12.jsx";
import Comp2 from "./Comp2.jsx";

const Comp1 = () => {
  const { bgColor, color, fontSize } = useContext(Styles);
  return (
    <>
      <div
        style={{ backgroundColor: bgColor, color: color, fontSize: fontSize }}
      >
        Hello from component 1
      </div>
      <Comp2 />
    </>
  );
};
export default Comp1;
