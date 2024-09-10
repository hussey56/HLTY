import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import { router } from "expo-router";

const ActivityCard = ({ activity }: { activity: any }) => {
  return (
    <View className="mb-2 px-3">
      <TouchableOpacity
        onPress={() => router.push("/(tabs)/chat")}
        className="p-2 bg-white w-full rounded-xl flex flex-row border-[1px] border-neutral-200  "
      >
        <View className="bg-success-300 rounded-lg items-start justify-start p-2">
          <Image
            source={icons.hospital}
            className="h-16 w-16 "
            resizeMode="contain"
          />
        </View>

        <View className="flex px-2 py-1 justify-center items-start mx-[0.75px]">
          <Text
            className="font-pregular text-general-200 text-sm"
            numberOfLines={1}
          >
            09,Sep 2024 11:00 AM
          </Text>
          <Text
            className={`font-pblack ${
              activity.name == "Ambulance" ? "text-warning-500" : "text-black"
            } text-xl my-[2px]`}
            numberOfLines={1}
          >
            {activity.name}
          </Text>

          <Text
            className="font-pmedium text-general-200   text-md "
            numberOfLines={1}
          >
            Patient:{" "}
            <Text
              className="text-black font-pregular text-sm "
              numberOfLines={1}
            >
              Hassan Khan
            </Text>
          </Text>
        </View>
        <View className="flex-1 justify-start items-end py-1.5 px-1">
          <Text className="font-pmedium text-primary-300   text-xs ">
            Details
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ActivityCard;
