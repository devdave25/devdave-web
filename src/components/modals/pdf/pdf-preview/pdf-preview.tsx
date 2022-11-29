import React from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { PageIndicator } from "../../../page-indicator/page-indicator";
import { StaticHide } from "../../../static-hide/static-hide";
import { Modal } from "../../modal";

pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.min.js";

interface PdfPreviewProps {
  file?: File;
  initialPage?: number;
  onlyPage?: boolean;
  closeModal: () => void;
}
export const PdfPreview: React.FC<PdfPreviewProps> = ({
  file,
  initialPage = 1,
  onlyPage,
  closeModal
}) => {
  if (!file) {
    return null;
  }

  return (
    <Modal onDismiss={closeModal} custom>
      <PdfViewerContainer
        file={file}
        initial={initialPage}
        onlyPage={onlyPage}
        closeModal={closeModal}
      />
    </Modal>
  );
};

export const PdfViewerContainer: React.FC<{
  file: File;
  initial: number;
  onlyPage?: boolean;
  closeModal: () => void;
}> = ({ file, initial, onlyPage, closeModal }) => {
  const [page, setPage] = React.useState<number>(initial);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  const onPassword = (callback: (password: string) => void, reason: number) => {
    function callbackProxy(password: string) {
      // Cancel button handler
      if (password === null) {
        closeModal();
        // Reset your `document` in `state`, un-mount your `<Document />`, show custom message, whatever
      }

      callback(password);
    }

    switch (reason) {
      case 1: {
        const password = prompt("Enter the password to open this PDF file.");
        if (password) {
          callbackProxy(password);
        } else {
          closeModal();
        }
        break;
      }
      case 2: {
        const password = prompt("Invalid password. Please try again.");
        if (password) {
          callbackProxy(password);
        } else {
          closeModal();
        }
        break;
      }
      default:
    }
  };

  return (
    <div className="flex items-center">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setTotalPages(numPages)}
        onPassword={onPassword}
      >
        <div className="flex">
          <Page pageNumber={page} />
        </div>
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 transform rounded-lg">
          <StaticHide>
            <PageIndicator
              initial={initial}
              total={totalPages}
              onChange={(p) => setPage(p)}
              disabled={onlyPage}
              className="rounded-lg"
            />
          </StaticHide>
        </div>
      </Document>
    </div>
  );
};
