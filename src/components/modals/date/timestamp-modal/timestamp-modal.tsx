import React from "react";
import { Input } from "../../../input/input";
import { Modal } from "../../modal";
import { DateTime } from "luxon";
import {
  ParseDateResult,
  parseSecondsToDuration,
  parseStringToDateTime
} from "../../../../utils/string";

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
  const [parsed, setParsed] = React.useState<ParseDateResult | undefined>();
  const [durationText, setDurationText] = React.useState("");
  const [duration, setDuration] = React.useState("");

  React.useEffect(() => {
    if (!text) {
      setText(DateTime.now().toMillis().toString());
    }
  }, []);

  React.useEffect(() => {
    setParsed(parseStringToDateTime(text));
  }, [text]);

  React.useEffect(() => {
    setDuration(parseSecondsToDuration(durationText));
  }, [durationText]);

  return (
    <>
      <Input
        value={text}
        onChange={({ target }) => setText(target.value)}
        suffix={parsed?.method}
      />
      {!parsed && <p>Invalid Date</p>}
      {parsed && (
        <table className="table-auto">
          <tr>
            <td>Millis</td>
            <td>{parsed.date.toMillis()}</td>
          </tr>
          <tr>
            <td>GMT</td>
            <td>{parsed.date.setZone("GMT").toFormat("DDDD HH:mm:ss")}</td>
          </tr>
          <tr>
            <td>Local</td>
            <td>
              {parsed.date.setZone("local").toFormat("DDDD HH:mm:ss ZZ")}{" "}
              {DateTime.local().zoneName}
            </td>
          </tr>
          <tr>
            <td className="pr-6">Relative</td>
            <td>{parsed.date.toRelativeCalendar()}</td>
          </tr>
        </table>
      )}
      <Input
        value={durationText}
        onChange={({ target }) => setDurationText(target.value)}
        suffix="Seconds"
      />
      {duration}
    </>
  );
};
