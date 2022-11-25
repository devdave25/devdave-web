import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";
import { DateTime } from "luxon";

interface TimezoneModalProps {
  closeModal: () => void;
}
export const TimezonesModal: React.FC<TimezoneModalProps> = ({
  closeModal
}) => {
  return (
    <Modal onDismiss={closeModal} title="Timezones" hasCloseIcon>
      <TimezoneModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const TimezoneModalContainer: React.FC<TimezoneModalProps> = ({
  closeModal
}) => {
  const [date, setDate] = React.useState<DateTime | undefined>();

  React.useEffect(() => {
    if (!date) {
      setDate(DateTime.now());
    }
  }, []);

  return (
    <>
      <div className="h-64">
        <p>{date?.toISO()}</p>
      </div>
      <div className="mt-3 flex justify-end">
        <Button outline onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </>
  );
};
