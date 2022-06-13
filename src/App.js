import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from "./components/ProtectedRoute";
import { withAuthenticationRequired } from "@auth0/auth0-react";

// import TaskForm from "./components/TaskForm";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from './pages/Settings'

import NavBar from "./components/NavBar";
import { Loader } from "./components/loader";

// import TaskModal from "./components/TaskModal.old";
import { useState } from "react";
// import Task from "./components/Task";
import TaskItem from "./components/TaskItem";
import { getByTitle } from "@testing-library/react";
// import Settings from './pages/Settings'

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/settings' 
        element={
          <ProtectedRoute component={Settings} />
        }
        // render={()=>(
        //   withAuthenticationRequired(<Settings />, {
        //     onRedirecting: () => <Loader />
        //   })
        // )}
        />
  </Routes>
      {/* <Home /> */}
      {/* <Settings tasks={[{title: "Clear E-mail", description: "Lorem Ipsum"},{title: "Clear E-mail", description: "Lorem Ipsum"}]} /> */}
      {/* <TaskItem task={{ title: "Clear E-mail", description: "Lorem Ipsum" }} /> */}
      {/* <TaskForm /> */}
      {/* <button onClick={() => setShow(true)}>Show Modal</button>
      <Task onClose={() => setShow(false)} show={show} /> */}
    </div>
  );
}

export default App;
