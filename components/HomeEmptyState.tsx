import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import { router } from "expo-router";
import OutlineButton from "./OutlineButton";
import CustomButton from "./CustomButton";
const HomeEmptyState = ({
  title,
  subtitle,
  classname,
  button = false,
}: {
  title: String;
  subtitle: String;
  classname?: String;
  button?: Boolean;
}) => {
  return (
    <View
      className={`justify-center items-center px-4 text-center space-y-2 ${classname}`}
    >
      <Image
        source={images.empty}
        className="w-[270px] h-[270px] mb-3"
        resizeMode="contain"
      />
      <Text className="text-2xl font-psemibold text-black text-center">
        {title}
      </Text>
      <Text className="font-pmedium text-md text-general-200 text-center">
        {subtitle}
      </Text>

      {button && (
        <>
          <View className="my-6"></View>
          <CustomButton
            title="Book an Appointment"
            bgVariant="primary"
            textVariant="success"
            className="shadow-none"
            onPress={() => router.push("/(tabs)/home")}
          />
        </>
      )}
    </View>
  );
};

export default HomeEmptyState;
