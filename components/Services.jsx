import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "../constants";
import { router } from "expo-router";

const ServiceItem = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(item.route)}
      className="p-1 items-center justify-center mx-1 space-y-2 overflow-hidden"
    >
      <View className="p-1  rounded-full bg-primary-100 ">
        <View className="bg-general-500 p-3 rounded-full ">
          <Image
            resizeMode="contain"
            source={item.image}
            className="w-12 h-12"
          />
        </View>
      </View>
      <Text className="text-xs font-pmedium text-black " numberOfLines={1}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
const Services = () => {
  const services = [
    {
      id: 1,
      name: "Home Visit",
      route: "/setting",
      image: icons.doctor,
    },
    {
      id: 2,
      name: "Clinic Visit",
      route: "/",
      image: icons.hospital,
    },
    {
      id: 4,
      name: "Reports",
      route: "/",
      image: icons.reports,
    },

    {
      id: 5,
      name: "Medicine",
      route: "/",
      image: icons.pharmacy,
    },
    {
      id: 6,
      name: "Ambulance",
      route: "/",
      image: icons.ambulance,
    },
  ];
  return (
    <FlatList
      horizontal={true}
      data={services}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <ServiceItem item={item} />}
    />
  );
};

export default Services;
