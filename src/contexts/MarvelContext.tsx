import { createContext, useContext } from "react";

import MarvelApiHelper from "~/helpers/MarvelApiHelper";

const MarvelContext = createContext({
  marvelHelper: new MarvelApiHelper()
});

const MarvelContextProvider = ({ children }: { children: React.ReactNode }) => {
  const marvelHelper = new MarvelApiHelper();

  return (
    <MarvelContext.Provider value={{ marvelHelper }}>
      {children}
    </MarvelContext.Provider>
  );
};

const useMarvelContext = () => {
  return useContext(MarvelContext);
};

export { MarvelContextProvider, useMarvelContext };
