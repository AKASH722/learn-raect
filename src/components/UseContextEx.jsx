import React, { createContext } from "react";
import ContextCallEx from "./ContextCallEx.jsx";

export const fName = createContext("");
export const lName = createContext("");

const UseContextEx = () => {
  return (
    <>
      <fName.Provider value={"Akash"}>
        <lName.Provider value={"Rai"}>
          <ContextCallEx />
        </lName.Provider>
      </fName.Provider>
    </>
  );
};
export default UseContextEx;
