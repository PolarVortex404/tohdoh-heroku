import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
// import { ServerApi } from '../../hooks/ServerApi'

import styles from "../../styles/EditButton.module.css"

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    console.log("logging in");
    loginWithRedirect();
  };

  return (
    <button
      className={styles.login}
      onClick={handleLogin}
    >
      Log In
    </button>
  );
};
