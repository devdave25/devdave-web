import React from "react";
import { MainLayout } from "../layouts/main-layout";
import { CardRow } from "../components/card-row/card-row";
import { Header } from "../components/header/header";
import { PillRow } from "../components/pill-row/pill-row";
import { ActionEnum } from "../interfaces/settings";
import { SETTINGS } from "../constants/settings";
import { EncodeModal } from "../components/modals/encode-modal/encode-modal";
import { ModalType } from "../interfaces/modal-type";
import { useModal } from "../context/modal";

export const HomePage: React.FC = () => {
  const [active, setActive] = React.useState<string>("");
  const { openModal, closeModal } = useModal();

  const handleOpen = (type: ActionEnum) => {
    switch (type) {
      case ActionEnum.Encode:
        console.log("OPEN");
        openModal(ModalType.Encode64, <EncodeModal closeModal={() => closeModal(ModalType.Encode64)}></EncodeModal>)
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
