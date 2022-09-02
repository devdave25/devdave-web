import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./xml-validator-modal.module.scss";

interface XmlValidatorModalProps {
    closeModal: () => void;
}
export const XmlValidatorModal: React.FC<XmlValidatorModalProps> = ({ closeModal }) => {
    return (
        <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
            <XmlValidatorModalContainer closeModal={closeModal} />
        </Modal>
    );
};

export const XmlValidatorModalContainer: React.FC<XmlValidatorModalProps> = ({
    closeModal,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Xml Validator</div>
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
