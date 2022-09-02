import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./image-converter-modal.module.scss";

interface ImageConverterModalProps {
    closeModal: () => void;
}
export const ImageConverterModal: React.FC<ImageConverterModalProps> = ({ closeModal }) => {
    return (
        <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
            <ImageConverterModalContainer closeModal={closeModal} />
        </Modal>
    );
};

export const ImageConverterModalContainer: React.FC<ImageConverterModalProps> = ({
    closeModal,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Image Converter</div>
            <p>Function here</p>
            <div className="flex justify-end mt-3">
                <Button onClick={closeModal} className="mr-3" children={
                    <>
                        Cancel
                    </>
                } />
            </div>
        </div>
    );
};
