import React from "react";
import Task from "./Task";
import StarRating from "./StarRating";
import axios from "axios";

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
