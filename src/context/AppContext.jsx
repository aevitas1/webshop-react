import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openAccountModal, setOpenAccountModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        openLoginModal,
        setOpenLoginModal,
        openAccountModal,
        setOpenAccountModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
