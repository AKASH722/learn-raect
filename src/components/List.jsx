import React from "react";

function List() {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6].map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
}

export default List;
