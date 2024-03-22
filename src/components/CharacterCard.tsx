import {Text, View} from "react-native";
import {Card, IconButton} from "react-native-paper";

import {MarvelCharacter} from "~/types/MarvelTypes";
import {useAuthContext} from "~/contexts/AuthContext";
import {useMarvelContext} from "~/contexts/MarvelContext";
import {useEffect, useState} from "react";

export default function CharacterCard({initialCharacter}: {initialCharacter: MarvelCharacter|number}) {
    const {user} = useAuthContext();
    const {saveCharacter} = useMarvelContext();
    const [processing, setProcessing] = useState(true);
    const [isSavedCharacter, setIsSavedCharacter] = useState(false);
    const {marvelHelper} = useMarvelContext();
    const [character, setCharacter] = useState<MarvelCharacter | number>(initialCharacter);

    function handleSave() {
        if (processing) return;
        setProcessing(true);
        saveCharacter(character.id)
        setProcessing(false)
    }

    useEffect(() => {
        if (user?.saved_characters) {
            let tmp = false;
            user.saved_characters.forEach((savedCharacter) => {
                if (savedCharacter.marvel_character_id === character?.id) {
                    tmp = true;
                }
            })
            setIsSavedCharacter(tmp);
        }
        setProcessing(false);
    }, [user, character]);

    async function getCharacter(characterId: number) {
        return await marvelHelper.getCharacter(characterId);
    }

    if (Number.isInteger(character)) {
        getCharacter(character).then((response) => {
            setCharacter(response.data.results[0]);
        });
    }

    return (
        <Card className={!Number.isInteger(character) ? "mb-8" : "hidden"}>
            <Card.Cover source={{uri: `${character?.thumbnail?.path}.jpg`}}/>
            <Card.Content>
                <View>
                    <Text className="my-4 font-bold text-xl">{character?.name + ' ' + character?.id}</Text>
                    <Text>{character?.description}</Text>
                </View>
            </Card.Content>
            <Card.Actions>
                <IconButton
                    onPress={handleSave}
                    icon={isSavedCharacter ? "bookmark" : "bookmark-outline"}
                />
            </Card.Actions>
        </Card>
    );
}
