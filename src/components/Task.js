import React, { useState } from "react";
import styles from "../styles/Task.module.css";
import StarRating from "./StarRating";
import axios from "axios";

import { ServerApi } from "../hooks/ServerApi";

let Task = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedDuration, setEstimatedDuration] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  // const { createTask } = ServerApi()
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      title: title,
      description: description,
      estimated_duration: estimatedDuration,
      star_rating: difficulty,
    };

    props.createTask(task);
    // axios.post("/tasks", { task }).then((res) => {
    //   console.log("task submitted");
    // });
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
          <form className={styles.taskForm} onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              name="taskTitle"
              type="text"
              placeholder="Title"
              required
              className={styles.formTitle}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <br />
            <label>Description</label>
            <textarea
              name="taskDesc"
              placeholder="Description"
              className={styles.formDescription}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <br />
            <label>
              Difficulty
              <StarRating rating={difficulty} setRating={setDifficulty} />
            </label>
            <br />
            <div className={styles.flexContainer}>
              <div>
                <label>Estimated Duration</label>
                <br />
                <input
                  name="estimated_duration"
                  type="number"
                  min="0"
                  onChange={(e) => setEstimatedDuration(e.target.value)}
                  placeholder="time in minutes"
                  className={styles.formEstimate}
                ></input>
              </div>

              <div>
                <label>Deadline</label>
                <br />
                <input className={styles.formDate} type="date" value=""></input>
              </div>
            </div>

            <br />
            <div className={styles.sbButton}>
              <input
                name="submitButton"
                className={styles.submitBtn}
                type="submit"
                value="Submit"
              ></input>
            </div>
          </form>
        </div>
        <div className={styles.modalFooter}>
          <button onClick={props.onClose} className={styles.closeModalBtn}>
            Close
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Task;
