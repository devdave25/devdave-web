import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./html-encode-modal.module.scss";

interface HtmlEncodeModalProps {
  closeModal: () => void;
}
export const HtmlEncodeModal: React.FC<HtmlEncodeModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <HtmlEncodeModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const HtmlEncodeModalContainer: React.FC<HtmlEncodeModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Html Encode</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
