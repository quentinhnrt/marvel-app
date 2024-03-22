import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CharacterCard from "~/components/CharacterCard";
import CharacterFilters from "~/components/CharactersFilters";
import { useMarvelContext } from "~/contexts/MarvelContext";
import { MarvelApiResponse, MarvelCharacter } from "~/types/MarvelTypes";

export default function HomeScreen() {
  const [characters, setCharacters] = useState(Array<MarvelCharacter>);
  const [isLoading, setIsLoading] = useState(true);
  const { marvelHelper } = useMarvelContext();

  useEffect(() => {
    marvelHelper.getAllCharacters().then((characters: MarvelApiResponse) => {
      if (!characters) setCharacters([]);
      setCharacters(characters.data.results);
      setIsLoading(false);
    });
  }, []);

  function handleFilter(filters) {
    marvelHelper
      .getFilteredCharacters(filters)
      .then((characters: MarvelApiResponse) => {
        if (!characters) setCharacters([]);
        setCharacters(characters.data.results);
        setIsLoading(false);
      });
  }

  return (
    <SafeAreaView>
      <View className="px-8 h-full">
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            className="py-8"
            data={characters}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CharacterCard initialCharacter={item} />}
          />
        )}
      </View>
      <CharacterFilters onFilter={handleFilter} />
    </SafeAreaView>
  );
}
