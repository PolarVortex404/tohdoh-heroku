import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Welcome from "./Welcome";
import GameTime from "./GameTime";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <GameTime /> : <Welcome />;
};

export default Home;
