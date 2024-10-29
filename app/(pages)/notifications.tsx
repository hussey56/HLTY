import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import HomeEmptyState from "@/components/HomeEmptyState";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
const Notifications = () => {
  const dummy = [
    {
      id: 1,
      type: "info",
      message: "Welcome to HLTY Services !!!",
      time: "19:11 AM",
    },
    {
      id: 2,
      type: "success",
      message: "Your Appointment request has been approved.",
      time: "20:10 AM",
    },
    {
      id: 3,
      type: "success",
      message: "Your Reports are available now.",
      time: "19:11 AM",
    },
    {
      id: 4,
      type: "cancel",
      message: "Your Appointment has been cancelled.",
      time: "9:11 PM",
    },
    {
      id: 5,
      type: "warning",
      message: "Please Clear Your Outstanding bills.",
      time: "3:51 AM",
    },
  ];

  const getAlertIcon = (alerttype: String) => {
    switch (alerttype) {
      case "info":
        return icons.alertinfo;
      case "success":
        return icons.alertsuccess;
      case "cancel":
        return icons.alertcancel;
      case "warning":
        return icons.alertwarning;
      default:
        return icons.alertinfo;
    }
  };
  const getAlertIconColor = (alerttype: String) => {
    switch (alerttype) {
      case "info":
        return "#16c1d0";
      case "success":
        return "#38A169";
      case "cancel":
        return "#F56565";
      case "warning":
        return "#EAB308";
      default:
        return "#16c1d0";
    }
  };
  return (
    <SafeAreaView className="bg-white h-full flex-1">
      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => router.back()} className="p-5">
          <Image
            source={icons.leftArrow}
            resizeMode="contain"
            className="w-5 h-5"
            tintColor={"#000000"}
          />
        </TouchableOpacity>
        <Text className="text-2xl font-psemibold ">Notifications</Text>
      </View>
      <FlatList
        data={dummy}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="w-full h-16  my-2 mx-2 flex-row items-center justify-around"
            onPress={() => router.back()}
          >
            <Image
              source={getAlertIcon(item.type)}
              resizeMode="contain"
              className="w-12 h-12"
              tintColor={getAlertIconColor(item.type)}
            />
            <View className="w-[80%]  overflow-hidden border-general-100  py-3 border-b-[0.5px]">
              <Text
                className="text-md font-pregular text-black-200"
                numberOfLines={3}
              >
                {item.message}
              </Text>
              <Text className="text-sm font-pextralight">{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <HomeEmptyState
            image={images.emptynotifcations}
            title={"Nothing Found"}
            subtitle={"No Notification & Alerts found for you"}
            button={false}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Notifications;
