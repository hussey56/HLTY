import { View, Image, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons, images } from "../../constants";
import { Colors } from "@/constants/Colors";
const TabIcon = ({ icon, color, focused }) => {
  return (
    <View className={"items-center justify-center "}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{
          height: 26,
          width: 26,
        }}
      />
    </View>
  );
};
const ProfileIcon = ({focused}) => {
  return (
    <View className={"items-center justify-center "}>
      <Image
        source={images.profileimg}
        resizeMode="contain"
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          objectFit: "contain",
          borderColor:focused && Colors.primary,
          borderWidth:2
        }}
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#a9a9a9",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.setting} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          title: "Appointments",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.appointment}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.home} color={color}  focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="faq"
        options={{
          title: "FAQ",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.faq} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({focused}) => <ProfileIcon focused={focused} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
