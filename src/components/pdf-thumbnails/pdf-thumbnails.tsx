import classNames from "classnames";
import React from "react";

import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.min.js";

interface PdfThumbnailsProps {
  file?: File;
  wrap?: boolean;
  onPageClick?: (page: number) => void;
  onPasswordFail?: () => void;
}
export const PdfThumbnails: React.FC<PdfThumbnailsProps> = ({
  file,
  wrap = true,
  onPageClick,
  onPasswordFail
}) => {
  const [totalPages, setTotalPages] = React.useState(undefined);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setTotalPages(numPages);
  };

  const onPassword = (callback: (password: string) => void, reason: number) => {
    function callbackProxy(password: string) {
      // Cancel button handler
      if (password === null) {
        onPasswordFail && onPasswordFail();
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
          onPasswordFail && onPasswordFail();
        }
        break;
      }
      case 2: {
        const password = prompt("Invalid password. Please try again.");
        if (password) {
          callbackProxy(password);
        } else {
          onPasswordFail && onPasswordFail();
        }
        break;
      }
      default:
    }
  };

  if (!file) {
    return null;
  }

  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onPassword={onPassword}
      >
        <div className={classNames("flex", { "flex-wrap": wrap })}>
          {Array.from(new Array(totalPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              className="m-1"
              height={100}
              onClick={() => onPageClick && onPageClick(index + 1)}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </div>
      </Document>
      <p>Total pages - {totalPages}</p>
    </div>
  );
};
