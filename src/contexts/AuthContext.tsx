import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isSignedIn: false,
  toggleIsSignedIn: () => {}
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleIsSignedIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, toggleIsSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuthContext };
