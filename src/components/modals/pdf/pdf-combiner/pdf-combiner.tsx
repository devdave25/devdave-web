import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";
import { PDFDocument } from "pdf-lib";
import { saveFile } from "../../../../utils/files";

interface PdfCombinerModalProps {
  closeModal: () => void;
}
export const PdfCombinerModal: React.FC<PdfCombinerModalProps> = ({
  closeModal
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <PdfCombinerModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const PdfCombinerModalContainer: React.FC<PdfCombinerModalProps> = ({
  closeModal
}) => {
  const createPdf = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([350, 400]);
    page.moveTo(110, 200);
    page.drawText("Hello World!");
    saveFile(await pdfDoc.save(), "test.pdf");
  };

  return (
    <>
      <Button primary onClick={() => createPdf()} text={"Save PDF"} />
    </>
  );
};
