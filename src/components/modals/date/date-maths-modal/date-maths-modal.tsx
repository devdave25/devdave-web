import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface DateMathsModalProps {
  closeModal: () => void;
}
export const DateMathsModal: React.FC<DateMathsModalProps> = ({
  closeModal
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <DateMathsModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const DateMathsModalContainer: React.FC<DateMathsModalProps> = ({
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
