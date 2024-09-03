import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";

const onBoarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        className="w-full flex justify-end items-end p-5"
        onPress={() => router.replace("/(auth)/sign-in")}
      >
        <Text className="text-black text-md font-psemibold ">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dotStyle={{
          display: "none",
        }}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full " />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-primary-400 rounded-full " />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View
            key={item.id}
            className="flex items-center justify-center overflow-hidden"
          >
            <Image
              source={item.image}
              className="w-100 h-[300px] "
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-pbold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-md font-psemibold text-center text-[#858585] mx-10 mt-3 ">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-in")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 my-auto "
      />
      <View className="mt-3"></View>
    </SafeAreaView>
  );
};

export default onBoarding;
