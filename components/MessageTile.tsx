import { View, Text, Image } from "react-native";
import React from "react";
import { icons, images } from "@/constants";

const MessageTile = ({ msginfo }: { msginfo: any }) => {
  return (
    <View className="px-2 h-16 my-1 ">
      <View className="flex-row items-center">
        <View className="mr-1">
          <Image
            source={msginfo.image}
            className="h-14 w-14 rounded-full"
            resizeMode="contain"
          />
        </View>
        <View className="flex-1 items-start  bg-success h-14 ">
          <View>
            <Text
              className="font-pmedium text-[20px] text-start text-black-200 w-max-18 overflow-hidden"
              numberOfLines={1}
            >
              {msginfo.name}
            </Text>
            <Text
              className="font-plight text-sm text-start text-general-900 w-max-40 overflow-hidden"
              numberOfLines={1}
            >
              {msginfo.lastMessage}
            </Text>
          </View>
        </View>
        <View className="px-3 items-end h-14  py-1">
          <Text className="text-sm font-pmedium text-general-900 text-center">
            {msginfo.time}
          </Text>
          {msginfo.unread && (
            <View className="bg-success-500 w-5 h-5 rounded-full flex items-center justify-center mt-1 ">
              <Text className="text-white text-xs">2</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default MessageTile;
