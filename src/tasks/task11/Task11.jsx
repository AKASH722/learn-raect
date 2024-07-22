// main file => Comp.jsx and other three components file named Comp1.jsx, Comp2.jsx & Comp3.jsx respectively
// pass two numbers number1 and number 2 from comp.js file to comp3.js file calculate multiplication of two numbers using
// useContext hook

import { createContext } from "react";
import Comp1 from "./Comp1.jsx";

export const Numbers = createContext({
  n1: 0,
  n2: 0,
});
const Task11 = () => {
  return (
    <Numbers.Provider value={{ n1: 10, n2: 50 }}>
      <Comp1 />
    </Numbers.Provider>
  );
};
export default Task11;
