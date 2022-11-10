import React from "react";
import { Button } from "../../../button/button";
import { FileSelector } from "../../../file-selector/file-selector";
import { Modal } from "../../modal";
import { useFileInfo } from "../../../../hooks/use-file-info";
import { useFfmpeg } from "../../../../hooks/use-ffmpeg";
import { saveFile } from "../../../../utils/files";

interface FileInfoModalProps {
  closeModal: () => void;
}
export const FileInfoModal: React.FC<FileInfoModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} title="File Info" hasCloseIcon>
      <FileInfoModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const FileInfoModalContainer: React.FC<FileInfoModalProps> = ({
  closeModal,
}) => {
  const [file, setFile] = React.useState<File | undefined>();
  const { analyse } = useFileInfo();
  const { loading, progress, convert } = useFfmpeg();

  const doTranscode = async () => {
    if (!file) {
      return;
    }

    const outputFilename = "test.mp4";
    const result = await analyse(file);
    const data = await convert(file, "mp4");
    if (!data) {
      return;
    }
    saveFile(data.buffer, outputFilename);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>File Info</div>
      <p>
        {JSON.stringify(loading)} - {JSON.stringify(progress)}
      </p>
      <FileSelector onSelect={(f) => setFile(f[0])} />
      <Button text="Process" primary onClick={() => doTranscode()} />
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
