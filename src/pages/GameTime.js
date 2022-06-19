import { faTasksAlt } from "@fortawesome/free-solid-svg-icons";
import { React, useState } from "react";
import Task from "../components/Task";

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
      <h1>Are you ready for this?</h1>
      <div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <label>Time Available</label>
        <input
          type="number"
          onChange={(e) => {
            setAvailableTime(e.target.value);
          }}
        ></input>
        <div>
          <button onClick={() => setShow(true)}>Create Task</button>
          <Task
            createTask={props.createTask}
            onClose={() => setShow(false)}
            show={show}
          />
        </div>
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
