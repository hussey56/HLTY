import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { images } from "@/constants";
import { Ionicons, Entypo } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ReactNativeModal } from "react-native-modal";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const Profile = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });
  const onLogoutPress = async () => {
    setVerification({
      state: "default",
      error: "",
      code: "",
    });
    setTimeout(() => {
      router.replace("/(auth)/sign-in");
    }, 1000);
  };

  return (
    <SafeAreaView className="bg-general-500 h-full">
      <ScrollView className="mb-28">
        <View className="px-4 my-3">
          <Text className="text-3xl font-psemibold text-black">Account</Text>
        </View>
        <View className="flex items-center justify-center my-2">
          <View
            className="relative border-[3px] border-general-100 p-1 items-center"
            style={{ height: hp(18), width: wp(30), borderRadius: 100 }}
          >
            <Image
              source={images.profileimg}
              resizeMode="contain"
              style={{ height: hp(16), width: wp(28), borderRadius: 100 }}
            />
            <View
              className=" bg-primary-300 w-10 h-10 items-center justify-center"
              style={{
                borderRadius: 100,
                position: "absolute",
                bottom: -16,
              }}
            >
              <Ionicons name="camera" size={hp(3.5)} color={"#ffffff"} />
            </View>
          </View>
          <View className="gap-y-[4px] py-2 mt-1 mb-2">
            <Text className="text-2xl font-psemibold text-center  text-black">
              Hassan Khan
            </Text>
            <Text className="text-lg font-pight text-center   text-black">
              21 year old from North
            </Text>
            <Text className="text-sm font-pextralight text-center   text-black">
              Active Since - Sep,2024
            </Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center px-4 mb-3 ">
          <Text className="text-xl font-pmedium   text-black">
            Personal Info
          </Text>
          <Text className="text-lg font-pextralight  text-black">Edit</Text>
        </View>
        <View className="flex justify-center items-center gap-[2px] px-4">
          <View className="flex-row justify-between items-center px-2 py-3 rounded-t-xl bg-general-700  border-1 w-full">
            <View className="flex-row gap-3 items-center">
              <Entypo name="email" size={hp(3)} color={"#16c1d0"} />
              <Text className="text-md font-plight text-black">Email</Text>
            </View>

            <Text className="text-md font-pregular text-black ">
              hassankhan032@gmail.com
            </Text>
          </View>
          <View className="flex-row justify-between items-center px-2 py-3  bg-general-700  border-1 w-full">
            <View className="flex-row gap-3 items-center">
              <FontAwesome
                name="birthday-cake"
                size={hp(3)}
                color={"#16c1d0"}
              />
              <Text className="text-md font-plight text-black">
                Date of Birth
              </Text>
            </View>

            <Text className="text-md font-pregular text-black ">
              06 Nov 2004
            </Text>
          </View>
          <View className="flex-row justify-between items-center px-2 py-3  bg-general-700  border-1 w-full">
            <View className="flex-row gap-3 items-center">
              <Ionicons name="call" size={hp(3)} color={"#16c1d0"} />
              <Text className="text-md font-plight text-black">Phone</Text>
            </View>

            <Text className="text-md font-pregular text-black ">
              +92 3443032343
            </Text>
          </View>
          <View className="flex-row justify-between items-center px-2 py-3 rounded-b-xl  bg-general-700  border-1 w-full">
            <View className="flex-row gap-3 items-center">
              <Entypo name="location" size={hp(3)} color={"#16c1d0"} />
              <Text className="text-md font-plight text-black">Location</Text>
            </View>

            <Text className="text-md font-pregular text-black ">Pakistan</Text>
          </View>
        </View>
        <View className="flex-row justify-start items-center px-4 my-3 ">
          <Text className="text-xl font-pmedium   text-black">Utilities</Text>
        </View>
        <View className="flex justify-center items-center gap-[2px] px-4">
          <View className="flex-row justify-between items-center px-2 py-3 rounded-t-xl bg-general-700  border-1 w-full">
            <View className="flex-row gap-3 items-center">
              <AntDesign name="download" size={hp(3)} color={"#16c1d0"} />
              <Text className="text-lg font-plight text-black">Downloads</Text>
            </View>

            <EvilIcons name="arrow-right" size={hp(4)} color={"#16c1d0"} />
          </View>
          <View className="flex-row justify-between items-center px-2 py-3  bg-general-700  border-1 w-full">
            <View className="flex-row gap-3 items-center">
              <MaterialIcons name="history" size={hp(3)} color={"#16c1d0"} />
              <Text className="text-lg font-plight text-black">
                Activity History
              </Text>
            </View>

            <EvilIcons name="arrow-right" size={hp(4)} color={"#16c1d0"} />
          </View>
          <View className="flex-row justify-between items-center px-2 py-3  bg-general-700  border-1 w-full">
            <View className="flex-row gap-3 items-center">
              <Ionicons name="help" size={hp(3)} color={"#16c1d0"} />
              <Text className="text-lg font-plight text-black">Help</Text>
            </View>

            <EvilIcons name="arrow-right" size={hp(4)} color={"#16c1d0"} />
          </View>

          <View className="flex-row justify-between items-center px-2 py-3 rounded-b-xl  bg-general-700  border-1 w-full ">
            <View className="flex-row gap-3 items-center">
              <MaterialIcons name="logout" size={hp(3)} color={"#16c1d0"} />
              <Text className="text-lg font-plight text-black">Logout</Text>
            </View>
            <TouchableOpacity
              className=""
              onPress={() =>
                setVerification({ ...verification, state: "pending" })
              }
            >
              <EvilIcons name="arrow-right" size={hp(4)} color={"#16c1d0"} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <ReactNativeModal
        isVisible={verification.state === "pending"}
        onModalHide={() => {
          setVerification({ ...verification, state: "default" });
        }}
      >
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[200px]">
          <Text className="text-3xl font-pbold mb-2">
            Are you want to Logout?
          </Text>

          <CustomButton
            title="Log out"
            onPress={onLogoutPress}
            className="mt-5 shadow-none"
            bgVariant="primary"
          />
          <CustomButton
            title="Stay Login"
            onPress={() =>
              setVerification({ ...verification, state: "default" })
            }
            className="mt-2 shadow-none"
            bgVariant="secondary"
          />
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

export default Profile;
