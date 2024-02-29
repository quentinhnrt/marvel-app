import { AuthContextProvider } from "~/contexts/AuthContext";
import Navigator from "~/navigators/Navigator";

export default function App() {
  return (
    <AuthContextProvider>
      <Navigator />
    </AuthContextProvider>
  );
}
