import React from "react";
import styles from "../styles/Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.welcomeContainer}>
      <h1 className={styles.welcomeHeader}>Howdy! Welcome to TohDoh!</h1>
      <div className={styles.welcomeDiv}>
        <span className={styles.welcomeSpan}>
          <ul className={styles.welcomeUL}>
            <li>Create some tasks</li>
            <br />
            <li>Enter the amount of time you have available</li>
            <br />
            <li>Hit "Go Time" to start or "Create" to start from scratch</li>
          </ul>
        </span>
      </div>
    </div>
  );
};
export default Welcome;
