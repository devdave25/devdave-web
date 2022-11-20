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
  decorators: [
    (Story) => (
      <div>
        <div id="portal"></div>
        <ModalProvider>
          <>
            <Story />
            <Modals />
          </>
        </ModalProvider>
      </div>
    )
  ],
  render: (args) => {
    const { openModal, closeModal } = useModal();

    return (
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
              <div className="flex flex-grow items-center justify-center bg-surface-variant">
                <div>Content</div>
              </div>
            </Modal>
          )
        }
      />
    );
  }
} as Meta<typeof Modal>;

export const Default: StoryObj<typeof Modal> = {
  args: {}
};

export const Title: StoryObj<typeof Modal> = {
  args: {
    title: "Title"
  }
};

export const HideBackground: StoryObj<typeof Modal> = {
  args: {
    title: "Title",
    hideBackground: true
  }
};

export const HasCloseIcon: StoryObj<typeof Modal> = {
  args: {
    title: "Title",
    hasCloseIcon: true
  }
};

export const DisableBackgroundDismiss: StoryObj<typeof Modal> = {
  args: {
    title: "Title",
    disableBackgroundDismiss: true,
    hasCloseIcon: true
  }
};

export const AllowFullscreen: StoryObj<typeof Modal> = {
  args: {
    title: "Title",
    allowFullscreen: true,
    hasCloseIcon: true
  }
};

export const DefaultFullscreen: StoryObj<typeof Modal> = {
  args: {
    title: "Title",
    allowFullscreen: true,
    defaultFullscreen: true,
    hasCloseIcon: true
  }
};

export const ForceFullscreen: StoryObj<typeof Modal> = {
  args: {
    title: "Title",
    forceFullscreen: true,
    hasCloseIcon: true
  }
};
