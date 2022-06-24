import { React, useState } from "react";

//components
import ReadOnlyStarRating from "./ReadOnlyStarRating";
import EditModal from "./EditModal";
//Buttons
import DeleteButton from "./buttons/DeleteButton";
// import EditModalButton from "./buttons/EditModalButton";

//styles
import styles from "../styles/SettingsItem.module.css";
//icons
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SettingsItem = (props) => {
  const [bounce, setBounce] = useState(false);
  const [show, setShow] = useState(false);

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
            {props.updateTask &&(
            <button className={styles.editBtn} onClick={() => setShow(true)}>
              <FontAwesomeIcon 
              icon={faPencil} size="2x" />
            </button>
              
            )}
          </div>
        </div>
      </div>

      <EditModal
        task={props.task}
        updateTask={props.updateTask}
        onClose={() => setShow(false)}
        show={show}
      />
    </div>
  );
};

export default SettingsItem;
