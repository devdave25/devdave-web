import React from "react";
import { Button } from "../../../button/button";
import { FileSelector } from "../../../file-selector/file-selector";
import { Modal } from "../../modal";
import { useFileInfo } from "../../../../hooks/use-file-info";
import { useFfmpeg } from "../../../../hooks/use-ffmpeg";
import { saveFile } from "../../../../utils/files";
import { LoadingBar } from "../../../loading-bar/loading-bar";

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
  closeModal
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
    <>
      {loading ? (
        <LoadingBar loading progress={progress} />
      ) : (
        <FileSelector onSelect={(f) => setFile(f[0])} />
      )}
      <div className="mt-3 flex justify-end gap-2">
        <Button primary text="Process" onClick={() => doTranscode()} />
        <Button outline text="Cancel" onClick={closeModal} className="mr-3" />
      </div>
    </>
  );
};
