import React, { useState } from "react";
import { TextArea } from "../../../textarea/textarea";
import { Toggle } from "../../../toggle/toggle";
import { Modal } from "../../modal";
import { CopyIcon } from "../../../icons/copy-icon";
import { PasteIcon } from "../../../icons/paste-icon";
import { decodeBase64, encodeBase64 } from "../../../../utils/string";

interface EncodeDecodeModalProps {
  closeModal: () => void;
}
export const EncodeDecodeModal: React.FC<EncodeDecodeModalProps> = ({
  closeModal
}) => {
  return (
    <Modal onDismiss={closeModal} title="Encode / Decode" hasCloseIcon>
      <EncodeDecodeModalContainer />
    </Modal>
  );
};

export const EncodeDecodeModalContainer: React.FC = () => {
  const [decodeMode, setDecodeMode] = useState(false);
  const [text, setText] = useState("");

  const [base64, setBase64] = useState("");
  const [uriComponet, setUriComponent] = useState("");

  React.useEffect(() => {
    if (decodeMode) {
      setUriComponent(decodeURIComponent(text));
      setBase64(decodeBase64(text));
    } else {
      // Encode
      setBase64(encodeBase64(text));
      setUriComponent(encodeURIComponent(text));
    }
  }, [decodeMode, text]);

  return (
    <div className="flex flex-grow flex-col gap-2">
      <>
        <Toggle
          leftText="Encode"
          rightText="Decode"
          checked={decodeMode}
          onChange={({ target }) => setDecodeMode(target.checked)}
        />
        <TextArea
          title={decodeMode ? "Encoded" : "Plaintext"}
          value={text}
          onChange={({ target }) => setText(target.value)}
          iconActions={[<PasteIcon onClick={(v) => setText(v)} />]}
          textareaClassName="h-32"
        />
        <TextArea
          value={base64}
          title={"Base64"}
          textareaClassName="h-32"
          readOnly
          iconActions={[<CopyIcon value={base64} />]}
        />
        <TextArea
          value={uriComponet}
          title={"URI Component"}
          textareaClassName="h-32"
          readOnly
          iconActions={[<CopyIcon value={base64} />]}
        />
      </>
    </div>
  );
};
