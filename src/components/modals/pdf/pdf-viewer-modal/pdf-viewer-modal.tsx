import React from "react";
import { useModal } from "../../../../context/modal";
import { ModalType } from "../../../../interfaces/modal-type";
import { Button } from "../../../button/button";
import { FileSelector } from "../../../file-selector/file-selector";
import { PdfThumbnails } from "../../../pdf-thumbnails/pdf-thumbnails";
import { Modal } from "../../modal";
import { PdfPreview } from "../pdf-preview/pdf-preview";

interface PdfViewerModalProps {
  closeModal: () => void;
}
export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  closeModal
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <PdfViewerModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const PdfViewerModalContainer: React.FC<PdfViewerModalProps> = () => {
  const { openModal: openPreview, closeModal: closePreview } = useModal();
  const [file, setFile] = React.useState<File | undefined>();

  if (!file) {
    return (
      <>
        <FileSelector onSelect={(f) => setFile(f[0])} />
      </>
    );
  }

  const preview = (pageNumber: number) => {
    openPreview(
      ModalType.PdfPreview,
      <PdfPreview
        file={file}
        initialPage={pageNumber}
        closeModal={() => closePreview(ModalType.PdfPreview)}
      />
    );
  };

  return (
    <div>
      <PdfThumbnails
        file={file}
        onPageClick={preview}
        onPasswordFail={() => setFile(undefined)}
      />
      <Button secondary text="Clear" onClick={() => setFile(undefined)} />
    </div>
  );
};
