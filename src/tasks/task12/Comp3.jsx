import React, { useContext } from "react";
import { Student } from "./Comp2.jsx";
import { Styles } from "./Task12.jsx";

const Comp3 = () => {
  const student = useContext(Student);
  const { bgColor, color, fontSize } = useContext(Styles);
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        fontSize: fontSize,
      }}
    >
      {student}
    </div>
  );
};
export default Comp3;
