import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthContextProvider } from "~/contexts/AuthContext";
import Navigator from "~/navigators/Navigator";

export default function App() {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </AuthContextProvider>
  );
}
