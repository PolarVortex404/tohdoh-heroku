import { React, useState } from "react";
import styles from "../styles/DeleteModal.module.css";

//icon
import { RiCloseLine } from "react-icons/ri";

const DeleteModal = ({ setIsOpen, task, deleteTask }) => {
  const handleDelete = () => {
    deleteTask(task);
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>Delete </h5>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              <span>
                Are you sure you want to delete <b>"{task.title}"</b>?
              </span>
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className={styles.deleteBtn} onClick={handleDelete}>
                  Delete
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
