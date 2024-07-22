import { fName, lName } from "./UseContextEx.jsx";
import { useContext } from "react";

const ContextEx = () => {
  return (
    <>
      <h3>{useContext(fName)}</h3>
      <h3>{useContext(lName)}</h3>
    </>
  );
};
export default ContextEx;
