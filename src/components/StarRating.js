import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRating = (props) => {
  // const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    console.log(`setting rating to ${index}`);
    props.setRating(index);
  };

  return (
    <div className="star-rating">
      <head>
      <script src="https://kit.fontawesome.com/3e427e60db.js" crossorigin="anonymous"></script>
      </head>
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
            <FontAwesomeIcon icon="fa-solid fa-star" />
            </i>
              </span>
          </button>
        );
      })}
    </div>
  );
};
export default StarRating;
