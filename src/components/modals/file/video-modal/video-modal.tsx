import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./video-modal.module.scss";

interface VideoModalProps {
  closeModal: () => void;
}
export const VideoModal: React.FC<VideoModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <VideoModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const VideoModalContainer: React.FC<VideoModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Video</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
