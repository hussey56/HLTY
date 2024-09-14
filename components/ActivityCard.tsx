import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import { router } from "expo-router";
import CustomButton from "./CustomButton";

const ActivityCard = ({ activity }: { activity: any }) => {
  const onDelete = () => {};
  return (
    <View className="mb-2 px-1 bg-white border-[1px] border-neutral-200 rounded-xl mx-2 shadow-sm ">
      <View className="p-2  w-full  flex-row  mt-1">
        <View className="bg-success-300 rounded-lg items-start justify-start p-2">
          <Image
            source={icons.hospital}
            className="h-10 w-10 "
            resizeMode="contain"
          />
        </View>

        <View className="flex px-2  justify-start items-start mx-[0.75px]">
          <Text
            className={`font-psemibold text-neutral-700 text-xl my-[2px]`}
            numberOfLines={1}
          >
            {activity.name}
          </Text>
          <Text
            className="font-pregular text-general-200 text-sm"
            numberOfLines={1}
          >
            <Image
              className="w-4 h-4"
              source={icons.calender}
              resizeMode="contain"
            />{" "}
            09,Sep 2024 11:00 AM
          </Text>
        </View>
        <TouchableOpacity
          onPress={onDelete}
          className="flex-1 justify-start items-end py-2 px-1"
        >
          <Image
            source={icons.deleteicon}
            resizeMode="contain"
            className="w-5 h-5"
          />
        </TouchableOpacity>
      </View>
      <View className="w-full px-1 py-1 space-y-1 flex-row gap-x-2">
        <View className="flex-row justify-start items-end gap-x-1">
          <Image
            className="w-5 h-5"
            source={icons.patient}
            resizeMode="contain"
            tintColor={"black"}
          />
          <Text
            className="font-pbold text-neutral-500 text-md w-max-40 overflow-hidden"
            numberOfLines={1}
          >
            Hassan Khan
          </Text>
        </View>
        <View className="flex-row justify-start items-start gap-x-2">
          <Image
            className="w-5 h-5"
            tintColor={"green"}
            source={icons.bill}
            resizeMode="contain"
          />
          <Text
            className="font-pmedium text-neutral-800 text-md"
            numberOfLines={1}
          >
            $500 <Text className="text-neutral-500 font-pregular">Paid</Text>
          </Text>
        </View>
      </View>

      <View className="w-full p-2">
        <View className="flex-row justify-start items-center gap-x-2">
          <Image
            className="w-5 h-5"
            tintColor={"black"}
            source={icons.id}
            resizeMode="contain"
          />
          <Text
            className="font-pregular text-neutral-500 text-sm"
            numberOfLines={1}
          >
            G342352352355
          </Text>
        </View>
      </View>
      <View className="w-full p-2">
        <CustomButton
          title="View"
          onPress={() => router.push("/(tabs)/chat")}
          className="shadow-none rounded-xl bg-primary-500 mb-1"
        />
      </View>
    </View>
  );
};

export default ActivityCard;
