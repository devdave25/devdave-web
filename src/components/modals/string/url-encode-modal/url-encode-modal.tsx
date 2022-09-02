import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./url-encode-modal.module.scss";

interface UrlEncodeModalProps {
  closeModal: () => void;
}
export const UrlEncodeModal: React.FC<UrlEncodeModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <UrlEncodeModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const UrlEncodeModalContainer: React.FC<UrlEncodeModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Url Encode</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" children={
          <>
            Cancel
          </>
        } />
      </div>
    </div>
  );
};
