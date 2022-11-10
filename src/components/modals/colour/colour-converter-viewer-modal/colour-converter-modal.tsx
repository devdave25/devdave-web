import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface ColourConverterModalProps {
  closeModal: () => void;
}
export const ColourConverterModal: React.FC<ColourConverterModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <ColourConverterModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const ColourConverterModalContainer: React.FC<ColourConverterModalProps> =
  ({ closeModal }) => {
    return (
      <>
        <div className="h-64">Body</div>
        <div className="flex justify-end mt-3">
          <Button
            outline
            onClick={closeModal}
            className="mr-3"
            text={"Cancel"}
          />
        </div>
      </>
    );
  };
