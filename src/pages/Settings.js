import React from "react";
import TaskItem from "../components/TaskItem";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEnv } from "../context/env.context";
import StarRating from "../components/StarRating";
// import Home from "./Home";
import styles from "../styles/Settings.module.css";

const Settings = (props) => {
  const { getAccessTokenSilently } = useAuth0();
  const { apiServerUrl } = useEnv();

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
      <container>
        <button onClick={handleTest}>TEST</button>
        {props.tasks?.map((task) => {
          return (
            <div>
              {/* <TaskItem task={task} /> */}
              <div className={styles.displayFlex}>
                <h1>Task</h1>
                <div>
                  <p>description text text text</p>
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
