import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//pages
import Welcome from "./Welcome";
import GameTime from "./GameTime";

//components
import Modal from "../components/DeleteModal";

const Home = (props) => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <GameTime
      tasks={props.tasks}
      createSkip={props.createSkip}
      updateTask={props.updateTask}
      createTask={props.createTask}
    />
  ) : (
    <Welcome />
     
  );
};

export default Home;
