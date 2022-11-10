import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface ColourGeneratorModalProps {
  closeModal: () => void;
}
export const ColourGeneratorModal: React.FC<ColourGeneratorModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <ColourGeneratorModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const ColourGeneratorModalContainer: React.FC<ColourGeneratorModalProps> =
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
