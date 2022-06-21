import { React, useState } from "react";
import styles from "../../styles/EditButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faPencil } from "@fortawesome/free-solid-svg-icons";

import EditModal from "../EditModal";

const EditButton = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button onClick={handleClick} className={styles.editBtn}>
        <FontAwesomeIcon icon={faPencil} size="2x" />
      </button>

      {/* {isOpen && (
        <EditModal
          task={props.task}
          updateTask={props.updateTask}
          setIsOpen={setIsOpen}

        />
      )} */}
    </div>
  );
};
export default EditButton;
