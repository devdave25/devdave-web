import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Modal } from "../components/modals/modal";
import { ModalProvider, useModal } from "../context/modal";
import { Button } from "../components/button/button";
import { ModalType } from "../interfaces/modal-type";
import { Modals } from "../containers/modals/modals";

export default {
  title: "Components/Modal",
  component: Modal,
  render: (args) => {
    const { openModal, closeModal } = useModal();

    return (
      <div>
        <div id="portal"></div>
        <ModalProvider>
          <>
            <Button
              text="Open"
              primary
              onClick={() =>
                openModal(
                  ModalType.EncodeDecode,
                  <Modal
                    {...args}
                    onDismiss={() => closeModal(ModalType.EncodeDecode)}
                  >
                    <div>Content</div>
                  </Modal>
                )
              }
            />
            <Modals />
          </>
        </ModalProvider>
      </div>
    );
  },
} as Meta<typeof Modal>;

export const Default: StoryObj<typeof Modal> = {
  args: {
    title: "Title",
    children: <div>Content</div>,
    onDismiss: () => {},
  },
};
