import { React, useState } from "react";
// import { act } from "react-dom/test-utils";

import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SettingsItem from "../components/SettingsItem";
import Task from "../components/Task";

import styles from "../styles/GameTime.module.css";

const GameTime = (props) => {
  const [show, setShow] = useState(false);
  const [activeTask, setActiveTask] = useState(null);
  const [availableTime, setAvailableTime] = useState(0);
  const handleGoTime = () => {
    console.log(props.tasks);

    let potentialTasks = props.tasks.filter(
      (task) => task.complete_date === null
    );
    console.log("null complete date", potentialTasks);
    potentialTasks = potentialTasks.filter((task) => {
      return (
        task.skips?.filter(
          (skip) =>
            new Date(skip.createdAt).toDateString() ===
            new Date().toDateString()
        ).length === 0
      );
    });
    console.log("no skips", potentialTasks);
    if (availableTime > 0) {
      potentialTasks = potentialTasks.filter(
        (task) => task.estimated_duration <= availableTime
      );
    }
    const randomIndex = Math.floor(Math.random() * potentialTasks.length);
    setActiveTask(potentialTasks[randomIndex]);
    console.log(potentialTasks[randomIndex]);
  };
  const handleSkip = async () => {
    await props.createSkip({
      task_id: activeTask.id,
    });
    handleGoTime();
  };
  const handleDone = () => {
    activeTask.complete_date = Date.now();
    props.updateTask(activeTask);
    setActiveTask(null);
  };
  return (
    <div className={styles.container}>
      <div>
        <br />
        <div className={styles.listA}>How it works:</div>
        <ul className={styles.list}>
          <li>Create some tasks</li>
          <br />
          <li>Enter the amount of time you have available</li>
          <br />
          <li>Hit "Go Time" to start or "Create" to start from scratch</li>
        </ul>
      </div>
      <div className={styles.createTaskContainer}>
        <button className={styles.createTask} onClick={() => setShow(true)}>
          Create
        </button>
        <Task
          createTask={props.createTask}
          onClose={() => setShow(false)}
          show={show}
        />
      </div>
      {!activeTask && !show && (
        <div>
          <label className={styles.timeLabel}>
            Time Available <FontAwesomeIcon icon={faHourglass} />
          </label>
          <div>
            <input
              className={styles.timeInput}
              type="number"
              min="0"
              placeholder="time in minutes"
              onChange={(e) => {
                setAvailableTime(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <button className={styles.goTime} onClick={handleGoTime}>
              GO TIME
            </button>
          </div>
        </div>
      )}

      {activeTask && (
        <div>
          <div>
            <SettingsItem task={activeTask} />
          </div>
          <button className={styles.createTask} onClick={handleSkip}>
            Skip
          </button>
          <button className={styles.createTask} onClick={handleDone}>
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default GameTime;
