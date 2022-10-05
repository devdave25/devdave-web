import { ArrowPathIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";
import { v4 } from "uuid";

import styles from "./uuid-modal.module.scss";
import classnames from "classnames";

interface UuidModalProps {
  closeModal: () => void;
}
export const UuidModal: React.FC<UuidModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <UuidModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const UuidModalContainer: React.FC<UuidModalProps> = ({
  closeModal,
}) => {
  const [uuids, setUuids] = React.useState<string[]>([]);

  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  const generateUuids = (copy?: boolean): void => {
    const array = [];
    const count = 12;
    for (let i = 0; i < count; i++) {
      array.push(v4());
    }

    if (copy) {
      copyToClipboard(array[0]);
    }

    setUuids(array);
  }

  React.useState(() => {
    if (!uuids.length) {
      generateUuids()
    }
  });

  const renderUuid = (index: number, uuid: string) => (
    <div key={index} className="flex">
      <div className="text-xl">
        {uuid}
      </div>
      <div className="flex ml-2">
        <DocumentDuplicateIcon className="w-8 cursor-pointer" onClick={() => copyToClipboard(uuid)} />
      </div>
    </div>
  );

  const renderUuids = (uuids: string[]) => (
    <div className="grid grid-flow-row gap-1">
      {uuids.map((u, i) => renderUuid(i, u))}
    </div>
  )

  return (
    <div className={styles.container}>
      <div className="flex mr-16 mb-4">
        <div className={classnames("grow text-2xl", styles.header)}>UUID</div>
        <ArrowPathIcon className="w-8 cursor-pointer" onClick={() => generateUuids(true)} />
      </div>

      {renderUuids(uuids)}


      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
