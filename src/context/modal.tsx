import React from "react";
import { ModalType } from "../interfaces/modal-type";

interface ModalContextInterface {
  modals: React.ReactNode[];
  openModal: (type: ModalType, modal: React.ReactNode) => void;
  closeModal: (type: ModalType) => void;
}

export const ModalContext = React.createContext<ModalContextInterface>({
  modals: [],
  openModal: () => null,
  closeModal: () => null
});

interface ModalProviderProps {
  children: React.ReactElement;
}
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = React.useState<{
    [key: string]: React.ReactNode;
  }>({});

  const updateState = (type: ModalType, modal?: React.ReactNode) => {
    setModals((m) => ({
      ...m,
      [type.toString()]: modal
    }));
  };

  const openModal = (type: ModalType, modal: React.ReactNode) => {
    updateState(type, modal);
  };

  const closeModal = (type: ModalType) => {
    updateState(type);
  };

  return (
    <ModalContext.Provider
      value={{
        modals: Object.values(modals),
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextInterface => {
  const context = React.useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};
