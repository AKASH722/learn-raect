import "./App.css";
import ReactEvents from "./components/ReactEvents.jsx";
import Task1 from "./tasks/Task1.jsx";
import Task3 from "./tasks/Task3.js";

function App() {
  // const [age, setAge] = useState(18);
  // return (
  //   <>
  //     <h1 style={{ color: "rebeccapurple", background: "transparent" }}>
  //       HELLO WORLD
  //     </h1>
  //     <label htmlFor="age">Age: </label>
  //     <input
  //       id="age"
  //       type="number"
  //       defaultValue={age}
  //       onChange={(e) => setAge(Number(e.target.value))}
  //     />
  //     <br />
  //     <h3>{age < 18 ? "Under Age" : "Adult"} </h3>
  //   </>
  // );

  // return <Task1 />;

  // return <Task2 />;

  // return <Example1 />;

  // return <Example2 name="Akash" rollNo={20} branch="CST" />;

  // const info = {
  //   brand: "rolls royce",
  //   model: "phantom",
  // };
  //
  // return <Example3 {...info} />;

  // return <ReactEvents />;

  return <Task3 />;
}

export default App;
