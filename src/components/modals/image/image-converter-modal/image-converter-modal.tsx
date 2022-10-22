import React from "react";
import { Button } from "../../../button/button";
import { FileSelector } from "../../../file-selector/file-selector";
import { Modal } from "../../modal";
import { createFFmpeg } from '@ffmpeg/ffmpeg';
import saveAs from "file-saver";

import styles from "./image-converter-modal.module.scss";

interface ImageConverterModalProps {
  closeModal: () => void;
}
export const ImageConverterModal: React.FC<ImageConverterModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <ImageConverterModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const ImageConverterModalContainer: React.FC<ImageConverterModalProps> =
  ({ closeModal }) => {
    const [file, setFile] = React.useState<File | undefined>();
    const ffmpeg = createFFmpeg({
      log: true,
    });

    const doTranscode = async () => {
      if (!file) {
        return;
      }

      const outputFilename = "test.mp4"
      console.log("LOAD");
      await ffmpeg.load();
      console.log(file);
      ffmpeg.FS('writeFile', file.name, new Uint8Array(await file.arrayBuffer()));
      await ffmpeg.run('-i', file.name, 'test.mp4');
      const data = ffmpeg.FS('readFile', 'test.mp4');
      saveAs(new Blob([data.buffer]), outputFilename);
      console.log("DONE");
    };

    return (
      <div className={styles.container}>
        <div className={styles.header}>Image Converter</div>
        <p>Function here</p>
        <FileSelector onSelect={(f) => setFile(f[0])} />
        <Button text="Process" primary onClick={() => doTranscode()} />
        <div className="flex justify-end mt-3">
          <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
        </div>
      </div>
    );
  };
