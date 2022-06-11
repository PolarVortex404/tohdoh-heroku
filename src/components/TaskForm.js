import React, { useState } from "react";
import StarRating from "./StarRating";
import axios from "axios";
import styles from "./TaskForm.module.css";

let TaskForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedDuration, setEstimatedDuration] = useState(0);
  const [difficulty, setDifficulty] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      title: title,
      description: description,
      estimated_duration: estimatedDuration,
      star_rating: difficulty,
    };
    axios.post("/tasks", { task }).then((res) => {
      console.log("task submitted");
    });
  };

  return (
    <div>
      <form className="taskForm" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="taskTitle"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <br />
        <label className={styles.red}>Description</label>
        <textarea
          name="taskDesc"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <label>
          Difficulty
          <StarRating rating={difficulty} setRating={setDifficulty} />
        </label>
        <br />
        <label>Estimated Duration</label>
        <input
          name="estimated_duration"
          type="number"
          onChange={(e) => setEstimatedDuration(e.target.value)}
        ></input>
        <br />

        <input
          name="submitButton"
          className="submitBtn"
          type="submit"
          value="Submit"
        ></input>
      </form>
    </div>
  );
};

export default TaskForm;
