import React, { useState } from "react";

const StarRating = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    console.log(`setting rating to ${index}`);
    props.setRating(index);
  };

  return (
    <div className="star-rating">
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
            <span className="star">&#9733;</span>;
          </button>
        );
      })}
    </div>
  );
};
export default StarRating;
