import React, { useState } from "react";
import styles from "./Task.module.css";
import StarRating from "./StarRating";
import axios from "axios";

let Task = (props) => {
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
    props.onClose();
  };
  if (!props.show) {
    return null;
  }
  return (
    <div className={styles.modal} onClick={props.onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>Set Goal</h4>
        </div>
        <div className={styles.modalBody}>
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
        <div className={styles.modalFooter}>
          <button onClick={props.onClose} className="closeModalBtn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
