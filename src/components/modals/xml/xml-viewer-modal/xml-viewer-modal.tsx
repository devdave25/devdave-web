import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface XmlViewerModalProps {
  closeModal: () => void;
}
export const XmlViewerModal: React.FC<XmlViewerModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <XmlViewerModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const XmlViewerModalContainer: React.FC<XmlViewerModalProps> = ({
  closeModal,
}) => {
  return (
    <>
      <div className="h-64">Body</div>
      <div className="flex justify-end mt-3">
        <Button outline onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </>
  );
};
