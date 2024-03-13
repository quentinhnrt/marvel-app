import { useEffect, useState } from "react";
import { View } from "react-native";
import { IconButton, Text, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

type PropsType = {
  onFilter: (filters: object) => void;
};

export default function CharacterFilters({ onFilter }: PropsType) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({});
  const [debouncedFilters, setDebouncedFilters] = useState({});

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedFilters(filters);
    }, 500);
    return () => clearTimeout(timeout);
  }, [filters]);

  useEffect(() => {
    onFilter(debouncedFilters);
  }, [debouncedFilters]);

  function handleFilter(value: string, name: string) {
    setFilters({ ...filters, [name]: value });
  }

  return (
    <>
      <IconButton
        icon={"filter"}
        size={20}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-white absolute bottom-4 right-4 z-20"
        onPress={() => setShowFilters(!showFilters)}
      />
      {showFilters && (
        <View className="absolute bottom-0 left-0 w-full h-96 bg-white z-10 rounded-t-3xl overflow-hidden">
          <View className="px-8 py-4">
            <Text
              variant="headlineMedium"
              className="mb-4"
            >
              Filters
            </Text>
            <View>
              <TextInput
                mode="outlined"
                placeholder="Type a name"
                onChange={(event) =>
                  handleFilter(event.nativeEvent.text, "nameStartsWith")
                }
                className="mb-4"
              />
              <Picker
                onValueChange={(itemValue: string) =>
                  handleFilter(itemValue, "orderBy")
                }
                selectedValue={filters.orderBy}
              >
                <Picker.Item
                  label="Name ASC"
                  value="name"
                />
                <Picker.Item
                  label="Modified ASC"
                  value="modified"
                />
                <Picker.Item
                  label="Name DESC"
                  value="-name"
                />
                <Picker.Item
                  label="Modified DESC"
                  value="-modified"
                />
              </Picker>
            </View>
          </View>
        </View>
      )}
    </>
  );
}
