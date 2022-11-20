import React from "react";
import { Input } from "../../../input/input";
import { Modal } from "../../modal";
import { DateTime } from "luxon";

interface TimestampModalProps {
  closeModal: () => void;
}
export const TimestampModal: React.FC<TimestampModalProps> = ({
  closeModal
}) => {
  return (
    <Modal onDismiss={closeModal} hasCloseIcon>
      <TimestampModalContainer />
    </Modal>
  );
};

export const TimestampModalContainer: React.FC = () => {
  const [text, setText] = React.useState("");
  const [date, setDate] = React.useState<DateTime | undefined>();

  React.useEffect(() => {
    if (!text) {
      setText(DateTime.now().toMillis().toString());
    }
  }, []);

  React.useEffect(() => {
    let timestamp = parseInt(text);
    if (timestamp) {
      if (text.length < 12) {
        setDate(DateTime.fromSeconds(timestamp));
      } else {
        setDate(DateTime.fromMillis(timestamp));
      }
    }
  }, [text]);

  return (
    <>
      <Input value={text} onChange={({ target }) => setText(target.value)} />
      <p>{date?.toJSON()}</p>
    </>
  );
};
