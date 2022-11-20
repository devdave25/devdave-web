import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface ColourConverterModalProps {
  closeModal: () => void;
}
export const ColourConverterModal: React.FC<ColourConverterModalProps> = ({
  closeModal
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <ColourConverterModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const ColourConverterModalContainer: React.FC<
  ColourConverterModalProps
> = ({ closeModal }) => {
  return (
    <>
      <div className="h-64">Body</div>
      <div className="mt-3 flex justify-end">
        <Button outline onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </>
  );
};
