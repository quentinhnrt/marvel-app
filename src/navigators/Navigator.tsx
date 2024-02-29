import AppNavigator from "./AppNavigator";
import GuestNavigator from "./GuestNavigator";

import { useAuthContext } from "~/contexts/AuthContext";

export default function Navigator() {
  const { isSignedIn } = useAuthContext();

  return isSignedIn ? <AppNavigator /> : <GuestNavigator />;
}
