import { View, Image, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons, images } from "../../constants";
const TabIcon = ({ focused, source }) => {
  return (
    <View className={`flex flex-row justify-center items-center rounded-full `}>
      <View
        className={`rounded-full w-12 h-12 items-center justify-center ${
          focused ? "bg-primary-300" : ""
        }`}
      >
        <Image
          source={source}
          tintColor={"white"}
          resizeMode="contain"
          className="w-7 h-7"
        />
      </View>
    </View>
  );
};
const ChatIcon = ({ focused, count }) => {
  return (
    <View
      className={`flex flex-row justify-center items-center rounded-full ${
        focused ? "bg-primary" : ""
      }`}
    >
      {count >= 1 && (
        <View className="absolute z-[2] bottom-[0] right-0 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center">
          <Text className="text-white text-xs text-center">
            {count > 9 ? `9+` : count}
          </Text>
        </View>
      )}
      <View
        className={`rounded-full w-12 h-12 items-center justify-center ${
          focused ? "bg-primary-300" : ""
        }`}
      >
        <Image
          source={icons.message}
          tintColor={"white"}
          resizeMode="contain"
          className="w-7 h-7"
        />
      </View>
    </View>
  );
};
const ProfileIcon = ({ focused }) => {
  return (
    <View className={"items-center justify-center"}>
      <Image
        source={images.profileimg}
        resizeMode="contain"
        className={`w-12 h-12 rounded-full ${
          focused ? "border-none " : "border-white border-[1px]"
        } `}
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
          backgroundColor: "#000303dc",
          paddingBottom: 0,
          overflow: "hidden",
          borderRadius: 50,
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
            <ChatIcon focused={focused} count={88} />
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
