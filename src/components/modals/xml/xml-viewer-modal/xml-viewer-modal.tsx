import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./xml-viewer-modal.module.scss";

interface XmlViewerModalProps {
    closeModal: () => void;
}
export const XmlViewerModal: React.FC<XmlViewerModalProps> = ({ closeModal }) => {
    return (
        <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
            <XmlViewerModalContainer closeModal={closeModal} />
        </Modal>
    );
};

export const XmlViewerModalContainer: React.FC<XmlViewerModalProps> = ({
    closeModal,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Xml viewer</div>
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
