import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";
import { v4 } from "uuid";
import { CopyIcon } from "../../../icons/copy-icon";

interface UuidModalProps {
  closeModal: () => void;
}
export const UuidModal: React.FC<UuidModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} title="UUIDs" hasCloseIcon>
      <UuidModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const UuidModalContainer: React.FC<UuidModalProps> = ({
  closeModal
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
  };

  React.useState(() => {
    if (!uuids.length) {
      generateUuids();
    }
  });

  const renderUuid = (index: number, uuid: string) => (
    <div key={index} className="flex items-center gap-2">
      <p>{uuid}</p>
      <div className="flex grow justify-end">
        <CopyIcon value={uuid} />
      </div>
    </div>
  );

  const renderUuids = (uuids: string[]) => (
    <div className="grid grid-flow-row gap-1">
      {uuids.map((u, i) => renderUuid(i, u))}
    </div>
  );

  return (
    <div className="flex flex-col justify-between">
      {renderUuids(uuids)}

      <div className="mt-3 flex justify-end gap-3">
        <Button primary onClick={generateUuids} text={"Reload"} />
        <Button outline onClick={closeModal} text={"Cancel"} />
      </div>
    </div>
  );
};
