import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";

export default function SaveScreen() {
  return (
    <SafeAreaView>
      <View className="px-4 gap-6 justify-center h-screen">
        <Text
          variant="headlineLarge"
          className="text-center my-4 font-bold text-5xl"
        >
          My saves
        </Text>
      </View>
    </SafeAreaView>
  );
}
