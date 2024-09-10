import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SectionHeading = ({ heading, subheading, onPress, classname }) => {
  return (
    <View className={`justify-between items-center flex-row  ${classname}`}>
      <Text className="text-xl font-psemibold text-grey">{heading}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text className="text-sm font-pextralight">{subheading}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeading;
