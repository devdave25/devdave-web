import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface EncodeDecodeModalProps {
  closeModal: () => void;
}
export const EncodeDecodeModal: React.FC<EncodeDecodeModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} title="Encode / Decode" hasCloseIcon>
      <EncodeDecodeModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const EncodeDecodeModalContainer: React.FC<EncodeDecodeModalProps> = ({
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
