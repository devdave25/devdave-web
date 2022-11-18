import React from "react";
import { TextArea } from "../../../textarea/textarea";
import { Modal } from "../../modal";
import jwt_decode from "jwt-decode";
import { CopyIcon } from "../../../icons/copy-icon";
import { PasteIcon } from "../../../icons/paste-icon";

interface JwtModalProps {
  closeModal: () => void;
}
export const JwtModal: React.FC<JwtModalProps> = ({ closeModal }) => {
  return (
    <Modal
      onDismiss={closeModal}
      title="JWT"
      className="w-[640px]"
      hasCloseIcon
    >
      <JwtModalContainer />
    </Modal>
  );
};

export const JwtModalContainer: React.FC = () => {
  const [error, setError] = React.useState("");
  const [token, setToken] = React.useState("");
  const [header, setHeader] = React.useState("");
  const [payload, setPayload] = React.useState("");

  React.useEffect(() => {
    if (!token) {
      setToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      );
    }
  }, []);

  React.useEffect(() => {
    try {
      setHeader(
        JSON.stringify(jwt_decode(token, { header: true }), null, "\t")
      );
      setPayload(JSON.stringify(jwt_decode(token), null, "\t"));
      setError("");
    } catch (error) {
      setHeader("");
      setPayload("");
      setError("Invalid Signature");
    }
  }, [token]);

  return (
    <>
      {error && <div className="text-error">{error}</div>}
      <div className="flex flex-row gap-4 grow">
        <div className="flex grow">
          <TextArea
            title="Token"
            placeholder="JWT Token..."
            value={token}
            className="flex grow"
            textareaClassName="grow"
            onChange={({ target }) => setToken(target.value)}
            iconActions={[<PasteIcon onClick={(v) => setToken(v)} />]}
          />
        </div>
        <div className="grow">
          <div className="flex flex-col gap-2">
            <>
              <TextArea
                title="Header"
                value={header}
                textareaClassName="h-32"
                readOnly
                iconActions={[<CopyIcon value={header} />]}
              />
              <TextArea
                title="Payload"
                value={payload}
                textareaClassName="h-32"
                readOnly
                iconActions={[<CopyIcon value={payload} />]}
              />
              <TextArea title="Verify Signature" textareaClassName="h-32" />
            </>
          </div>
        </div>
      </div>
    </>
  );
};
