import React, { useState } from "react";

export const Task13 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [addition, setAddition] = useState(0);
  const [subtraction, setSubtraction] = useState(0);
  return (
    <>
      First Number:
      <input
        type="number"
        onChange={(e) => setNum1(Number(e.target.value))}
        defaultValue={num1}
      />
      <br />
      Second Number:
      <input
        type="number"
        onChange={(e) => setNum2(Number(e.target.value))}
        defaultValue={num2}
      />
      <br />
      <button onClick={() => setAddition(num1 + num2)}>Add</button>
      <button onClick={() => setSubtraction(num1 - num2)}>Sub</button>
      <h3> Addition: {addition} </h3>
      <h3> Subtraction: {subtraction} </h3>
    </>
  );
};
