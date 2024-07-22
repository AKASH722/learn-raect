// use multiple context in react app by creating and consuming them across different components
// createContext css {bg, color, fontSize} provide it to component 1 file
// createContext string {students} provide it to component2 file
// consume both context and display a msg with the provided styles

import React, { createContext } from "react";
import Comp1 from "./Comp1.jsx";

export const Styles = createContext({
  bgColor: "black",
  color: "white",
  fontSize: 12,
});
const Task12 = () => {
  return (
    <Styles.Provider value={{ bgColor: "blue", color: "white", fontSize: 16 }}>
      <Comp1 />
    </Styles.Provider>
  );
};
export default Task12;

/**
 * create react app which takes user defined input n1 and n2 and perform add / sub of two numbers
 */
