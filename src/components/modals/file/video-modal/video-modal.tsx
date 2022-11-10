import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

interface VideoModalProps {
  closeModal: () => void;
}
export const VideoModal: React.FC<VideoModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} title="Video" hasCloseIcon>
      <VideoModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const VideoModalContainer: React.FC<VideoModalProps> = ({
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
