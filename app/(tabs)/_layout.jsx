import { View, Image, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons, images } from "../../constants";
import { Colors } from "@/constants/Colors";
const TabIcon = ({ focused, source }) => {
  return (
    <View
      className={`flex flex-row justify-center items-center rounded-full ${
        focused ? "bg-primary" : ""
      }`}
    >
      <View
        className={`rounded-full w-12 h-12 items-center justify-center ${
          focused ? "bg-primary" : ""
        }`}
      >
        <Image
          source={source}
          tintColor={focused ? "black" : "white"}
          resizeMode="contain"
          className="w-7 h-7"
        />
      </View>
    </View>
  );
};
const ProfileIcon = ({ focused }) => {
  return (
    <View className={"items-center justify-center "}>
      <Image
        source={images.profileimg}
        resizeMode="contain"
        style={{
          borderColor: focused ? Colors.primary : "transparent",
          borderWidth: 2,
        }}
        className="w-12 h-12 rounded-3xl"
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 0,
          overflow: "hidden",
          marginBottom: 20,
          marginHorizontal: 20,
          height: 78,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="appointments"
        options={{
          title: "Appointments",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.appointment} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chats",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.message} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
