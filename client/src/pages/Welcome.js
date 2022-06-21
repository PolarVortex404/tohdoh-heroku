import React from "react";
import styles from "../styles/Welcome.module.css"

const Welcome = () => {
  return (
    <div className={styles.welcomeContainer}>
      <h1
      className={styles.welcomeHeader}
      >Howdy! Welcome to TohDoh!</h1>
      <div>
        <article
        className={styles.welcomeArticle}
        >
          Traditional To-Do Lists can be tedious and boring. While still totally
          necessary for regularly scheduled events, but if you've got some downtime, instead of doomscrolling through ig or whatever you <i>could</i> be doing something else. You probably <i>should</i> be doing something else... so uh.. why not?
          
        </article>
      </div>
    </div>
  );
};
export default Welcome;
