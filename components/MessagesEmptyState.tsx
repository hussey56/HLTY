import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import { router } from "expo-router";
import CustomButton from "./CustomButton";
const MessagesEmptyState = ({
  image = images.empty,
  title,
  subtitle,
  classname,
  button = false,
}: {
  title: String;
  subtitle: String;
  classname?: String;
  button?: Boolean;
  image: any;
}) => {
  return (
    <View
      className={`justify-center items-center px-4 text-center space-y-1 ${classname}`}
    >
      <Image
        source={image}
        className="w-[260px] h-[260px] mb-1"
        resizeMode="contain"
      />
      <Text className="text-2xl font-pbold text-primary-500 text-center">
        {title}
      </Text>
      <Text className="font-pmedium text-md text-general-200 text-center">
        {subtitle}
      </Text>
    </View>
  );
};

export default MessagesEmptyState;
