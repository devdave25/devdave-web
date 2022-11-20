import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface PdfCombinerModalProps {
  closeModal: () => void;
}
export const PdfCombinerModal: React.FC<PdfCombinerModalProps> = ({
  closeModal
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <PdfCombinerModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const PdfCombinerModalContainer: React.FC<PdfCombinerModalProps> = ({
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
