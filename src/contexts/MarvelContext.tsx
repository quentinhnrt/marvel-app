import { createContext, useContext } from "react";

import MarvelApiHelper from "~/helpers/MarvelApiHelper";
import * as SecureStore from "expo-secure-store";
import {useAuthContext} from "~/contexts/AuthContext";

const MarvelContext = createContext({
  marvelHelper: new MarvelApiHelper(),
  saveCharacter: (characterId) => {}
});

const MarvelContextProvider = ({ children }: { children: React.ReactNode }) => {
  const marvelHelper = new MarvelApiHelper();
  const dbApiUrl = process.env.EXPO_PUBLIC_BASE_API_URL;
  const {token, setUser} = useAuthContext()

  async function saveCharacter(characterId: number) {
    if (!token) return;
    const response = await fetch(`${dbApiUrl}/user/save-character`, {
      method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ characterId })
    });

    if (response.ok) {
      const user = await response.json();
      setUser(user);
    }
  }



  return (
    <MarvelContext.Provider value={{ marvelHelper, saveCharacter }}>
      {children}
    </MarvelContext.Provider>
  );
};

const useMarvelContext = () => {
  return useContext(MarvelContext);
};

export { MarvelContextProvider, useMarvelContext };
