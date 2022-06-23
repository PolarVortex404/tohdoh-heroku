import { React } from "react";
import { useAuth0 } from "@auth0/auth0-react";

//components
import SettingsItem from "../components/SettingsItem";

//styles
import styles from "../styles/Settings.module.css";

const Settings = (props) => {
  const { user } = useAuth0();
  return (
    <div className={styles.settingsContainer}>
      <br />
      <h1 className={styles.settingsHeader}>{user.name}'s Tasks</h1>
      <div className={styles.container}>
        {props.tasks?.map((task, index) => {
          return (
            <SettingsItem
              key={index}
              updateTask={props.updateTask}
              task={task}
              deleteTask={props.deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Settings;
