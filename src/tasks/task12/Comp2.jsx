import React, { createContext } from "react";
import Comp3 from "./Comp3.jsx";

export const Student = createContext("");
const Comp2 = () => {
  return (
    <Student.Provider value={"Akash"}>
      <Comp3 />
    </Student.Provider>
  );
};
export default Comp2;
