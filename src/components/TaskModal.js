import React, { useState } from "react";
import styles from "./TaskModal.module.css";

const TaskModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={props.onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>Set Goal</h4>
        </div>
        <div className={styles.modalBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className={styles.modalFooter}>
          <button onClick={props.onClose} className="closeModalBtn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
