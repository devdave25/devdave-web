import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface JwtModalProps {
  closeModal: () => void;
}
export const JwtModal: React.FC<JwtModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} title="JWT" hasCloseIcon>
      <JwtModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const JwtModalContainer: React.FC<JwtModalProps> = ({ closeModal }) => {
  return (
    <>
      <div className="h-64">Body</div>
      <div className="flex justify-end mt-3">
        <Button outline onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </>
  );
};
