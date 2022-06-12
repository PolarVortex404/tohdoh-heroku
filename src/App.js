import logo from "./logo.svg";
import "./App.css";
// import TaskForm from "./components/TaskForm";
import Home from './components/Home'
import NavBar from "./components/NavBar";
import About from "./components/About";
import TaskModal from "./components/TaskModal";
import { useState } from "react";
import Task from "./components/Task"
import TaskItem from "./components/TaskItem"
import { getByTitle } from "@testing-library/react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <TaskItem task={{title: 'Clear E-mail', description: 'you fucking know'}} />
      {/* <TaskForm /> */}
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Task onClose={() =>setShow(false)} show={show} />
    </div>
  );
}

export default App;
