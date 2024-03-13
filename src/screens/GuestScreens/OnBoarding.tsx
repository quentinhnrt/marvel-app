import { ImageBackground, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnBoarding({ navigation }) {
  return (
    <ImageBackground
      source={require("../../../assets/images/onboarding.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <SafeAreaView>
        <View className="px-4 gap-6 justify-between h-screen">
          <View className="flex-1 justify-center"></View>
          <View className="gap-4 mb-12">
            <Button
              mode="contained"
              onPress={() => navigation.navigate("SignIn")}
              className="bg-red-700"
            >
              Sign In
            </Button>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("SignUp")}
              className="bg-red-900 text-red-500"
            >
              Sign Up
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
