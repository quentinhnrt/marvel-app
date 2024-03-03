import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthContextProvider } from "~/contexts/AuthContext";
import { MarvelContextProvider } from "~/contexts/MarvelContext";
import Navigator from "~/navigators/Navigator";

export default function App() {
  return (
    <AuthContextProvider>
      <MarvelContextProvider>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </MarvelContextProvider>
    </AuthContextProvider>
  );
}
