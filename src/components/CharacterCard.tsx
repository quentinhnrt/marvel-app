import { Text, View } from "react-native";
import { Card } from "react-native-paper";

import { MarvelCharacter } from "~/types/MarvelTypes";

export default function CharacterCard({
  character
}: {
  character: MarvelCharacter;
}) {
  return (
    <Card className="mb-8">
      <Card.Cover source={{ uri: `${character.thumbnail.path}.jpg` }} />
      <Card.Content>
        <View>
          <Text className="my-4 font-bold text-xl">{character.name}</Text>
          <Text>{character.description}</Text>
        </View>
      </Card.Content>
    </Card>
  );
}
