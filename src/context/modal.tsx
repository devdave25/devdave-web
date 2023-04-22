import React from "react";

interface ModalContextInterface {
  showModal: (modal: React.ReactElement) => void;
  hideModal: () => void;
}

export const ModalContext = React.createContext<ModalContextInterface>({
  showModal: () => null,
  hideModal: () => null
});

interface ModalProviderProps {
  children: React.ReactElement;
}
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalContent, setModalContent] = React.useState<React.ReactElement | undefined>(undefined);

  const showModal = (modal: React.ReactElement) => {
    setModalContent(modal);
  };

  const hideModal = () => {
    setModalContent(undefined);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        hideModal
      }}
    >
      {children}
      {modalContent}
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
