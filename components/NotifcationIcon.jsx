// src/components/NotificationIcon.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "../constants";
import { router } from "expo-router";
import { Colors } from "../constants/Colors";

const NotificationIcon = ({ count }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push("/(pages)/notifications")}
      className="relative"
    >
      <View className="w-11  h-11 flex items-center justify-center rounded-full bg-white shadow-sm">
        <Image
          resizeMode="contain"
          source={icons.bell}
          className="w-6 h-6"
          tintColor={"#3cc7d3"}
        />
      </View>
      {count > 0 && (
        <View className="absolute top-1 right-0 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center">
          <Text className="text-white text-xs">{count > 9 ? `9+` : count}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default NotificationIcon;
