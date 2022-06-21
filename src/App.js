import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuth0 } from "@auth0/auth0-react";

import { ServerApi } from "./hooks/ServerApi";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";

//components
import NavBar from "./components/NavBar";

import { useEffect } from "react";

function App() {
  const { isAuthenticated } = useAuth0();
  const {
    getTasks,
    getSkips,
    tasks,
    createSkip,
    updateTask,
    createTask,
    deleteTask,
  } = ServerApi();
  useEffect(() => {
    if (isAuthenticated) {
      getTasks();
      getSkips();
    }
  }, [isAuthenticated]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              createSkip={createSkip}
              updateTask={updateTask}
              createTask={createTask}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute
              component={Settings}
              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
