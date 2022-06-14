import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useState } from "react";
import { useEnv } from "../context/env.context";

// export const AccessControlLevel = {
//   PUBLIC: "public",
//   PROTECTED: "requires-authentication",
//   RBAC: "requires-role-permission",
//   CORS: "requires-cors-allowed-method",
// };

export const ServerApi = () => {
  const [tasks, setTasks] = useState([]);
  const [skips, setSkips] = useState([]);

  // const [selectedAccessControlLevel, setSelectedAccessControlLevel] =
  //   useState(null);

  const { getAccessTokenSilently } = useAuth0();
  const { apiServerUrl } = useEnv();

  const makeRequest = async (options) => {
    try {
      const token = await getAccessTokenSilently();

      options.config.headers.Authorization = `Bearer ${token}`
     
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
    // setSelectedAccessControlLevel(AccessControlLevel.PUBLIC);

    // setApiEndpoint("GET /api/messages/public");

    const config = {
      url: `${apiServerUrl}/tasks`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    const data = await makeRequest({ config });
console.log(data)
    setTasks(data);
    return data;
  };

  const getSkips = async () => {
    // setSelectedAccessControlLevel(AccessControlLevel.PUBLIC);

    // setApiEndpoint("GET /api/messages/public");

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
    // setSelectedAccessControlLevel(AccessControlLevel.PUBLIC);

    // setApiEndpoint("GET /api/messages/public");

    const config = {
      url: `${apiServerUrl}/tasks/${task.id}`,
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      data: task,
    };

    await makeRequest({ config });
    // const updatedTasks = tasks
    // updatedTasks.push(data)
    setTasks(await getTasks);
  };

  const createTask = async (task) => {
    // setSelectedAccessControlLevel(AccessControlLevel.PUBLIC);

    // setApiEndpoint("GET /api/messages/public");

    const config = {
      url: `${apiServerUrl}/tasks`,
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: task,
    };

    const data = await makeRequest({ config });
    const updatedTasks = tasks;
    updatedTasks.push(data);
    setTasks(updatedTasks);
  };

  const deleteTask = async (task) => {
    // setSelectedAccessControlLevel(AccessControlLevel.PUBLIC);

    // setApiEndpoint("GET /api/messages/public");

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
    // setSelectedAccessControlLevel(AccessControlLevel.PUBLIC);

    // setApiEndpoint("GET /api/messages/public");

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
  };

  // const getProtectedResource = async () => {
  //   setSelectedAccessControlLevel(AccessControlLevel.PROTECTED);

  //   setApiEndpoint("GET /api/messages/protected");

  //   const config = {
  //     url: `${apiServerUrl}/api/messages/protected`,
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   };

  //   const data = await makeRequest({ config, authenticated: true });

  //   setApiResponse(JSON.stringify(data, null, 2));
  // };

  // const getRbacResource = async () => {
  //   setSelectedAccessControlLevel(AccessControlLevel.RBAC);

  //   setApiEndpoint("GET /api/messages/admin");

  //   const config = {
  //     url: `${apiServerUrl}/api/messages/admin`,
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   };

  //   const data = await makeRequest({ config, authenticated: true });

  //   setApiResponse(JSON.stringify(data, null, 2));
  // };

  // const checkCorsAllowedMethod = async () => {
  //   setSelectedAccessControlLevel(AccessControlLevel.CORS);

  //   setApiEndpoint("DELETE /api/messages/public");

  //   const config = {
  //     url: `${apiServerUrl}/api/messages/public`,
  //     method: "DELETE",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   };

  //   const data = await makeRequest({ config, authenticated: true });

  //   setApiResponse(JSON.stringify(data, null, 2));
  // };

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
