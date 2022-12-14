import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";
import AceEditor from "react-ace";

interface JsonViewerModalProps {
  closeModal: () => void;
}
export const JsonViewerModal: React.FC<JsonViewerModalProps> = ({
  closeModal
}) => {
  return (
    <Modal
      onDismiss={closeModal}
      hasCloseIcon
      allowFullscreen
      defaultFullscreen
    >
      <JsonViewerModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const JsonViewerModalContainer: React.FC<JsonViewerModalProps> = ({
  closeModal
}) => {
  return (
    <>
      <AceEditor
        name="json_viewer"
        mode="json"
        theme="github"
        className="flex grow"
        style={{ width: "auto" }}
        onChange={(e: any) => console.log(e)}
        editorProps={{ $blockScrolling: true }}
      />
      <div className="mt-3 flex justify-end">
        <Button outline onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </>
  );
};
