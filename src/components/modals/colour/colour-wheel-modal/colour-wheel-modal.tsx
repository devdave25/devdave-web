import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface ColourWheelModalProps {
  closeModal: () => void;
}
export const ColourWheelModal: React.FC<ColourWheelModalProps> = ({
  closeModal
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <ColourWheelModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const ColourWheelModalContainer: React.FC<ColourWheelModalProps> = ({
  closeModal
}) => {
  return (
    <>
      <div className="h-64">Body</div>
      <div className="mt-3 flex justify-end">
        <Button outline onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </>
  );
};
