import React from "react";

function Example3({ brand = "RR", model = "RR" }) {
  return (
    <>
      <h4>Brand: {brand}</h4>
      <h4>Model: {model}</h4>
    </>
  );
}

export default Example3;
