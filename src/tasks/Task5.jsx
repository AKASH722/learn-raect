// arr elements > 3 using map

import React from "react";

const numbers = [1, 2, 3, 4, 5, 6];

function Task5() {
  return (
    <>
      <ul>
        {/*{numbers.map((num, index) =>*/}
        {/*  num > 3 ? <li key={index}>{num}</li> : <></>*/}
        {/*)}*/}
        {numbers
          .filter((num) => num > 3)
          .map((num, index) => (
            <li key={index}>{num}</li>
          ))}
      </ul>
      <br />
      <ul>
        {numbers
          .filter((num) => num !== 3)
          .map((num, index) => (
            <li key={index}>{num}</li>
          ))}
      </ul>
    </>
  );
}

export default Task5;
