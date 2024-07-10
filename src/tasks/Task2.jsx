// add 1 h1, p => current date, p => current time
function Task2() {
  return (
    <>
      <h1>Date & Time</h1>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <p>Time: {new Date().toLocaleTimeString()}</p>
    </>
  );
}

export default Task2;
