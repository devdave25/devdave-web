import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface PdfViewerModalProps {
  closeModal: () => void;
}
export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  closeModal
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <PdfViewerModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const PdfViewerModalContainer: React.FC<PdfViewerModalProps> = ({
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
