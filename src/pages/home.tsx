import React from "react";
import { MainLayout } from "../layouts/main-layout";
import { CardRow } from "../components/card-row/card-row";
import { Header } from "../components/header/header";
import { PillRow } from "../components/pill-row/pill-row";
import { ActionEnum } from "../interfaces/settings";
import { SETTINGS } from "../constants/settings";
import { EncodeDecodeModal } from "../components/modals/string/encode-decode-modal/encode-decode-modal";
import { ModalType } from "../interfaces/modal-type";
import { useModal } from "../context/modal";
import { ColourConverterModal } from "../components/modals/colour/colour-converter-viewer-modal/colour-converter-modal";
import { ColourGeneratorModal } from "../components/modals/colour/colour-generator-modal/colour-generator-modal";
import { FileInfoModal } from "../components/modals/file/file-info-modal/file-info-modal";
import { ImageModal } from "../components/modals/file/image-modal/image-modal";
import { JsonValidatorModal } from "../components/modals/json/json-validator-modal/json-validator-modal";
import { JsonViewerModal } from "../components/modals/json/json-viewer-modal/json-viewer-modal";
import { UuidModal } from "../components/modals/string/uuid-modal/uuid-modal";
import { XmlValidatorModal } from "../components/modals/xml/xml-validator-modal/xml-validator-modal";
import { XmlViewerModal } from "../components/modals/xml/xml-viewer-modal/xml-viewer-modal";
import { JwtModal } from "../components/modals/string/jwt-modal/jwt-modal";
import { TimestampModal } from "../components/modals/date/timestamp-modal/timestamp-modal";
import { TimezonesModal } from "../components/modals/date/timezone-modal/timezone-modal";
import { DateMathsModal } from "../components/modals/date/date-maths-modal/date-maths-modal";
import { VideoModal } from "../components/modals/file/video-modal/video-modal";
import { PdfViewerModal } from "../components/modals/pdf/pdf-viewer-modal/pdf-viewer-modal";
import { PdfCombinerModal } from "../components/modals/pdf/pdf-combiner/pdf-combiner";

export const HomePage: React.FC = () => {
  const [active, setActive] = React.useState<string>("");
  const { openModal, closeModal } = useModal();

  const handleOpen = (type: ActionEnum) => {
    switch (type) {
      case ActionEnum.EncodeDecode:
        openModal(
          ModalType.EncodeDecode,
          <EncodeDecodeModal
            closeModal={() => closeModal(ModalType.EncodeDecode)}
          />
        );
        break;
      case ActionEnum.Uuid:
        openModal(
          ModalType.Uuid,
          <UuidModal closeModal={() => closeModal(ModalType.Uuid)} />
        );
        break;
      case ActionEnum.Jwt:
        openModal(
          ModalType.Jwt,
          <JwtModal closeModal={() => closeModal(ModalType.Jwt)} />
        );
        break;
      case ActionEnum.Timestamp:
        openModal(
          ModalType.Timestamp,
          <TimestampModal closeModal={() => closeModal(ModalType.Timestamp)} />
        );
        break;
      case ActionEnum.Timezones:
        openModal(
          ModalType.Timezones,
          <TimezonesModal closeModal={() => closeModal(ModalType.Timezones)} />
        );
        break;
      case ActionEnum.DateMaths:
        openModal(
          ModalType.DateMaths,
          <DateMathsModal closeModal={() => closeModal(ModalType.DateMaths)} />
        );
        break;
      case ActionEnum.JsonViewer:
        openModal(
          ModalType.JsonViewer,
          <JsonViewerModal
            closeModal={() => closeModal(ModalType.JsonViewer)}
          />
        );
        break;
      case ActionEnum.JsonValidator:
        openModal(
          ModalType.JsonValidator,
          <JsonValidatorModal
            closeModal={() => closeModal(ModalType.JsonValidator)}
          />
        );
        break;
      case ActionEnum.XmlViewer:
        openModal(
          ModalType.XmlViewer,
          <XmlViewerModal closeModal={() => closeModal(ModalType.XmlViewer)} />
        );
        break;
      case ActionEnum.XmlValidator:
        openModal(
          ModalType.XmlValidator,
          <XmlValidatorModal
            closeModal={() => closeModal(ModalType.XmlValidator)}
          />
        );
        break;
      case ActionEnum.ColourConverter:
        openModal(
          ModalType.ColourConverter,
          <ColourConverterModal
            closeModal={() => closeModal(ModalType.ColourConverter)}
          />
        );
        break;
      case ActionEnum.ColourGenerator:
        openModal(
          ModalType.ColourGenerator,
          <ColourGeneratorModal
            closeModal={() => closeModal(ModalType.ColourGenerator)}
          />
        );
        break;
      case ActionEnum.ColourWheel:
        openModal(
          ModalType.ColourWheel,
          <ColourGeneratorModal
            closeModal={() => closeModal(ModalType.ColourGenerator)}
          />
        );
        break;
      case ActionEnum.FileInfo:
        openModal(
          ModalType.FileInfo,
          <FileInfoModal closeModal={() => closeModal(ModalType.FileInfo)} />
        );
        break;
      case ActionEnum.Image:
        openModal(
          ModalType.Image,
          <ImageModal closeModal={() => closeModal(ModalType.Image)} />
        );
        break;
      case ActionEnum.Video:
        openModal(
          ModalType.Video,
          <VideoModal closeModal={() => closeModal(ModalType.Video)} />
        );
        break;
      case ActionEnum.PdfViewer:
        openModal(
          ModalType.PdfViewer,
          <PdfViewerModal closeModal={() => closeModal(ModalType.PdfViewer)} />
        );
        break;
      case ActionEnum.PdfCombiner:
        openModal(
          ModalType.PdfCombiner,
          <PdfCombinerModal
            closeModal={() => closeModal(ModalType.PdfCombiner)}
          />
        );
        break;
    }
  };

  return (
    <MainLayout
      children={
        <>
          <Header />
          <PillRow
            groups={SETTINGS.groups.map((g) => g.name)}
            active={active}
            setActive={setActive}
          />
          {SETTINGS.groups.map(({ name, actions }) => (
            <CardRow
              group={name}
              activeGroup={active}
              actions={actions ?? []}
              open={handleOpen}
            />
          ))}
        </>
      }
    ></MainLayout>
  );
};
