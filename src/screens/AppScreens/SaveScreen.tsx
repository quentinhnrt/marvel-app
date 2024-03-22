import {FlatList, SafeAreaView, View} from "react-native";
import CharacterCard from "~/components/CharacterCard";
import {useAuthContext} from "~/contexts/AuthContext";

export default function SaveScreen() {
    const { user } = useAuthContext();
    return (
        <SafeAreaView>
            <View className="px-8 bg-red-200 h-full">
                <FlatList
                    className="py-8"
                    data={user?.saved_characters}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <CharacterCard initialCharacter={item.marvel_character_id}/>}
                />
            </View>
        </SafeAreaView>
    );
}
