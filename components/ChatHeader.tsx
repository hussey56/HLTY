import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { images } from "@/constants";
const ChatHeader = ({ router }: { router: any }) => {
  return (
    <Stack.Screen
      options={{
        title: "",
        headerShadowVisible: false,
        headerLeft: () => (
          <View className="flex-row items-center gap-1">
            <TouchableOpacity onPress={() => router.back()}>
              <Entypo name="chevron-left" color={"#737373"} size={hp(4)} />
            </TouchableOpacity>
            <View className="flex-row items-center gap-3">
              <Image
                source={images.profileimg}
                style={{
                  height: hp(5),
                  borderRadius: 100,
                }}
                className="w-10"
                resizeMode="contain"
              />
              <Text
                style={{ fontSize: hp(2.8) }}
                className="text-neutral-700 font-pmedium"
              >
                Hassan K.
              </Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <View className="flex-row items-center gap-8">
            <Ionicons name="call" size={hp(3.4)} color={"#737373"} />
            <Ionicons name="videocam" size={hp(3.4)} color={"#737373"} />
          </View>
        ),
      }}
    ></Stack.Screen>
  );
};

export default ChatHeader;
