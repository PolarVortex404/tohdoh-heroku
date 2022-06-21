import { React, useState } from "react";

//components
import DeleteButton from "./buttons/DeleteButton";
import ReadOnlyStarRating from "./ReadOnlyStarRating";

//styles
import styles from "../styles/SettingsItem.module.css";
//icons
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SettingsItem = (props) => {
  const [bounce, setBounce] = useState(false);

  return (
    <div className={styles.displayFlex}>
      {props.task.complete_date && (
        <div className={styles.done}>
          {bounce && (
            <FontAwesomeIcon
              className={styles.iconContainer}
              icon={faCircleCheck}
              size="3x"
              onMouseEnter={() => setBounce(true)}
              onMouseLeave={() => setBounce(false)}
              bounce
            />
          )}
          {!bounce && (
            <FontAwesomeIcon
              className={styles.iconContainer}
              icon={faCircleCheck}
              size="3x"
              onMouseEnter={() => setBounce(true)}
              onMouseLeave={() => setBounce(false)}
            />
          )}
        </div>
      )}
      <div>
        <h1>{props.task.title}</h1>
        <div>
          <p>{props.task.description}</p>
          <ReadOnlyStarRating rating={props.task.star_rating} />
          <div className={styles.actionItems}>
            {props.deleteTask && (
              <DeleteButton task={props.task} deleteTask={props.deleteTask} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsItem;
