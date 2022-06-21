import { React } from "react";
import { useAuth0 } from "@auth0/auth0-react";

//components
import StarRating from "../components/StarRating";
import SettingsItem from "../components/SettingsItem";

//styles
import styles from "../styles/Settings.module.css";

const Settings = (props) => {
  const { user } = useAuth0();
  return (
    <div className={styles.settingsContainer}>
      <h1>Hi, {user.name}! </h1>
      <br />
      <div>
        <aside>
          <article>These are the Goals you've set so far:</article>
          {/* {props.tasks.count} */}
        </aside>
      </div>
      <div className={styles.container}>
        {/* <button onClick={handleTest}>TEST</button> */}
        {props.tasks?.map((task, index) => {
          return <SettingsItem
          key={index}
          updateTask={props.updateTask}
          task={task} deleteTask={props.deleteTask} />;
        })}
      </div>
    </div>
  );
};
export default Settings;
