import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/StarRating.module.css";

const ReadOnlyStarRating = (props) => {
  return (
    <div className={styles.starRating}>
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
