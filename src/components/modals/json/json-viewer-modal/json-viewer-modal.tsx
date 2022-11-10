import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";
import AceEditor from "react-ace";

interface JsonViewerModalProps {
  closeModal: () => void;
}
export const JsonViewerModal: React.FC<JsonViewerModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <JsonViewerModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const JsonViewerModalContainer: React.FC<JsonViewerModalProps> = ({
  closeModal,
}) => {
  return (
    <>
      <AceEditor
        mode="json"
        theme="github"
        className="h-64"
        onChange={(e: any) => console.log(e)}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
      <div className="flex justify-end mt-3">
        <Button outline onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </>
  );
};
