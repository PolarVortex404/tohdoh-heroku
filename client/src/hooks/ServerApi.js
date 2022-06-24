import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useState } from "react";
import { useEnv } from "../context/env.context";

export const ServerApi = () => {
  const [tasks, setTasks] = useState([]);
  const [skips, setSkips] = useState([]);

  const { getAccessTokenSilently } = useAuth0();
  const { apiServerUrl } = useEnv();

  const makeRequest = async (options) => {
    try {
      const token = await getAccessTokenSilently();

      options.config.headers.Authorization = `Bearer ${token}`;

      const response = await axios(options.config);
      const { data } = response;

      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      }

      return error.message;
    }
  };

  const getTasks = async () => {
    const config = {
      url: `${apiServerUrl}/tasks`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    const data = await makeRequest({ config });
    console.log(data);
    setTasks(data);
    return data;
  };

  const getSkips = async () => {
    const config = {
      url: `${apiServerUrl}/skips`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    const data = await makeRequest({ config });

    setSkips(data);
  };

  const updateTask = async (task) => {
    const config = {
      url: `${apiServerUrl}/tasks/${task.id}`,
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      data: task,
    };

    await makeRequest({ config });
    const tasks = await getTasks();
    setTasks(tasks);
  };

  const createTask = async (task) => {
    const config = {
      url: `${apiServerUrl}/tasks`,
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: task,
    };

    const data = await makeRequest({ config });
    const updatedTasks = await getTasks();
    // updatedTasks.push(data);
    setTasks(updatedTasks);
  };

  const deleteTask = async (task) => {
    const config = {
      url: `${apiServerUrl}/tasks/${task.id}`,
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    };

    await makeRequest({ config });

    setTasks(
      tasks.filter((item) => {
        return item.id !== task.id;
      })
    );
  };
  const createSkip = async (skip) => {
    const config = {
      url: `${apiServerUrl}/skips`,
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: skip,
    };

    const data = await makeRequest({ config });
    const updatedSkips = skips;
    updatedSkips.push(data);
    setSkips(updatedSkips);
    const task = tasks.filter((task) => task.id === skip.task_id)[0];

    task.skips.push(data);

    setTasks(tasks);
  };
  return {
    tasks,
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    skips,
    getSkips,
    createSkip,
  };
};
