import { View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";
import { Colors } from "../constants/Colors";
export default SearchInput = ({ placeholder, value = "" }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(value);
  return (
    <View className="shadow border-2 border-white w-full h-16 px-4 bg-white rounded-2xl focus:border-primary items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-black flex-1 font-pregular "
        value={query}
        placeholder={placeholder}
        placeholderTextColor={"#818182e4"}
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image
          source={icons.search}
          className="w-5 h-5"
          tintColor={Colors.primary}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};
