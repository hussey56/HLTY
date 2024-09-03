import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "../constants";
import { router } from "expo-router";

const ServiceItem = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(item.route)}
      className="px-3 py-3 shadow shadow-2xl  bg-white relative items-center justify-center mx-1 space-y-3 overflow-hidden rounded-xl"
    >
      <Image resizeMode="contain" source={item.image} className="w-14 h-14" />
      <Text className="text-xs font-pregular" numberOfLines={1}>
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
      image: icons.homeVisit,
    },
    {
      id: 2,
      name: "Clinic Visit",
      route: "/",
      image: icons.clinic,
    },
    {
      id: 3,
      name: "Ambulance",
      route: "/",
      image: icons.ambulance,
    },
    {
      id: 4,
      name: "Medicine",
      route: "/",
      image: icons.pharmacy,
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
