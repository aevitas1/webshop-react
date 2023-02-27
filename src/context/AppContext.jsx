import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = (props) => {
  const [links, setLinks] = useState([]);

  return (
    <AppContext.Provider
      value={{
        links,
        setLinks,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
