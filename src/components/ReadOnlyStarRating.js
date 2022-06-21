import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/StarRating.module.css";

const ReadOnlyStarRating = (props) => {
  // const [rating, setRating] = useState(0);
  console.log(props.rating);

  return (
    <div className={styles.starRating}>
      {/* <script
        src="https://kit.fontawesome.com/3e427e60db.js"
        crossorigin="anonymous"
      ></script> */}

      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= props.rating ? "on" : "off"}
          >
            <span className="star">
              <i>
                <FontAwesomeIcon icon={faStar} size="2x" />
              </i>
            </span>
          </button>
        );
      })}
    </div>
  );
};
export default ReadOnlyStarRating;
