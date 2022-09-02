import React from "react";
import { MainLayout } from "../layouts/main-layout";
import { CardRow } from "../components/card-row/card-row";
import { Header } from "../components/header/header";
import { PillRow } from "../components/pill-row/pill-row";
import { ActionEnum } from "../interfaces/settings";
import { SETTINGS } from "../constants/settings";
import { Base64EncodeModal } from "../components/modals/string/base64-encode-modal/base64-encode-modal";
import { ModalType } from "../interfaces/modal-type";
import { useModal } from "../context/modal";
import { ColourConverterModal } from "../components/modals/colour/colour-converter-viewer-modal/colour-converter-modal";
import { ColourGeneratorModal } from "../components/modals/colour/colour-generator-modal/colour-generator-modal";
import { ImageConverterModal } from "../components/modals/image/image-converter-modal/image-converter-modal";
import { ImageResizerModal } from "../components/modals/image/image-resizer-modal/image-resizer-modal";
import { JsonValidatorModal } from "../components/modals/json/json-validator-modal/json-validator-modal";
import { JsonViewerModal } from "../components/modals/json/json-viewer-modal/json-viewer-modal";
import { HtmlEncodeModal } from "../components/modals/string/html-encode-modal/html-encode-modal";
import { UrlEncodeModal } from "../components/modals/string/url-encode-modal/url-encode-modal";
import { UuidModal } from "../components/modals/string/uuid-modal/uuid-modal";
import { XmlValidatorModal } from "../components/modals/xml/xml-validator-modal/xml-validator-modal";
import { XmlViewerModal } from "../components/modals/xml/xml-viewer-modal/xml-viewer-modal";

export const HomePage: React.FC = () => {
  const [active, setActive] = React.useState<string>("");
  const { openModal, closeModal } = useModal();

  const handleOpen = (type: ActionEnum) => {
    switch (type) {
      case ActionEnum.Base64Encode:
        openModal(ModalType.Base64Encode, <Base64EncodeModal closeModal={() => closeModal(ModalType.Base64Encode)} />)
        break;
      case ActionEnum.UrlEncode:
        openModal(ModalType.UrlEncode, <UrlEncodeModal closeModal={() => closeModal(ModalType.UrlEncode)} />)
        break;
      case ActionEnum.HtmlEncode:
        openModal(ModalType.HtmlEncode, <HtmlEncodeModal closeModal={() => closeModal(ModalType.HtmlEncode)} />)
        break;
      case ActionEnum.Uuid:
        openModal(ModalType.Uuid, <UuidModal closeModal={() => closeModal(ModalType.Uuid)} />)
        break;
      case ActionEnum.JsonViewer:
        openModal(ModalType.JsonViewer, <JsonViewerModal closeModal={() => closeModal(ModalType.JsonViewer)} />)
        break;
      case ActionEnum.JsonValidator:
        openModal(ModalType.JsonValidator, <JsonValidatorModal closeModal={() => closeModal(ModalType.JsonValidator)} />)
        break;
      case ActionEnum.XmlViewer:
        openModal(ModalType.XmlViewer, <XmlViewerModal closeModal={() => closeModal(ModalType.XmlViewer)} />)
        break;
      case ActionEnum.XmlValidator:
        openModal(ModalType.XmlValidator, <XmlValidatorModal closeModal={() => closeModal(ModalType.XmlValidator)} />)
        break;
      case ActionEnum.ColourConverter:
        openModal(ModalType.ColourConverter, <ColourConverterModal closeModal={() => closeModal(ModalType.ColourConverter)} />)
        break;
      case ActionEnum.ColourGenerator:
        openModal(ModalType.ColourGenerator, <ColourGeneratorModal closeModal={() => closeModal(ModalType.ColourGenerator)} />)
        break;
      case ActionEnum.ImageConverter:
        openModal(ModalType.ImageConverter, <ImageConverterModal closeModal={() => closeModal(ModalType.ImageConverter)} />)
        break;
      case ActionEnum.ImageResizer:
        openModal(ModalType.ImageResizer, <ImageResizerModal closeModal={() => closeModal(ModalType.ImageResizer)} />)
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
