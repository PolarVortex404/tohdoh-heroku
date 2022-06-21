import React, { useState } from "react";

//styling
import styles from "../styles/StarRating.module.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = (props) => {
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    console.log(`setting rating to ${index}`);
    props.setRating(index);
  };

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
            className={index <= (hover || index) ? "on" : "off"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(props.rating)}
          >
            <span className="star">
              <i>
                {hover === index && (
                  <FontAwesomeIcon
                    icon={faStar}
                    size="2x"
                    bounce
                    transform="shrink-3 left-4"
                  />
                )}
                {hover !== index && <FontAwesomeIcon icon={faStar} size="2x" />}
              </i>
            </span>
          </button>
        );
      })}
    </div>
  );
};
export default StarRating;
