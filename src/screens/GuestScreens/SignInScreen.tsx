import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuthContext } from "~/contexts/AuthContext";

export default function SignInScreen() {
  const { toggleIsSignedIn } = useAuthContext();
  return (
    <SafeAreaView>
      <View>
        <Button
          onPress={toggleIsSignedIn}
          title="Sign In"
        />
      </View>
    </SafeAreaView>
  );
}
