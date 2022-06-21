import { React, useState } from "react";
import DeleteModal from "../DeleteModal";

import styles from "../../styles/DeleteButton.module.css";
import { IoIosTrash } from "react-icons/io";

const DeleteButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button onClick={handleClick} className={styles.deleteBtn}>
        <IoIosTrash size={28} />
      </button>

      {isOpen && (
        <DeleteModal
          task={props.task}
          deleteTask={props.deleteTask}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default DeleteButton;
