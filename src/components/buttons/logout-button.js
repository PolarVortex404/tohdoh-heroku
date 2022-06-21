import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styles from "../../styles/EditButton.module.css";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className={styles.login}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};
