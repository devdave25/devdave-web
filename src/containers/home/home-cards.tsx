import React from "react";
import classNames from "classnames";
import { Card } from "../../components/card/card";
import { ColourConverterModal } from "../../components/modals/colour/colour-converter-viewer-modal/colour-converter-modal";
import { ColourGeneratorModal } from "../../components/modals/colour/colour-generator-modal/colour-generator-modal";
import { DateMathsModal } from "../../components/modals/date/date-maths-modal/date-maths-modal";
import { TimestampModal } from "../../components/modals/date/timestamp-modal/timestamp-modal";
import { TimezonesModal } from "../../components/modals/date/timezone-modal/timezone-modal";
import { FileInfoModal } from "../../components/modals/file/file-info-modal/file-info-modal";
import { ImageModal } from "../../components/modals/file/image-modal/image-modal";
import { VideoModal } from "../../components/modals/file/video-modal/video-modal";
import { JsonValidatorModal } from "../../components/modals/json/json-validator-modal/json-validator-modal";
import { JsonViewerModal } from "../../components/modals/json/json-viewer-modal/json-viewer-modal";
import { PdfCombinerModal } from "../../components/modals/pdf/pdf-combiner/pdf-combiner";
import { PdfViewerModal } from "../../components/modals/pdf/pdf-viewer-modal/pdf-viewer-modal";
import { EncodeDecodeModal } from "../../components/modals/string/encode-decode-modal/encode-decode-modal";
import { JwtModal } from "../../components/modals/string/jwt-modal/jwt-modal";
import { UuidModal } from "../../components/modals/string/uuid-modal/uuid-modal";
import { XmlValidatorModal } from "../../components/modals/xml/xml-validator-modal/xml-validator-modal";
import { XmlViewerModal } from "../../components/modals/xml/xml-viewer-modal/xml-viewer-modal";
import { ColourWheelModal } from "../../components/modals/colour/colour-wheel-modal/colour-wheel-modal";
import { Pill } from "../../components/pill/pill";
import { useModal } from "../../context/modal";
import { ModalType } from "../../interfaces/modal-type";

import styles from "./home-cards.module.scss";

const GroupPills: React.FC<{
  value?: string;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const onSelect = (newValue: string) => {
    if (value === newValue) {
      onChange("");
    } else {
      onChange(newValue);
    }
  };

  return (
    <div className="flex snap-x scroll-pl-4 flex-row gap-x-4 overflow-x-auto px-4 pb-2">
      <Pill
        text="String"
        selected={value === "string"}
        onClick={() => onSelect("string")}
      />
      <Pill
        text="Date"
        selected={value === "date"}
        onClick={() => onSelect("date")}
      />
      <Pill
        text="JSON"
        selected={value === "json"}
        onClick={() => onSelect("json")}
      />
      <Pill
        text="XML"
        selected={value === "xml"}
        onClick={() => onSelect("xml")}
      />
      <Pill
        text="Colour"
        selected={value === "colour"}
        onClick={() => onSelect("colour")}
      />
      <Pill
        text="File"
        selected={value === "file"}
        onClick={() => onSelect("file")}
      />
    </div>
  );
};

const StringCards: React.FC<{ active?: boolean }> = ({ active }) => {
  const { openModal, closeModal } = useModal();

  return (
    <div className={styles.card}>
      <h4 className={styles.title}>String</h4>
      <div
        className={classNames(styles.body, {
          [styles.inactive]: !active,
          [styles.active]: active
        })}
      >
        <Card
          key="string-card-1"
          title="Encode / Decode"
          subtitle="Encode / Decode Base64 & URL & HTML strings."
          onClick={() =>
            openModal(
              ModalType.EncodeDecode,
              <EncodeDecodeModal
                closeModal={() => closeModal(ModalType.EncodeDecode)}
              />
            )
          }
          clickable
        />
        <Card
          key="string-card-2"
          title="UUID"
          subtitle="Generate UUIDs."
          onClick={() =>
            openModal(
              ModalType.Uuid,
              <UuidModal closeModal={() => closeModal(ModalType.Uuid)} />
            )
          }
          clickable
        />
        <Card
          key="string-card-3"
          title="JWT"
          subtitle="Decode JWT tokens."
          onClick={() =>
            openModal(
              ModalType.Jwt,
              <JwtModal closeModal={() => closeModal(ModalType.Jwt)} />
            )
          }
          clickable
        />
      </div>
    </div>
  );
};

const DateCards: React.FC<{ active?: boolean }> = ({ active }) => {
  const { openModal, closeModal } = useModal();

  return (
    <div className={styles.card}>
      <h4 className={styles.title}>Date</h4>
      <div
        className={classNames(styles.body, {
          [styles.inactive]: !active,
          [styles.active]: active
        })}
      >
        <Card
          key="date-card-1"
          title="Date / Timestamp"
          subtitle="Convert Dates & Timestamps."
          onClick={() =>
            openModal(
              ModalType.Timestamp,
              <TimestampModal
                closeModal={() => closeModal(ModalType.Timestamp)}
              />
            )
          }
          clickable
        />
        <Card
          key="date-card-2"
          title="Add & Subtract"
          subtitle="Addition / Substraction of Dates."
          onClick={() =>
            openModal(
              ModalType.DateMaths,
              <DateMathsModal
                closeModal={() => closeModal(ModalType.DateMaths)}
              />
            )
          }
          clickable
        />
        <Card
          key="date-card-3"
          title="Timezones"
          subtitle="Table of Timezones."
          onClick={() =>
            openModal(
              ModalType.Timezones,
              <TimezonesModal
                closeModal={() => closeModal(ModalType.Timezones)}
              />
            )
          }
          clickable
        />
      </div>
    </div>
  );
};

const JsonCards: React.FC<{ active?: boolean }> = ({ active }) => {
  const { openModal, closeModal } = useModal();

  return (
    <div className={styles.card}>
      <h4 className={styles.title}>JSON</h4>
      <div
        className={classNames(styles.body, {
          [styles.inactive]: !active,
          [styles.active]: active
        })}
      >
        <Card
          key="json-card-1"
          title="Viewer"
          subtitle="JSON viewer."
          onClick={() =>
            openModal(
              ModalType.JsonViewer,
              <JsonViewerModal
                closeModal={() => closeModal(ModalType.JsonViewer)}
              />
            )
          }
          clickable
        />
        <Card
          key="json-card-2"
          title="Validator"
          subtitle="JSON validator."
          onClick={() =>
            openModal(
              ModalType.JsonValidator,
              <JsonValidatorModal
                closeModal={() => closeModal(ModalType.JsonValidator)}
              />
            )
          }
          clickable
        />
      </div>
    </div>
  );
};

const XmlCards: React.FC<{ active?: boolean }> = ({ active }) => {
  const { openModal, closeModal } = useModal();

  return (
    <div className={styles.card}>
      <h4 className={styles.title}>XML</h4>
      <div
        className={classNames(styles.body, {
          [styles.inactive]: !active,
          [styles.active]: active
        })}
      >
        <Card
          key="xml-card-1"
          title="Viewer"
          subtitle="XML viewer."
          onClick={() =>
            openModal(
              ModalType.XmlViewer,
              <XmlViewerModal
                closeModal={() => closeModal(ModalType.XmlViewer)}
              />
            )
          }
          clickable
        />
        <Card
          key="xml-card-2"
          title="Validator"
          subtitle="XML validator."
          onClick={() =>
            openModal(
              ModalType.XmlValidator,
              <XmlValidatorModal
                closeModal={() => closeModal(ModalType.XmlValidator)}
              />
            )
          }
          clickable
        />
      </div>
    </div>
  );
};

const ColourCards: React.FC<{ active?: boolean }> = ({ active }) => {
  const { openModal, closeModal } = useModal();

  return (
    <div className={styles.card}>
      <h4 className={styles.title}>Colour</h4>
      <div
        className={classNames(styles.body, {
          [styles.inactive]: !active,
          [styles.active]: active
        })}
      >
        <Card
          key="colour-card-1"
          title="Converter"
          subtitle="Colour converter (HEX, RGB, etc)."
          onClick={() =>
            openModal(
              ModalType.ColourConverter,
              <ColourConverterModal
                closeModal={() => closeModal(ModalType.ColourConverter)}
              />
            )
          }
          clickable
        />
        <Card
          key="colour-card-2"
          title="Generator"
          subtitle="Generate colour palettes."
          onClick={() =>
            openModal(
              ModalType.ColourGenerator,
              <ColourGeneratorModal
                closeModal={() => closeModal(ModalType.ColourGenerator)}
              />
            )
          }
          clickable
        />
        <Card
          key="colour-card-3"
          title="Wheel"
          subtitle="Colour wheel."
          onClick={() =>
            openModal(
              ModalType.ColourWheel,
              <ColourWheelModal
                closeModal={() => closeModal(ModalType.ColourWheel)}
              />
            )
          }
          clickable
        />
      </div>
    </div>
  );
};

const FileCards: React.FC<{ active?: boolean }> = ({ active }) => {
  const { openModal, closeModal } = useModal();

  return (
    <div className={styles.card}>
      <h4 className={styles.title}>File</h4>
      <div
        className={classNames(styles.body, {
          [styles.inactive]: !active,
          [styles.active]: active
        })}
      >
        <Card
          key="file-card-1"
          title="File Info"
          subtitle="Load file info."
          onClick={() =>
            openModal(
              ModalType.FileInfo,
              <FileInfoModal
                closeModal={() => closeModal(ModalType.FileInfo)}
              />
            )
          }
          clickable
        />
        <Card
          key="file-card-2"
          title="Image Functions"
          subtitle="Convert, resize."
          onClick={() =>
            openModal(
              ModalType.Image,
              <ImageModal closeModal={() => closeModal(ModalType.Image)} />
            )
          }
          clickable
        />
        <Card
          key="file-card-3"
          title="Video Functions"
          subtitle="Convert, resize, trim."
          onClick={() =>
            openModal(
              ModalType.Video,
              <VideoModal closeModal={() => closeModal(ModalType.Video)} />
            )
          }
          clickable
        />
        <Card
          key="file-card-4"
          title="PDF Viewer"
          subtitle="PDF file viewer."
          onClick={() =>
            openModal(
              ModalType.PdfViewer,
              <PdfViewerModal
                closeModal={() => closeModal(ModalType.PdfViewer)}
              />
            )
          }
          clickable
        />
        <Card
          key="file-card-5"
          title="PDF Combiner"
          subtitle="Combine PDF files."
          onClick={() =>
            openModal(
              ModalType.PdfCombiner,
              <PdfCombinerModal
                closeModal={() => closeModal(ModalType.PdfCombiner)}
              />
            )
          }
          clickable
        />
      </div>
    </div>
  );
};

export const HomeCards: React.FC = () => {
  const [active, setActive] = React.useState<string>("");

  const isStringActive = active === "string";
  const isDateActive = active === "date";
  const isJsonActive = active === "json";
  const isXmlActive = active === "xml";
  const isColourActive = active === "colour";
  const isFileActive = active === "file";

  return (
    <>
      <GroupPills value={active} onChange={(v) => setActive(v)} />
      <div className="flex flex-col gap-8">
        {(!active || isStringActive) && <StringCards active={isStringActive} />}
        {(!active || isDateActive) && <DateCards active={isDateActive} />}
        {(!active || isJsonActive) && <JsonCards active={isJsonActive} />}
        {(!active || isXmlActive) && <XmlCards active={isXmlActive} />}
        {(!active || isColourActive) && <ColourCards active={isColourActive} />}
        {(!active || isFileActive) && <FileCards active={isFileActive} />}
      </div>
    </>
  );
};
