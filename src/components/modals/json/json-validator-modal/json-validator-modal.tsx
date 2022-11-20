import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface JsonValidatorModalProps {
  closeModal: () => void;
}
export const JsonValidatorModal: React.FC<JsonValidatorModalProps> = ({
  closeModal
}) => {
  return (
    <Modal onDismiss={closeModal} title="JSON Validator" hasCloseIcon>
      <JsonValidatorModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const JsonValidatorModalContainer: React.FC<JsonValidatorModalProps> = ({
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
