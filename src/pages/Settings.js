import { React, useState, useEffect } from "react";
import TaskItem from "../components/TaskItem";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEnv } from "../context/env.context";
import StarRating from "../components/StarRating";
// import Home from "./Home";
import styles from "../styles/Settings.module.css";

import { ServerApi } from "../hooks/ServerApi";

const Settings = (props) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const { apiServerUrl } = useEnv();
  const { getTasks } = ServerApi();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getMyTasks = async () => {
      let data = await getTasks();
      console.log(tasks, "tasks");
      setTasks(data);
      console.log(data, "data");
    };
    if (isAuthenticated) {
      getMyTasks();

      // setTasks(await getTasks());
      // console.log(tasks)
      // getSkips();
    }
  }, [isAuthenticated]);

  let handleTest = async () => {
    const token = await getAccessTokenSilently();
    // axios.post(
    //   `/tasks`,
    //   {
    //     title: "some-text",
    //     description: "some description for that text",
    //   },
    //   {
    //     Authorization: `Bearer ${token}`,
    //     baseURL:apiServerUrl
    //   }
    // );
    console.log("calling server");
    await axios({
      url: "/tasks",
      baseURL: apiServerUrl,
      method: "post",
      data: {
        title: "some-text",
        description: "some description for that text",
      },
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div className="settingsContainer">
      <h1>PROFILE</h1>
      <div>
        count
        {tasks.count}
      </div>
      <container>
        <button onClick={handleTest}>TEST</button>
        {tasks?.map((task) => {
          return (
            <div>
              <div className={styles.displayFlex}>
                <h1>{task.title}</h1>
                <div>
                  <p>{task.description}</p>
                  <StarRating />
                </div>
              </div>
            </div>
          );
        })}
      </container>
    </div>
  );
};
export default Settings;
