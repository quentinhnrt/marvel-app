import {SafeAreaView, View} from "react-native";
import {useAuthContext} from "~/contexts/AuthContext";
import {Button} from "react-native-paper";

export default function SettingsScreen() {
    const { disconnect } = useAuthContext();
    return (
        <SafeAreaView>
            <View className="px-8 pt-12 h-full items-center justify-center">
                <Button
                    title="Disconnect"
                    onPress={disconnect}
                    mode="contained"
                    className="w-1/2 bg-white border-red-500"
                    textColor={'red'}
                >
                    Disconnect
                </Button>
            </View>
        </SafeAreaView>
    );
}
