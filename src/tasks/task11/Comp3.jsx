import React, { useContext } from "react";
import { Numbers } from "./Task11.jsx";

const Comp3 = () => {
  const context = useContext(Numbers);
  return (
    <>
      {context.n1} * {context.n2} = {context.n1 * context.n2}
    </>
  );
};
export default Comp3;
