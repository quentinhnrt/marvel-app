import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useAuthContext } from "~/contexts/AuthContext";

export default function SignUpScreen() {
  const { register, processing, error } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  function handleRegister() {
    if (processing) {
      return;
    }
    register({ name, email, password, confirmPassword });
  }
  return (
    <SafeAreaView>
      <View className="px-4 gap-6 justify-center h-screen">
        <Text
          variant="headlineLarge"
          className="text-center my-4 font-bold text-5xl"
        >
          Sign Up
        </Text>
        <Text className="text-center my-4 text-red-500">{error}</Text>
        <TextInput
          mode="outlined"
          placeholder="Type your username"
          value={name}
          onChange={(text) => setName(text.nativeEvent.text)}
        />
        <TextInput
          mode="outlined"
          placeholder="Type your email"
          value={email}
          onChange={(text) => setEmail(text.nativeEvent.text)}
        />
        <TextInput
          mode="outlined"
          placeholder="Type your password"
          value={password}
          onChange={(text) => setPassword(text.nativeEvent.text)}
          secureTextEntry
        />
        <TextInput
          mode="outlined"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(text) => setConfirmPassword(text.nativeEvent.text)}
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={handleRegister}
        >
          {!processing ? "Register" : "Loading"}
        </Button>
      </View>
    </SafeAreaView>
  );
}
