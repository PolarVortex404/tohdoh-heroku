import { React, useState } from "react";
import styles from "../../styles/EditButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faPencil } from "@fortawesome/free-solid-svg-icons";

import EditModal from "../EditModal";

const EditModalButton = (props) => {
//   const [isOpen, setIsOpen] = useState(true);
const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(true);
    console.log("handling Click");
  };
  return (
    <div>
      {/* <button onClick={handleClick} className={styles.editBtn}>
        <FontAwesomeIcon icon={faPencil} size="2x" />
      </button> */}

      <button className={styles.editBtn} onClick={() => handleClick(true)}>
        {/* <FontAwesomeIcon icon={faPencil} size="2x" /> */}
      </button>

     
        <EditModal
          task={props.task}
          updateTask={props.updateTask}
          show={show}
        />
      
    </div>
  );
};
export default EditModalButton;
