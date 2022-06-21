import React from "react";

import StarRating from "./StarRating";

//skeleton outline for each individual task or on client side - GOAL

const TaskItem = (props) => {
  let handleDelete = () => {
    axios.delete(`/tasks/${props.task.id}`);
  };

  return (
    <div>
      <h1 className="goalTitle">{props.task.title}</h1>
      <div>
        <p className="goalDescription">{props.task.description}</p>
        <div className="difficultyRating">
          <StarRating />
        </div>
        <button className="deleteButton" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
