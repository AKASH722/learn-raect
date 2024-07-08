import './App.css'
import {useState} from "react";
import Task from "./tasks/Task.jsx";

function App() {
  const [age, setAge] = useState(18)
  return (
    // <>
    //   <h1 style={{color: "rebeccapurple", background: "transparent"}}>HELLO WORLD</h1>
    //   <label htmlFor="age">Age: </label>
    //   <input id="age" type='number' defaultValue={age} onChange={(e) => setAge(Number(e.target.value))}/>
    //   <br />
    //   <h3>{age < 18 ? 'Under Age' : 'Adult'} </h3>
    // </>
    <Task />
  )
}

export default App
