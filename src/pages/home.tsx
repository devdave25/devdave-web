import React from "react";
import { MainLayout } from "../layouts/main-layout";
import { CardRow } from "../components/card-row/card-row";
import { Header } from "../components/header/header";
import { PillRow } from "../components/pill-row/pill-row";
import { ActionEnum } from "../interfaces/settings";
import { SETTINGS } from "../constants/settings";
import { Modal } from "../components/modals/modal";

export const HomePage: React.FC = () => {
  const [active, setActive] = React.useState<string>("");
  const [modal, setModal] = React.useState<boolean>(false);

  const handleOpen = (type: ActionEnum) => {
    console.log("HERE");
    setModal(true);
    switch (type) {
      case ActionEnum.Encode:
        break;
    }
  };

  return (
    <MainLayout
      children={
        <>
          <Modal
            show={modal}
            onDismiss={() => setModal(false)}
            children={<>This is Modal content</>}
          ></Modal>
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
