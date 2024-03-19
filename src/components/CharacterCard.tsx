import { Text, View } from "react-native";
import { Card, IconButton } from "react-native-paper";

import { MarvelCharacter } from "~/types/MarvelTypes";
import { useAuthContext } from "~/contexts/AuthContext";
import { useMarvelContext } from "~/contexts/MarvelContext";

export default function CharacterCard({
  character
}: {
  character: MarvelCharacter;
}) {
  const { user } = useAuthContext();
  const { marvelHelper } = useMarvelContext();
  const isSavecCharacter = user?.savedCharacters?.includes(character.id);

  function handleSave() {}

  return (
    <Card className="mb-8">
      <Card.Cover source={{ uri: `${character.thumbnail.path}.jpg` }} />
      <Card.Content>
        <View>
          <Text className="my-4 font-bold text-xl">{character.name}</Text>
          <Text>{character.description}</Text>
        </View>
      </Card.Content>
      <Card.Actions>
        <IconButton
          onPress={handleSave}
          icon={isSavecCharacter ? "bookmark" : "bookmark-outline"}
        />
      </Card.Actions>
    </Card>
  );
}
