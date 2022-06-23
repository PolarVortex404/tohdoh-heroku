import React, { useState } from "react";
import styles from "../styles/Task.module.css";
import StarRating from "./StarRating";
import EditModalButton from "./buttons/EditModalButton";

let EditModal = (props) => {
  const [title, setTitle] = useState(props.task.title);
  const [description, setDescription] = useState(props.task.description);
  const [estimatedDuration, setEstimatedDuration] = useState(
    props.task.estimated_duration
  );
  const [difficulty, setDifficulty] = useState(props.task.star_rating);
  const [deadline, setDeadline] = useState(props.task.deadline);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("editing task");

    const task = props.task;
    task.title = title;
    task.description = description;
    task.estimated_duration = estimatedDuration;
    task.star_rating = difficulty;
    task.deadline = deadline;

    console.log("calling update");

    props.updateTask(task);

    props.onClose();
  };

  if (!props.show) {
    return null;
  }
  return (
    <div className={styles.modal} onClick={props.onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>Edit Goal</h4>
        </div>
        <div className={styles.modalBody}>
          <form className={styles.taskForm} onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              name="taskTitle"
              type="text"
              value={title}
              className={styles.formTitle}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <br />
            <label>Description</label>
            <textarea
              name="taskDesc"
              placeholder="Description"
              value={description}
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
                  onChange={(e) => setEstimatedDuration(e.target.value)}
                  placeholder="time in minutes"
                  value={estimatedDuration}
                  className={styles.formEstimate}
                ></input>
              </div>

              <div>
                <label>Deadline</label>
                <br />
                <input
                  className={styles.formDate}
                  type="date"
                  value={deadline ?? ""}
                  onChange={(e) => setDeadline(e.target.value)}
                ></input>
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

export default EditModal;
