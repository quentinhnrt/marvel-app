import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

type SignInParams = {
  email: string;
  password: string;
};

type RegisterParams = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const AuthContext = createContext({
  isSignedIn: false,
  signIn: ({ email, password }: SignInParams) => {},
  register: ({ name, email, password, confirmPassword }: RegisterParams) => {},
  processing: false,
  error: null as null | string,
  user: null as null | object
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<null | string>(
    SecureStore.getItem("authToken")
  );
  const [user, setUser] = useState<null | object>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const apiURL = process.env.EXPO_PUBLIC_BASE_API_URL;

  useEffect(() => {
    if (!token) {
      SplashScreen.hideAsync();
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
        SplashScreen.hideAsync();
      });
  }, [token]);

  const isSignedIn = !!token;

  const signIn = async ({ email, password }: SignInParams) => {
    setProcessing(true);
    const response = await fetch(`${apiURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.message);
      setProcessing(false);
      return;
    }

    const data = await response.json();
    setToken(data.token);
    SecureStore.setItemAsync("authToken", data.token);
    setProcessing(false);
  };

  const register = async ({ name, email, password, confirmPassword }: RegisterParams) => {
    if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
    }

    setProcessing(true);

    const response = await fetch(`${apiURL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.message);
      setProcessing(false);
      return;
    }

    const data = await response.json();

    setToken(data.token);
    SecureStore.setItemAsync("authToken", data.token);

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
