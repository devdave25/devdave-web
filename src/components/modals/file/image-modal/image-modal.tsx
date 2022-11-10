import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface ImageModalProps {
  closeModal: () => void;
}
export const ImageModal: React.FC<ImageModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} title="Image" hasCloseIcon>
      <ImageModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const ImageModalContainer: React.FC<ImageModalProps> = ({
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
