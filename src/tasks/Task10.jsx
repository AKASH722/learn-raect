import React from "react";

const Task10 = ({ students }) => {
  return (
    <table border={1} rules={"all"}>
      <thead>
        <tr>
          {Object.keys(students[0]).map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            {Object.values(student).map((data, i) => (
              <td key={i}>{data}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Task10;
