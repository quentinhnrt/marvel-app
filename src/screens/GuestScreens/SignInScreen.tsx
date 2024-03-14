import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuthContext } from "~/contexts/AuthContext";

export default function SignInScreen() {
  const { signIn, processing, error } = useAuthContext();
  const [email, setEmail] = useState("quentin.honnart@gmail.com");
  const [password, setPassword] = useState("Q781227n.");

  function handleLogin() {
    if (processing) {
      return;
    }

    signIn({ email, password });
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
        <Text className="text-center my-4 text-red-500">{error}</Text>
        <TextInput
          mode="outlined"
          placeholder="Type your email"
          keyboardType="email-address"
          onChange={(e) => setEmail(e.nativeEvent.text)}
          value={email}
        />
        <TextInput
          mode="outlined"
          placeholder="Type your password"
          secureTextEntry
          onChange={(e) => setPassword(e.nativeEvent.text)}
          value={password}
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
