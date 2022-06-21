import { React, useState } from "react";

//components
import DeleteModal from "../components/DeleteModal";
import DeleteButton from "./buttons/DeleteButton";
import StarRating from "./StarRating";
import ReadOnlyStarRating from "./ReadOnlyStarRating";

//styles
import styles from "../styles/SettingsItem.module.css";
import EditButton from "./buttons/EditButton";

const SettingsItem = (props) => {
  return (
    <div className={styles.displayFlex}>
      <div className={styles.container}>
        <h1>{props.task.title}</h1>
        <div>
          <p>{props.task.description}</p>
          <ReadOnlyStarRating rating={props.task.star_rating} />
          <div className={styles.actionItems}>
            <DeleteButton task={props.task} deleteTask={props.deleteTask} />
            <EditButton
            task={props.task}
            updateTask={props.updateTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsItem;
