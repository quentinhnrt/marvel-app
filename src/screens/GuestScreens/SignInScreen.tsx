import { Button, View } from "react-native";
import { useAuthContext } from "~/contexts/AuthContext";

export default function SignInScreen() {
  const { toggleIsSignedIn } = useAuthContext();
  return (
    <View>
      <Button
        onPress={toggleIsSignedIn}
        title="Sign In"
      />
    </View>
  );
}
