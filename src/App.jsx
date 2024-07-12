import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/routing/Home.jsx";
import Contact from "./components/routing/Contact.jsx";
import Shop from "./components/routing/Shop.jsx";
import NoPage from "./components/routing/NoPage.jsx";
import React from "react";
import Navbar from "./components/routing/NavBar.jsx";

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

  // return <Task3 />;

  // return <Task4 />;

  // return <ImageEx />;

  // return <Task5 />;

  // return (
  //   <Task6 color="red" bgColor="pink" fontStyle="italic" fontSize="50px" />
  // );

  // return <List />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Navigate to={"/not-found"} />} />
        <Route path="/not-found" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
