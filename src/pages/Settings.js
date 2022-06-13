import React from "react";
import TaskItem from "../components/TaskItem";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEnv } from "../context/env.context";
// import Home from "./Home";

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
    console.log('calling server')
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
          return 
          <TaskItem task={task} /> ;
        })}
      </container>
    </div>
  );
};
export default Settings;
