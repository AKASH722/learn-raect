// covert to uppercase

const series = [
  "Hit & Run",
  "Barbarians",
  "Treason",
  "Marco Polo",
  "Shadowhunters",
  "The Recruit",
];

function Task3() {
  return (
    <>
      <h1>Netflix</h1>
      <p>Action Series: </p>
      <ol>
        {series.map((name, index) => (
          <li key={index}>{name.toUpperCase()}</li>
        ))}
      </ol>
    </>
  );
}

export default Task3;
