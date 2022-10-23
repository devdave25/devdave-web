import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./timezone-modal.module.scss";

interface TimezoneModalProps {
  closeModal: () => void;
}
export const TimezonesModal: React.FC<TimezoneModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <TimezoneModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const TimezoneModalContainer: React.FC<TimezoneModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Timezones</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
