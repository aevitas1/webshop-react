import { createContext, useState } from "react";

interface AppContextInterface {
  children: React.ReactNode;
}

export const AppContext = createContext({
  openModal: false,
  setOpenModal: (openModal: boolean) => {},
});

export const AppProvider = ({ children }: AppContextInterface) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
