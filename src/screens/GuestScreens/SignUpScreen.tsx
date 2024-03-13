import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useAuthContext } from "~/contexts/AuthContext";

export default function SignUpScreen() {
  const { register, processing, error } = useAuthContext();
  const [email, setEmail] = useState("quentin.honnart@gmail.com");
  const [password, setPassword] = useState("Q781227n.");
  const [username, setUsername] = useState("quentinhnrt");

  function handleRegister() {
    if (processing) {
      return;
    }
    register({ username, email, password });
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
          value={username}
          onChange={(text) => setUsername(text.nativeEvent.text)}
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
