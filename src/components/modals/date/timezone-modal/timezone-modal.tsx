import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface TimezoneModalProps {
  closeModal: () => void;
}
export const TimezonesModal: React.FC<TimezoneModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} title="Timezones" hasCloseIcon>
      <TimezoneModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const TimezoneModalContainer: React.FC<TimezoneModalProps> = ({
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
