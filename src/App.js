import logo from "./logo.svg";
import "./App.css";
import TaskForm from "./components/TaskForm";
import NavBar from "./components/NavBar";
import About from "./components/About";
import TaskModal from "./components/TaskModal";
import { useState } from "react";
import Task from "./components/Task"

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <NavBar />
      <TaskForm />
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Task onClose={() =>setShow(false)} show={show} />
    </div>
  );
}

export default App;
