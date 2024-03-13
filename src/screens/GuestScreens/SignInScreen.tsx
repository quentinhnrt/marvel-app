import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuthContext } from "~/contexts/AuthContext";

export default function SignInScreen() {
  const { signIn } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log("test");
  }

  return (
    <SafeAreaView>
      <View className="px-4 gap-6 justify-center h-screen">
        <Text
          variant="headlineLarge"
          className="text-center my-4 font-bold text-5xl"
        >
          Sign In
        </Text>
        <TextInput
          mode="outlined"
          placeholder="Type your email"
        />
        <TextInput
          mode="outlined"
          placeholder="Type your password"
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={handleLogin}
        >
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
}
