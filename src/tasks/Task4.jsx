// array of numbers and we want to multiply each by 6

import React from "react";

const numbers = [1, 2, 3, 4, 5, 6];

function Task4() {
  return (
    <ul>
      {numbers.map((num, index) => (
        <li key={index}>{num * 6}</li>
      ))}
    </ul>
  );
}

export default Task4;
