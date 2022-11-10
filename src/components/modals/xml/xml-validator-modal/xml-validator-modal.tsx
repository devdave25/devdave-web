import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface XmlValidatorModalProps {
  closeModal: () => void;
}
export const XmlValidatorModal: React.FC<XmlValidatorModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} title="XML Validator" hasCloseIcon>
      <XmlValidatorModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const XmlValidatorModalContainer: React.FC<XmlValidatorModalProps> = ({
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
