import { faTasksAlt } from "@fortawesome/free-solid-svg-icons";
import { React, useState } from "react";
import Task from "../components/Task";

import styles from "../styles/GameTime.module.css"

const GameTime = (props) => {
  const [show, setShow] = useState(false);
  const [activeTask, setActiveTask] = useState(null);
  const [availableTime, setAvailableTime] = useState(0);
  const handleGoTime = () => {
    console.log(props.tasks);
    // console.log(props.tasks[4].skips[0].createdAt);
    // console.log(new Date(props.tasks[4].skips[0].createdAt).toDateString());
    // let potentialTasks = props.tasks.filter(
    //   (task) =>
    //     task.skips?.filter((skip) =>
    //     new Date(skip.createdAt).toDateString() === new Date().toDateString()).length === 0 && task.complete_date === null
    // );
    let potentialTasks = props.tasks.filter(
      (task) => task.complete_date === null
    );
    console.log("null complete date", potentialTasks);
    potentialTasks = potentialTasks.filter((task) => {
      return (
        task.skips.filter(
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
    <div>
      <div>
        <div>
          <h4>How it works:</h4>
          <ul>
            <li>Create some tasks</li>
            <br />
            <li>Enter the amount of time you have available</li>
            <br />
            <li>Hit "Go Time" to start</li>
          </ul>
        </div>
        <div>
          <button 
          className={styles.createTask}
          onClick={() => setShow(true)}>Create Task</button>
          <Task
            createTask={props.createTask}
            onClose={() => setShow(false)}
            show={show}
          />
        </div>
        <label>Time Available</label>
        <input
          type="number"
          onChange={(e) => {
            setAvailableTime(e.target.value);
          }}
        ></input>
        <button onClick={handleGoTime}>GO TIME</button>
      </div>
      {activeTask && (
        <div>
          <div>{activeTask?.title}</div>
          <button className="goButton" onClick={handleSkip}>
            Skip
          </button>
          <button className="goButton" onClick={handleDone}>
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default GameTime;
