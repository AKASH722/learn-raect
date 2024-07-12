// pass color (Red) bgColor (Yellow) fontSize (25px) and fontStyle (italic) as properties to component anda apply css to LJ Student Text written in p tag using props

import React from "react";

function Task6({
  color = "red",
  bgColor = "yellow",
  fontSize = "25px",
  fontStyle = "italic",
}) {
  return (
    <p
      style={{
        color: color,
        backgroundColor: bgColor,
        fontSize: fontSize,
        fontStyle: fontStyle,
      }}
    >
      LJ Student
    </p>
  );
}

export default Task6;
