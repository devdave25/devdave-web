import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface TimestampModalProps {
  closeModal: () => void;
}
export const TimestampModal: React.FC<TimestampModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <TimestampModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const TimestampModalContainer: React.FC<TimestampModalProps> = ({
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
