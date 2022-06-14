import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";

// import {tasks} from './hooks/ServerApi'
import { ServerApi } from "./hooks/ServerApi";

//pages
// import TaskForm from "./components/TaskForm";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";

//components
import NavBar from "./components/NavBar";
import { Loader } from "./components/loader";
import Task from "./components/Task";

// import TaskModal from "./components/TaskModal.old";
import { useState, useEffect } from "react";
import TaskItem from "./components/TaskItem";
//import { getByTitle } from "@testing-library/react";

function App() {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useAuth0();
  const { getTasks, getSkips } = ServerApi();
  useEffect(() => {
    if (isAuthenticated) {
      getTasks();
      getSkips();
    }
  },
  [isAuthenticated]
  );
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/settings"
          element={<ProtectedRoute component={Settings} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Home /> */}
      {/* <Settings
        tasks={[
          { title: "Clear E-mail", description: "Lorem Ipsum" },
          { title: "Clear E-mail", description: "Lorem Ipsum" },
        ]}
      /> */}
      {/* <TaskItem/> */}
      {/* <TaskForm /> */}
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Task onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default App;
