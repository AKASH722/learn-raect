import React, { useState } from "react";

function ReactEvents() {
  const [text, setText] = useState("--");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setText("clear");
      }}
    >
      <input type="text" onChange={(e) => setText(e.target.value)} />

      <input type="submit" />

      <h5
        onClick={() => setText("Click")}
        onDoubleClick={() => setText("Double Click")}
      >
        {text}
      </h5>
    </form>
  );
}

export default ReactEvents;
