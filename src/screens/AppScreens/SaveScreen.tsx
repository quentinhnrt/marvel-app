import {FlatList, SafeAreaView, View} from "react-native";
import CharacterCard from "~/components/CharacterCard";
import {useAuthContext} from "~/contexts/AuthContext";

export default function SaveScreen() {
    const { user } = useAuthContext();
    return (
        <SafeAreaView>
            <View className="px-8 pt-12 h-full">
                <FlatList
                    data={user?.saved_characters}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <CharacterCard initialCharacter={item.marvel_character_id}/>}
                />
            </View>
        </SafeAreaView>
    );
}
