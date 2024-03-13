import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

type SignInParams = {
  email: string;
  password: string;
};

type RegisterParams = {
  username: string;
  email: string;
  password: string;
};

const AuthContext = createContext({
  isSignedIn: false,
  signIn: ({ email, password }: SignInParams) => {},
  register: ({ username, email, password }: RegisterParams) => {},
  processing: false,
  error: null as null | string,
  user: null as null | object
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<null | string>(null);
  const [user, setUser] = useState<null | object>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const apiURL = process.env.EXPO_PUBLIC_BASE_API_URL;

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch(`${apiURL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [token]);

  const isSignedIn = !!token;

  const signIn = ({ email, password }: SignInParams) => {
    fetch(`${apiURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then((response) => response.json())
      .then((data) => {
        SecureStore.setItemAsync("authToken", data.token);
        setToken(data.token);
      });
  };

  const register = async ({ username, email, password }: RegisterParams) => {
    setProcessing(true);
    const response = await fetch(`/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    }).catch((error) => {
      setError(error.message || "An error occurred");
    });
    if (response.status !== 200) {
      setError("An error occurred");
    }

    const data = await response.json();

    setProcessing(false);
  };

  return (
    <AuthContext.Provider
      value={{ signIn, register, isSignedIn, processing, error, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuthContext };
