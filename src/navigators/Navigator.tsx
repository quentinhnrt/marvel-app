import AppNavigator from "./AppNavigator";
import GuestNavigator from "./GuestNavigator";

import { useAuthContext } from "~/contexts/AuthContext";

export default function Navigator() {
  const { user } = useAuthContext();

  return user ? <AppNavigator /> : <GuestNavigator />;
}
